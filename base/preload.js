// const fs = require('fs')
//
// const content = fs.readFileSync('package.json', 'utf-8')
//
// console.log(content)

const {ipcRenderer, contextBridge} = require('electron');

// ipcRenderer.send('saveFile')

//  桥接
contextBridge.exposeInMainWorld('api', {
    send: () => {
        ipcRenderer.send('saveFile')
    },
    contextMenuSend: () => {
        ipcRenderer.send("mainContextMenu")
    }
})

ipcRenderer.on('toPreload', () => {
    console.log(323232)
})
