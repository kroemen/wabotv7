const stalk = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 STALK MENU 〙*
╠═════════════════════
╠➥ *${prefix}tiktokstalk* <username>
║ *Desc* : Get TikTok Information User
╠═════════════════════
╠➥ *${prefix}igstalk* <username>
║ *Desc* : Get Instagram Information User
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.stalk = stalk
