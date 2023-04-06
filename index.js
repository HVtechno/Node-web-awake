const cron = require('node-cron');
const axios = require('axios')

function pingWebApp(){
    axios.get('https://htechnocv.onrender.com/')
}

cron.schedule('*/10 * * * *',pingWebApp);