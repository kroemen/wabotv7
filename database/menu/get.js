const getm = (prefix, botName, ownerName, _registered, time) => {
        return `
╔══✪〘 INFO BOT〙✪══════
╠➥ *Name bot : ${botName}*
╠➥ *Owner : ${ownerName}*
╠➥ *Total Pengguna Terdaftar : ${_registered.length}*
╠➥ *Time : ${time}*
╠═════════════════════
║  *〘 GET MENU 〙*
╠═════════════════════
╠➥  *${prefix}getstick (name stick)*
║*Desc* : Get sticker
╠═════════════════════ 
╠➥  *${prefix}liststick*
║*Desc* : list sticker
╠═════════════════════ 
╠➥  *${prefix}getvn (name vn)
║*Desc* : Get vn
╠═════════════════════ 
╠➥  *${prefix}addvn (name vn)
║*Desc* : Add vn
╠═════════════════════ 
╠➥  *${prefix}listvn
║*Desc* : List vn
╠═════════════════════ 
╠➥  *${prefix}addimage (name image) 
║*Desc* : add image 
╠═════════════════════ 
╠➥  *${prefix}getimage*
║*Desc* : get image
╠═════════════════════ 
╠➥  *${prefix}listimage*
║*Desc* : send listimage
╠═════════════════════ 
╠➥  *${prefix}addvideo (name video) 
║*Desc* : add video
╠═════════════════════ 
╠➥  *${prefix}getvideo*
║*Desc* : get video
╠═════════════════════ 
╠➥  *${prefix}listvideo*
║*Desc* : Send listvideo
╠═════════════════════
║ *Developer © ${botName}
╚═════════════════════`
}
exports.getm = getm