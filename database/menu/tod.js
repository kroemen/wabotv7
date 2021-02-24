const tod = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 TOD MENU 〙*
╠═════════════════════
╠➥  *${prefix}trust*
║*Desc* : Random trust
╠═════════════════════ 
╠➥  *${prefix}dare*
║*Desc* : Random Dare
╠═════════════════════
║ *Developer © ${botName}
╚═════════════════════`
}
exports.tod = tod
