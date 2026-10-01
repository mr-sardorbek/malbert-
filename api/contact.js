export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Faqat POST request qabul qilinadi",
    });
  }

  const { name, phone, message } = req.body;

  const telegramResponse = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `📩 Новое обращение

👤 Имя: ${name}
📞 Телефон: ${phone}
💬 Сообщение:
${message}`,
      }),
    }
  );

  const telegramData = await telegramResponse.json();

  console.log(telegramData);

  res.status(200).json({
    message: "Telegramga xabar yuborildi",
  });
}