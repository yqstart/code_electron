const { ipcMain, Menu, BrowserWindow } = require("electron");

ipcMain.on("mainContextMenu", (event) => {
  const template = [
    {
      label: "退出",
      click: () => {
        console.log(event.sender, 'event')
      },
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  menu.popup(BrowserWindow.fromWebContents(event.sender));
});
