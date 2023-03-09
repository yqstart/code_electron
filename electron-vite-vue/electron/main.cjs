const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 600,
    alwaysOnTop: true,
    x: 1100,
    y: 75,
  });
  mainWindow.loadURL("http://localhost:5173");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  createWindow();
});
