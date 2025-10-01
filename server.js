require('dotenv').config();
console.log("JWT Secret:", process.env.JWT_SECRET);
const connectDB = require('./src/config/db');
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

connectDB();
app.listen(PORT,()=>console.log(`Server Running on Port ${PORT}`));