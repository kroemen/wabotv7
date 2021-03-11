const limit = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 LIMIT MENU 〙*
╠═════════════════════
╠➥  *${prefix}limit*
║ *Desc* : Check Your Limit
╠═════════════════════
╠➥  *${prefix}bal*
║ Check Your Money
╠═════════════════════
╠➥  *${prefix}buylimit* <count>
║ *Desc* : Buy Limit
╠═════════════════════
║ *Developer © ${botName}*
╚═════════════════════
--------------------------------
Note: _Kamu bisa membeli limit dengan cara mengumpulkan uang terlebih dahulu. Cek uang kamu dengan cara mengetikan perintah *${prefix}bal* , harga 1 limit = 1000 uang_ .
Note2: _Kamu bisa mengumpulkan uang dengan cara chat dengan teman segroup atau bisa dengan naik level_ .`
}
exports.limit = limit
