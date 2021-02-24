const wibu = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 WIBU MENU 〙*
╠═════════════════════
╠➥ *${prefix}neonime*
║*Desc* : Search Neonime
╠═════════════════════
╠➥ *${prefix}pokemon*
║*Desc* : Random Pokemon Image
╠═════════════════════
╠➥ *${prefix}loli*
║*Desc* : Random Loli Image
╠═════════════════════
╠➥ *${prefix}waifu*
║*Desc* : Random Waifu Image
╠═════════════════════
╠➥ *${prefix}randomanime*
║*Desc* : Random Anime Image
╠═════════════════════
╠➥ *${prefix}husbu*
║*Desc* : Random Husbu Image
╠═════════════════════
╠➥ *${prefix}husbu2*
║*Desc* : Random Husbu2 Image
╠═════════════════════
╠➥ *${prefix}wait*
║*Desc* : Send Anime Name & Short Scene
╠═════════════════════
╠➥ *${prefix}nekonime*
║*Desc* : Random Nekonime Image
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.wibu = wibu
