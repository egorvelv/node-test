// импорты и переменные
const express = require('express');
const port = 3000;
const products = require('./src/js/products')
const features = require('./src/js/features')
const bot = require('./src/js/telegraf')

// настройка сервера
const app = express();

bot.launch();

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));
app.use(express.static(__dirname + '/node_modules/axios/dist'));

app.get('/', (req, res) => {
    res.render(
    	'index',
    	{
    		title: 'Главная страница',
    		message: 'Добро пожаловать на главный экран',
    		products: products,
            features: features,
    	}
    	);
})

app.get('/', (req, res) => {
    res.render(
    	'index',
    	{
    		title: 'Запасная',
    		message: 'И снова привет',
    	}
    	);
})

// запуск сервера
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});