const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 400, transparent: false, title: 'Our Super-Duper Sound Machine'})

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'home.html'),
    protocol: 'file:',
    slashes: true
  }))


  win.on('closed', () => {

    app.quit()
  })
}

app.on('ready', createWindow)
