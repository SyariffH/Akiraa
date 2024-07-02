global.d = new Date()
global.calender = d.toLocaleDateString('id')


//---------------------------------------------------------------------------------------------------------------//
// BAGIAN DATA 

global.prefix = "." // command prefix
global.ownNumb = "62857768913729" // isi no kalian
global.ownName = "𝗗𝗜𝗜𝗣𝗭𝗬" // isi nama kalian

//---------------------------------------------------------------------------------------------------------------//

// GLOBAL MESS
global.mess = {
     delay: '6000', // SET JEDA ATUR DI SINI
     owner: 'lu siapa?\n*GAUSAH SO ASIK*',
     group: "khusus di dalam group",
     inf: "𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 ⚠️\n› sc ini di recode oleh fOXhost\n› jangan lupa subs yt saya\n› sc ini 100% free [ JUAL ? NERAKA BAWAH ]\n› happfun your day\n\n𝗥𝗨𝗟𝗘𝗦 𝗣𝗨𝗦𝗛 ‼️\n› minimal push 1 GC isinya 2k member\n  kalo mau di ubah di cofig.js\n› untuk fitur push yg gada set jeda nya\n  gua setting standard [ 3000 ] kalo mau\n  di ubah tinggal cek di file config.js\n› inget *jangan di jual mekk*\n\n\n*LINK YT :*\n\nhttps://youtube.com/@ditznineten\n\n*FOXhost  :*\n\nwa.me/6287780241924"
}

//---------------------------------------------------------------------------------------------------------------//

global.thumb = require('fs').readFileSync("./image/thumb.png")
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log(__filename+' updated!')
	delete require.cache[file]
	require(file)
})

// BASE SCRIPT BY FOXhost
// NO ENC BISA BUY 
// NO RECONNECT
// TX TO Alpha05 
// MODULE BAILEYS WHISKEY

// OWNER
// wa.me/