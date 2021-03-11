const fun = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 FUN MENU 〙*
╠═════════════════════
╠➥ *${prefix}alay* <text>
║*Desc* : Changing Words Into Alay
╠═════════════════════
╠➥ *${prefix}bucin*
║*Desc* : Send a Random Slave of Love
╠═════════════════════
╠➥ *${prefix}trust*
║*Desc* : Send a Random Truth
╠═════════════════════
╠➥ *${prefix}dare*
║*Desc* : Send a Random Dare
╠═════════════════════
╠➥ *${prefix}simi* <text>
║*Desc* : Talk to Simi
╠═════════════════════
╠➥ *${prefix}say* <text>
║*Desc* : Saying:v
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.fun = fun
