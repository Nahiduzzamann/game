const ACCOUNTSID = "ACf74936d5d06ece6749dadeb5edfb183a";
const AUTHTOKEN = "f2c5129bf5e91d8fac27647da605a3e4";
import client from "twilio";
const sendSms = async (number, text) => {
    // console.log(accountSid)
    // console.log(authToken)
    return await client(ACCOUNTSID, AUTHTOKEN).messages
        .create({
        body: text,
        to: number,
        from: '+17862205284',
    });
};
export default sendSms;
