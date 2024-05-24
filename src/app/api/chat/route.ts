// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY!,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt }
        ],
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.9,
      });

      const response = completion.data.choices[0].message?.content;
      return res.status(200).json({ response });
    } catch (error) {
      console.error('Error creating completion:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
