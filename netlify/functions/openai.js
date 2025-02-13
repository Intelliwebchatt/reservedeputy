import OpenAI from "openai";

export async function handler(event, context) {
  const { question } = JSON.parse(event.body);

  const openai = new OpenAI(process.env.OPENAI_API_KEY);

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: question },
      ],
      store: true,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ answer: completion.choices[0].message.content }),
    };
  } catch (error) {
    console.error("Error fetching the answer:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error processing your request." }),
    };
  }
}
