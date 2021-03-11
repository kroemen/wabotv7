const stayonscreen = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 STAYONSCREEN 〙*
╠═════════════════════
╠➥  *${prefix}afk* <reason>
║ *Desc* : AFK :V
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.stayonscreen = stayonscreen
