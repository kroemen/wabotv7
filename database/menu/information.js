const information = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}
╠➥ *Time : ${time}
╠═════════════════════
║  *〘 INFORMATION 〙*
╠═════════════════════
╠➥ *${prefix}bahasa*
║*Desc* : Submit Language Code
╠═════════════════════
╠➥ *${prefix}kodenegara*
║*Desc* : Send Country Code
╠═════════════════════
╠➥ *${prefix}kbbi* <question>
║*Desc* : Asking KBBI
╠═════════════════════
╠➥ *${prefix}fakta*
║*Desc* : Send a Random Fact
╠═════════════════════
╠➥ *${prefix}infocuaca* <area>
║*Desc* : Send Weather Information
╠═════════════════════
╠➥ *${prefix}infogempa*
║*Desc* : Sending Earthquake Information
╠═════════════════════
╠➥ *${prefix}covidcountry* <country>
║*Desc* : Sending Covid-19 Information
╠═════════════════════
║*Developer © ${botName}*
╚═════════════════════`
}
exports.information = information
