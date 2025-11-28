const express = require('express')
const app = express();
const cors = require('cors')
const dotenv =require('dotenv');

const PORT = process.env.PORT

dotenv.config();
app.use(express.json());
app.use(cors())

//home route
app.get('/', (req, res)=>{
    res.send('request send successfully')
})

app.listen(PORT, ()=>{
    console.log(`server is ruing port ${PORT}`);
})


