const sender = require('../config/emailConfig');
const ticketRepository = require('../repository/ticket-repository');

const ticketInstance = new ticketRepository();

const sendBasicEmail = async (mailFrom , mailTo , mailSubject , mailBody) => {
    try {
        const response =  await sender.sendMail({
            from : mailFrom,
            to : mailTo,
            subject : mailSubject,
            text : mailBody
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

const fetchPendingEmails = async(timestamp) => {
    try {
        const tickets = await ticketInstance.get({status : "PENDING"});
        return tickets;
    } catch (error) {
        console.log(error);
    }
}

const newNotification = async(data) => {
    try {
        const newEntry = await ticketInstance.createNotification(data);
        return newEntry; 
    } catch (error) {
        throw error;
    }
}

const updateData = async(ticketId , status) => {
    try {
        const newData = await ticketInstance.updateTicket(ticketId,status);
        return newData;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    sendBasicEmail,
    fetchPendingEmails,
    newNotification,
    updateData
}