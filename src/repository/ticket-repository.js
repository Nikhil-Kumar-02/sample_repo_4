const { notificationTicket } = require('../models/index');
const { Op } = require("sequelize");
class ticketRepository{

    async getAllTickets(){
        try {
            const allData = await notificationTicket.findAll();
            return allData;
        } catch (error) {
            throw error
        }
    }

    async get(filter){
        try {
            const allData = await notificationTicket.findAll({
                where : {
                    status : filter.status,
                    notificationTime : {
                        [Op.lte] : new Date()
                    }
                }
            });
            return allData;
        } catch (error) {
            throw error
        }
    }

    async createNotification(data){
        try {
            const newEntry = await notificationTicket.create(data);
            return newEntry;
        } catch (error) {
            throw error;
        }
    }

    async updateTicket(ticketId , data){
        try {
            const newEntry = await notificationTicket.findByPk(ticketId);
            newEntry.status = data.status;
            newEntry.save();
            return newEntry;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = ticketRepository;

