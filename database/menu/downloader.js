const downloader = (prefix, botName, ownerName, _registered, time) => {
	return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 DOWNLOADER  〙*
╠═════════════════════
╠➥  *${prefix}pinterest* <query>
╠➥ *Desc* : Download Image From Pinterest
╠═════════════════════
╠➥  *${prefix}ytmp3* <linkyt>
╠➥ *Desc* : Download Youtube Video to Mp3
╠═════════════════════
╠➥  *${prefix}ytmp4* <linkyt>
╠➥ *Desc* : Download Youtube Video
╠═════════════════════
╠➥  *${prefix}tiktok* <linktiktok>
╠➥ *Desc* : Download TikTok Video
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.downloader = downloader
