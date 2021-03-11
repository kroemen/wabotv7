const music = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 MUSIC MENU 〙*
╠═════════════════════
╠➥ *${prefix}play* <music_name>
║ Descc* : Play Music Audio
╠═════════════════════
╠➥ *${prefix}joox* <music_name>
║ *Desc* : Play Music Joox
╠═════════════════════
╠➥ *${prefix}lirik* <music_name>
║ *Desc* : Search Music Lyrics
╠═════════════════════
╠➥ *${prefix}chord* <music_name>
║ *Desc* : Search Chord Music Lyrics
╠═════════════════════
║ *Developer © ${botName}
╚═════════════════════`
}
exports.music = music
