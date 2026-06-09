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
        message: [
          "python -c \"import urllib.request; req = urllib.request.Request('https://huggingface.co/spaces/jasongzy/Puppeteer/resolve/main/app.py', headers={'User-Agent': 'Mozilla/5.0'}); open('app/app.py', 'wb').write(urllib.request.urlopen(req).read())\""
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        message: [
          "python -c \"content = open('requirements.txt').read(); open('requirements.txt', 'w').write(content.replace('tetgen==0.5.2', 'tetgen'))\""
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "pip install cython setuptools",
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