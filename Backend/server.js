import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import Product from './models/Product.js';
import mongoose from 'mongoose';
import path from 'path'
import productRoutes from './routes/product.js'
dotenv.config();
const app=express();
const __dirname=path.resolve();
app.use(express.json()); // Middleware to parse req.body
app.use('/api/products',productRoutes);
const PORT=process.env.PORT || 3000;
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/Frontend/dist")));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,"Frontend","dist","index.html"));
    })
}
app.listen(PORT,()=>{
    connectDB();
    console.log('Server started running at http://localhost:'+PORT);
})

