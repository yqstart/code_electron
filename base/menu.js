const { app, Menu,shell, BrowserWindow } = require("electron");
const isMac = process.platform === "darwin";
const config = [
        ...(isMac
    ? [
        {
          label: app.name,
            submenu: [
                {
                    label: "访问网站",
                    click: () => {
                        shell.openExternal("https://www.baidu.com")
                    }
                }
            ]
        },
      ]
    : []),
    {
        label: '操作',
        submenu: [
            {
                label: '打开窗口',
                click: () => {
                    new BrowserWindow({
                        height: 300,
                        width: 300,
                        alwaysOnTop: true,
                        title: 'new window'
                    })
                }
            },
            {
                label: "退出",
                role: 'quit' // 定义好的可以直接用
            }
        ]
    }
];


// 取消默认菜单 null
Menu.setApplicationMenu(Menu.buildFromTemplate(config))

