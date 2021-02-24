const logomaker = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 DOWNLOADER  〙*
╠═════════════════════
╠➥ *${prefix}ninjalogo* <text|text>
║*Desc* : Make Ninja Logo
╠═════════════════════
╠➥ *${prefix}logowolf* <text|text>
║*Desc* : Make Wolf Logo
╠═════════════════════
╠➥ *${prefix}logowolf2* <text|text>
║*Desc* : Make Wolf Logo2
╠═════════════════════
╠➥ *${prefix}phlogo* <text|text>
║*Desc* : Make PornHub Logo
╠═════════════════════
╠➥ *${prefix}neonlogo* <text>
║*Desc* : Make Neon Logo
╠═════════════════════
╠➥ *${prefix}neonlogo2* <text>
║*Desc* : Make Neon Logo2
╠═════════════════════
╠➥ *${prefix}lionlogo* <text|text>
║*Desc* : Make Lion Logo
╠═════════════════════
╠➥ *${prefix}jokerlogo* <text>
║*Desc* : Make Joker Logo
╠═════════════════════
╠➥ *${prefix}pubglogo* <text|text>
║*Desc* : Make PUBG Logo
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.logomaker = logomaker
