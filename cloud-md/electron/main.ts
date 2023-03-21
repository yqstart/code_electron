import { app, BrowserWindow } from "electron";
import { join } from "path";

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      // nodeIntegration: false
    },
  });
  // mainWindow.webContents.toggleDevTools();
  console.log(app.isPackaged, '=======')
  if (process.env["VITE_DEV_SERVER_URL"]) {
    mainWindow.loadURL(process.env["VITE_DEV_SERVER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../index.html"));
  }
  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  // macos独有事件
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
