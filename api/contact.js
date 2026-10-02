export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Faqat POST request qabul qilinadi",
    });
  }

  const { name, phone, message } = req.body;

  // Validation
  if (!name?.trim()) {
    return res.status(400).json({
      message: "Ism kiritilmagan",
    });
  }

  if (!phone?.trim()) {
    return res.status(400).json({
      message: "Telefon raqami kiritilmagan",
    });
  }

  if (!message?.trim()) {
    return res.status(400).json({
      message: "Xabar kiritilmagan",
    });
  }

  try {
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

    // Telegram xabarni qabul qilmasa
    if (!telegramResponse.ok || !telegramData.ok) {
      return res.status(500).json({
        message: "Telegramga xabar yuborilmadi",
      });
    }

    return res.status(200).json({
      message: "Xabar muvaffaqiyatli yuborildi",
    });
  } catch (error) {
    console.error("Telegram error:", error);

    return res.status(500).json({
      message: "Serverda xatolik yuz berdi",
    });
  }
}