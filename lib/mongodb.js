const mongoose = require('mongoose');
const config = require('../config');
const EnvVar = require('./mongodbenv');
const {runtime} = require('../lib/functions')

const defaultEnvVariables = [
    { key: 'ALIVE_IMG', value: 'https://telegra.ph/file/b91f52e7d0004ec84845a.jpg' },
    { key: 'ALIVE_MSG', value: '*𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓* 

*Hᴇʟʟᴏ....* ${pushname}👋
*I'ᴍ Aʟɪᴠᴇ Nᴏᴡ...🙋‍♂💗*

*⏰ Now time is* ${timenow}
*📅 Date :* ${datenow}

*🟢 I am online still* ${runtime(process.uptime())}
*🔄 Response Delay :* 
*💻 Host :* Heroku
*🪢 Version :* V2

*☫ Work Mode :* 
*☫ Work Type :* @worktype

┌───────────────────────

`CONTACT NO` - https://wa.me/+94776369728?text=Hi

`GROUP LINK` - https://chat.whatsapp.com/FUGjjEbLPQp7KHL5jAUJb8

 🔥  Ｆᴏʀ ＳᴛΔᵀᴜs Vɪᴇᴡs ° 🔥
┌───────────────────────
├ 🍓 *Name :-*  ```BHASHITHA NETHMINA``` 
├ 🍓 *Nick Name :-*  ```NETHMINA OFC```  
├ 🍓 *Age :-*  ```17  YEARS OLD```
├ 🍓 *Live in :-* ```GALLE```
├ 🍓 *Contact :-* 94776369728
└───────────────────────

*🗓 Type [.menu] for my command list.*

*_🛜 𝚸𝚯𝐖𝚵𝚪𝚵𝐃 𝐁𝐘 𝐍𝐄𝐓𝐇𝐌𝐈𝐍𝐀 𝐎𝐅𝐂 𝐂𝐎𝐌𝐌𝐔𝐍𝐈𝐓𝐘_*


> ♡ ㅤ      ❍ㅤ        ⎙ㅤ    ⌲ 
> ˡᶦᵏᵉ        ᶜᵒᵐᵐᵉⁿᵗ       ˢᵃᵛᵉ      ˢʰᵃʳᵉ' },
    { key: 'PREFIX', value: '.' },
    { key: 'AUTO_READ_STATUS', value: 'false' },
    { key: 'MODE', value: 'public' },
    { key: 'AUTO_VOICE', value: 'true' },
    { key: 'AUTO_STICKER', value: 'true' },
    { key: 'AUTO_REPLY', value: 'true' },
    
];

// MongoDB connection function
const connectDB = async () => {
    try {
        await mongoose.connect(config.MONGODB);
        console.log('🛜 MongoDB Connected ✅');

        // Check and create default environment variables
        for (const envVar of defaultEnvVariables) {
            const existingVar = await EnvVar.findOne({ key: envVar.key });

            if (!existingVar) {
                // Create new environment variable with default value
                await EnvVar.create(envVar);
                console.log(`➕ Created default env var: ${envVar.key}`);
            }
        }

    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
