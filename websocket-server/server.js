const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', socket => {
  console.log('Yeni bir istemci bağlandı.');

  socket.on('message', message => {
    console.log(`Mesaj alındı: ${message}`);
    // Mesajı tüm bağlı istemcilere ilet
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  socket.on('close', () => {
    console.log('Bir istemci bağlantıyı kapattı.');
  });
});

console.log('WebSocket sunucusu 8080 portunda çalışıyor.');