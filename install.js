module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone --recursive https://github.com/Seed3D/Puppeteer.git app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "curl -O https://huggingface.co/spaces/jasongzy/Puppeteer/raw/main/app.py"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "pip install -r requirements.txt",
          "pip install gradio spaces"
        ]
      }
    },
    {
      id: "torch",
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          path: "app",
          xformers: true
        }
      }
    }
  ]
}