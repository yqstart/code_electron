const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    alwaysOnTop: true,
    x: 1100,
    y: 75,
    webPreferences: {
      // 预加载脚本
      preload: path.resolve(__dirname, 'preload.js'),
      // 使用node功能
      nodeIntegration: true
    }
  });
  mainWindow.webContents.toggleDevTools()
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

ipcMain.on('saveFile', () => {
  console.log('saveFile 进程通信')
})