const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const resp = req.body;
    await Contact.create(resp);
    return res.status(200).json({ message: "Message send successfully!" });
  } catch (error) {
    return res.status(400).json({ message: "Message not delivered!" });
  }
};

module.exports = contactForm;
