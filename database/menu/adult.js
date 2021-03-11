const adult = (prefix, botName, ownerName, _registered, time) => {
	return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 18+ MENU 〙*
╠═════════════════════
╠➥  *${prefix}randomhentai
╠➥ *Desc* : Random image Hentai
╠═════════════════════
╠➥  *${prefix}nsfwtrap
╠➥ *Desc* : Nsfw Trap
╠═════════════════════
╠➥  *${prefix}nsfwneko
╠➥ *Desc* : Nsfw Neko
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.adult = adult
