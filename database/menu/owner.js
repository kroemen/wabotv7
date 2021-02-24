const owner = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 OWNER MENU 〙*
╠═════════════════════
╠➥ *${prefix}setprefix* <text/optional>
║*Desc* : Replace Prefix
╠═════════════════════
╠➥ *${prefix}block* <@tag>
║*Desc* : Block User
╠═════════════════════
╠➥ *${prefix}unblock* <@tag>
║*Desc* : Unblock User
╠═════════════════════
╠➥ *${prefix}bc* <text>
║*Desc* : Broadcast to All Contact & Group
╠═════════════════════
╠➥ *${prefix}clone* <@tag>
║*Desc* : Clone Profile From Other Members
╠═════════════════════
╠➥ *${prefix}clearall*
║*Desc* : Clear All Chat
╠═════════════════════
╠➥ *${prefix}addbadword* <text>
║*Desc* : Add Badword Text
╠═════════════════════
╠➥ *${prefix}delbadword* <badwordtextlist>
║*Desc* : Delete Badword Text
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════`
}
exports.owner = owner
