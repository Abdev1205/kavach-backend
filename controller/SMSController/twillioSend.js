import config from "dotenv";
import twilio from "twilio";
const accountSid = process.env.TWILIO_ACCNT_SID;
const authToken = process.env.TWILIO_ACCNT_AUTH;
const client = twilio(accountSid, authToken);

const phoneNumbers = ["+919900233006", "+919902933006"];

const sendSMS = async (phoneNo, message) => {
  try {
    const twilioResponse = await client.messages.create({
      body: `${message}`,
      from: process.env.TWILIO_PHN,
      to: phoneNo,
    });

    console.log(
      `SMS sent successfully to ${phoneNo}. SID: ${twilioResponse.sid}`
    );
  } catch (error) {
    console.error(`Error sending SMS to ${phoneNo}: ${error.message}`);
  }
};

export const getMessageToSend = async (req, res) => {
  const { message } = req.body;
  const sendPromises = phoneNumbers.map((phoneNo) => sendSMS(phoneNo, message));

  try {
    await Promise.all(sendPromises);
    res.json({ success: true, message: "SMS sent successfully" });
  } catch (error) {
    console.error(`Error sending SMS: ${error.message}`);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
