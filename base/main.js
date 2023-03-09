const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { createMenu } = require('./menu.js')
require('./contextMenu.js')
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 400,
    width: 400,
    alwaysOnTop: true,
    x: 1100,
    y: 75,
    webPreferences: {
      // 预加载脚本
      preload: path.resolve(__dirname, "preload.js"),
      // // 都不建议开启
      // // 预加载脚本 渲染进程 使用node功能 默认false
      // nodeIntegration: false,
      // // 预加载脚本 与 渲染进程不隔离 默认true
      // contextIsolation: true,
      // // 关闭沙盒模式 预加载脚本 使用node electron功能 默认true 可使用部分模块
      // sandbox: true,
    },
  });
  mainWindow.webContents.toggleDevTools()
  // mainWindow.loadURL("https://baidu.com");
  mainWindow.loadFile(path.resolve(__dirname, "index.html"));

  return mainWindow
};

app.whenReady().then(() => {
  const win = createWindow();
  createMenu(win)
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if(BrowserWindow.getAllWindows().length === 0 && process.platform === 'darwin') {
    createWindow();
  }
});

ipcMain.on('saveFile', () => {
  console.log('saveFile 进程通信')
})