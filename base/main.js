const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    alwaysOnTop: true,
    x: 1100,
    y: 75,
  });
  mainWindow.loadURL("https://baidu.com");
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
