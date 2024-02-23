let express = require('express');
let app = express();
let port = 3000;

app.use(express.static(__dirname+'/www'));

app.listen(port, () => {
    console.log('Le server est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})


app.use('/js', express.static(__dirname+'/node_modules/bootstrap/dist/js')); 
app.use('/js', express.static(__dirname+'/node_modules/bootstrap/dist/css')); 
app.use('/js', express.static(__dirname+'/node_modules/jquery/dist')); 
app.use('/js', express.static(__dirname+'/node_modules/@popperjs/core/dist/umd')); 
app.use('/css', express.static(__dirname+'/node_modules/bootstrap/dist/css'));

app.get('/', (req, res , next) =>{ 
    res.sendFile('/www/index.html'); 
});