const cron = require('node-cron');
const emailService = require('../service/email-service');
const sender = require('../config/emailConfig');
/*
10.00 am 
every 5th minute
we will check are there any pending emails which was expected to be sent
by now and is pending
 */

const setUpJobs = ()=> {

    cron.schedule('*/2 * * * *', async () => {
        console.log('running a task every 2 minute');
        const response = await emailService.fetchPendingEmails();
        response.forEach((email) => {
            sender.sendMail({
                to : email.recipientEmail,
                subject : email.subject,
                text : email.content
            } , async (err , data)=> {
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    await emailService.updateData(email.id , {status : 'SUCESS'});
                }
            })
        });
        console.log(response);
    });

}

module.exports = setUpJobs;