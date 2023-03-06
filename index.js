import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import postRoutes from './routes/posts.js'

dotenv.config('./.env');

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts' , postRoutes);

const CONNECTION_URL =
  "mongodb+srv://SumitJs:sumit2011@cluster0.qjoy0ur.mongodb.net/social_media_JS?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));

// mongoose.set("useFindAndModify", false);

// app.listen(PORT,() => {
//     console.log('');
// })
