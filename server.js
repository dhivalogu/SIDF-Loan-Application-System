const http = require('http');
const app=require('./backend/app');
const port=3200;
app.set('port',port);
server=http.createServer(app);
server.listen(port);
console.log('Server is listening in Port '+port);
