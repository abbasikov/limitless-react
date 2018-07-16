const path = require('path');
const express = require('express');

console.log(process.env.NODE_ENV);
console.log(process.env.PORT);
const isDeveloping = process.env.NODE_ENV !== 'production';
console.log('isDeveloping : ',isDeveloping);
const port = isDeveloping ? 3000 : process.env.PORT;
console.log('port : ',port);
const app = express();
app.use(express.static('build'));

app.use('/assets/js',express.static(path.join(__dirname, 'assets/js')));
app.use('/assets/css',express.static(path.join(__dirname, 'assets/css')));
app.use('/assets/images',express.static(path.join(__dirname, 'assets/images')));
app.use('/assets/lib',express.static(path.join(__dirname, 'assets/lib')));

if (!isDeveloping) {
    console.log('isDeveloping : false');
    app.use(express.static(__dirname + '/'));
    app.get('*', function response(req, res) {
        res.sendFile(path.join(__dirname, 'build/index.html'));
    });
}

app.listen(port, '127.0.0.1', function onStart(err) {

  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port);
});
