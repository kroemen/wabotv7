const search = (prefix, botName, ownerName, _registered, time) => {
	return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 SEARCH MENU 〙*
╠═════════════════════
╠➥ *${prefix}wait
║ *Desc* : Send Name Anime & Short Scene
╠═════════════════════ 
╠➥ *${prefix}ytsearch <query>
║ *Desc* : Search YouTube Video
╠═════════════════════ 
╠➥ *${prefix}trendtwit
║ *Desc* : Search Trending Twitter Video
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.search = search
