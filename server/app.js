const express = require('express')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT ?? 3000;

dotenv.config();
app.use(express.json());
app.use(cors())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shahariardorjoy52@gmail.com',
        pass: 'spbv blin hbfu giit'
    }
})

app.post("/contact", async (req, res) => {
    const { name, email, content } = req.body;

    const mailOptions = {
        from: email,
        to: "shahariardorjoy52@gmail.com", 
        subject: "New Contact Form Message",
        text: `
নতুন একটি মেসেজ পেয়েছেন!

Name: ${name}
Email: ${email}
Message: ${content}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email sent!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Email failed" });
    }
});



//home route
app.get('/', (req, res) => {
    res.send('request send successfully')
})

app.listen(PORT, () => {
    console.log(`server is ruing port ${PORT}`);
})


