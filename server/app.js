const express = require('express')
const crypto = require('crypto')
const path = require('path')
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

const PORT = process.env.PORT ?? 3000;

dotenv.config({ path: path.join(__dirname, '.env') });
app.use(express.json());
app.use(cors())

const ADMIN_SESSION_SECRET = process.env.ADMIN_SESSION_SECRET?.trim()
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD?.trim()

function safeComparePassword(input, expected) {
    if (typeof input !== 'string' || typeof expected !== 'string' || !expected.length) {
        return false
    }
    const a = crypto.createHash('sha256').update(input).digest()
    const b = crypto.createHash('sha256').update(expected).digest()
    return a.length === b.length && crypto.timingSafeEqual(a, b)
}

function createAdminToken() {
    const exp = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60
    const payloadB64 = Buffer.from(JSON.stringify({ exp, role: 'admin' })).toString('base64url')
    // hex digest avoids Node versions where digest('base64url') is unsupported
    const sig = crypto
        .createHmac('sha256', ADMIN_SESSION_SECRET)
        .update(payloadB64)
        .digest('hex')
    return `${payloadB64}.${sig}`
}

function verifyAdminToken(token) {
    if (!token || !ADMIN_SESSION_SECRET) return false
    const parts = token.split('.')
    if (parts.length !== 2) return false
    const [payloadB64, sig] = parts
    const expectedSig = crypto
        .createHmac('sha256', ADMIN_SESSION_SECRET)
        .update(payloadB64)
        .digest('hex')
    const sigBuf = Buffer.from(sig, 'utf8')
    const expBuf = Buffer.from(expectedSig, 'utf8')
    if (sigBuf.length !== expBuf.length || !crypto.timingSafeEqual(sigBuf, expBuf)) {
        return false
    }
    try {
        const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString('utf8'))
        if (payload.role !== 'admin') return false
        if (payload.exp < Math.floor(Date.now() / 1000)) return false
        return true
    } catch {
        return false
    }
}

app.get('/api/admin/status', (_req, res) => {
    res.json({
        ok: true,
        loginConfigured: Boolean(ADMIN_PASSWORD && ADMIN_SESSION_SECRET),
    })
})

app.post('/api/admin/login', (req, res) => {
    if (!ADMIN_PASSWORD || !ADMIN_SESSION_SECRET) {
        return res.status(503).json({
            ok: false,
            message: 'Admin login not configured (set ADMIN_PASSWORD and ADMIN_SESSION_SECRET).',
        })
    }
    const password = req.body?.password
    if (!safeComparePassword(password, ADMIN_PASSWORD)) {
        return res.status(401).json({ ok: false, message: 'Invalid credentials.' })
    }
    const token = createAdminToken()
    res.json({ ok: true, token })
})

app.get('/api/admin/verify', (req, res) => {
    const auth = req.headers.authorization || ''
    const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : ''
    if (!verifyAdminToken(token)) {
        return res.status(401).json({ ok: false })
    }
    res.json({ ok: true })
})

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


