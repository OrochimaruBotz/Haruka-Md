const fs = require("fs");
const petik = '```'
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")


function toCommas(x) {
    x = x.toString()
    var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
       x = x.replace(pattern, "$1,$2");
    return x;
}

exports.allMenu = (role, ucapanWaktu, pushname, mundur, upload, download, ownerName, botName, jam, tanggal, runtime, isCreator, isPremium, sender, limitCount, limit, gcount, glimit, balance, prefix) => {
    return`*── 「 ${setting.botName} 」 ──*
	
${ucapanWaktu} kak *${pushname !== undefined ? pushname : 'No Detect Name'}*👋
♕︎Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
♔︎Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
꧁──────⚠︎⚠︎───────꧂
☞︎︎︎Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
☞︎︎︎Sisa Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
☞︎︎︎Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
☞︎︎︎Balance : $${toCommas(getBalance(sender, balance))}
 
_Ada Bug? Ketik ${prefix}report Bug mu_
  ${readmore}
*Main Menu*
 1➱ ${prefix}menu
 2➱ ${prefix}infobot
 3➱ ${prefix}donate
 4➱ ${prefix}dashboard
 5➱ ${prefix}owner
 6➱ ${prefix}cekdrive
 7➱ ${prefix}cekbandwidth
 8➱ ${prefix}cekpremium
 9➱ ${prefix}listpremium
 10➱ ${prefix}listsewa
 11➱ ${prefix}speed
 12➱ ${prefix}runtime
 13➱ ${prefix}listbahasa

*Converter/Tools*
 14➱ ${prefix}sticker
 16➱ ${prefix}stickerwm
 17➱ ${prefix}smeme
 19➱ ${prefix}toimg
 20➱ ${prefix}tovideo
 21➱ ${prefix}tomp3
 22➱ ${prefix}ttp
 23➱ ${prefix}attp
 24➱ ${prefix}emojimix
 25➱ ${prefix}nuliskiri
 26➱ ${prefix}nuliskanan
 27➱ ${prefix}foliokiri
 28➱ ${prefix}foliokanan
 29➱ ${prefix}say
 30➱ ${prefix}translate

*Anonymous Chat*
 31➱ ${prefix}menfess nama|62xxx|pesan
 32➱ ${prefix}anonymous
 33➱ ${prefix}start
 34➱ ${prefix}next
 35➱ ${prefix}stop
 36➱ ${prefix}sendprofile

*Store Menu*$
 37➱ ${prefix}list
 38➱ ${prefix}addlist
 39➱ ${prefix}dellist
 40➱ ${prefix}update
 41➱ ${prefix}jeda
 42➱ ${prefix}tambah
 43➱ ${prefix}kurang
 44➱ ${prefix}kali
 45➱ ${prefix}bagi
 46➱ ${prefix}delsetdone
 47➱ ${prefix}changedone
 48➱ ${prefix}setdone
 49➱ ${prefix}delsetproses
 50➱ ${prefix}changeproses
 51➱ ${prefix}setproses
 52➱ proses < reply chat >
 53➱ ? done < reply chat >

*Rpg Menu*
 54➱ ${prefix}inventory
 55➱ ${prefix}mining
 56➱ ${prefix}buy 
 57➱ ${prefix}sell
 58➱ ${prefix}heal
 59➱ ${prefix}hunt
 60➱ ${prefix}adventure
 61➱ ${prefix}luckyday
 62➱ ${prefix}killslime
 63➱ ${prefix}killgoblin
 64➱ ${prefix}killdevil
 65➱ ${prefix}killbehemoth
 66➱ ${prefix}killdemon
 67➱ ${prefix}killdemonking
 68➱ ${prefix}joinrpg
 69➱ ${prefix}sellikan
 70➱ ${prefix}sellbesi
 71➱ ${prefix}sellemas
 72➱ ${prefix}jelajah
 73➱ ${prefix}mancing
 74➱ ${prefix}jualikan
 75➱ ${prefix}jualcoal
 76➱ ${prefix}lebur
 77➱ ${prefix}jualstone
 78➱ ${prefix}jualingot
 79➱ ${prefix}jualkayu
 80➱ ${prefix}nebang
 81➱ ${prefix}goplanet
 82➱ ${prefix}jualbahankimia

*Downloader Menu*
 83➱ ${prefix}play
 84➱ ${prefix}ytmp3
 85➱ ${prefix}ytmp4
 86➱ ${prefix}instagram
 87➱ ${prefix}igphoto
 88➱ ${prefix}igvideo
 89➱ ${prefix}igreels
 90➱ ${prefix}tiktok
 91➱ ${prefix}tiktoknowm
 92➱ ${prefix}tiktokaudio
 93➱ ${prefix}mediafire
 94➱ ${prefix}gitclone

*Group Menu*
 95➱ ${prefix}afk
 96➱ ${prefix}welcome
 97➱ ${prefix}left
 98➱ ${prefix}setopen
 99➱ ${prefix}changesetopen
 100➱ ${prefix}delsetopen
 101➱ ${prefix}setclose
 102➱ ${prefix}changesetclose
 103➱ ${prefix}delsetclose
 104➱ ${prefix}setwelcome
 105➱ ${prefix}changewelcome
 106➱ ${prefix}delsetwelcome
 107➱ ${prefix}setleft
 108➱ ${prefix}changeleft
 109➱ ${prefix}delsetleft
 110➱ ${prefix}linkgc
 111➱ ${prefix}setppgc
 112➱ ${prefix}setnamegc
 113➱ ${prefix}setdesc
 114➱ ${prefix}antilink
 115➱ ${prefix}antiwame
 116➱ ${prefix}open
 117➱ ${prefix}close
 118➱ ${prefix}add
 119➱ ${prefix}kick
 120➱ ${prefix}promote
 121➱ ${prefix}demote
 122➱ ${prefix}revoke
 123➱ ${prefix}hidetag
 124➱ ${prefix}checksewa

*Game Menu*
 125➱ ${prefix}tictactoe
 126➱ ${prefix}delttt
 127➱ ${prefix}casino
 128➱ ${prefix}delcasino

*Search Menu*
 129➱ ${prefix}lirik
 130➱ ${prefix}grupwa
 131➱ ${prefix}pinterest
 132➱ ${prefix}ytsearch
 133➱ ${prefix}searchbyimage

*Random Menu*
 134➱ ${prefix}cecan
 135➱ ${prefix}cogan
 136➱ ${prefix}waifu


*Balance Menu*
 137➱ ${prefix}topglobal
 138➱ ${prefix}toplocal
 139➱ ${prefix}buylimit
 140➱ 0${prefix}buyglimit
 141➱ ${prefix}transfer
 142➱ ${prefix}limit
 143➱ ${prefix}balance

*Storage Menu*
 144➱ ${prefix}addstik
 145➱ ${prefix}addvn
 146➱ ${prefix}addimg
 147➱ ${prefix}addvid
 148➱ ${prefix}liststik
 149➱ ${prefix}listvn
 150➱ ${prefix}listimg
 151➱ ${prefix}listvid
 
*Baileys*
 152➱ ${prefix}fitnah
 153➱ ${prefix}nowa
 154➱ ${prefix}getquoted
 155➱ ${prefix}fakehidetag
 156➱ ${prefix}react
 157➱ ${prefix}setcmd
 158➱ ${prefix}delcmd

*Owner Menu*
 159➱ ${prefix}autoread
 160➱ ${prefix}autobio
 161➱ ${prefix}autorespond
 162➱ ${prefix}anticall
 163➱ ${prefix}autoblok212
 164➱ ${prefix}join
 165➱ ${prefix}left
 166➱ ${prefix}self
 167➱ ${prefix}public
 168➱ ${prefix}setppbot
 169➱ ${prefix}broadcast
 170➱ ${prefix}bcimg
 171➱ ${prefix}bcstik
 172➱ ${prefix}bcvn
 173➱ ${prefix}bcvideo
 174➱ ${prefix}bcsewa
 175➱ ${prefix}addpremium
 176➱ ${prefix}delpremium
 177➱ ${prefix}addsewa
 178➱ ${prefix}delsewa

*Asupan Menu*
 179➱ ${prefix}chika
 180➱ ${prefix}delvira
 181➱ ${prefix}ayu
 182➱ ${prefix}bunga
 183➱ ${prefix}aura
 184➱ ${prefix}nisa
 185➱ ${prefix}ziva
 186➱ ${prefix}yana
 187➱ ${prefix}viona
 188➱ ${prefix}syania
 190➱ ${prefix}riri
 191➱ ${prefix}syifa
 192➱ ${prefix}mama_gina
 193➱ ${prefix}alcakenya
 194➱ ${prefix}mangayutri
 195➱ ${prefix}rikagusriani
 196➱ ${prefix}asupan
 197➱ ${prefix}bocil
 198➱ ${prefix}geayubi
 199➱ ${prefix}santuy
 200➱ ${prefix}ukhty
 201➱ ${prefix}syifa$

*Nsfw Menu*
 • ${prefix}baka
 • ${prefix}smug
 • ${prefix}neko_sfw
 • ${prefix}hentai_gif
 • ${prefix}spank
 • ${prefix}blowjob
 • ${prefix}cumarts
 • ${prefix}eroyuri
 • ${prefix}eroneko
 • ${prefix}erokemonomimi
 • ${prefix}erokitsune
 • ${prefix}ero
 • ${prefix}feet
 • ${prefix}erofeet
 • ${prefix}feetgif
 • ${prefix}femdom
 • ${prefix}futanari
 • ${prefix}hentai
 • ${prefix}holoero
 • ${prefix}holo
 • ${prefix}keta
 • ${prefix}kitsune
 • ${prefix}kemonomimi
 • ${prefix}pussyart
 • ${prefix}pussywankgif
 • ${prefix}girl_solo
 • ${prefix}girl_solo_gif
 • ${prefix}tits
 • ${prefix}trap
 • ${prefix}yuri
 • ${prefix}avatar2
 • ${prefix}anal
 • ${prefix}bj
 • ${prefix}boobs
 • ${prefix}classic
 • ${prefix}cumsluts
 • ${prefix}kuni
 • ${prefix}lesbian
 • ${prefix}neko
 • ${prefix}neko_gif
 • ${prefix}ahegao
 • ${prefix}bdsm
 • ${prefix}cuckold
 • ${prefix}cum
 • ${prefix}foot
 • ${prefix}gangbang
 • ${prefix}glasses
 • ${prefix}jahy
 • ${prefix}masturbation
 • ${prefix}nsfw_neko
 • ${prefix}orgy
 • ${prefix}panties
 • ${prefix}tentacles
 • ${prefix}thighs
 • ${prefix}zettai${petik}


*TextPro Menu*
 • ${prefix}halloween2
 • ${prefix}horror
 • ${prefix}game8bit
 • ${prefix}layered
 • ${prefix}glitch2
 • ${prefix}coolg
 • ${prefix}coolwg
 • ${prefix}realistic
 • ${prefix}space3d
 • ${prefix}gtiktok
 • ${prefix}stone
 • ${prefix}marvel
 • ${prefix}marvel2
 • ${prefix}pornhub
 • ${prefix}avengers
 • ${prefix}metalr
 • ${prefix}metalg
 • ${prefix}metalg2
 • ${prefix}halloween2
 • ${prefix}lion
 • ${prefix}wolf_bw
 • ${prefix}wolf_g
 • ${prefix}ninja
 • ${prefix}3dsteel
 • ${prefix}horror2
 • ${prefix}lava
 • ${prefix}bagel
 • ${prefix}blackpink
 • ${prefix}rainbow2
 • ${prefix}water_pipe
 • ${prefix}halloween
 • ${prefix}sketch
 • ${prefix}sircuit
 • ${prefix}discovery
 • ${prefix}metallic2
 • ${prefix}fiction
 • ${prefix}demon
 • ${prefix}transformer
 • ${prefix}berry
 • ${prefix}thunder
 • ${prefix}magma
 • ${prefix}3dstone
 • ${prefix}neon
 • ${prefix}glitch
 • ${prefix}harry_potter
 • ${prefix}embossed
 • ${prefix}broken
 • ${prefix}papercut
 • ${prefix}gradient
 • ${prefix}glossy
 • ${prefix}watercolor
 • ${prefix}multicolor
 • ${prefix}neon_devil
 • ${prefix}underwater
 • ${prefix}bear
 • ${prefix}wonderfulg
 • ${prefix}christmas
 • ${prefix}neon_light
 • ${prefix}snow
 • ${prefix}cloudsky
 • ${prefix}luxury2
 • ${prefix}gradient2
 • ${prefix}summer
 • ${prefix}writing
 • ${prefix}engraved
 • ${prefix}summery
 • ${prefix}3dglue
 • ${prefix}metaldark
 • ${prefix}neonlight
 • ${prefix}oscar
 • ${prefix}minion
 • ${prefix}holographic
 • ${prefix}purple
 • ${prefix}glossyb
 • ${prefix}deluxe2
 • ${prefix}glossyc
 • ${prefix}fabric
 • ${prefix}neonc
 • ${prefix}newyear
 • ${prefix}newyear2
 • ${prefix}metals
 • ${prefix}xmas
 • ${prefix}blood
 • ${prefix}darkg
 • ${prefix}joker
 • ${prefix}wicker
 • ${prefix}natural
 • ${prefix}firework
 • ${prefix}skeleton
 • ${prefix}balloon
 • ${prefix}balloon2
 • ${prefix}balloon3
 • ${prefix}balloon4
 • ${prefix}balloon5
 • ${prefix}balloon6
 • ${prefix}balloon7
 • ${prefix}steel
 • ${prefix}gloss
 • ${prefix}denim
 • ${prefix}decorate
 • ${prefix}decorate2
 • ${prefix}peridot
 • ${prefix}rock
 • ${prefix}glass
 • ${prefix}glass2
 • ${prefix}glass3
 • ${prefix}glass4
 • ${prefix}glass5
 • ${prefix}glass6
 • ${prefix}glass7
 • ${prefix}glass8
 • ${prefix}captain_as2
 • ${prefix}robot
 • ${prefix}equalizer
 • ${prefix}toxic
 • ${prefix}sparkling
 • ${prefix}sparkling2
 • ${prefix}sparkling3
 • ${prefix}sparkling4
 • ${prefix}sparkling5
 • ${prefix}sparkling6
 • ${prefix}sparkling7
 • ${prefix}decorative
 • ${prefix}chocolate
 • ${prefix}strawberry
 • ${prefix}koifish
 • ${prefix}bread
 • ${prefix}matrix
 • ${prefix}blood2
 • ${prefix}neonligth2
 • ${prefix}thunder2
 • ${prefix}3dbox
 • ${prefix}neon2
 • ${prefix}roadw
 • ${prefix}bokeh
 • ${prefix}gneon
 • ${prefix}advanced
 • ${prefix}dropwater
 • ${prefix}wall
 • ${prefix}chrismast
 • ${prefix}honey
 • ${prefix}drug
 • ${prefix}marble
 • ${prefix}marble2
 • ${prefix}ice
 • ${prefix}juice
 • ${prefix}rusty
 • ${prefix}abstra
 • ${prefix}biscuit
 • ${prefix}wood
 • ${prefix}scifi
 • ${prefix}metalr
 • ${prefix}purpleg
 • ${prefix}shiny 
 • ${prefix}jewelry
 • ${prefix}jewelry2
 • ${prefix}jewelry3
 • ${prefix}jewelry4
 • ${prefix}jewelry5
 • ${prefix}jewelry6
 • ${prefix}jewelry7
 • ${prefix}jewelry8
 • ${prefix}metalh
 • ${prefix}golden
 • ${prefix}glitter
 • ${prefix}glitter2
 • ${prefix}glitter3
 • ${prefix}glitter4
 • ${prefix}glitter5
 • ${prefix}glitter6
 • ${prefix}glitter7
 • ${prefix}metale
 • ${prefix}carbon
 • ${prefix}candy
 • ${prefix}metalb
 • ${prefix}gemb
 • ${prefix}3dchrome
 • ${prefix}metalb2
 • ${prefix}metalg
 • ${prefix}metalg${petik}
`
}

exports.donate = (pushname, ownerNumber) => {
    return`Contact  Owner:
wa.me/${ownerNumber} (Owner)`
}
