import "dotenv/config";

const token  = process.env.TELEGRAM_BOT_TOKEN

const response = await fetch(
    `https://api.telegram.org/bot${token}/getUpdates`
)

const data = await response.json()

console.log(JSON.stringify(data, null, 2))