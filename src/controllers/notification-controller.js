const notificationService = require('../service/email-service');

const createNotification = async (req,res) => {
    try {
        const newEntry = await notificationService.newNotification(req.body);
        return res.status(200).json({
            message : 'sucessfully registered the notification to remainder service',
            data : newEntry,
            error : {},
            sucess : true
        }) 
    } catch (error) {
        res.status(500).json({
            message : 'not able to register the notification to remainder service',
            data : {},
            error : error,
            sucess : false
        })
    }
}

module.exports = {
    createNotification
}