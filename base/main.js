const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    alwaysOnTop: true,
    x: 1100,
    y: 75,
  });
  // mainWindow.webContents.toggleDevTools()
  // mainWindow.loadURL("https://baidu.com");
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));
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
