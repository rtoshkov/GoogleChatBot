const express = require('express');
const cors = require('./middleware/cors.js');
const botController = require('./controllers/bot.js')
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => res.json({message:'FUCK OFF!'}));
app.use('/bot', botController);


app.listen(3030, ()=> console.log('RESET SERVICE running on port 3030'));
