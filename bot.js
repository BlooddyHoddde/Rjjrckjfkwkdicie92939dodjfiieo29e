const Discord = require("discord.js");

const client = new Discord.Client();

function clean(text) {

    if (typeof(text) === "string")

      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));

    else

        return text;

}

var prefix = "!";

var token = process.env.BOT_TOKEN;

client.on("ready", () => {

  console.log("Vulnix | Logged in! Server count: ${client.guilds.size}");

  client.user.setGame(`!انشاء`);

});

client.on("guildCreate", (guild) => {

client.user.setGame(`!انشاء`);

});

if (message.content.toLowerCase().startsWith(prefix + `انشاء`)) {

    const reason = message.content.split(" ").slice(1).join(" ");

    if (!message.guild.roles.exists("name", "Helpers")) return message.channel.send(`الرجاء اصافة رتبة Helper`);

    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);

    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {

        let role = message.guild.roles.find("name", "Helper");

        let role2 = message.guild.roles.find("name", "@everyone");

        c.overwritePermissions(role, {

            SEND_MESSAGES: true,

            READ_MESSAGES: true

        });

        c.overwritePermissions(role2, {

            SEND_MESSAGES: false,

            READ_MESSAGES: false

        });

        c.overwritePermissions(message.author, {

            SEND_MESSAGES: true,

            READ_MESSAGES: true

        });

        message.channel.send(`:white_check_mark: لقد تم انشاء التذكرة بنجاح, #${c.name}.`);

        const embed = new Discord.RichEmbed()

        .setColor(0xCF40FA)

        .addField(`Hey ${message.author.username}!`, `الرجاء اضافة معلومات لكي نتمكن من مساعدتك وشكرا لك.`)

        .setTimestamp();

        c.send({ embed: embed });

    }).catch(console.error);

}

if (message.content.toLowerCase().startsWith(prefix + `غلق`)) {

    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`انت لا تستطيع كتابة امر غلق خارج  روم التذكرة`);

    message.channel.send(`هل انت متاكد? حينما تتاكد اكتب -تاكيد .`)

    .then((m) => {

      message.channel.awaitMessages(response => response.content === '-تاكيد', {

        max: 1,

        time: 10000,

        errors: ['time'],

      })

      .then((collected) => {

          message.channel.delete();

        })

        .catch(() => {

          m.edit('لقد تم انهاء مدة الالغاء.').then(m2 => {

              m2.delete();

          }, 3000);

        });

    });

}

});

client.login(token)

 
        .
