module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://huggingface.co/spaces/jasongzy/Puppeteer app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "pip install -r requirements.txt"
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