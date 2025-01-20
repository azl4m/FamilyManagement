import express, { Application } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import FamilyRoutes from './routes/FamilyRoutes'
import path from 'path';
const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/family_management');
        console.log('MongoDB connected');
    } catch (err) {
        console.error('Database connection failed:', err);
        process.exit(1);
    }
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use('/api/family', FamilyRoutes);
const PORT = 5000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});
