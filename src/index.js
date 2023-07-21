const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
// const { sendBasicEmail } = require('./service/email-service');
const cron = require('node-cron');

const startServer = async () => {
    
    const app = express();
    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded({extended : true}) );
     
    app.listen(PORT, () => {

        console.log(`server is running on port : ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com' ,
        //     'nickrajrandom@gmail.com',
        //     'this is a testing email',
        //     'hey how are you i hope you like the support'
        // )

        cron.schedule('* * * * *', () => {
        console.log('running a task every minute');
        });
    })

}

startServer();