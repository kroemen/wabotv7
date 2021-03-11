const kerang = (prefix, botName, ownerName, _registered, time) => {
	return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 KERANG MENU 〙*
╠═════════════════════
╠➥ *${prefix}apakah* <optional>
║*Desc* : Asking Is
╠═════════════════════
╠➥ *${prefix}bisakah* <optional>
║*Desc* : Ask Can
╠═════════════════════
╠➥ *${prefix}kapankah* <optional>
║*Desc* : Ask When
╠═════════════════════
╠➥ *${prefix}watak*
║*Desc* : Transmitting Characters at Random
╠═════════════════════
╠➥ *${prefix}hobby*
║*Desc* : Randomly Sending Hobbies
╠═════════════════════
╠➥ *${prefix}gantengcek*
║*Desc* : How Handsome
╠═════════════════════
╠➥ *${prefix}cantikcek*
║*Desc* : How Beautiful
╠═════════════════════
║ *Developer © ${botName}
╚═════════════════════`
}
exports.kerang = kerang
