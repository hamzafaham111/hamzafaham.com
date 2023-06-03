import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
console.log("got it");
    // Create a transporter with your email service's SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'hamzafaham111@gmail.com',
        pass: 'lbjo gkrj iach gjob'
    }
    });

    // Define the email content
    const mailOptions = {
      from: email,
      to: 'hamzafaham111@gmail.com',
      subject: 'Sent From Portfolio',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
