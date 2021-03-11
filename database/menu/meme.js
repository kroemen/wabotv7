const meme = (prefix, botName, ownerName, _registered, time) => {
	return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 MEME MENU 〙*
╠═════════════════════
╠➥ *${prefix}meme*
║ *Desc* : Send Random Meme[eng]
╠═════════════════════
╠➥ *${prefix}memeindo*
║ *Desc* : Send Random Meme [indo]
╠═════════════════════
╠➥ *${prefix}darkjokes*
║ *Desc* : Send Darkjokes
╠═════════════════════
║ *Developer © ${botName}
╚═════════════════════`
}
exports.meme = meme
