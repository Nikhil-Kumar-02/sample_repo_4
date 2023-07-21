const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
// const { sendBasicEmail } = require('./service/email-service');
const jobs = require('./utils/jobs');
const notificationController = require('./controllers/notification-controller');

const startServer = async () => {
    
    const app = express();
    app.use( bodyParser.json() );
    app.use( bodyParser.urlencoded({extended : true}) );
    app.post('/api/v1/createNotification' , notificationController.createNotification);

    app.listen(PORT, () => {

        console.log(`server is running on port : ${PORT}`);

        // sendBasicEmail(
        //     'support@admin.com' ,
        //     'nickrajrandom@gmail.com',
        //     'this is a testing email',
        //     'hey how are you i hope you like the support'
        // )
        jobs();
    })

}
startServer();