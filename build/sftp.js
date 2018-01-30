let Client = require('ssh2-sftp-client');
const path = require('path')
let distPath = path.resolve(__dirname, '../dist');

let sftp = new Client();
sftp.connect({
  host: '47.96.153.197',
  port: '22',
  username: 'html',
  password: 'sian123'
}).then(() => {
  sftp.put('D:/person/sianweb/dist','/home/ftp');
}).then((data) => {
  console.log(33333333,data);
  console.log(data, 'the data info');
}).catch((err) => {
  console.log(err, 'catch error');
});
