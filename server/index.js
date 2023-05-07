import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const app = express();

env.config();

app.use(cors());
app.use(bodyParser.json());

//configure open api
const configuration = new Configuration({
    organization: "org-ZBgwCXe8BvWwOHadvwvlhptu",
    apiKey:process.env.API_KEY,
})

const openai = new OpenAIApi(configuration)

app.listen("3080", () => {
  console.log("listening on port 3080");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

//post request
app.post("/", async (req, res) => {
    const {message} = req.body;

    try{
        const response = await openai.createCompletion({
            model:"text-devinci-003",
            prompt:`{message}`,
            max_tokens:10000,
            temperature: 0.5
        })
        
        res.json({
            message: response.data.choices[0].value
        })
    }
    catch(err){
        console.log(err);
        res.send(err).status(400)
    }
})