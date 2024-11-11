import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';

async function startBot() {
    const client = new Client({
        authStrategy: new LocalAuth(),
        puppeteer: {
            executablePath: process.env.CHROME_PATH,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--disable-extensions',
                '--disable-software-rasterizer',
                '--no-zygote',
                '--headless',
            ],
        },
        ffmpegPath: process.env.FFMPEG_PATH,
    });

    client.on('qr', (qr) => {
        qrcode.generate(qr, { small: true });
        console.log('QR code received. Scan the QR code to log in.');
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });

    client.on('message', (msg) => {
        if (msg.body === '!ping') {
            msg.reply('pong');
        }
    });

    await client.initialize();
}

startBot();