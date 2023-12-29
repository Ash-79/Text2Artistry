import express from 'express';
import * as dotenv from 'dotenv';
import OpenAIApi from 'openai';

dotenv.config();

const router = express.Router();


const openai = new OpenAIApi(process.env.OPENAI_API_KEY);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from Text2Artistry!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.images.generate({
      prompt: prompt,
      n: 1,
      size: '1024x1024'
    });

    const image = aiResponse.data[0].url;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;
