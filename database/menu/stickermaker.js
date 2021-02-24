const stickermaker = (prefix, botName, ownerName, _registered, time) => {
	return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 STICKER MENU 〙*
╠═════════════════════
╠➥  *${prefix}sticker*
║*Desc* : Make Sticker Image
╠═════════════════════
╠➥  *${prefix}stickergif*
║*Desc* : Make Sticker Gif/Video
╠═════════════════════
╠➥  *${prefix}ttp*
║*Desc* : Text To Sticker
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.stickermaker = stickermaker
