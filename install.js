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
          "git clone https://huggingface.co/spaces/jasongzy/Puppeteer ui_space",
          "python -c \"import shutil, os; [shutil.copy(os.path.join('ui_space', f), 'app') for f in os.listdir('ui_space') if os.path.isfile(os.path.join('ui_space', f)) and f != 'requirements.txt']\"",
          "python -c \"import shutil; shutil.rmtree('ui_space', ignore_errors=True)\""
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