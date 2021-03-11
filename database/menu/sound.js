const sound = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 SOUND MENU 〙*
╠═════════════════════
╠➥ *${prefix}tts* <language code|text>
║ *Desc* : Google Text To Speach
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.sound = sound
