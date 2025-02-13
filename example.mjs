import OpenAI from "openai";

const openai = new OpenAI(process.env.OPENAI_API_KEY);

async function generateHaiku() {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: "Write a haiku about recursion in programming.",
        },
      ],
      store: true,
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Error generating haiku:", error);
  }
}

generateHaiku();
