const islam = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 ISLAM MENU 〙*
╠═════════════════════
╠➥ *${prefix}quran*
║*Desc* : Sending Qur'anic Verses at Random
╠═════════════════════
╠➥ *${prefix}jsholat* <area>
║*Desc* : Sending Prayer Schedule Information
╠═════════════════════
║ *Developer © ${botName}
╚═════════════════════`
}
exports.islam = islam
