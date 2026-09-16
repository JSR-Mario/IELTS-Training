import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

function localApiPlugin(): Plugin {
  return {
    name: 'local-ielts-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = new URL(req.url || '', `http://${req.headers.host || 'localhost'}`)

        // POST /api/save-writing
        if (url.pathname === '/api/save-writing' && req.method === 'POST') {
          let body = ''
          req.on('data', chunk => {
            body += chunk
          })
          req.on('end', () => {
            try {
              const data = JSON.parse(body)
              const submissionsDir = path.resolve(process.cwd(), 'submissions')
              if (!fs.existsSync(submissionsDir)) {
                fs.mkdirSync(submissionsDir, { recursive: true })
              }

              const now = new Date()
              const dateStr = now.toISOString().replace(/[:.]/g, '-').slice(0, 19)
              const taskType = data.taskType || 'writing'
              const baseName = `writing-${dateStr}-${taskType}`

              const jsonPath = path.join(submissionsDir, `${baseName}.json`)
              const mdPath = path.join(submissionsDir, `${baseName}.md`)

              const minutes = Math.floor((data.timeSpentSeconds || 0) / 60)
              const seconds = (data.timeSpentSeconds || 0) % 60
              const timeDisplay = `${minutes} min ${seconds} sec`

              const markdownContent = [
                `# IELTS Academic Writing Submission`,
                ``,
                `- **Task**: ${data.taskType === 'task1' ? 'Task 1 (Academic Report)' : 'Task 2 (Academic Essay)'}`,
                `- **Date**: ${now.toLocaleString()}`,
                `- **Prompt ID**: ${data.promptId || 'custom'}`,
                `- **Prompt Title**: ${data.promptTitle || 'N/A'}`,
                `- **Time Spent**: ${timeDisplay}`,
                `- **Word Count**: ${data.wordCount} words (Target: ${data.targetWords || (data.taskType === 'task1' ? 150 : 250)}+ words)`,
                ``,
                `---`,
                ``,
                `## Task Prompt`,
                `> ${data.promptText.replace(/\n/g, '\n> ')}`,
                ``,
                `---`,
                ``,
                `## Candidate Response`,
                ``,
                data.content,
                ``,
                `---`,
                ``,
                `## Antigravity Examiner Evaluation`,
                `*(Ready for evaluation. In chat, simply write: "califícame mi último ensayo")*`,
                ``
              ].join('\n')

              fs.writeFileSync(jsonPath, JSON.stringify({ ...data, createdAt: now.toISOString(), baseName }, null, 2), 'utf-8')
              fs.writeFileSync(mdPath, markdownContent, 'utf-8')

              res.setHeader('Content-Type', 'application/json')
              res.statusCode = 200
              res.end(JSON.stringify({
                success: true,
                baseName,
                jsonFile: path.relative(process.cwd(), jsonPath),
                mdFile: path.relative(process.cwd(), mdPath),
                dateStr
              }))
            } catch (err: any) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: err.message }))
            }
          })
          return
        }

        // GET /api/submissions
        if (url.pathname === '/api/submissions' && req.method === 'GET') {
          try {
            const submissionsDir = path.resolve(process.cwd(), 'submissions')
            if (!fs.existsSync(submissionsDir)) {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ submissions: [] }))
              return
            }

            const files = fs.readdirSync(submissionsDir)
            const jsonFiles = files.filter(f => f.endsWith('.json'))

            const submissions = jsonFiles.map(file => {
              try {
                const raw = fs.readFileSync(path.join(submissionsDir, file), 'utf-8')
                return JSON.parse(raw)
              } catch {
                return null
              }
            }).filter(Boolean).sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime())

            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ submissions }))
          } catch (err: any) {
            res.statusCode = 500
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: err.message }))
          }
          return
        }

        next()
      })
    }
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    localApiPlugin()
  ],
})
