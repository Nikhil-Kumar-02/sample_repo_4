const dotENV = require('dotenv');
dotENV.config();

module.exports = {
    PORT : process.env.PORT,
    EMAIL_ID : process.env.EMAIL_ID,
    EMAIL_PASSWORD : process.env.APP_PASS
}