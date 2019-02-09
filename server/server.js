let app = require('./config/config-express')();

// Apresenta um log ao publicar o servico
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
