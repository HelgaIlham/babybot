exports.wait = () => {
	return`*「 🕹 」WAIT KAK*`
}

exports.succes = () => {
	return`*「 SUKSES 」*`
}

exports.lvlon = () => {
	return`*「 🕹 」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「 🕹 」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「 🕹 」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「 🕹 」LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.nsfwoff = () => {
	return`*「 🕹 」NSFW BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 🕹 」BELUM VERIFIKASI「❗」*\n\nketik : @verify`
}

exports.baned = () => {
	return`*「 🕹 」SORRY SORRY AJA NIH BRO, TAPI KAU SUDAH KU BANNED YAHAHAHA HAYUUU :V*`
}

exports.premium = (prefix) => {
	return`Lu Siapa? Fitur ini khusus user premium!
Upgrade ke premium dulu bosku
Jika minat hubungi owner ku
Ketik : ${prefix}owner`
}

exports.rediregis = () => {
	return`*Kamu sudah melakukan verify -_-*`
}

exports.stikga = () => {
	return`*「 GAGAL 」Coba reply/tag ulang kak*`
}

exports.linkga = () => {
	return`*「 🕹 」maaf linknya tidak valid kak*`
}

exports.groupo = () => {
	return`*「 🕹 」GROUP ONLY*`
}

exports.ownerb = () => {
	return`*「 🕹 」OWNER BOT ONLY*`
}

exports.ownerg = () => {
	return`*「 🕹 」OWNER GROUP ONLY*`
}

exports.admin = () => {
	return`*「 🕹 」ADMIN GROUP ONLY*`
}

exports.badmin = () => {
	return`*「 🕹 」BOT HARUS JADI ADMIN*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*「 🕹 ️」Teks nya mana kak?*`
}

exports.clears = () => {
	return`*Sukses bosku*`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ Nama : ${pushname}\`\`\`
\`\`\`➸ Nomor : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ Xp : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ Level : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 5K : permanen\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${isPrem ? '666' : `${limitCounts}`}

Upgrade premium bosku, biar bebas gunain bot`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`
┏━━━━━━◪ REKENING ◪━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ NOMOR : ${sender.split("@")[0]}
┃│➸ UANG : ${uangkau}
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛`
}

exports.donasi = () => {
return`
◪ DONATE
│
├❒ PULSA - DANA
└❒ 6287776101997

Nabi Muhammad SAW bersabda :

والصدقة تطفىء الخطيئة كما تطفىء الماء النار

“Sedekah itu dapat menghapus dosa sebagaimana halnya air memadamkan api.” (HR. Tirmidzi)

◪ Thanks supportnya kawan :)\n`
}

exports.iklan = (botName, ownerNumbers, ownerName) => {
return`
◪ JASA SEWA BOT 
│
├❒ SEWA : 5K/GRUP (MINGGU)
├❒ SEWA : 15K/GRUP (BULAN)
└❒ SEWA : 50K/GRUP (PERMANEN)

◪ KEUNTUNGAN SEWA BOT 
│
├❒ BISA MEMASUKAN BOT KE GROUP
└❒ BISA MENGGUNAKAN FITUR PREMIUM

◪ JASA BUAT BOT
│
├❒ 100K (SCRIPT GRATIS)
└❒ PEMBAYARAN : DANA ATAU PULSA

◪ KEUNTUNGAN BUAT BOT 
│
├❒ BISA MENJADI OWNER BOT SENDIRI
├❒ BISA MENGGANTI NAMA BOT SENDIRI
├❒ BISA MEMBAWA BOT KE GROUP
├❒ BISA MENGGUNAKAN COMMAND OWNER
└❒ BISA MENYEWAKAN BOT KEMBALI

◪ JASA PEMBUATAN WEBSITE & LANDINGPAGE
│
├❒ WEBSITE = 150K Free Hosting & Domain
└❒ LANDINGPAGE = 50K Free Hosting & Domain

 JIKA MINAT IKLAN DIATAS
 HARAP HUBUNGI NOMOR DIBAWAH
 wa.me/+6285945300923 \n`
}