const other = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 DOWNLOADER  〙*
╠═════════════════════
╠➥ *${prefix}send*
╠➥ *${prefix}wame*
╠➥ *${prefix}virtex*
╠➥ *${prefix}qrcode* <text>
╠➥ *${prefix}timer*
╠➥ *${prefix}fml*
╠➥ *${prefix}fml2*
╠═════════════════════
║ *Developer © ${botName}
╚═════════════════════`
}
exports.other = other
