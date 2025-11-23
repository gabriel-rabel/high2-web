export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // Serve arquivos estáticos gerados pelo Vite (pasta dist)
    return env.ASSETS.fetch(request);
  },
};
