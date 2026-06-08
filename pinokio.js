module.exports = {
  title: "Puppeteer",
  description: "Local AI Auto-Rigging",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "app", "env")
    if (installed) {
      return [
        {
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        }
      ]
    } else {
      return [{
        icon: "fa-solid fa-plug",
        text: "Install",
        href: "install.js",
      }]
    }
  }
}