import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts',postRoutes)
app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());


const CONNECTION_URL = 'mongodb+srv://microverse:formicroverse123@cluster0.iliiz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
.catch((error)=>console.log(error.message))
