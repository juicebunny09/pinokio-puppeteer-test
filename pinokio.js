module.exports = {
  title: "Puppeteer Auto-Rigger",
  description: "Local AI Auto-Rigging for 3D Models",
  menu: async (kernel) => {
    let installed = await kernel.exists(__dirname, "app", "env")
    if (installed) {
      return [{ icon: "fa-solid fa-power-off", text: "Start", href: "start.js" }]
    } else {
      return [{ icon: "fa-solid fa-plug", text: "Install", href: "install.js" }]
    }
  }
}