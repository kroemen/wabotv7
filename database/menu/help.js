const help = (pushname, prefix, botName, ownerName, uangku, _registered, role, time, date, totalchat, getruntime, reqXp) => {
        return`
╔══✪〘 INFO  USER 〙✪════
╠➥ *Name : ${pushname}*
╠➥ *Role : ${role}*
╠➥ *Uang : ${uangku}*
╠➥ *Xp : ${reqXp}*
╠➥ *Time : ${time}*
╠➥ *Calendar: ${date}*
╠═════════════════════
║ *〘 INFO BOT 〙*             
╠═════════════════════
╠➥ *Namabot : ${botName}*
╠➥ *Namaowner : ${ownerName}*
╠➥ *Total User : ${_registered.length}*
╠➥ *Total Chat : ${totalchat.length}*
╠➥ *Prefix : 「${prefix}」*
╠➥ *Aktif : ${getruntime}*
╠═════════════════════
║  *〘 LIST MENU 〙*               
╠═════════════════════
╠➥ *${prefix}logomakermenu〘 Erorr〙*
╠➥ *${prefix}imagemakermenu*
╠➥ *${prefix}stickermakermenu*
╠➥ *${prefix}searchmenu*
╠➥ *${prefix}educationmenu*
╠➥ *${prefix}kerangmenu*
╠➥ *${prefix}downloadermenu*
╠➥ *${prefix}mememenu*
╠➥ *${prefix}groupmenu*
╠➥ *${prefix}soundmenu*
╠➥ *${prefix}musicmenu*
╠➥ *${prefix}islammenu*
╠➥ *${prefix}stalkmenu*
╠➥ *${prefix}wibumenu*
╠➥ *${prefix}18+menu*
╠➥ *${prefix}funmenu*
╠➥ *${prefix}todmenu*
╠➥ *${prefix}informationmenu*
╠➥ *${prefix}stayonscreenmenu*
╠➥ *${prefix}xpmenu*
╠➥ *${prefix}limitmenu*
╠➥ *${prefix}ownermenu*
╠➥ *${prefix}othermenu*
╠➥ *${prefix}getmenu*
╠═════════════════════
║  *Developer ©HLX-BOT*          
╚═════════════════════`
}
exports.help = help
