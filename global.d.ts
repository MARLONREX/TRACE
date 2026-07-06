export {}

type AIEngineStatus =
  | 'offline'
  | 'starting'
  | 'ready'
  | 'failed'

type TraceGenerationJob = {
  id: string
  projectId: string
  projectName: string
  drawingName: string
  roomId: string
  roomName: string
  backend: 'export-only' | 'comfyui-local' | 'stability-api'
  endpoint: string
  model: string
  prompt: string
  negativePrompt: string
  payload: any
  status: 'queued' | 'generating' | 'complete' | 'error'
  message: string
  createdAt: number
}

declare global {
  interface Window {
    traceAPI: {
      generate(
        job: TraceGenerationJob
      ): Promise<any>

      getAIStatus(): Promise<AIEngineStatus>

      startAI(): Promise<boolean>

      onAIStatus(
        callback: (status: AIEngineStatus) => void
      ): () => void
    }
  }
}