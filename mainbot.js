const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '!!';
const ms = require("ms");
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
client.on('ready', () => {
  console.log(`---------------------------------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`---------------------------------------`);
});
//الرد التلقائي
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === '!!help') {
    msg.reply('Check Your DM :envelope_with_arrow:');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'رابط') {
    msg.reply('Check Your DM :envelope_with_arrow:');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'رابط') {
  msg.author.send('https://discord.gg/6frKqQa')
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'مازن') {
    msg.reply('ول ول ول ول ول ول ول ول ول ول ول ول ول');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === 'عبقر') {
    msg.reply('انا جالي كود');
  }
});
//--------------------------------------------
client.on('message', msg => {
  if (msg.content === '!!help') {
    msg.reply('لقد تم إرسال الأوامر في الخاص :envelope_with_arrow: اذا لم تصلك رساله قم بإلغاء خظر الرسائل وجرب مره اخري');
  }
});
// -------------------------------------------
client.on('message', msg => {
  if (msg.content === '!!adminhelp') {
    msg.author.send(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑『اوامر ادارية』👑

👑!!ban 『لتعطي شخص باند』

👑!!kick 『لتعطي شخص كيك』

👑!!clear 『لمسح الشات برقم』

👑!!edit  『لتعديل رساله 』

👑!!ct  مـلاحظه: الاسم انت تختاره『لي انشاء روم كتابي』

👑!!cv  مـلاحظه: الاسم انت تختاره『لي انشاء روم صوتي』

👑!!delete  『كـود يحذف الـروم سواء صوتي او كتابي』

👑!!bc  『خيارات البرودكاست』 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
    
    `);
  }
});
client.on('message', msg => {
  if (msg.content === '!!help') {
    msg.author.send(`
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
                        
!!server 『معلومات عن السيرفر』                      

!!date 『لمعرفه التاريخ』

!!ping 『لمعرفه سرعه البوت』

!!members 『معلومات عن الاعضاء』

!!rooms 『 لاظهار الرومات 』

!!top 『 توب انفايت 』

!!credit 『 يتم تطويرها 』

!!roles『 لأاظهار الرولات 』

!!رابط     『يرسل لك انفايت في الخاص 』

!!embed 『خاصيه غرد لكن بغير طريقه』 تم ايقافها حتي اشعار اخر

!!say 『لي يكرر الكلام الذي تقوله』  تم ايقافها

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●  
    
    `);
  }
});

client.login(process.env.BOT_TOKEN);
