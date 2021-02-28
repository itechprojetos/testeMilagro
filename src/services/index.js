const { ipcMain, Notification } = require('electron');

ipcMain.handle('notification', (event, authorImage) => {
   
    const notification = {
        title: 'Info',
        body: `O autor(a) dessa imagem se chama ${authorImage}`
    }
    const showNotification =  new Notification(notification).show()
    return showNotification
})