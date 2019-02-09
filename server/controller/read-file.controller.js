let fs = require('fs');

module.exports = function(app) {
    
    app.get('/read-file', function(req, res) {
        fs.readFile('../index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    });
    
}