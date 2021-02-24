const xp = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 DOWNLOADER  〙*
╠═════════════════════
╠➥ *${prefix}level*
║*Desc* : Check Your Level
╠═════════════════════
╠➥ *${prefix}leveling* <1/0>
║*Desc* : Enabling / Disabling Leveling Features
╠═════════════════════
╠➥ *${prefix}mining*
║*Desc* : Mining XP
╠═════════════════════
╠➥ *${prefix}event* <1/0>
║*Desc* : Enabling / Disabling Event Features
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════
--------------------------------
Note: _Kamu bisa mengumpulkan xp dan menaikan levelmu dengan cara chat dengan siapapun di dalam grup yang telah di aktifkan fitur leveling_ .`
}
exports.xp = xp
