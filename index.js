import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import { ConnectDb } from './db/index.js';
import TeacherController from './controller/teachers/index.js';
import TeacherMiddleware from './middleware/teacher.js';
import PositionController from './controller/positions/index.js';

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())


app.post('/teachers', TeacherMiddleware.create, TeacherController.create)
app.get('/teachers', TeacherController.getAllTeachers)
app.post ('/teacher-positions' ,  PositionController.create)
app.get('/teacher-positions', PositionController.getAll)
app.listen(process.env.PORT,() =>{
    ConnectDb.mongoose()
    console.log(`Server is running on port ${process.env.PORT}`)
})