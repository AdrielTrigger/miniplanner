const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const win = new BrowserWindow({
        width: 640,
        height: 640,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('./app/interface/home.html');
}

app.whenReady().then(() => {
    createWindow();
});