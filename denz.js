/*
* Hola espero te guste el bot :D
*/
// Si harás cambios ten cuidado
// Recuerda dar creditos 
const {
  WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')

const fs = require("fs")
const axios = require('axios')
const request = require('request')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const google = require('google-it')
const imageToBase64 = require('image-to-base64')
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')
const { removeBackgroundFromImageFile } = require('remove.bg')
const brainly = require('brainly-scraper')
const cd = 4.32e+7
const lolis = require('lolis.life')
const loli = new lolis()

const { BarBarApi, ZeksApi, TechApi, TobzApi, VthearApi } = JSON.parse(fs.readFileSync('./database/json/apikey.json'))
const setting = JSON.parse(fs.readFileSync('./database/json/setting.json'))
const welkom = JSON.parse(fs.readFileSync('./database/json/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./database/json/nsfw.json'))
const _limit = JSON.parse(fs.readFileSync('./database/json/limit.json'))
const samih = JSON.parse(fs.readFileSync('./database/json/simi.json'))
const user = JSON.parse(fs.readFileSync('./database/json/user.json'))
const publik = JSON.parse(fs.readFileSync('./database/json/public.json'))
const bucinrandom = JSON.parse(fs.readFileSync('./database/json/bucin.json'))
const hekerbucin = JSON.parse(fs.readFileSync('./database/json/hekerbucin.json'))
const katailham = JSON.parse(fs.readFileSync('./database/json/katailham.json'))
const adminNumber = JSON.parse(fs.readFileSync('./database/json/admin.json'))
const anime = JSON.parse(fs.readFileSync('./database/json/anime.json'))
const bad = JSON.parse(fs.readFileSync('./database/json/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/json/badword.json'))
const blocked = JSON.parse(fs.readFileSync('./database/json/blocked.json'))
const antilink = JSON.parse(fs.readFileSync('./database/json/antilink.json'))
let {
instagram, yt, groupLink
} = setting

const { fetchJson } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const { color, bgcolor } = require('./lib/color')
const { bahasa, help, donasi, limitend, limitcount, bottt } = require('./Fxc7/help')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')

const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Sxrgxx🥷🏿\n'
            + 'ORG:Sxrgxx🥷🏿;\n'
            + 'TEL;type=CELL;type=VOICE;waid=525623741080:+52 56 2374 1080\n'
            + 'END:VCARD'
       
const vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Bot 2\n'
            + 'ORG:Bot 2;\n'
            + 'TEL;type=CELL;type=VOICE;waid=994403717200:+994 40 371 72 00\n'
            + 'END:VCARD'

prefix = "#"
name = "Sxrgxx Bot"
rdaftar = "@denssptraa"
rmenu = "@denssptraa"
botinfo = "@denssptraa"
limitt = 999999999
memberLimit = 10
ban = []
premium = ["5215623741080@s.whatsapp.net","5216672997869@s.whatsapp.net"]

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

async function starts() {
	const denz = new WAConnection()
	denz.logger.level = 'warn'
	console.log(banner.string)
	denz.on('qr', () => {
		console.log(color('[','red'), color('!','yellow'), color(']','red'), color(' Escanea el codigo rapido we', 'green'))
	})

	fs.existsSync('./Fxc7.json') && denz.loadAuthInfo('./Fxc7.json')
	denz.on('connecting', () => {
		start('2', 'Conectando...')
	})
	denz.on('open', () => {
		success('2', 'Connectado')
	})
	await denz.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Fxc7.json', JSON.stringify(denz.base64EncodedAuthInfo(), null, '\t'))

	denz.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await denz.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Hola @${num.split('@')[0]}👋\nBienvenid@ al grupo *${mdata.subject}*\n\n ────────────────
┏━━━━━━━━━━━━━━━
┃────「 *_ɪɴᴛʀᴏ_* 」─────
┃━━━━━━━━━━━━━━━
┠⊷️ *Nombre* :
┠⊷️ *Edad* :
┠⊷️ *Género* :
┠⊷️ *Lugar* :
┗━━━━━━━━━━━━━━━

hola pana usa ${prefix}daftar para verificarte y poder usar el bot :D`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 Admin 」_*\n@${num.split('@')[0]} a quien quieres darle admin pana, ya tienes permiso?`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `*_「 Admin menos 」_*\n@${num.split('@')[0]} a quien quieres quitarle admin, ya tienes permiso?`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `Ahuevo banda ya se fue el cagason de @${num.split('@')[0]}👋\n a viborear 🐍 ya no esta`
				let buff = await getBuffer(ppimg)
				denz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'yellow'))
		}
	})

		denz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	denz.on('chat-update', async (mek) => {
		try {
			if (!mek.hasNewMessage) return 
			mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const DnsBot = ["5215623741080@s.whatsapp.net"] // esto lo puedes cambiar brou
			const farhan = mek.message.conversation
			const insom = from.endsWith('@g.us')
			const nameReq = insom ? mek.participant : mek.key.remoteJid
			pushname2 = denz.contacts[nameReq] != undefined ? denz.contacts[nameReq].vname || denz.contacts[nameReq].notify : undefined

			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

			const date = new Date().toLocaleDateString()
			const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const jam = moment.tz('Asia/Jakarta').format('HH:mm')

            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : '' 
			var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
			const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const Far = args.join(' ')
			const isCmd = body.startsWith(prefix)
			denz.chatRead(from)
			

			mess = {
				wait: '*⏳ Espera*',
				success: '*Con éxito...*',
				error: {
					stick: '*No se pudo convertir a sticker :(*',
					Iv: '*El link es invalido*'
				},
				only: {
					group: '*Solo puede ser utilizado en grupos pana*',
					benned: '*Lo siento tu número esta baneado en la base de datos del bot :c*',
					ownerG: '*Solo puede ser utilizado por el dueño del grupo*',
					ownerB: '*Solo puede ser utilizado por el dueño del bot* ',
					premium: '*Solo pueder usado por usuarios premium*',
					userB: `Hola *${pushname2}*, no estas registrado, usa esto para registrarte :D \n*${prefix}daftar*`,
					admin: '*Solo puede ser utilizado por un admin*',
					Badmin: '*El bot debe ser admin para este comando*',
					publikG: `Lo siento el bot no esta\npara más detalles\n*${prefix}infobot*`
				}
			}

			const botNumber = denz.user.jid
			const ownerNumber = ["5215623741080@s.whatsapp.net","52123741080@s.whataapp.net"] // tu numero 
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await denz.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const totalchat = await denz.chats.all()
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false 
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isNsfw = isGroup ? nsfw.includes(from) : false
			const isAnime = isGroup ? anime.includes(from) : false
			const isSimi = isGroup ? samih.includes(from) : false 
			const isPublic = isGroup ? publik.includes(from) : false 
			const isAntiLink = isGroup ? antilink.includes(from) : false
			const isBadWord = isGroup ? badword.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isUser = user.includes(sender)
			const isBanned = ban.includes(sender)
			const isPrem = premium.includes(sender)
			
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				denz.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				denz.sendMessage(hehe, teks, text)
	        }
				const sendPtt = (teks) => {
		    denz.sendMessage(from, audio, mp3, {quoted:mek})
			}
			const costum = (pesan, tipe, target, target2) => {
			denz.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? denz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

			colors = ['red','white','black','blue','yellow','green', 'aqua']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
                        denz.sendMessage(from, limitcount(limitCounts), text, { quoted : mek})
                    }
                                }
                        if (isGroup) {
				try {
					const getmemex = groupMembers.length
					    if (getmemex <= memberLimit) {
					    denz.sendMessage(from, `Los miembros del grupo son pocos *${groupMetadata.subject}* no alcanza el limite de miembros\n\nlimite de miembros *${memberLimit}*`, text)
					setTimeout( () => {
                            denz.groupLeave(from)
                            }, 100)
		setTimeout( () => {
		denz.updatePresence(from, Presence.composing)
					}, 10)
		setTimeout( () => {
		reply(`El bot abandonara el grupo *${groupMetadata.subject}*`)
		}, 0)
		}
					
		       } catch (err) { console.error(err)  }
 	 
 
        }
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    denz.sendMessage(from, limitend(pushname2), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./database/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./database/json/limit.json', JSON.stringify(_limit))
            }
        }
        if (bad.includes(messagesLink)) {
        denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (adminNumber.includes(messagesLink)){
        	hasil = `        ────────────────
Hola *${pushname2}* usa *${prefix}menu*
        ────────────────`
denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "ketik #menu kak", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
}
		if (bad.includes(messagesLink)) {
		if (!isGroup) return
		if (!isAntiLink) return
		if (isGroupAdmins) return reply(`*${pushname2}* Es admin no será expulsado`)
		denz.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply(`*Grupo de carga*`)
		}, 100)
		setTimeout( () => {
		denz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*_「 Badword 」_*\nHola *${pushname2}* Si hablas mal te hecharan del grupo *${groupMetadata.subject}*`)
		}, 0)
		}
		
     	   if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECV\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

                switch(command) {
				case 'menu':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				dmenu = `╓───「 Sxrgxx🥷🏿 」
║ Grupo :D: https://chat.whatsapp.com/E8aXqWgIykkJzMZ6UqNDgd
║ Creador : wa.me/+525623741080
╙───々
╓───「 *_ʙᴏᴛ ɪɴғᴏ_* 」
║❏ Creador: Sxrgxx🥷🏿
║❏ Prefijo: ${prefix}
║❏ Usuarios: ${user.length}
╙───々
╓───「 *_ᴜꜱᴇʀ ɪɴғᴏ_* 」
║❏ Nombre: ${pushname2}
║❏ Limtes: ${limitt}
║❏ Registrado: √
╙───々
╓───「 *_ᴀʙᴏᴜᴛ ʙᴏᴛ_* 」
║❏ ${prefix}ʀᴇᴘᴏʀᴛ
║❏ ${prefix}ɪɴғᴏ
║❏ ${prefix}ᴅᴏɴᴀꜱɪ
║❏ ${prefix}ᴏᴡɴᴇʀ
║❏ ${prefix}ᴄᴏᴏᴡɴᴇʀ
║❏ ${prefix}ꜱᴘᴇᴇᴅ
║❏ ${prefix}ᴅᴀғᴛᴀʀ
║❏ ${prefix}ʟɪᴍɪᴛ
║❏ ${prefix}ᴛᴏᴛᴀʟᴜꜱᴇʀ
║❏ ${prefix}ʙʟᴏᴄᴋʟɪꜱᴛ
║❏ ${prefix}ʙᴀɴʟɪꜱᴛ
║❏ ${prefix}ʙᴀʜᴀꜱᴀ
╙───々
͏͏͏͏͏͏͏͏͏͏͏͏͏͏╓───「 *_ɴᴇᴡ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɴɪɢʜᴛᴄᴏʀᴇ
║❏ ${prefix}ʙʟᴜʙ
║❏ ${prefix}ɢʜᴏꜱᴛ
║❏ ${prefix}ᴛᴏᴘᴛᴛ
║❏ ${prefix}ғᴀᴋᴇᴀᴅᴅʀᴇꜱꜱ
║❏ ${prefix}ɢᴏᴏɢʟᴇꜱᴇᴀʀᴄʜ
║❏ ${prefix}ʜʙᴅ 
║❏ ${prefix}ꜱʜɪɴᴇ 
║❏ ${prefix}ᴛʜᴇɴɪɢʜᴛ 
║❏ ${prefix}ʀᴀɪɴʙᴏᴡ 
║❏ ${prefix}ʟᴏᴠᴇ 
║❏ ${prefix}ᴏɴᴇᴄᴜᴘ 
║❏ ${prefix}ꜱᴋʏ 
║❏ ${prefix}ɴᴀᴛᴜʀᴇ 
║❏ ${prefix}ʀᴏꜱᴇɢᴏʟᴅ 
║❏ ${prefix}ɴᴀᴛᴜʀᴇ3ᴅ 
║❏ ${prefix}ᴏᴄᴇᴀɴ 
║❏ ${prefix}ᴡᴏᴏᴅʜᴇᴀʀᴛ 
║❏ ${prefix}ꜱᴜᴍᴍᴇʀ 
║❏ ${prefix}ᴜɴᴅᴇʀɢʟᴀꜱꜱ 
║❏ ${prefix}ᴄᴇᴍᴇᴛᴇʀʏ 
║❏ ${prefix}ʀᴏʏᴀʟʟᴏᴄᴋ 
║❏ ${prefix}ᴄᴏғғᴇᴄᴜᴘ 
║❏ ${prefix}ᴄᴏғғᴇᴄᴜᴘ2 
║❏ ${prefix}ɴᴇᴏɴ 
║❏ ${prefix}ɢʟᴏᴡ 
║❏ ${prefix}ꜱᴜᴍᴍᴇʀ 
║❏ ${prefix}ғʟᴏᴡᴇʀ 
║❏ ${prefix}ɢʀᴀɴᴅɪᴇɴᴛ 
║❏ ${prefix}ᴇᴍʙʀᴏɪᴅᴇʀʏ 
║❏ ${prefix}ғᴜɴɴʏᴄᴜᴘ 
║❏ ${prefix}ᴏʀᴄʜɪᴅꜱ 
║❏ ${prefix}ꜱᴍᴏᴋᴇ2 
║❏ ${prefix}ʟᴏᴠᴇᴏɴᴇ 
║❏ ${prefix}ꜱᴍᴏᴋᴇ 
║❏ ${prefix}ᴏɴᴇꜱɪʟᴋ 
║❏ ${prefix}ɢʟᴏᴡɪɴɢ 
║❏ ${prefix}ʜᴇᴀʀᴛ 
║❏ ${prefix}ᴡᴏʟғ 
║❏ ${prefix}ꜱɪᴍɪꜱɪᴍɪ
║❏ ${prefix}ꜱʜᴏʀᴛʟɪɴᴋ
║❏ ${prefix}ꜱʜᴏʀᴛʟɪɴᴋ2
║❏ ${prefix}ꜱʜᴏʀᴛʟɪɴᴋ3
║❏ ${prefix}ᴀꜱᴍᴀᴜʟʜᴜꜱɴᴀ
║❏ ${prefix}ᴄᴏᴠɪᴅɪɴᴅᴏ
║❏ ${prefix}ᴄᴏᴠɪᴅɢʟᴏʙᴀʟ
║❏ ${prefix}ɪɴғᴏɢᴇᴍᴘᴀ
║❏ ${prefix}ʀᴀɴᴅᴏᴍᴡᴘ
║❏ ${prefix}ɢᴀʙᴜᴛ
║❏ ${prefix}ϙᴜᴏᴛᴇᴍᴜꜱʟɪᴍ
║❏ ${prefix}ʙᴀᴛᴛʟᴇғɪᴇʟᴅ
║❏ ${prefix}ᴘᴜʙɢʟᴏɢᴏ
║❏ ${prefix}ʙᴜᴛᴛᴇʀғʟʏ
║❏ ${prefix}ᴋᴏᴅᴇᴘᴏꜱ
║❏ ${prefix}ʟᴀᴄᴀᴋɪᴘ
║❏ ${prefix}ᴅᴋᴀꜱɪᴀ
║❏ ${prefix}ᴄᴇᴋʀᴇꜱɪᴊɴᴇ
║❏ ${prefix}ʙʟᴀᴄᴋᴘɪɴᴋ
║❏ ${prefix}ɪɴғᴏғɪʟᴍ
║❏ ${prefix}ɪɴғᴏɪʟᴍ2
║❏ ${prefix}ʟᴋ21
║❏ ${prefix}ᴅᴏᴀʜᴀʀɪᴀɴ
║❏ ${prefix}ɴɪᴀᴛꜱʜᴏʟᴀᴛ
║❏ ${prefix}ʙᴀᴄᴀᴀɴꜱʜᴏʟᴀᴛ
║❏ ${prefix}ᴋɪꜱᴀʜɴᴀʙɪ
║❏ ${prefix}ᴛᴀʜʟɪʟ
║❏ ${prefix}ᴀʏᴀᴛᴋᴜʀꜱɪ
║❏ ${prefix}ʜᴀᴅɪᴛꜱ
║❏ ${prefix}ʟɪᴘᴜᴛᴀɴ6
║❏ ${prefix}ᴄɴɴɴᴇᴡꜱ
║❏ ${prefix}ʀᴇᴘᴜʙʟɪᴋᴀ
║❏ ${prefix}ᴛᴇᴍᴘᴏɴᴇᴡꜱ
║❏ ${prefix}ᴋᴜᴍᴘᴀʀᴀɴɴᴇᴡꜱ
║❏ ${prefix}ʟᴀᴢʏᴍᴇᴅɪᴀ
║❏ ${prefix}ᴍᴀɴɢᴀ
║❏ ${prefix}ᴋᴜꜱᴏɴɪᴍᴇ
║❏ ${prefix}ᴄᴏᴜᴘʟᴇꜱʜɪᴘ
║❏ ${prefix}ᴛᴏᴘᴀɴɪᴍᴇ
║❏ ${prefix}ʏᴜʀɪ
║❏ ${prefix}ᴘᴜꜱꜱʏ
║❏ ${prefix}ɴᴇᴋᴏɴɪᴍᴇ
║❏ ${prefix}ʙᴀᴋᴀ
║❏ ${prefix}ʙʟᴏᴡᴊᴏʙ
║❏ ${prefix}ʟᴇᴡᴅ
║❏ ${prefix}ᴡᴀɪғᴜ
║❏ ${prefix}ᴇʀᴏʏᴜʀɪ
║❏ ${prefix}ʜᴜɢ
║❏ ${prefix}ᴀᴡᴏᴏ
║❏ ${prefix}ʟɪᴄᴋ
║❏ ${prefix}ᴋɪꜱꜱ
║❏ ${prefix}ꜱᴍᴜɢ
║❏ ${prefix}ᴄᴜᴅᴅʟᴇ
║❏ ${prefix}ʙᴜʟʟʏ
║❏ ${prefix}ꜱʜɪɴᴏʙᴜ
║❏ ${prefix}ᴍᴇɢᴜᴍɪɴ
║❏ ${prefix}ʙʟᴜꜱʜ
║❏ ${prefix}ʜɪɢʜғɪᴠᴇ
║❏ ${prefix}ʜᴀɴᴅʜᴏʟᴅ
║❏ ${prefix}ꜱᴍɪʟᴇ
║❏ ${prefix}ɢʟᴏᴍᴘ
║❏ ${prefix}ᴄʀɪɴɢᴇ
║❏ ${prefix}ʜᴇɴᴛᴀɪᴘɪᴄᴛ
╙───々
͏͏͏͏͏͏͏͏͏͏͏͏͏͏╓───「 *_ᴍᴇᴅɪᴀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴛɪᴋᴛᴏᴋꜱᴛᴀʟᴋ
║❏ ${prefix}ᴏᴄʀ
║❏ ${prefix}ɪᴍɢ2ᴜʀʟ
║❏ ${prefix}ᴛᴏᴍᴘ3
║❏ ${prefix}ɪɢꜱᴛᴀʟᴋ
║❏ ${prefix}ɪɴꜱᴛᴀᴠɪᴅ
║❏ ${prefix}ɪɴꜱᴛᴀɪᴍɢ
║❏ ${prefix}ɪɴꜱᴛᴀꜱᴛᴏʀʏ 
║❏ ${prefix}ᴘʟᴀʏᴍᴘ3
║❏ ${prefix}ғʙ 
║❏ ${prefix}ꜱɴᴀᴄᴋ 
║❏ ${prefix}ʏᴛᴍᴘ3
║❏ ${prefix}ʏᴛᴍᴘ4
║❏ ${prefix}ᴊᴏᴏx
║❏ ${prefix}ɪɴғᴏᴀʟᴀᴍᴀᴛ 
║❏ ${prefix}ᴘʟᴀʏꜱᴛᴏʀᴇ
║❏ ${prefix}ꜱᴍᴜʟᴇ
║❏ ${prefix}ꜱꜱᴡᴇʙ
║❏ ${prefix}ᴋᴀʟᴋᴜʟᴀᴛᴏʀ
║❏ ${prefix}ᴜʀʟ2ɪᴍɢ
║❏ ${prefix}ᴛᴏɪᴍɢ
║❏ ${prefix}ᴛɪᴋᴛᴏᴋ
║❏ ${prefix}ғᴏᴛᴏᴛɪᴋᴛᴏᴋ
║❏ ${prefix}ᴋʙʙɪ
║❏ ${prefix}ᴡᴀɪᴛ
║❏ ${prefix}ᴊᴀᴅᴡᴀʟᴛᴠ 
║❏ ${prefix}ᴊᴀᴅᴡᴀʟᴛᴠɴᴏᴡ
║❏ ${prefix}ᴊᴀᴅᴡᴀʟʙᴏʟᴀ
║❏ ${prefix}ʟɪʀɪᴋ 
║❏ ${prefix}ᴄʜᴏʀᴅ 
║❏ ${prefix}ᴡɪᴋɪ 
║❏ ${prefix}ʙʀᴀɪɴʟʏ 
║❏ ${prefix}ʀᴇꜱᴇᴘᴍᴀꜱᴀᴋᴀɴ 
║❏ ${prefix}ʙᴇʀɪᴛᴀʜᴏᴀx
║❏ ${prefix}ᴍᴀᴘ 
║❏ ${prefix}ғɪʟᴍ 
║❏ ${prefix}ᴊᴀʀᴀᴋ
║❏ ${prefix}ᴛʀᴀɴꜱʟᴀᴛᴇ
║❏ ${prefix}sʜᴏᴘᴇᴇ
║❏ ${prefix}ɪɴғᴏɢᴇᴍᴘᴀ
║❏ ${prefix}ɪɴғᴏɴᴏᴍᴏʀ
║❏ ${prefix}ᴀᴘᴋᴘᴜʀᴇ
║❏ ${prefix}ᴍᴏᴅᴅʀᴏɪᴅ
║❏ ${prefix}ʜᴀᴘᴘʏᴍᴏᴅ
║❏ ${prefix}ᴘɪɴᴛᴇʀᴇꜱᴛ
║❏ ${prefix}ɪɴғᴏᴄᴜᴀᴄᴀ 
║❏ ${prefix}ᴊᴀᴍᴅᴜɴɪᴀ 
║❏ ${prefix}ᴛʀᴇɴᴅᴛᴡɪᴛ
║❏ ${prefix}ɢᴏᴏɢʟᴇ
╙───々
╓───「 *_ᴋᴇʀᴀɴɢ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴀᴘᴀᴋᴀʜ
║❏ ${prefix}ᴋᴀᴘᴀɴᴋᴀʜ
║❏ ${prefix}ʙɪꜱᴀᴋᴀʜ
║❏ ${prefix}ʀᴀᴛᴇ
║❏ ${prefix}ᴡᴀᴛᴀᴋ
║❏ ${prefix}ʜᴏʙʙʏ
║❏ ${prefix}ᴛʀᴜᴛʜ
║❏ ${prefix}ᴅᴀʀᴇ
║❏ ${prefix}ғᴀᴋᴛᴀ
╙───々
╓───「 *_ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴛʀɪɢɢᴇʀ
║❏ ${prefix}ᴡᴀsᴛᴇᴅ
║❏ ${prefix}ɢᴀʏ
║❏ ${prefix}ꜱᴛɪᴋᴇʀ
║❏ ${prefix}ɢɪғꜱᴛɪᴋᴇʀ
║❏ ${prefix}ɴᴀɴɢɪꜱ
║❏ ${prefix}ᴘᴇʟᴜᴋ
║❏ ${prefix}ᴄɪᴜᴍ
║❏ ${prefix}ɴɢᴇᴡᴇ
╙───々
╓───「 *_ᴀᴜᴅɪᴏ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɢᴇᴍᴜᴋ
║❏ ${prefix}ᴛᴜᴘᴀɪ
║❏ ${prefix}ʙᴀꜱꜱ
║❏ ${prefix}ꜱʟᴏᴡ
║❏ ${prefix}ғᴀꜱᴛ
║❏ ${prefix}ᴛᴛꜱ
╙───々
╓───「 *_ɪᴍᴀɢᴇ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɢᴛᴀᴠ
║❏ ${prefix}ᴅʀᴀᴡɪɴɢ
║❏ ${prefix}ʀᴀɪɴᴅʀᴏᴘ
║❏ ${prefix}ɴɪɢʜᴛʙᴇᴀᴄʜ
║❏ ${prefix}ꜱᴋᴇᴛᴄʜ
║❏ ${prefix}ᴡᴀɴᴛᴇᴅ
║❏ ${prefix}ʟᴀᴘᴛᴏᴘ
║❏ ${prefix}ʟɪɴᴇᴘʜᴏᴛᴏ
║❏ ${prefix}ᴄʀᴏꜱꜱɢᴜɴ
╙───々
╓───「 *_ᴅᴜɢᴇᴍ ᴍᴇɴᴜ_* 」
║❏ ɪʀɪ
║❏ ᴛᴀᴘɪ
║❏ ʏᴏᴜʀ
║❏ ᴀᴡᴀʏ
║❏ ʙᴏᴍᴀ
║❏ ɴᴜᴍᴀ
║❏ ʀᴜʟᴇs
║❏ ɢᴀʀᴏx
║❏ ᴍᴀɢɪᴄ
║❏ ᴍᴇɴʏᴜᴋᴀɪᴋᴜ
╙───々
╓───「 *_ᴀɴɪᴍᴇ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɴᴇᴋᴏ
║❏ ${prefix}ʟᴏʟɪ
║❏ ${prefix}ᴡɪʙᴜ
║❏ ${prefix}ʜᴜꜱʙᴜ
║❏ ${prefix}ɴᴇᴏɴɪᴍᴇ
║❏ ${prefix}ɴᴀʀᴜᴛᴏ
║❏ ${prefix}ᴍɪɴᴀᴛᴏ
║❏ ${prefix}ʙᴏʀᴜᴛᴏ
║❏ ${prefix}ʜɪɴᴀᴛᴀ
║❏ ${prefix}ꜱᴀᴋᴜʀᴀ
║❏ ${prefix}ꜱᴀꜱᴜᴋᴇ
║❏ ${prefix}ᴛᴏᴜᴋᴀᴄʜᴀɴ
║❏ ${prefix}ʀɪᴢᴇ
║❏ ${prefix}ᴀᴋɪʀᴀ
║❏ ${prefix}ɪᴛᴏʀɪ
║❏ ${prefix}ᴋᴜʀᴜᴍɪ
║❏ ${prefix}ᴍɪᴋᴜ
║❏ ${prefix}ᴀɴɪᴍᴇ
╙───々
╓───「 *_ɢʀᴜᴘ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɢᴀɴᴛᴇɴɢ
║❏ ${prefix}ᴄᴀɴᴛɪᴋ
║❏ ${prefix}ʙᴇʙᴀɴ
║❏ ${prefix}ᴏᴘᴇɴᴛɪᴍᴇ
║❏ ${prefix}ᴄʟᴏꜱᴇᴛɪᴍᴇ
║❏ ${prefix}ᴍᴏᴅᴇᴀɴɪᴍᴇ 
║❏ ${prefix}ᴀɴᴛɪʟɪɴᴋ
║❏ ${prefix}ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
║❏ ${prefix}ʟɪꜱᴛʙᴀᴅᴡᴏʀᴅ
║❏ ${prefix}ᴡᴇʟᴄᴏᴍᴇ
║❏ ${prefix}ɢʀᴜᴘ
║❏ ${prefix}ᴏᴡɴᴇʀɢʀᴜᴘ
║❏ ${prefix}ꜱᴇᴛᴘᴘ
║❏ ${prefix}ɪɴғᴏɢᴄ
║❏ ${prefix}ᴀᴅᴅ
║❏ ${prefix}ᴋɪᴄᴋ 
║❏ ${prefix}ᴋɪᴄᴋᴛɪᴍᴇ 
║❏ ${prefix}ᴘʀᴏᴍᴏᴛᴇ 
║❏ ${prefix}ᴅᴇᴍᴏᴛᴇ
║❏ ${prefix}ꜱᴇᴛɴᴀᴍᴇ
║❏ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
║❏ ${prefix}ɢʀᴜᴘ
║❏ ${prefix}ᴛᴀɢᴍᴇ
║❏ ${prefix}ʜɪᴅᴇᴛᴀɢ
║❏ ${prefix}ᴛᴀɢᴀʟʟ
║❏ ${prefix}ᴍᴇɴᴛɪᴏɴᴀʟʟ
║❏ ${prefix}ᴊᴀᴅɪᴀɴ
║❏ ${prefix}ғɪᴛɴᴀʜ
║❏ ${prefix}ʟɪꜱᴛᴀᴅᴍɪɴ
║❏ ${prefix}ɴꜱғᴡ
║❏ ${prefix}ꜱɪᴍɪʜ
╙───々
╓───「 *_ᴍᴀᴋᴇʀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ϙᴜᴏᴛᴇᴍᴀᴋᴇʀ
║❏ ${prefix}ᴛᴀʜᴛᴀ
║❏ ${prefix}ʙᴜʀɴᴘᴀᴘᴇʀ
║❏ ${prefix}8ʙɪᴛ
║❏ ${prefix}ɢʟᴏᴡɴᴇᴏɴ
║❏ ${prefix}ɢꜱᴜɢɢᴇꜱᴛ
║❏ ${prefix}ᴄᴀɴᴅʟᴇᴍᴜɢ
║❏ ${prefix}ʟᴏᴠᴇᴍꜱꜱ
║❏ ${prefix}ᴍᴜɢғʟᴏᴡᴇʀ
║❏ ${prefix}ɴᴀʀᴜᴛᴏʙᴀɴɴᴇʀ
║❏ ${prefix}ᴘᴀᴘᴇʀɢʟᴀꜱꜱ
║❏ ${prefix}ʀᴏᴍᴀɴᴄᴇ
║❏ ${prefix}ꜱʜᴀᴅᴏᴡ
║❏ ${prefix}ɢʟɪᴛᴄʜ
║❏ ${prefix}ᴄᴏғғᴇ
║❏ ${prefix}ᴄᴀɴᴅʏ
║❏ ${prefix}ʜᴘᴏᴛᴛᴇʀ
║❏ ${prefix}ᴡᴏᴏᴅʙʟᴏᴄᴋ
║❏ ${prefix}ɢᴀʟᴀxᴛᴇxᴛ
║❏ ${prefix}ɢᴀʟᴀxsᴛʏʟᴇ
║❏ ${prefix}ʙᴘɪɴᴋ
║❏ ${prefix}ᴘᴜᴘʏᴄᴜᴛᴇ
║❏ ${prefix}ʜᴏʟᴏɢʀᴀᴍ
║❏ ${prefix}ᴍᴇᴛᴀʟʟᴏɢᴏ
╙───々
╓───「 *_ғᴜɴ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ɴᴜʟɪꜱ
║❏ ${prefix}ɴᴜʟɪꜱ2
║❏ ${prefix}ꜱʟɪᴅᴇ
║❏ ${prefix}ᴀɴᴊɪɴɢ
║❏ ${prefix}ᴋᴜᴄɪɴɢ
║❏ ${prefix}ᴄʏʙᴇʀᴘᴜɴᴋ
║❏ ${prefix}ᴛᴇꜱᴛɪᴍᴇ
║❏ ${prefix}ᴢᴏᴅɪᴀᴋ
║❏ ${prefix}ʜɪʟɪʜ
║❏ ${prefix}ᴄᴇᴄᴀɴ
║❏ ${prefix}ᴄᴏɢᴀɴ
║❏ ${prefix}ϙᴜᴏᴛᴇꜱ
║❏ ${prefix}ᴋᴀᴛᴀʙɪᴊᴀᴋ
║❏ ${prefix}ᴅᴀʀᴋᴊᴏᴋᴇꜱ
║❏ ${prefix}ʙᴜᴄɪɴ
║❏ ${prefix}ᴘᴀɴᴛᴜɴ
║❏ ${prefix}ᴋᴀᴛᴀᴅɪʟᴀɴ
║❏ ${prefix}ᴋᴀᴛᴀᴄɪɴᴛᴀ
║❏ ${prefix}ʀᴀɴᴅᴏᴍᴋᴘᴏᴘ
║❏ ${prefix}ʜᴇᴋᴇʀʙᴜᴄɪɴ
║❏ ${prefix}ᴋᴀᴛᴀɪʟʜᴀᴍ
║❏ ${prefix}ᴘᴀꜱᴀɴɢᴀɴ 
║❏ ${prefix}ɢᴀɴᴛᴇɴɢᴄᴇᴋ 
║❏ ${prefix}ᴄᴀɴᴛɪᴋᴄᴇᴋ 
║❏ ${prefix}ᴀʀᴛɪɴᴀᴍᴀ 
║❏ ${prefix}ᴘᴇʀꜱᴇɴɢᴀʏ 
║❏ ${prefix}ᴘʙᴜᴄɪɴ 
║❏ ${prefix}ʙᴘғᴏɴᴛ 
║❏ ${prefix}ᴛᴇxᴛꜱᴛʏʟᴇ 
║❏ ${prefix}ᴍɪᴍᴘɪ
║❏ ${prefix}ʀᴇᴀᴅᴍᴏʀᴇ
║❏ ${prefix}ᴘᴜɪꜱɪɪᴍɢ
║❏ ${prefix}ᴀꜱᴜᴘᴀɴ
║❏ ${prefix}ᴛᴇʙᴀᴋɢᴀᴍʙᴀʀ
║❏ ${prefix}ᴄᴀᴋʟᴏɴᴛᴏɴɢ
║❏ ${prefix}ғᴀᴍɪʟʏ100
║❏ ${prefix}ᴍᴇᴍᴇɪɴᴅᴏ
╙───々
╓───「 *_ꜱᴀɴɢᴇ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴄᴇʀꜱᴇx
║❏ ${prefix}ʀᴀɴᴅᴏᴍʙᴏᴋᴇᴘ
║❏ ${prefix}ᴘᴏʀɴʜᴜʙ
║❏ ${prefix}xᴠɪᴅᴇᴏꜱ
║❏ ${prefix}ɴꜱғᴡʟᴏʟɪ
║❏ ${prefix}ɴꜱғᴡʙʟᴏᴡᴊᴏʙ
║❏ ${prefix}ɴꜱғᴡɴᴇᴋᴏ
║❏ ${prefix}ɴꜱғᴡᴛʀᴀᴘ
║❏ ${prefix}ʜᴇɴᴛᴀɪ
║❏ ${prefix}ɴᴇᴋᴏᴘᴏɪ
╙───々
╓───「 *_ɪꜱʟᴀᴍ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴊᴀᴅᴡᴀʟꜱʜᴏʟᴀᴛ
║❏ ${prefix}ϙᴜʀᴀɴᴀᴜᴅɪᴏ
║❏ ${prefix}ϙᴜʀᴀɴ
║❏ ${prefix}ϙᴜʀᴀɴʟɪꜱᴛ
║❏ ${prefix}ϙᴜʀᴀɴꜱᴜʀᴀʜ 
╙───々
╓───「 *_ᴏᴛʜᴇʀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ʙᴇᴄʀʏᴘᴛ 
║❏ ${prefix}ᴇɴᴄᴏᴅᴇ64
║❏ ${prefix}ᴅᴇᴄᴏᴅᴇ64
║❏ ${prefix}ᴇɴᴄᴏᴅᴇ32
║❏ ${prefix}ᴅᴇᴄᴏᴅᴇ32
║❏ ${prefix}ᴇɴᴄʙɪɴᴀʀʏ 
║❏ ${prefix}ᴅᴇᴄʙɪɴᴀʀʏ 
║❏ ${prefix}ᴇɴᴄᴏᴄᴛᴀʟ 
║❏ ${prefix}ᴅᴇᴄᴏᴄᴛᴀʟ 
║❏ ${prefix}ʜᴀꜱʜɪᴅᴇɴᴛɪғɪᴇʀ 
║❏ ${prefix}ᴅᴏʀᴋɪɴɢ 
║❏ ${prefix}ᴘᴀꜱᴛᴇʙɪɴ 
║❏ ${prefix}ᴛɪɴʏᴜʀʟ 
║❏ ${prefix}ʙɪᴛʟʏ 
╙───々
╓───「 *_ꜱᴘᴀᴍ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ꜱᴘᴀᴍᴄᴀʟʟ 
║❏ ${prefix}ꜱᴘᴀᴍɢᴍᴀɪʟ 
╙───々
╓───「 *_ᴏᴡɴᴇʀ ᴍᴇɴᴜ_* 」
║❏ ${prefix}ᴀᴅᴅᴘʀᴇᴍ
║❏ ${prefix}ʀᴇᴍᴏᴠᴇᴘʀᴇᴍ
║❏ ${prefix}ᴀᴅᴅʙᴀᴅᴡᴏʀᴅ
║❏ ${prefix}ᴅᴇʟʙᴀᴅᴡᴏʀᴅ
║❏ ${prefix}ᴀᴅᴅʙᴜᴄɪɴ
║❏ ${prefix}ᴀᴅᴅᴀᴜᴅɪᴏ
║❏ ${prefix}ᴀᴅᴅꜱᴛɪᴄᴋᴇʀ
║❏ ${prefix}ꜱᴇᴛᴍᴇᴍʟɪᴍɪᴛ
║❏ ${prefix}ʀᴇꜱᴇᴛʟɪᴍɪᴛ
║❏ ${prefix}ꜱᴇᴛʟɪᴍɪᴛ
║❏ ${prefix}ꜱᴇᴛʀᴇᴘʟʏ
║❏ ${prefix}ꜱᴇᴛᴘʀᴇғɪx
║❏ ${prefix}ꜱᴇᴛɴᴀᴍᴇʙᴏᴛ
║❏ ${prefix}ꜱᴇᴛᴘᴘʙᴏᴛ
║❏ ${prefix}ʙᴄ
║❏ ${prefix}ʙᴄɢᴄ
║❏ ${prefix}ʙᴀɴ
║❏ ${prefix}ᴜɴʙᴀɴ
║❏ ${prefix}ʙʟᴏᴄᴋ
║❏ ${prefix}ᴜɴʙʟᴏᴄᴋ
║❏ ${prefix}ᴄʟᴇᴀʀᴀʟʟ
║❏ ${prefix}ᴅᴇʟᴇᴛᴇ
║❏ ${prefix}ᴄʟᴏɴᴇ
║❏ ${prefix}ʟᴇᴀᴠᴇ
╙───々
╓───「 *_ʙᴏᴛ_* 」
║github.com/todavianoesta.com
╙───々`
brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
denz.sendMessage(from, dmenu, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Sxrgxx🥷🏿", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')}}}})
denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true}) 	    
            break
            case 'help':
brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
denz.sendMessage(from, help(name), text, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "@denssptraa", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
    	    break
            case 'gifstiker':
				case 'stiker':
				case 'sticker':
				case 'gifsticker':
				case 'stickergif':
				case 'stikergif':
				case 'sgif':
				case 'sticker':
				case 's':
                        if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						if (isLimit(sender)) return reply(limitend(pushname2))
						reply(mess.wait)
						const ran= getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "fresco", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						const ran= getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`\`\`\`Falló al convertir ${tipe} a sticker\`\`\``)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "fresco", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg.result, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Falló, se produjo un error, inténtelo de nuevo más tarde')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								buff = fs.readFileSync(ranw)
								denz.sendMessage(from, buff, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "fresco", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})
							})
						})
					} else {
						reply(`Envia una foto con el comando ${prefix}sticker`)
					}
					await limitAdd(sender) 
					break 
					case 'shopee':
                      if (isBanned) return reply(mess.only.benned)
			        if (!isUser) return reply(mess.only.userB)
			    hmml3 = await fetchJson(`https://pencarikode.xyz/api/shopee?search=${body.slice(8)}&apikey=pais`)
                     buffer = await getBuffer(`https://e.top4top.io/p_1886uvsdz0.jpg`)
                     hasilbg3 = `*Nombre* : *_${hmml3.result[0].nama}_*\n*Precio* : *_${hmml3.result[0].harga}_*\n*Vendido* : *_${hmml3.result[0].terjual}_*\n*Lugar* : *_${hmml3.result[0].lokasi}_*\n*Link* : *_${hmml3.result[0].link_produk}_*\n*Descripción* : *_${hmml3.result[0].deskripsi}_**Nombre* : *_${hmml3.result[1].nama}_*\n*Precio* : *_${hmml3.result[1].harga}_*\n*Vendido* : *_${hmml3.result[1].terjual}_*\n*Lugar* : *_${hmml3.result[1].lokasi}_*\n*Link* : *_${hmml3.result[1].link_produk}_*\n*Descripción* : *_${hmml3.result[1].deskripsi}_*`
                    denz.sendMessage(from, buffer, image, {quoted: mek, caption: hasilbg3})
                    await limitAdd(sender)
                    break
                    case 'jadwalbola':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.vhtear.com/jadwalbola&apikey=c1d162b46e634f389efa1ac715f03d03`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result.data) {
					teks += `❏ *Patada inicial* : ${i.kickoff}\n❏ *Competencia* : ${i.pertandingan}\n❏ *Estación de tv* : ${i.stasiuntv}\n\n=================\n\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
// nuevos comandos
case 'igpost': 				
				if (args.length < 1) return reply('Y el link?')
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply('El link no es de instagram')
				ige = body.slice(8)
                                anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/ig?url=${args[0]}&apikey=onlyonedeveloper`, {method: 'get'})
				buffer = await getBuffer(anu.result.url)
                                denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }})
				break
		case 'fakeaddress': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/fakedata?country=en&apikey=onlyonedeveloper`)
				teks = `➸ *Nombre* : ${anu.result.name}\n*➸ Cumpleaños :* ${anu.result.birthday}\n*➸ Dirección :* ${anu.result.address}\n*➸ Ciudad :* ${anu.result.city}\n*➸ Región :* ${anu.result.region}\n*➸ País :* ${anu.result.country}\n*➸ Zip Code :* ${anu.result.zip}\n*➸ Número de celular :* ${anu.result.phone_number}\n*➸ Usuario:* ${anu.result.username}\n*➸ Contraseña :* ${anu.result.password}\n*➸ Correo :* ${anu.result.email}`
				denz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }})
				break
				case 'googlesearch': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(14)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				ll3 = ct.split("|")[2];
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break 
				case 'hbd': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(4)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro10?text=${ct}&theme=birthday&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'shine': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(6)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro10?text=${ct}&theme=shinetext&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'thenight': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(9)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro9?text=${ct}&theme=thenight&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'rainbow': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(8)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro9?text=${ct}&theme=rainbow3d&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'love': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(5)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev4?text=${ct}&theme=lovemessage&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'textonecup': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(11)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textonecup&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'textsky': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(8)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev3?text=${ct}&theme=textsky&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'nature': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(7)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=nature&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'rosegold': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(7)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev2?text=${ct}&theme=rosegold&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'nature3d': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(9)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=nature3d&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'ocean': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(6)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev1?text=${ct}&theme=underwater-ocean&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'woodheart': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(10)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev?text=${ct}&theme=woodheart&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'summertext': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(11)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev?text=${ct}&theme=summertext&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'underglass': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(11)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev5?text=${ct}&theme=underglass&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'cemetery': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(9)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev5?text=${ct}&theme=cemetery&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'royallock': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(10)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/onedev6?text=${ct}&theme=royallock&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'coffecup': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(9)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'coffecup2': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(10)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=coffee-cup2&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'neon': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(5)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/metallic?text=${ct}&theme=neon&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'glow': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(5)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/senja?text=${ct}&theme=glow&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'summer': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(7)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=summer&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'flower': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(6)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/alam?text=${ct}&theme=flower&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'grandient': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(10)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro6?text=${ct}&theme=grandient&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'embroidery': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(11)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro7?text=${ct}&theme=embroidery&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'funnycup': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(9)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro4?text=${ct}&theme=funnycup&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'orchids': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(11)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro5?text=${ct}&theme=orchids-flower&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'smoke2': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(7)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro5?text=${ct}&theme=smoke2&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'loveone': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(8)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=loveone&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'smoke': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(6)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=smoke&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'onesilk': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(8)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro3?text=${ct}&theme=onesilk&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'glowing': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(8)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro1?text=${ct}&theme=glowing&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'heart': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(6)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=heart&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'wolf': 				
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(5)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/pro?text=${ct}&theme=wolf-metal&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
				case 'yuri': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/yuri?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'pussy': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/pussy?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'nekonime': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/nekonime?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'baka': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/baka?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'blowjob': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/blowjob?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'lewd': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/lewd?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
				case 'eroyuri': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/eroyuri?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'hug': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/nsfw/hug?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'hug2': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/hug?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'awoo': // masih ngebug
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/awoo?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'lick': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/lick?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'kiss': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/kiss?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'smug': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/smug?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'cuddle': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/cuddle?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'bully': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/bully?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'shinobu': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/shinobu?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'megumin': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/sfw/megumin?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'blush': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/blush?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'highfive': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/highfive?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'handhold': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/handhold?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'smile': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/smile?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'glomp': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/glomp?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'cringe': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/cringe?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'shortlink':
				 
				denz.updatePresence(from, Presence.composing) 
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/vgd?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nResultado : ${data.result.link}`
				reply(hasil)
				break
		case 'shortlink2':
				 
				denz.updatePresence(from, Presence.composing)
				reply(`[❕] Espera`)
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/isgd?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nResultado : ${data.result.link}`
				reply(hasil)
				break
		case 'shortlink3':
				 
				denz.updatePresence(from, Presence.composing)
				reply(`[❕] Espera`)
				data = await fetchJson(`https://onlydevcity.herokuapp.com/api/short/tiny?url=${args[0]}&apikey=onlyonedeveloper`)
				hasil = `link : ${args[0]}\n\nResultado : ${data.result.link}`
				reply(hasil)
				break
		case 'asmaulhusna': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/asmaulhusna?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Número:* : ${i.index}\n*Latin* : ${i.latin}\n*Arab* : ${i.arabic}\n*Translate Indo* : ${i.translation_id}\n*Translate English* : ${i.translation_en}\n=================\n`
				}
				reply(teks)
				break
		case 'covidindo': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidindo?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result) {
					teks += `*Código:* : ${i.attributes.Kode_Provi}\n*Provinsia* : ${i.attributes.Provinsi}\n*Positivos* : ${i.attributes.Kasus_Posi}\n*Curados* : ${i.attributes.Kasus_Semb}\n*Fallecidos* : ${i.attributes.Kasus_Meni}\n=================\n`
				}
				reply(teks)
				break
		case 'topanime': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/topanime?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Titulo:* : ${i.title}\n*Estudio* : ${i.studio}\n*Rango* : ${i.rank}\n*Top* : ${i.stats.peak}\n*Previamente* : ${i.stats.previously}\n*Tiempo en top* : ${i.stats.weeksOnTop}\n*Estado* : ${i.stats.status}\n*Estadísticas* : ${i.stats.stat}\n=================\n`
				}
				reply(teks)
				break
		case 'coupleship': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/coupleship?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Nombre:* : ${i.names}\n*Anime* : ${i.anime}\n*Rango* : ${i.rank}\n*Top* : ${i.stats.peak}\n*Previamente* : ${i.stats.previously}\n*Tiempo en top* : ${i.stats.weeksOnTop}\n*Status* : ${i.stats.status}\n*Estadísticas* : ${i.stats.stat}\n=================\n`
				}
				reply(teks)
				break
		case 'doaharian': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/doaharian?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Oración:* : ${i.title}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Translation* : ${i.translation}\n=================\n`
				}
				reply(teks)
				break
		case 'niatsholat': // Case By Arga
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Oración : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Traducción* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'bacaansholat': // Case By Arga
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/bacaanshalat?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Leer : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Traducción* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
				case 'kisahnabi': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kisahnabi?nabi=${body.slice(11)}&apikey=onlyonedeveloper`)
				buffer7 = await getBuffer(anu.result.image)
				teks = `*Resultado*\n\n*➸ Nombre del profeta :* ${anu.result.nabi}\n*➸ Nacimiento :* ${anu.result.lahir}\n*➸ Edad :* ${anu.result.umur}\n*➸ Lugar :* ${anu.result.tempat}\n*➸ Historia :* ${anu.result.kisah}`
				denz.sendMessage(from, buffer7, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: teks})
				break
		case 'tahlil': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/tahlil?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result.data) {
				teks += `Titulo : ${i.title}\n*Arab* : ${i.arabic}\n*Traducción* : ${i.translation}\n=================\n`
				}
				reply(teks.trim())
				break
		case 'ayatkursi': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/ayatkursi?apikey=onlyonedeveloper`)
				teks = `➸ *Arab* : ${anu.result.data.arabic}\n*➸ Latin :* ${anu.result.data.latin}\n*➸ Sentido :* ${anu.result.data.translation}\n*➸ Interpretación :* ${anu.result.data.tafsir}`
				denz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'covidglobal': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/covidworld?apikey=onlyonedeveloper`)
				teks = `➸ *Total* : ${anu.result.totalCases}\n*➸ Recuperados :* ${anu.result.recovered}\n*➸ Muertos :* ${anu.result.deaths}\n*➸ Casos recientes :* ${anu.result.activeCases}\n*➸ Casos viejos :* ${anu.result.closedCases}\n*➸ Última actualización :* ${anu.result.lastUpdate}`
				denz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'hadits': 
				if (args.length < 1) return reply(`Escribe el libro, ejemplo zombies|116`)
				ct = body.slice(8)
				ll1 = ct.split("|")[0];
                ll2 = ct.split("|")[1];
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hadits?kitab=${ll1}&nomor=${ll2}&apikey=onlyonedeveloper`)
				teks = `➸ *Nombre* : ${anu.result.data.name}\n*➸ Número :* ${anu.result.data.contents.number}\n*➸ Arab :* ${anu.result.data.contents.arab}\n*➸ Latin :* ${anu.result.data.contents.id}`
				denz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
				case 'github': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/github?user=${body.slice(8)}&apikey=onlyonedeveloper`)
				buffer7 = await getBuffer(anu.result.avatar_url)
				teks = `*Resultado*\n\n*➸ ID :* ${anu.result.id}\n*➸ Node ID :* ${anu.result.node_id}\n*➸ Gravatar ID :* ${anu.result.gravatar_id}\n*➸ Url :* ${anu.result.html_url}\n*➸ Type :* ${anu.result.type}\n*➸ Site Admin :* ${anu.result.site_admin}\n*➸ Nombre :* ${anu.result.name}\n*➸ Company :* ${anu.result.company}\n*➸ Blog :* ${anu.result.blog}\n*➸ Location :* ${anu.result.location}\n*➸ Email :* ${anu.result.email}\n*➸ Bio  :* ${anu.result.bio}\n*➸ Twitter Username :* ${anu.result.twitter_username}\n*➸ Public Repo :* ${anu.result.public_repos}\n*➸ Public Gists :* ${anu.result.public_gists}\n*➸ Followers :* ${anu.result.followers}\n*➸ Following :* ${anu.result.following}\n*➸ Create At :* ${anu.result.created_at}\n*➸ Update At :* ${anu.result.updated_at}`
				denz.sendMessage(from, buffer7, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: teks})
				break
				case 'lacakip': 
				if (args.length < 1) return reply(`Escribe tu ip`)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/iplookup?ip=${body.slice(9)}&apikey=onlyonedeveloper`)
				teks = `➸ *ip* : ${anu.result.ip}\n*➸ País :* ${anu.result.country}\n*➸ Region :* ${anu.result.region}\n*➸ Latitud :* ${anu.result.latitude}\n*➸ Longtitud :* ${anu.result.longtitude}\n*➸ Hora :* ${anu.result.timezone}\n*➸ Org :* ${anu.result.org}\n*➸ As :* ${anu.result.as}\n*➸ Ciudad :* ${anu.result.city}\n*➸ Código de país :* ${anu.result.countryCode}\n*➸ Código postal :* ${anu.result.zip}\n*➸ Link GMaps :* ${anu.result.maps}`
				denz.sendMessage(from, teks, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }})
				break
		case 'dkasia': // Update By RzkyO 7 ItsmeikyXSec404
				if (args.length < 1) return reply(`Escribe el nombre`)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/drakorasia?search=${body.slice(8)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumb)
				hasil = `➸ *Titulo* : ${anu.result.title}\n*➸ Titulo Korea :* ${anu.result.titleKr}\n*➸ Año :* ${anu.result.year}\n*➸ Episodios :* ${anu.result.episode}\n*➸ Genero :* ${anu.result.genre}\n*➸ Durasion :* ${anu.result.duration}\n*➸ Network :* ${anu.result.network}\n*➸ Resumen :* ${anu.result.synopsis}\n*➸ Actor :* ${anu.result.casters}`
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: hasil})
				break
		case 'manga': // Update By RzkyO 7 ItsmeikyXSec404
				if (args.length < 1) return reply(`Escribe el nombre del anime`)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/manga?search=${body.slice(6)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumb)
				hasil = `*Nota:* : ${anu.result.note}\n*Titulo* : ${anu.result.title}\n*Descripción* : ${anu.result.description}\n*Nombre* : ${anu.result.name}\n*Type* : ${anu.result.type}\n*Author* : ${anu.result.author}\n*Genero* : ${anu.result.genre}\n*Clasificación* : ${anu.result.rating}\n*Publicado* : ${anu.result.released}\n*Estado* : ${anu.result.status}`
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: hasil})
				teks = '=================\n'
				for (let i of anu.result.downloads) {
					teks += `*Día* : ${i.date}\n*Download Via* : ${i.title}\n*Link Download* : ${i.link}\n=================\n`
				}
				reply(teks)
				break
		case 'kusonime': 
				if (args.length < 1) return reply(`Escribe el nombre del anime`)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/anime/kusonime?search=${body.slice(9)}&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.thumbs)
				hasil = `*Titulo:* : ${anu.result.title}\n*Titulo Jp* : ${anu.result.title_jp}\n*Genero* : ${anu.result.genre}\n*Temporada* : ${anu.result.season}\n*Producer* : ${anu.result.producer}\n*Type* : ${anu.result.type}\n*Total Episode* : ${anu.result.total_episode}\n*Calificación* : ${anu.result.score}\n*Durasion* : ${anu.result.duration}\n*Publicado el* : ${anu.result.released_on}\n*Descripción* : ${anu.result.description}`
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: hasil})
				break
		case 'cekresijne': 
				if (args.length < 1) return reply(`Escribe la res`)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/searchresi?courier=jne&awb=${body.slice(11)}&apikey=onlyonedeveloper`)
				hasil = `*Código de recibo:* : ${anu.result.data.summary.awb}\n*Mensaje* : ${anu.result.data.summary.courier}\n*Servicio* : ${anu.result.data.summary.service}\n*Status* : ${anu.result.data.summary.status}\n*Fecha* : ${anu.result.data.summary.date}\n*Desc* : ${anu.result.data.summary.desc}\n*Precio* : ${anu.result.data.summary.amount}\n*Peso* : ${anu.result.data.summary.weight}\n*Origen* : ${anu.result.data.detail.origin}\n*Destinatario* : ${anu.result.data.detail.destination}\n*Shipper* : ${anu.result.data.detail.shipper}\n*Recividor* : ${anu.result.data.detail.receiver}`
				denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'ini hasilnya kak'})
				teks = '=================\n'
				for (let i of anu.result.data.history) {
					teks += `*Fecha* : ${i.date}\n*Descripción* : ${i.desc}\n*Localización* : ${i.location}\n=================\n`
				}
				reply(teks)
				break
				case 'randomwp': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/wallpaper?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'ini fotonya kak'})
				break
		case 'blackpink': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomimage/blackpink?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.result)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'ini fotonya kak'})
				break
		case 'hentaipict': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/hentai?apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.result)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'ini fotonya kak'})
				break
				case 'gabut': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/gabut?apikey=onlyonedeveloper`)
				hasil = `➸ *Activity* : ${anu.result.activity}\n*➸ Type :* ${anu.result.type}`
				denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'quotemuslim': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/randomquote/muslim?apikey=onlyonedeveloper`)
				hasil = `*➸ Quote :* ${anu.result.text_id}`
				denz.sendMessage(from, hasil, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
				case 'gombal': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/random/katakatagombal?apikey=onlyonedeveloper`, {method: 'get'})
				reply(anu.result.quote)
				break
				case 'simisimi': 
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/simisimi?text=${body.slice(9)}&apikey=onlyonedeveloper`)
				reply(anu.result.success)
				break
		case 'kodepos': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`Ingresa la ciudad`)
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/kodepos?kota=${body.slice(8)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Provinsia:* : ${i.province}\n*Ciudad* : ${i.city}\n*Subdistrito* : ${i.subdistrict}\n*Ciudad* : ${i.urban}\n*Código postal* : ${i.postalcode}\n=================\n`
				}
				reply(teks)
				break
		case 'liputan6': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/liputan6?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Titulo:* : ${i.title}\n*Link* : ${i.link}\n*Fecha* : ${i.isoDate}\n*Descripción* : ${i.description}\n=================\n`
				}
				reply(teks)
				break
		case 'cnnnews': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/cnnnews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Titulo:* : ${i.title}\n*Link* : ${i.link}\n*Contenido* : ${i.contentSnippet}\n*Fecha* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'republika': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/republika?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creador:* : ${i.creator}\n*Titulo* : ${i.title}\n*Link* : ${i.link}\n*Categoria* : ${i.categories}\n*Descripción* : ${i.description}\n*Fecha* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'temponews': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/temponews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Titulo:* : ${i.title}\n*Link* : ${i.link}\n*Contenido* : ${i.content}\n*Fecha* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'kumparannews': 	
				denz.updatePresence(from, Presence.composing) 
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/kumpurannews?apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.result.data) {
					teks += `*Creador:* : ${i.creator}\n*Titulo* : ${i.title}\n*Link* : ${i.link}\n*Categoria* : ${i.categories}\n*Descripcion* : ${i.description}\n*Fecha* : ${i.isoDate}\n=================\n`
				}
				reply(teks)
				break
		case 'lazymedia': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`Ingresa lo que estas buscando`)
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/news/lazymedia?search=${body.slice(10)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Autor:* : ${i.author}\n*Titulo* : ${i.title}\n*Etiqueta* : ${i.tag}\n*Hora* : ${i.time}\n*Descripcion* : ${i.desc}\n*Key* : ${i.key}\n=================\n`
				}
				reply(teks)
				break
				case 'pubglogo': 
				if (args.length < 1) return reply(`Y el texto?`)
				ct = body.slice(9)
				ll1 = ct.split("/")[0];
                ll2 = ct.split("/")[1];
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=pubg&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
		case 'butterfly': 				
				if (args.length < 1) return reply(`Y el texto?`)	
				ct = body.slice(10)
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textpro/pro11?text=${ct}&theme=butterfly&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
				case 'battlefield': 
				if (args.length < 1) return reply(`Y el texto?`)					
				ct = body.slice(12)
				ll1 = ct.split("/")[0];
				ll2 = ct.split("/")[1];
				reply(`[❕] Espera`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=onlyonedeveloper`)
				buffer = await getBuffer(anu.result.url)
				denz.sendMessage(from, buffer, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('dnsnew.jpg')} } }, caption: 'Sxrgxx🥷🏿'})
				break
				case 'infofilm': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`Ingresa lo que vas a buscar`)
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/infofilm?q=${body.slice(10)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Titulo* : ${i.title}\n*Calificación* : ${i.rating}\n*Episodios* : ${i.episode}\n*Movie ID* : ${i.movieId}\n*Vistas* : ${i.detail.views}\n*Duracion* : ${i.detail.duration}\n*Liberación* : ${i.detail.release}\n*Descripcion* : ${i.detail.description}\n=================\n`
				}
				reply(teks)
				break
		case 'infofilm2': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`Ingresa lo que vas a buscar`)
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/country/infofilm?search=${body.slice(11)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Titulo* : ${i.title}\n*Calificación* : ${i.rating}\n*Calidad* : ${i.quality}\n*Movie ID* : ${i.movieId}\n*Trailer* : ${i.detail.trailer}\n*Views* : ${i.detail.views}\n*Genero* : ${i.detail.genre}\n*Director* : ${i.detail.director}\n*Actor* : ${i.detail.actors}\n*País* : ${i.detail.country}\n*Duracion* : ${i.detail.duration}\n*Liberación* : ${i.detail.release}\n*Descripcion* : ${i.detail.description}\n=================\n`
				}
				reply(teks)
				break
		case 'lk21': 	
				denz.updatePresence(from, Presence.composing) 
				if (args.length < 1) return reply(`Ingresa lo que vas a buscar`)
				reply(`[❕] Espera`)
				asu = await fetchJson(`https://onlydevcity.herokuapp.com/api/lk21?query=${body.slice(5)}&apikey=onlyonedeveloper`)
				teks = '=================\n'
				for (let i of asu.hasil.result) {
					teks += `*Titulo* : ${i.title}\n*Genero* : ${i.genre}\n*Calificacion* : ${i.rating}\n*Duracion* : ${i.duration}\n*Calidad* : ${i.quality}\n*Trailer* : ${i.trailer}\n*Tiempo* : ${i.watch}\n=================\n`
				}
				reply(teks)
				break
// last
                    case 'randomquran':
                case 'quranaudio':
				if (isBanned) return reply(mess.only.benned)   
				 if (!isUser) return reply(mess.only.userB)
				anu = await fetchJson(`https://api.zeks.xyz/api/randomquran`, {method: 'get'})
					faktaaa = `*Nombre* : *${anu.result.nama}*\n*Sentido* : *${anu.result.arti}*\n*Número* : *${anu.result.nomor}*\n*Tipe* : *${anu.result.type}*\n*Párrafo* : *${anu.result.ayat}*\n*Contenido* : *${anu.result.keterangan}*`
					quu = await getBuffer(anu.result.audio)
					denz.sendMessage(from, faktaaa, text, {quoted: mek})
					denz.sendMessage(from, quu, audio, {mimetype: 'audio/mp4', filename: `${anu.result.nama}.mp3`, quoted: mek})
					await limitAdd(sender) 
					break
					case 'toimg':
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isQuotedSticker) return reply('Responde a un sticker')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' No se pudo convertir a imagen, recuerda que no debe ser un sticker con movimiento')
						buffer = fs.readFileSync(ran)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sxrgxx🥷🏿'})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return denz.sendMessage(from, `Uso de la función anti-eliminación:\n\n*${prefix}antidelete [aktif/mati]* (Para grupos)\n*${prefix}antidelete [aktif/mati]* (para todos los contactos)\n*${prefix}antidelete banct 57123xxxxxxx* (baneados)`, MessageType.text)
				if (argz[1] == 'akti') {
					if (isGroup) {
						if (isRevoke) return denz.sendMessage(from, `Ya estaba habilitado en grupos`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						denz.sendMessage(from, `*Habilitado con exito*`, MessageType.text)
					} else if (!isGroup) {
						denz.sendMessage(from, `Ejemplo de uso *${prefix}antidelete akti*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return denz.sendMessage(from, `Se ha activado`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						denz.sendMessage(from, `Habilitado con exito`, MessageType.text)
					} else if (isGroup) {
						denz.sendMessage(from, `Ejemplo de uso *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return denz.sendMessage(from, `Este contacto ya estaba baneado`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return denz.sendMessage(from, `Ingresa el número correctamente 571234xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./lib/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					denz.sendMessage(from, `Contacto ${argz[2]} se ha añadido a la lista de ban de forma permanente.`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./lib/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						denz.sendMessage(from, `*¡Desactivar el grupo anti-eliminación con éxito!*`, MessageType.text)
					} else if (!isGroup) {
						denz.sendMessage(from, `Ejemplo de uso *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./lib/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						denz.sendMessage(from, `¡Antidelete está desactivado en todos los contactos!`, MessageType.text)
					} else if (isGroup) {
						denz.sendMessage(from, `Ejemplo de uso *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
				case 'apkpure':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://api.zeks.xyz/api/apkpure?q=${body.slice(9)}&apikey=apivinz`, {method: 'get'})
				teks = '=================\n'
				for (let i of data.result) {
					teks += `*Nombre del APK* : ${i.title}\n*Link* : ${i.url}\n*Calificación* : ${i.rating}\n=================\n`
					}
				reply(teks.trim())
				await limitAdd(sender)
				break
            case 'zodiak':
if (args.length < 1) return reply('Ingresa el nombre del zodiaco')
denz.updatePresence(from, Presence.composing)
if (!isUser) return reply(mess.only.userB)
teks = body.slice(8)
try {
data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${VthearApi}`)
hasil = `Zodiak : *${data.result.zodiak}*\nEl pronóstico de hoy : *${data.result.ramalan}*\n${data.result.inspirasi}`
reply(hasil)
await limitAdd(sender)
} catch {
  reply(mess.wait)
}
break
case 'cyberpunk':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
   denz.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","fotografi cyberpunk","tokyo cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
  case 'katadilan': 	
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					anu = await fetchJson(`https://api.shizukaa.xyz/api/bacotandilan?apikey=itsmeiky633`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
					case 'wasted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
denz.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Pon el comando con una foto')
}
break

case 'drawing':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehqe = await getBuffer(`https://videfikri.com/api/textmaker/pencildrawing/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehqe, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break

case 'gay':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
denz.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Pon el comando con una foto')
}
break

case 'nightbeach':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehpe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehpe, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break

case 'laptop':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, dhehe, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break

case 'linephoto':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehet, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break

case 'raindrop':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehre, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break

case 'sketch':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hehae, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break

case 'crossgun':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  haehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, haehe, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break


case 'wanted':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hsehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 denz.sendMessage(from, hsehe, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break

case 'gtav':
if (!isUser) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await denz.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hedhe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 denz.sendMessage(from, hedhe, image, {quoted:mek})
} else {
  reply('Pon el comando con una foto')
}
break
case 'cecan':
if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  tels = body.slice(5)
  denz.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"modelos",
"mujeres",
"cute girl",
"sexi",
"cewe jepang cantik",
"cecan indo"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek, caption: `Pon el comando con una foto`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
  case 'cogan':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  denz.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cowok keren","hombres","cogan","cogan jawa"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  denz.sendMessage(from, pok, image, {
quoted: mek, caption: `Guau guapo, soy guapa`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
			case 'jadian':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break	
					case 'cantik':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const mes = groupMembers
					const msk = groupMembers
					const siaps = mes[Math.floor(Math.random() * mes.length)]
					const sips = pushname2[Math.floor(Math.random() * msk.length)]
					teks = `*Lo más hermoso aquí es :* @${siaps.jid.split('@')[0]}`
					membr.push(siaps.jid)
					mentions(teks, membr, true)
					break
					case 'slow':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('No se pudo convertir')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('No se pudo comvertir')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
              case 'tupai':
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('No se pudo convertir')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'fast':
                  if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
				encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				media = await denz.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.mp3')
				exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
				fs.unlinkSync(media)
				if (err) return reply('No se pudo convertir')
				uhh = fs.readFileSync(ran)
				denz.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
				fs.unlinkSync(ran)
				})
				break
					case 'ganteng':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const nus = groupMembers
					const msl = groupMembers
					const siapss = nus[Math.floor(Math.random() * nus.length)]
					const sipss = pushname2[Math.floor(Math.random() * msl.length)]
					teks = `*El más guapo aquí está :* @${siapss.jid.split('@')[0]}`
					membr.push(siapss.jid)
					mentions(teks, membr, true)
					break
					case 'beban':
					limitAdd(sender) 
				    isLimit(sender)
					if (isBanned) return reply(mess.only.benned)   
					if (!isUser) return reply(mess.only.userB)
					membr = []
					const nge = groupMembers
					const tod = groupMembers
					const beb = nge[Math.floor(Math.random() * nge.length)]
					const an = pushname2[Math.floor(Math.random() * tod.length)]
					teks = `*El mayor gasto aquí es :* @${beb.jid.split('@')[0]}`
					membr.push(beb.jid)
					mentions(teks, membr, true)
					break
				case 'brainly':
					if (!isUser) return reply(mess.only.userB)
									
					if (isBanned) return reply(mess.only.benned)
					if (isLimit(sender)) return reply(limitend(pushname2))
                    brien = body.slice(9)
					brainly(`${brien}`).then(res => {
					teks = '───────────────────────\n'
					for (let Y of res.data) {
						teks += `\n*「 _ʙʀᴀɪɴʟʏ_ 」*\n\n*➸ Pregunta*\n ${Y.pertanyaan}\n\n*➸ Respuesta*\n ${Y.jawaban[0].text}\n────────────────────\n`
					}
					denz.sendMessage(from, teks, text, {quoted: mek, detectLinks: false})
                        console.log(res)
                    })
                await limitAdd(sender)
				break 
				case 'daftar':
					denz.updatePresence(from, Presence.composing)
					if (isUser) return reply('*Ya estas registrado*')
					if (isBanned) return reply(mess.only.benned)
					user.push(sender)
					fs.writeFileSync('./database/json/user.json', JSON.stringify(user))
					try {
					ppimg = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `╭─「 *_Registro_* 」\`\`\`\n│ Registro exitoso: \n│TM08GK8PPHBSJDH10J\`\`\`\n│\n│\`\`\`Fecha ${date} ${time}\`\`\`\n│\`\`\`「 Nombre 」: ${pushname2}\`\`\`\n│\`\`\`「 Número 」: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`Recuerda suscribirte\`\`\`\n│\`\`\`Sergioo a en youtube\`\`\`\n│\`\`\`Usa ${prefix}menu\`\`\`\n│\`\`\`\n│Usuarios totales: ${user.length} ᴏʀᴀɴɢ\`\`\`\n╰────────────────`
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    daftarimg = await getBuffer(ppimg)
					denz.sendMessage(from, daftarimg, image, {quoted: mek, caption: captionnya})
					denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break 
                    case 'profile':
    				denz.updatePresence(from, Presence.composing)
					if (!isUser) return reply(mess.only.userB)
					if (isBanned) return reply(mess.only.benned)
    				try {
					profil = await denz.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					 profile = `╭─「 *_Perfil_* 」\n│• *Nombre:* ${pushname2}\n│• *Registro:* √\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰────────────────`
					buff = await getBuffer(profil)
					denz.sendMessage(from, buff, image, {quoted: mek, caption: profile})
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
				case 'bahasa':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				denz.sendMessage(from, bahasa(prefix), text, {quoted: mek})
				brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
				break 
				case 'donasi':
				case 'donate':
					denz.sendMessage(from, donasi(name), text, {quoted: mek})
					brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break
				case 'info':
					me = denz.user
					user.push(sender)
					uptime = process.uptime()
					teks = `➽ *Nombre* : ${me.name}\n➽ *Dueño* : Sxrgxx🥷🏿\n➽ *Prefijo* : | ${prefix} |\n➽ *Bloqueados* : ${blocked.length}\n➽ *Tiempo activo* : ${kyun(uptime)}\n➽ *Usuarios totales* : ${user.length} ᴜꜱᴇʀ\n➽ *Grupo Fachero* : https://chat.whatsapp.com/E8aXqWgIykkJzMZ6UqNDgd `
					const daca = fs.readFileSync('dnsnew.jpg');
				    denz.sendMessage(from, daca, image, {quoted: mek, caption: teks})
				    brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})                
                    denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
					break 
				case 'totaluser':
					denz.updatePresence(from, Presence.composing) 
									
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `╭────「 *Usuarios ${name}* 」\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `│+ Total Pengguna : ${user.length}\n╰──────⎿ *${name}* ⏋────`
					denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
				case 'blocklist':
					teks = 'List Block :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					denz.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break 
				case 'banlist':
				ben = '```List Banned``` :\n'
					for (let banned of ban) {
						ben += `~> @${banned.split('@')[0]}\n`
					}
					ben += `Total : ${ban.length}`
					denz.sendMessage(from, ben.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
				case 'ban':
					denz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
			        ban = mentioned
					reply(`berhasil banned : ${ban}`)
					break
					case 'tahta':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}tahta Sergio`)
tekts = body.slice(7)
reply(mess.wait)
tthha = await getBuffer(`https://api.vhtear.com/hartatahta?text=${tekts}&apikey=${VthearApi}`)
denz.sendMessage(from, tthha, image, {quoted: mek})
await limitAdd(sender)
break
case 'burnpaper':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}burnpaper sergio`)
todi = body.slice(11)
reply(mess.wait)
pper = await getBuffer(`https://videfikri.com/api/textmaker/burnpaper/?text=${todi}`)
denz.sendMessage(from, pper, image, {quoted: mek})
await limitAdd(sender)
break
case '8bit':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}8bit sergio/bot`)
ds = `${body.slice(6)}`
tex1 = ds.split("/")[0];
tex2 = ds.split("/")[1];
reply(mess.wait)
brikff = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tex1}&text2=${tex2}`, {method: 'get'})
denz.sendMessage(from, brikff, image, {quoted: mek})
await limitAdd(sender)
break
case 'glowneon':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}glowneon sergio`)
tekas = body.slice(10)
reply(mess.wait)
glown = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${tekas}`)
denz.sendMessage(from, glown, image, {quoted: mek})
await limitAdd(sender)
break
case 'gsuggest':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}gsuggest sergio/bot/mejor`)
du = `${body.slice(10)}`
ted1 = du.split("/")[0];
ted2 = du.split("/")[1];
ted3 = du.split("/")[2];
reply(mess.wait)
sugetg = await getBuffer(`https://videfikri.com/api/textmaker/gsuggest/?text1=${ted1}&text2=${ted2}&text3=${ted3}`, {method: 'get'})
denz.sendMessage(from, sugetg, image, {quoted: mek})
await limitAdd(sender)
break
case 'candlemug':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}candlemug sergio`)
ddu = body.slice(11)
reply(mess.wait)
clmug = await getBuffer(`https://videfikri.com/api/textmaker/candlemug/?text=${ddu}`)
denz.sendMessage(from, clmug, image, {quoted: mek})
await limitAdd(sender)
break
case 'lovemss':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}lovemss sergio`)
lop = body.slice(9)
reply(mess.wait)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
denz.sendMessage(from, lepms, image, {quoted: mek})
await limitAdd(sender)
break
case 'mugflower':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}mugflower sergio`)
mug = body.slice(11)
reply(mess.wait)
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
denz.sendMessage(from, mflowg, image, {quoted: mek})
await limitAdd(sender)
break
case 'narutobanner':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}narutobanner sergio`)
nar = body.slice(14)
reply(mess.wait)
narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
denz.sendMessage(from, narba, image, {quoted: mek})
await limitAdd(sender)
break
case 'paperglass':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}paperglass sergio`)
papg = body.slice(12)
reply(mess.wait)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
denz.sendMessage(from, gelas, image, {quoted: mek})
await limitAdd(sender)
break
case 'romance':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}romance sergio`)
roce = body.slice(9)
reply(mess.wait)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
denz.sendMessage(from, roma, image, {quoted: mek})
await limitAdd(sender)
break
case 'shadow':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}shadow sergio`)
sdow = body.slice(8)
reply(mess.wait)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
denz.sendMessage(from, shan, image, {quoted: mek})
await limitAdd(sender)
break
case 'glitch':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}glitch sergio/bot`)
gl = `${body.slice(8)}`
gel1 = gl.split("/")[0];
gel2 = gl.split("/")[1];
reply(mess.wait)
litsh = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, {method: 'get'})
denz.sendMessage(from, litsh, image, {quoted: mek})
await limitAdd(sender)
break
case 'coffe':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}coffe sergio`)
kop = body.slice(7)
reply(mess.wait)
ppi = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)
denz.sendMessage(from, ppi, image, {quoted: mek})
await limitAdd(sender)
break
case 'candy':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}candy sergio`)
cndy = body.slice(7)
reply(mess.wait)
prmen = await getBuffer(`https://videfikri.com/api/textmaker/sweetcandy/?text=${cndy}`)
denz.sendMessage(from, prmen, image, {quoted: mek})
await limitAdd(sender)
break
case 'hpotter':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}hpotter dns`)
hpter = body.slice(9)
reply(mess.wait)
helpter = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${hpter}`)
denz.sendMessage(from, helpter, image, {quoted: mek})
await limitAdd(sender)
break
case 'woodblock':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}woodblock sergio`)
woblk = body.slice(11)
reply(mess.wait)
gblok = await getBuffer(`https://videfikri.com/api/textmaker/woodblock/?text=${woblk}`)
denz.sendMessage(from, gblok, image, {quoted: mek})
await limitAdd(sender)
break
case 'galaxtext':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}galaxtext sergio`)
glaktx = body.slice(11)
reply(mess.wait)
galax = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxywallpaper?apikey=WEMPYGANSS&text=${glaktx}`)
denz.sendMessage(from, galax, image, {quoted: mek})
await limitAdd(sender)
break
case 'pupycute':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}pupycute sergio`)
puki = body.slice(10)
reply(mess.wait)
cute = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/puppycute?apikey=WEMPYGANSS&text=${puki}`)
denz.sendMessage(from, cute, image, {quoted: mek})
await limitAdd(sender)
break
case 'galaxstyle':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}galaxstyle sergio`)
gelay = body.slice(12)
reply(mess.wait)
style = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/galaxystyle?apikey=WEMPYGANSS&text=${gelay}`)
denz.sendMessage(from, style, image, {quoted: mek})
await limitAdd(sender)
break
case 'hologram':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}hologram sergio`)
gram = body.slice(10)
reply(mess.wait)
holo = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/hologram3d?apikey=WEMPYGANSS&text=${gram}`)
denz.sendMessage(from, holo, image, {quoted: mek})
await limitAdd(sender)
break
case 'metallogo':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}metallogo sergio`)
metal = body.slice(11)
reply(mess.wait)
metlog = await getBuffer(`http://lolhuman.herokuapp.com/api/ephoto1/metallogo?apikey=WEMPYGANSS&text=${metal}`)
denz.sendMessage(from, metlog, image, {quoted: mek})
await limitAdd(sender)
break
case 'bpink':
if (isBanned) return reply(mess.only.benned)    
if (!isUser) return reply(mess.only.userB)
if (args.length < 1) return reply(`Ejemplo: ${prefix}bpink sergio`)
black = body.slice(7)
reply(mess.wait)
pink = await getBuffer(`http://lolhuman.herokuapp.com/api/textprome/blackpink?apikey=WEMPYGANSS&text=${black}`)
denz.sendMessage(from, pink, image, {quoted: mek})
await limitAdd(sender)
break
				case 'addprem':
					denz.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Se agrego con exito ${premium} a la base de datos de premium*`)
					break
				case 'removeprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Se elmino con exito wa.me/${rprem} de usuario premium`)
					break
					case 'unban':
					if (!isOwner)return reply(mess.only.ownerB)
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					reply(`Número wa.me/${bnnd} ha sido baneado`)
					break
				case 'block':
				 denz.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					denz.blockUser (`${body.slice(7)}@c.us`, "add")
					denz.sendMessage(from, `Se bloqueo a  ${body.slice(7)}@c.us`, text)
					break
				case 'unblock':
                    if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    denz.blockUser (`${body.slice(9)}@c.us`, "remove")
					denz.sendMessage(from, `Se desbloqueo a  ${body.slice(9)}@c.us`, text)
				    break 
				case 'readmore':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Y el texto?')
					var kls = body.slice(9)
					var has = kls.split("/")[0];
					var kas = kls.split("/")[1];
					if (args.length < 1) return reply(mess.blank)
					denz.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
					break
				case 'resetlimit':
				if (!isOwner) return reply(mess.only.ownerB)
				  var obj = []
				   fs.writeFileSync('./database/json/limit.json', JSON.stringify(obj))
				  await reply(`Limit reiniciado`)
				break
					case 'limit':
				var found = false
                    const limidat = JSON.parse(fs.readFileSync('./database/json/limit.json'))
                    for (let lmt of limidat) {
                        if (lmt.id === sender) {
                            let limitCounts = limitt - lmt.limit
                            if (limitCounts <= 0) return reply(from,`Tu limite se acabo`, id)
                            await reply(`*Limite restante: ${limitCounts}*`)
                            found = true
                        }
                    }
                    if (found === false) {
                        let obj = { id : sender, limit : 1 }
                        limit.push(obj);
                        fs.writeFileSync('./database/json/limit.json', JSON.stringify(limit, 1));
                        await reply(`Tu limite ${limitCounts}`)
                    }
					break
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await denz.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Solo fotos, no videos')
					}
					await limitAdd(sender) 
					break 
					 case 'trigger':
					if (!isUser) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await denz.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                denz.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Manda una foto o responde a una foto')
                                          }
                                             break

				case 'img2url':
			if (!isUser) return reply(mess.only.userB)
							
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
					reply(mess.wait)
            var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            var media = await  denz.downloadAndSaveMediaMessage(encmedia)
            var imgbb = require('imgbb-uploader')
            imgbb('727e7e43f6cda1dfb85d888522fd4ce1', media)
                .then(data => {
                    var caps = `「 *Foto a url* 」\n\n*╠➥  ID :* ${data.id}\n*╠➥  Tipo :* ${data.image.mime}\n*╠➥  Extension :* ${data.image.extension}\n\n*╠➥  URL :* ${data.display_url}`
                    ibb = fs.readFileSync(media)
                     denz.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
                })
                .catch(err => {
                    throw err
                })
            await limitAdd(sender) 	
            break  

                 case 'kalkulator':
					if (isBanned) return reply(mess.only.benned)    
				   if (!isUser) return reply(mess.only.userB)
				   				
				   if (isLimit(sender)) return reply(limitend(pushname2))
				     if (args.length < 1) return reply(`[❗] Envia bien el comando *${prefix}kalkulator [ Números ]*\nEjemplo : ${prefix}kalkulator 12*12\n*NOTA* :\n- Para multiplicar usa *\n- Para suma usa +\n- Para resta usa -\n- Para división usa /`)
				    mtk = `${body.slice(12)}`
				    anu = await fetchJson(`https://api.vhtear.com/calculator?value=${mtk}&apikey=${VthearApi}`, {method: 'get'})
				    denz.sendMessage(from, `*${anu.result.data}*`, text, {quoted: mek})
				    await limitAdd(sender) 	
				    break 
				case 'owner':
                 denz.sendMessage(from, {displayname: "Mr.sergio", vcard: vcard}, MessageType.contact, { quoted: mek})
                 denz.sendMessage(from, '*_No molestar_*',text, { quoted: mek} )
                 break
                 case 'coowner':
                 denz.sendMessage(from, {displayname: "Satan", vcard: vcard1}, MessageType.contact, { quoted: mek})
                 denz.sendMessage(from, '*_No molestar_*',text, { quoted: mek} )
                 break
                case 'fitnah':
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
           				
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					var replace = gh.split("/")[0];
					var target = gh.split("/")[1];
					var bot = gh.split("/")[2];
					denz.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
					break

				case 'infogc':
				case 'groupinfo':
				case 'infogrup':
				case 'grupinfo':
				if (isBanned) return reply(mess.only.benned)  
				 				
				if (!isUser) return reply(mess.only.userB)
                denz.updatePresence(from, Presence.composing)
                if (!isGroup) return reply(mess.only.group)
                try {
					ppUrl = await denz.getProfilePicture(from)
					} catch {
					ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
                reply(mess.wait) // déjalo vacío para conseguir el tuyo
			    buffer = await getBuffer(ppUrl)
		        denz.sendMessage(from, buffer, image, {quoted: mek, caption: `*Nombre* : ${groupName}\n*Miembros* : ${groupMembers.length}\n*Admins* : ${groupAdmins.length}\n*Descripción/reglas* : ${groupDesc}`})
                break
				case 'trendtwit':
					denz.updatePresence(from, Presence.composing) 
                     if (!isUser) return reply(mess.only.userB)
               				
                     if (isLimit(sender)) return reply(limitend(pushname2))
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/trendingtwitter`, {method: 'get'})
					reply(mess.wait)
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Hastag* : ${i.hastag}\n*Link* : ${i.link}\n*Rango* : ${i.rank}\n*Tweet* : ${i.tweet}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break 
				case 'testime':
					setTimeout( () => {
					denz.sendMessage(from, 'Tiempo muerto', text, {quoted: mek}) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '5 Otro segundo', text, {quoted: mek}) // ur cods
					}, 5000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '10 Otro segundo', text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					break 
					case 'neonime':
					denz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://api.vhtear.com/neonime_search?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
                    if (!isUser) return reply(mess.only.userB)
              				
                    if (isLimit(sender)) return reply(limitend(pushname2))
                    if (isBanned) return reply(mess.only.benned)
                    if (!isGroup) return reply(mess.only.group)
                    reply(mess.wait)
					teks = '#############################\n'
					for (let i of data.result) {
						teks += `*Titulo* : ${i.title}\n*Link* : ${i.link}\n\n : ${i.desk}\n###########################\n`
					}
					reply(teks.trim())
					await limitAdd(sender) 
					break   
				case 'animehug':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=${TobzApi}`, {method: 'get'})
                   if (!isUser) return reply(mess.only.userB)
             				
                   if (isLimit(sender)) return reply(limitend(pushname2))
                   if (isBanned) return reply(mess.only.benned)
                   if (!isGroup) return reply(mess.only.group)
					reply(mess.wait)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender) 
					break 
				case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				case 'gruplink':
				case 'grouplink':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await denz.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    denz.sendMessage(from, yeh, text, {quoted: mek})
			        break
				case 'hidetag':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var value = body.slice(9)
					var group = await denz.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					denz.sendMessage(from, options, text)
					break
					case 'gantengcek':
				case 'cekganteng':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					ganteng = body.slice(12)
					const gan =['10%','30%','20%','40%','50%','60%','70%','62%','74%','83%','97%','100%','29%','94%','75%','82%','41%','39%']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					denz.sendMessage(from, 'Pregunta : Hermosura*'+ganteng+'*\n\nRespuesta : '+ teng +'', text, { quoted: mek })
					break
				case 'cantikcek':
				case 'cekcantik':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					cantik = body.slice(11)
					if (args.length < 1) return reply('Ingresa el nombre')
					const can =['10%, y es joto\nY le gusta la hermana del admin','30%, Sabias que te espian?','20%, Se hace 7 pajas diarias','40%, Es otaku','50%, Que guapo','60% Hola BeautyðŸ Š','70% Hola joto','62%, Le gustas al admin','74%, Tu hermana es guapa','83% Love You','97% Hola guapo','100% hola bb, send nudes','29%, Sigue así','94% 20 cm','75% 3cm']
					const tik = can[Math.floor(Math.random() * can.length)]
					denz.sendMessage(from, 'Pregunta : Checa*'+cantik+'*\n\nRespuesta : '+ tik +'', text, { quoted: mek })
					break
				  case 'ownergrup':
				  case 'ownergroup':
               denz.updatePresence(from, Presence.composing) 
              options = {
          text: `Dueño del grupo : wa.me/${from.split("-")[0]}`,
          contextInfo: { mentionedJid: [from] }
           }
           denz.sendMessage(from, options, text, { quoted: mek } )
				break
				case 'leave': 
				    if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
			    	anu = await denz.groupLeave(from, `Adiós jotos *${groupMetadata.subject}*`, groupId)
	                break
				case 'setname':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                denz.groupUpdateSubject(from, `${body.slice(9)}`)
                denz.sendMessage(from, `\`\`\`Se cambio exitosamente el nombre del grupo\`\`\` *${body.slice(9)}*`, text, {quoted: mek})
                break
                case 'setdesc':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (!isGroup) return reply(mess.only.group)
			    if (!isGroupAdmins) return reply(mess.only.admin)
				if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                denz.groupUpdateDescription(from, `${body.slice(9)}`)
                denz.sendMessage(from, `\`\`\`Se cambio exitosamente la descripción del grupo\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, {quoted: mek})
                break
				case 'tts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return denz.sendMessage(from, `Escribe el código de idioma si no los conoces usa *${prefix}bahasa*`, text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return denz.sendMessage(from, 'Y el texto', text, {quoted: mek})
					dtt = body.slice(5)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 600
					? reply('Y el texto?')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Texto demasiado largo, no soy lectora')
							reply(mess.wait)
							denz.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					await limitAdd(sender) 
					break  
				case 'translate':
				case 'translete':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return denz.sendMessage(from, 'Y el código?', text, {quoted: mek})
				    if (args.length < 2) return denz.sendMessage(from, 'Y el texto?', text, {quoted: mek})
				    ts = body.slice(11)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(mess.wait)
				    translate = `Texto Original: *${body.slice(11)}*\n\nTraducción: *${anu.text}*`
				    denz.sendMessage(from, translate, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'ts':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				    if (args.length < 1) return denz.sendMessage(from, 'Y el código de idioma', text, {quoted: mek})
				    if (args.length < 2) return denz.sendMessage(from, 'Y el texto?', text, {quoted: mek})
				    ts = body.slice(4)
				    kode = ts.split("/")[0]
				    teks = ts.split("/")[1]
				    anu = await fetchJson(`https://api.arugaz.my.id/api/edu/translate?lang=${kode}&text=${teks}`)
				    reply(mess.wait)
				    ts = `Texto original: *${body.slice(7)}*\n\nResultado: *${anu.text}*`
				    denz.sendMessage(from, ts, text, {quoted: mek})
				   await limitAdd(sender)
				   break 
				case 'setpp':
	            if (isBanned) return reply(mess.only.benned)    
	            if (!isUser) return reply(mess.only.userB)
	      				
                    if (!isGroup) return reply(mess.only.group)
                    if (!isGroupAdmins) return reply(mess.only.admin)
                    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                    media = await denz.downloadAndSaveMediaMessage(mek)
                    await denz.updateProfilePicture (from, media)
                    reply(mess.wait)
                    reply(`\`\`\`Se modifico correctamente la foto del grupo\`\`\` *${groupMetadata.subject}*`)
                    break
                case 'apakah':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
					apakah = body.slice(1)
					const apakahh = ["Si","Nel","Puede ser"]
					const kah = apakahh[Math.floor(Math.random() * apakahh.length)]
					denz.sendMessage(from, 'Pregunta : *'+apakah+'*\n\nRespuesta : '+ kah, text, { quoted: mek })
					break 
				case 'rate':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					rate = body.slice(1)
					ratee = ["100%","95%","90%","85%","80%","75%","70%","65%","60%","55%","50%","45%","40%","35%","30%","25%","20%","15%","10%","5%"]
					const te = ratee[Math.floor(Math.random() * ratee.length)]
					denz.sendMessage(from, 'Pregunta : *'+rate+'*\n\nProbabilidad : '+ te+'', text, { quoted: mek })
					break 
				case 'watak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					watak = body.slice(1)
					wa =["compasivo","generoso","Gruñón","Indulgente","Obediente","Bien","Joto","De buen corazón","paciente","Uwu","arriba, de todos modos","Servicial"]
					const tak = wa[Math.floor(Math.random() * wa.length)]
					denz.sendMessage(from, 'Pregunta : *'+watak+'*\n\nRespuesta: '+ tak, text, { quoted: mek })
					break 
				case 'hobby':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					hobby = body.slice(1)
					hob =["cocinero","Ayudador","Mabar","Sin bar","Redes sociales","Ayuda a otros","Mirando anime","Mira Drakor","Montando una motocicleta","Canta","Baile","Libra","Dibujar","La foto no es clara","Jugando un juego","Hablando solo"]
					const by = hob[Math.floor(Math.random() * hob.length)]
					denz.sendMessage(from, 'Pregunta : *'+hobby+'*\n\nRespuesta: '+ by, text, { quoted: mek })
					break 
				case 'bisakah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					bisakah = body.slice(1)
					const bisakahh = ["Poder","No puedo","No lo sé"]
					const keh = bisakahh[Math.floor(Math.random() * bisakahh.length)]
					denz.sendMessage(from, 'Pregunta: *'+bisakah+'*\n\nRespuesta : '+ keh, text, { quoted: mek })
					break 
				case 'kapankah':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					kapankah = body.slice(1)
					const kapankahh = ["Queda 1 semana","1 Otro mes","1 Otro año","100 años","No lo sé","2030","1 en hora","1 en un minuto"]
					const koh = kapankahh[Math.floor(Math.random() * kapankahh.length)]
					denz.sendMessage(from, 'Pregunta : *'+kapankah+'*\n\nRespuesta : '+ koh, text, { quoted: mek })
					break 
				case 'truth':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?truth&apikey=xptn`, {method: 'get'})
					ttrth = `${anu.Dare}`
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					denz.sendMessage(from, truteh, image, { caption: '*Verdad*\n\n'+ ttrth, quoted: mek })
					await limitAdd(sender) 
					break 
				case 'dare':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://xptnbotapinew.herokuapp.com/?dare&apikey=xptn`, {method: 'get'})
					der = `${anu.Dare}`
					totd = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					denz.sendMessage(from, totd, image, { quoted: mek, caption: '*Reto*\n\n'+ der })
					await limitAdd(sender) 
					break 
                case 'speed':
                case 'ping':
                const timestamp = speed();
                const latensi = speed() - timestamp 
                denz.sendMessage(from, `Speed: ${latensi.toFixed(4)} _Second_`, text, { quoted: mek})
                    break
                case 'tagme':
                if (isBanned) return reply(mess.only.benned)
          				
                if (!isUser) return reply(mess.only.userB)
					var nom = mek.participant
					const tag = {
					text: `@${nom.split("@s.whatsapp.net")[0]} hola!`,
					contextInfo: { mentionedJid: [nom] }
					}
					denz.sendMessage(from, tag, text, {quoted: mek})
					break
         case 'lirik':
				anu = await fetchJson(`https://tobz-api.herokuapp.com/api/lirik?q=${body.slice(7)}&apikey=BotWeA`)
				thum = await getBuffer(anu.result.thumb)
				teks = `*CANCIONES*\n\n*Canción* : ${anu.result.judul}\n*Album* : ${anu.result.album}\n*Publicado en* : ${anu.result.dipublikasi}\n*Lyric* : ${anu.result.lirik}`
				denz.sendMessage(from, thum, image, { quoted : mek, caption: teks })
				break
                case 'report':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`Que quires reportar? ejemplo #report tagme`)
          				
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return denz.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[REPORTE]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nMensaje : ${pesan}`

                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    denz.sendMessage('5213317595519@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Se han informado problemas al propietario del BOT, no se responderá a los informes falsos y es falso tendra baneo en el bot')
                    break
                case 'request':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`¿Qué quieres solicitar? Ejemplo: #request anime features`)
          				
                     const cfrr = body.slice(8)
                      if (cfrr.length > 300) return denz.sendMessage(from, 'Lo siento texto demasiado largo, máximo 300 palabras', text, {quoted: mek})
                        var nomor = mek.participant
                       const ress = `*[SOLICITACION]*\nNúmero : @${nomor.split("@s.whatsapp.net")[0]}\nMensaje : ${cfrr}`

                      var options = {
                         text: ress,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    denz.sendMessage('5213317595519@s.whatsapp.net', options, text, {quoted: mek})
                    reply('SU SOLICITUD HA LLEGADO AL propietario del BOT, las solicitudes falsas no serán respondidas')
                    break
				case 'memeindo':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					memein = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${ZeksApi}`)
					buffer = await getBuffer(memein.result)
					denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sxrgxx🥷🏿'})
					await limitAdd(sender)
					break 
				case 'ssweb':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Urlnya mana gan?')
					teks = `${body.slice(7)}`
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=tablet&url=${teks}&apiKey=${BarBarApi}`)
					ssweb = await getBuffer(anu.result)
					denz.sendMessage(from, ssweb, image, {quoted: mek})
					await limitAdd(sender)
					break 
					case 'neko':
if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
denz.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
denz.sendMessage(from, pok, image, {
  quoted: mek, caption: `*Neko*`
})
await limitAdd(sender)
} catch {
  reply(mess.wait)
}
break
					case 'loli':
                    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
                    reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=LOLI`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					denz.sendMessage(from, nye, image, { caption: '*Loli*', quoted: mek })
					await limitAdd(sender)
					break
					case 'wibu':
					if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
                  data = await fetchJson(`https://api.vhtear.com/randomwibu&apikey=${VthearApi}`)
						buffer = await getBuffer(data.result.foto)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sxrgxx🥷🏿'})
					await limitAdd(sender)
					break
					case 'nsfwloli':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limits.limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://api.vhtear.com/randomloli&apikey=${VthearApi}`, {method: 'get'})
						buffer = await getBuffer(res.result.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sxrgxx🥷🏿'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('No se encontro ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwblowjob':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sxrgxx🥷🏿'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' No se encontro ')
					}
					await limitAdd(sender)
					break 
			    case 'nsfwneko':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwneko?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sxrgxx🥷🏿'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' No se encontro ')
					}
					await limitAdd(sender) 
					break 
				case 'nsfwtrap':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwtrap?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sxrgxx🥷🏿'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' No se encontro ')
					}
					await limitAdd(sender) 
					break 
					case 'hentai':
				    try {
				    if (isBanned) return reply(mess.only.benned)    
				    if (!isUser) return reply(mess.only.userB)
				    				
				    if (isLimit(sender)) return reply(limitend(pushname2))
						if (!isNsfw) return reply(' *NSFW OF* ')
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/hentai?apikey=${TobzApi}`, {method: 'get'})
						buffer = await getBuffer(res.result)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: 'Sxrgxx🥷🏿'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('No se encontro')
					}
					await limitAdd(sender) 
					break 
				case 'hilih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Y el texto?')
					anu = await fetchJson(`https://api.i-tech.id/tools/hilih?key=${TechApi}&kata=${body.slice(7)}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'chord':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Y el link?')
					tels = body.slice(7)
					anu = await fetchJson(`https://alfians-api.herokuapp.com/api/chord?q=${tels}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
               case 'infogempa':
               if (isBanned) return reply(mess.only.benned)    
               if (!isUser) return reply(mess.only.userB)
         				
               if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/infogempa?apikey=${TobzApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   buff = await getBuffer(anu.map)
                   reply(mess.wait)
                   gempa = `•Lugar ${anu.lokasi}*\n• Hora: *${anu.waktu}* \n• Potensia: *${anu.potensi}*\n• Magnitud: *${anu.magnitude}*\n• Profundidad: *${anu.kedalaman}*\n• Coordenadas: *${anu.koordinat}*`
                   denz.sendMessage(from, buff, image, {quoted: mek, caption: gempa})
                   await limitAdd(sender) 
                   break 
                case 'kucing':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/randomcat?apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					buff = await getBuffer(anu.result.url)
					denz.sendMessage(from, buff, image, { quoted: mek , caption: 'Sxrgxx🥷🏿'})
					await limitAdd(sender) 
					break 


// solo en grupos
              case 'anime':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomanime?apikey=${TobzApi}`, {method: 'get'})
					reply(mess.wait)
					pok = await getBuffer(anu.result)
					denz.sendMessage(from, pok, image, { quoted: mek , caption: 'Sxrgxx🥷🏿'})
					await limitAdd(sender) 
					break  
				case 'naruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime* ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Naruto`, {method: 'get'})
					naru = JSON.parse(JSON.stringify(anu));
					to =  naru[Math.floor(Math.random() * naru.length)];
					nye = await getBuffer(to)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender)
					break 
				case 'minato':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Minato`, {method: 'get'})
					min = JSON.parse(JSON.stringify(anu));
					ato =  min[Math.floor(Math.random() * min.length)];
					nye = await getBuffer(ato)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender)
					break 
				case 'boruto':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Boruto`, {method: 'get'})
					bor = JSON.parse(JSON.stringify(anu));
					uto =  bor[Math.floor(Math.random() * bor.length)];
					nye = await getBuffer(uto)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender)
					break 
				case 'hinata':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=Hinata`, {method: 'get'})
					hina = JSON.parse(JSON.stringify(anu));
					ta =  hina[Math.floor(Math.random() * hina.length)];
					nye = await getBuffer(ta)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender)
					break 
				case 'sasuke':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sasuke`, {method: 'get'})
					sasu = JSON.parse(JSON.stringify(anu));
					ke =  sasu[Math.floor(Math.random() * sasu.length)];
					nye = await getBuffer(ke)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'sakura':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=sakura`, {method: 'get'})
					sak = JSON.parse(JSON.stringify(anu));
					kura =  sak[Math.floor(Math.random() * sak.length)];
					nye = await getBuffer(kura)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 
					break 

				case 'kaneki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=kaneki&apikey=${VthearApi}`, {method: 'get'})
					var ka = JSON.parse(JSON.stringify(anu.result));
					var ne =  ka[Math.floor(Math.random() * ka.length)];
					ki = await getBuffer(ne)
					denz.sendMessage(from, ki, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'toukachan':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+touka`, {method: 'get'})
					tou = JSON.parse(JSON.stringify(anu));
					ka =  tou[Math.floor(Math.random() * tou.length)];
					nye = await getBuffer(ka)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'rize':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+rize`, {method: 'get'})
					ri = JSON.parse(JSON.stringify(anu));
					ze =  ri[Math.floor(Math.random() * ri.length)];
					nye = await getBuffer(ze)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 	
					break 
				case 'akira':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+akira`, {method: 'get'})
					ak = JSON.parse(JSON.stringify(anu));
					ara =  ak[Math.floor(Math.random() * ak.length)];
					nye = await getBuffer(ara)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'itori':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+itori`, {method: 'get'})
					it = JSON.parse(JSON.stringify(anu));
					ori =  it[Math.floor(Math.random() * it.length)];
					nye = await getBuffer(ori)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'kurumi':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+karumi`, {method: 'get'})
					kur = JSON.parse(JSON.stringify(anu));
					imi =  kur[Math.floor(Math.random() * kur.length)];
					nye = await getBuffer(imi)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 
					break 
				case 'miku':
				if (isBanned) return reply(mess.only.benned)
								
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (!isAnime) return reply(' *Debe activar el modo Anime*  ')
					reply(mess.wait)
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime+miku`, {method: 'get'})
					mi = JSON.parse(JSON.stringify(anu));
					ku =  mi[Math.floor(Math.random() * mi.length)];
					nye = await getBuffer(ku)
					denz.sendMessage(from, nye, image, { caption: 'Sxrgxx🥷🏿', quoted: mek })
					await limitAdd(sender) 
					break 
// akhir fitur anime

				case 'anjing':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					n = JSON.parse(JSON.stringify(anu));
					nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					denz.sendMessage(from, pok, image, { quoted: mek })
					await limitAdd(sender) 
					break 
                case 'resepmasakan':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                reply(mess.wait)
                   anu = await fetchJson(`https://masak-apa.tomorisakura.vercel.app/api/search?q=${body.slice(14)}`, {method: 'get'})
                   masak = '==============================\n'
                   for (let msk of anu.results){
                   masak += `• *Titulo:* ${msk.title}\n• *• *Duración de la cocción aprox.:* ${msk.times}\n• *Porsión:* ${msk.serving}\n• *Grado de dificultad:* ${msk.difficulty}\n• *Link:* https://www.masakapahariini.com/?s=${msk.key}\n==============================\n`
                    }
                   reply(masak.trim())
                   await limitAdd(sender) 
                   break 
               case 'cersex':
                if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://api.vhtear.com/cerita_sex&apikey=${VthearApi}`, {method: 'get'})
                   if (anu.error) return reply(anu.error)
                   sex = await getBuffer(anu.result.image)
                   reply (mess.wait)
                   cerita = `• *Título:* ${anu.result.judul}\n\n${anu.result.cerita}`
                   denz.sendMessage(from, sex, image, {quoted: mek, caption: cerita})
                   await limitAdd(sender) 
                   break 
              case 'randomkpop':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   anu = await fetchJson(`https://tobz-api.herokuapp.com/api/randomkpop?apikey=${TobzApi}`, {method: 'get'})
                   buff = await getBuffer(anu.result)
                   denz.sendMessage(from, buff, image, {quoted: mek})
                   break 
               case 'puisiimg':
                   if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
                   pus = await getBuffer(`https://api.vhtear.com/puisi_image&apikey=${VthearApi}`, {method: 'get'})
                   denz.sendMessage(from, pus, image, {quoted: mek})
                   break 
                  case 'playstore':
                  if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2)) 
                ps = `${body.slice(11)}`
                  anu = await fetchJson(`https://api.vhtear.com/playstore?query=${ps}&apikey=${VthearApi}`, {method: 'get'})
                  store = '======================\n'
                  for (let ply of anu.result){
                  store += `• *Nombre:* ${ply.title}\n• *ID:* ${ply.app_id}\n• *Desarrollador:* ${ply.developer}\n• *Descrpción:* ${ply.description}\n• *Link:* ${ply.url}\n=====================\n`
                  }
                  reply(store.trim())
                  break
               case 'pornhub':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Y el texto')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/pornhub/search?query=${teks}`, {method: 'get'})
                    teks = `===============\n`
                    for (let bokep of anu.result) {
                    teks += `Titulo: ${bokep.title}\nActor: ${bokep.author}\nVistas: *${bokep.views}*\nDuración: ${bokep.duration}\nLink: ${bokep.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'nekopoi':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Y el texto?')
                    teks = body.slice(9)
                    anu = await fetchJson(`https://api.vhtear.com/nekosearch?query=${teks}&apikey=${VthearApi}`, {method: 'get'})
                    teks = `===============\n`
                    for (let neko of anu.result) {
                    teks += `Titulo: ${neko.title}\nDescripción: ${neko.detail}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break  
			     case 'xvideos':
			   if (isBanned) return reply(mess.only.benned)    
			   if (!isUser) return reply(mess.only.userB)
			   				
			   if (isLimit(sender)) return reply(limitend(pushname2))
			   reply(mess.wait)
              	    if (args.length < 1) return reply('Y el texto?')
                    anu = await fetchJson(`https://api.arugaz.my.id/api/media/xvideo/search?query=${body.slice(9)}`, {method: 'get'})
                    teks = `===============\n`
                    for (let b of anu.result) {
                    teks += `• Titulo: ${b.title}\n• Info: ${b.info}\n• Link: ${b.link}\n===============\n`
                    }
                    reply(teks.trim())
			     	await limitAdd(sender) 
			     	break 

				case 'fb':
				  denz.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
					if (args.length < 1) return reply('Y el link?')
					if (!isUrl(args[0]) && !args[0].includes('www.facebook.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${args[0]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					denz.sendMessage(from, '[ AGUANTA ] En proceso, El enlace es solo de Google,por donde lo puede descargar', text, {quoted: mek})
					efbe = `Titulo: *${anu.title}*\nTamaño: *${anu.filesize}\nPublicado en: *${anu.published}*`
					tefbe = await getBuffer(anu.thumb)
					denz.sendMessage(from, tefbe, image, {quoted: mek, caption: efbe})
					buffer = await getBuffer(anu.result)
					denz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', quoted: mek, caption: 'Sxrgxx🥷🏿'})
					await limitAdd(sender) 
					break 
			case 'instaimg':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    denz.sendMessage(from, insta, image, {quoted: mek})
				    await limitAdd(sender) 
				    break  
				case 'bass':                 
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('No se pudo convertir')
						hah = fs.readFileSync(ran)
						denz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'instavid':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (!isUrl(args[0]) && !args[0].includes('www.instagram.com')) return reply(mess.error.lv)
				    anu = await fetchJson(`https://alfians-api.herokuapp.com/api/ig?url=${args[0]}`, {method: 'get'})
				    insta = getBuffer(anu.result)
				    reply(mess.wait)
				    denz.sendMessage(from, insta, video, {mimtype: 'video/mp4', filename: 'instagram'.mp3, quoted: mek})
				    await limitAdd(sender) 
				    break  
			case 'instastory':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (args.length < 1) return reply('Y el nombre del usuario?')
				if (isLimit(sender)) return reply(limitend(pushname2))
				instor = `${body.slice(12)}`
				anu = await fetchJson(`https://api.vhtear.com/igstory?query=${instor}&apikey=${VthearApi}`, {method: 'get'})
				insta = '=========================\n'
				for (let i of anu.result.story.itemlist) {
				insta += `• *Usuario:* ${anu.result.owner_username}\n• *Tipo:* ${i.type}\n• *Link:* ${i.urlDownload}\n=========================\n`
				}
				reply(insta.trim())
				await limitAdd(sender)
				break
			case 'hekerbucin':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				hasil = hekerbucin[Math.floor(Math.random() * (hekerbucin.length))]
				denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 

				case 'ytsearch':
					if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Y el titulo')
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Titulo* : ${i.title}\n*Id* : https://youtu.be/${i.id}\n*Publicado* : ${i.publishTime}\n*Duración* : ${i.duration}\n*Vistas* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					break
					
				case 'film':
				if (isBanned) return reply(mess.only.benned)
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Y el nombre de la pelicula?')
				reply(mess.wait)
				anu = await fetchJson(`http://www.omdbapi.com/?s=${body.slice(6)}&plot=full&apikey=56b1b6f0&r=json`, {method: 'get'})
				hasil = '=========================\n'
				for(let film of anu.Search) {
				hasil += `• *Titulo:* ${film.Title}\n• *Año de lanzamiento:* ${film.Year}\n• *Tipo:* ${film.Type}\n• *Link:* https://m.imdb.com/title/${film.imdbID}\n=========================\n`
				}
				reply(hasil.trim())
				await limitAdd(sender) 
					break 
					case 'tiktok':
					case 'tiktoknowm': 
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply('Y el link?')
				if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.lv)
					 ige = body.slice(12)
                     anu = await fetchJson(`http://lolhuman.herokuapp.com/api/tiktok?apikey=WEMPYGANSS&url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result.link)
                    denz.sendMessage(from, buffer, video, )
				    break
				case 'tiktokstalk':
					try {
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return denz.sendMessage(from, 'Y el nombre de usuario?', text, {quoted: mek})
					let { user, stats } = await tiktod.getUserProfileInfo(args[0])
					reply(mess.wait)
					teks = `*ID* : ${user.id}\n*Usuario* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Seguidores* : ${stats.followerCount}\n*Seguidos* : ${stats.followingCount}\n*Publicaciónes* : ${stats.videoCount}\n*Me gustas* : ${stats.heart}\n`
					buffer = await getBuffer(user.avatarLarger)
					denz.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
					console.log(`Error :`, color(e,'red'))
					reply('Usuario invalido')
					}
					await limitAdd(sender) 
					break  
//creator
				case 'nulis':
				case 'tulis':
				  denz.updatePresence(from, Presence.composing)
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
			if (args.length < 1) return reply(`${name} Que quires que escriba?`)
			reply(mess.wait)
					tulis = body.slice(7)
				  nama = tulis.split("/")[0];
					kelas = tulis.split("/")[1];
					isi = tulis.split("/")[2];
					nulis = await getBuffer(`https://api.zeks.xyz/api/magernulis?nama=${nama}&kelas=${kelas}&text=${isi}&tinta=4`, {method: 'get'})
					denz.sendMessage(from, nulis, image, {quoted: mek})
					await limitAdd(sender) 
					break  
					case 'nulis2':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply(`${name} Que quires que escriba`)
				ct = body.slice(8)
				reply(mess.wait())
				ct = await getBuffer(`http://lolhuman.herokuapp.com/api/nulis?apikey=WEMPYGANSS&text=${ct}`)
				denz.sendMessage(from, ct, image, {caption: 'Sxrgxx🥷🏿', quoted: mek})
				await limitAdd(sender)
				break
				case 'slide':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('*Y el texto?*')
					teks = `${body.slice(7)}`
					atytyd = await getBuffer(`https://api.vhtear.com/slidingtext?text=${teks}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					denz.sendMessage(from, atytyd, video, {quoted: mek})
					await limitAdd(sender) 
					break  
					 case 'quotemaker':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			    				
					gh = `${body.slice(12)}`
					quote = gh.split("/")[0];
					wm = gh.split("/")[1];
					bg = gh.split("/")[2];
					const pref = `Uso: \n${prefix}quotemaker texto/watermark/tema\n\nEjemplo :\n${prefix}quotemaker  Ejemplo/bicit/random`
					if (args.length < 1) return reply(pref)
					anu = await fetchJson(`https://terhambar.com/aw/qts/?kata=${quote}&author=${wm}&tipe=${bg}`, {method: 'get'})
					buffer = await getBuffer(anu.result)
					denz.sendMessage(from, buffer, image, {quoted: mek})
					await limitAdd(sender) 
					break 

//akhir kreator
			    case 'jarak':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    jarak = `${body.slice(7)}`
			    ja = jarak.split("/")[0];
			    rak = jarak.split("/")[1];
			    anu = await fetchJson(`https://api.vhtear.com/distance?from=${ja}&to=${rak}&apikey=${VthearApi}`, {method: 'get'})
			    denz.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			    await limitAdd(sender) 
			    break  
			    case 'infoalamat':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/infoalamat?query=${body.slice(12)}&apikey=${VthearApi}`, {method: 'get'})
			        denz.sendMessage(from, `${anu.result.data}`, text, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			    case 'tinyurl':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/tinyurl?url=${body.slice(9)}&apikey=${TobzApi}`)
			        tinyurl = `${anu.result}`
			        reply(tinyurl)
			        await limitAdd(sender) 
			        break 
			    case 'infonomor':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infonomor?no=${body.slice(10)}`)
			        infonomor = `*Número* \n${anu.nomor} *international* \n${anu.international}`
			        reply(infonomor)
			        await limitAdd(sender) 
			        break 
			   case 'igstalk':
                    if (isBanned) return reply(mess.only.benned)    
   					if (!isUser) return reply(mess.only.userB)
   									
   					if (isLimit(sender)) return reply(limitend(pushname2))
                        anu = await fetchJson(`https://api.vhtear.com/igprofile?query=${body.slice(9)}&apikey=${VthearApi}`, {method: 'get'})
                     buffer = await getBuffer(anu.result.picture)
                     reply(mess.wait)
                     hasil = `╭─「 *INSTAGRAM* 」\n│\n│• Link: https://www.instagram.com/${anu.result.username}\n│• Nombre : ${anu.result.full_name}\n│• Seguidores : ${anu.result.follower}\n│• Seguidos : ${anu.result.follow}\n│• Número de publicaciones: ${anu.result.post_count}\n│• Bio : ${anu.result.biography}\n╰─────────────────────`
                    denz.sendMessage(from, buffer, image, {quoted: mek, caption: hasil})
                    await limitAdd(sender) 
                    break 
			    case 'mimpi':
			    if (isBanned) return reply(mess.only.benned)
			        if (isLimit(sender)) return reply(limitend(pushname2))
			    if (!isUser) return reply(mess.only.userB)
			    				
			    reply(mess.wait)
			        anu = await fetchJson(`https://api.arugaz.my.id/api/primbon/tafsirmimpi?mimpi=${body.slice(7)}`, {method: 'get'})
			        mimpi = `Significado de los sueños*${body.slice(7)}* Es:\n${anu.result.hasil}`
			        denz.sendMessage(from, mimpi, text, {quoted: mek})
			        await limitAdd(sender) 
			       	break 
				case 'quotes':
				denz.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./Fxc7/quotes.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randQuote = 'Autor: *'+randKey.author+'*\n\n*'+randKey.quotes+'*'
                 denz.sendMessage(from, randQuote, text, {quoted: mek})
				await limitAdd(sender) 
					break 
				case 'fakta':
				if (isBanned) return reply(mess.only.benned)   
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/faktaunik`, {method: 'get'})
					fakta = `De hecho: *${anu.result}*`
					denz.sendMessage(from, fakta, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'katabijak':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/katabijak`, {method: 'get'})
					katabijak = `Palabras de la sabiduría: *${anu.result}*`
					denz.sendMessage(from, katabijak, text, {quoted: mek})
					await limitAdd(sender) 
					break 

			case 'profiltiktok':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
                    anu = await fetchJson(`https://api.vhtear.com/tiktokprofile?query=${body.slice(14)}&apikey=${VthearApi}`, {method: 'get'})
			        tiktok = await getBuffer(anu.result.picture)
              denz.sendMessage(from, tiktok, image, {quoted: mek})
			        await limitAdd(sender) 
			        break 
			case 'closetime': 
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              denz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*escoger:*\nsegundos\nminuto\nhora\n\n*Ejemplo*\n10 segundo")}
				setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `*El grupo fue cerrado por @${nomor.split("@s.whatsapp.net")[0]}\n`,
					contextInfo: { mentionedJid: [nomor] }
					}
					denz.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				}, timer)
				break
				case 'opentime': 
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              denz.updatePresence(from, Presence.composing) 
              if (args[1]=="detik") {var timer = args[0]+"000"
				} else if (args[1]=="menit") {var timer = args[0]+"0000"
				} else if (args[1]=="jam") {var timer = args[0]+"00000"
				} else {return reply("*escoger:*\nsegundos\nminutos\nhora\n\n*Ejemplo*\n10 segundo")}
				setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `*Grupo abierto por @${nomor.split("@s.whatsapp.net")[0]}\n`,
					contextInfo: { mentionedJid: [nomor] }
					}
					denz.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				}, timer)
				break
				case 'darkjokes':
				denz.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./Fxc7/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 denz.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`Bromas pesadas\`\`\`'})
				await limitAdd(sender) 
				break  
			case 'katailham':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				hasil = katailham[Math.floor(Math.random() * (katailham.length))]
				denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
				await limitAdd(sender)
				break 
				case 'addsticker':
				if (!isOwner) return reply(mess.only.ownerB)
			    if (!isQuotedSticker) return reply('Responde a un sticker')
				svst = body.slice(12)
				if (!svst) return reply('Ponle un nombre al sticker')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await denz.downloadMediaMessage(boij)
				fs.writeFileSync(`./sticker/${svst}.webp`, delb)
				denz.sendMessage(from, `Añadido con exito`, MessageType.text, { quoted: mek })
				break
				case 'addaudio':
                   if (!isOwner) return reply(mess.only.ownerB)
                   if (!isQuotedAudio) return reply('Responde a un audio')
                   gsh = body.slice(10)
                   if (!gsh) return reply('Ponle un nombre al audio')
                   uyw = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                   gx = await denz.downloadMediaMessage(uyw)
                   fs.writeFileSync(`./mp3/${gsh}.mp3`, gx)
                    reply('Audio añadido con exito')
                     break
                     case 'katacinta':	
                 if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
					gatauda = body.slice(8)
					anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/katacinta`, {method: 'get'})
					reply(anu.result)
					await limitAdd(sender)
					break
				
			case 'pasangan':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				pa = `${body.slice(10)}`
				sa = pa.split("/")[0];
				ngan = pa.split("/")[1];
				anu = await fetchJson(`https://api.vhtear.com/primbonjodoh?nama=${sa}&pasangan=${ngan}&apikey=${VthearApi}`, {method: 'get'})
				denz.sendMessage(from, `${anu.result.hasil}`, {quoted: mek})
			await limitAdd(sender) 
			break 

			case 'persengay':
			case 'gaypersen':
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Etiqueta a una persona')
				rate = body.slice(11)
				persengayy = ["*4%*\n\n*Casi no eres*","*9%*\n\n*Sospechoso de ser gay*","*17%*\n\n*Ya eres gay*","*28%*\n\n*Tremendo gay*","*34%*\n\n *Hola gay*","*48%*\n\n*Que joto*","*59%*\n\n *Que joto*","*62%*\n\n*Demasio gay*","*74%*\n\n*Ya casi alcanzas al admin como joto*","83%\n\n AAhh un gay","97%\n\nuff que gay","100%\n\nHola gay master","29%\n\n No se que decir","94%\n\n Casi 100% que joto","75%\n\nnms gay¦","39%\n\nuy gay"]
				const kl = persengayy[Math.floor(Math.random() * persengayy.length)]
				denz.sendMessage(from, 'Persona: *'+rate+'*\n\nRespuesta : '+kl+'', text, { quoted: mek })
				await limitAdd(sender) 
				break  

			case 'pbucin':
			case 'persenbucin':
			case 'bucinpersen':
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				if (args.length < 1) return reply('Donde esta el nombre?')
				rate = body.slice(8)
				persenbucin = ["4%\n\nsiuu","9%\n\nTodavía peque","17%\n\nTodavía pequeño","28%\n\nfeo","34%\n\nno tan hermoso","48%\n\nY esos labios","62%\n\nmmm no tan guapo","74%\n\nque sexi","83%\n\nhola hermoso","97%\n\nGuapo","100%\n\nTremenda guapura","29%\n\nbasico","94%\n\nGuapo","75%\n\nLo siento"]
				const pbucin = persenbucin[Math.floor(Math.random() * persenbucin.length)]
				denz.sendMessage(from, 'Persona: *'+rate+'*\n\nRespuesta : '+ pbucin +'', text, { quoted: mek })
				await limitAdd(sender) 
				break 
		    case 'map':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  if (args.length < 1) return reply('Ingrese el nombre del área')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
  denz.sendMessage(from, hasil, image, {
quoted: mek, caption: `resultados de *${daerah}*`
  })
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
				case 'url2img':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('De qué tipo?')
					if (!tipelist.includes(args[0])) return reply('Escribe desktop|tablet|mobile')
					if (args.length < 2) return reply('Y el link?')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarApi}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					url2img = await getBuffer(anu.result)
					denz.sendMessage(from, url2img, image, {quoted: mek})
					await limitAdd(sender)
					break 
			    case 'tagall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]} wa.me/${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔═══✪ Dado por *${pushname2}* ✪══`+ teks +'╚═══〘 Sxrgxx🥷🏿 〙═══', members_id, true)
					break
			    case 'mentionall':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = '\n'
					for (let mem of groupMembers) {
						teks += `╠➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(`╔══〘 Dado por*${body.slice(12)}*  〙✪══`+teks+'╚═〘 Sxrgxx🥷🏿 〙', members_id, true)
					break
			    case 'kbbi':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
			    if (isLimit(sender)) return reply(limitend(pushname2))
			    reply(mess.wait)
					if (args.length < 1) return reply('Qué quieres buscar?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Resultado:\n\n'+anu.result)
					await limitAdd(sender)
					break 
					case 'grup':
					case 'gc':
					case 'group':
					if (isBanned) return reply(mess.only.benned)    
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`\`\`\`✓Apertura exitosa del grupo\`\`\` *${groupMetadata.subject}*`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`\`\`\`✓Cierre exitoso\`\`\` *${groupMetadata.subject}*`)
						denz.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
				case 'artinama':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Qué quieres buscar?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(6)}`, {method: 'get'})
					denz.sendMessage(from, anu.result, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'clearall':
					if (!isOwner) return reply('Estas seguro?')
					anu = await denz.chats.all()
					denz.setMaxListeners(25)
					for (let _ of anu) {
						denz.deleteChat(_.jid)
					}
					reply(`\`\`\`Chat borrado con exito\`\`\``)
					break
                                case 'bcgc':
					denz.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bcgc = await denz.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							denz.sendMessage(_.jid, bcgc, image, {caption: `「 *_Anuncio de grupo_* 」\n*Grupo* : ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `「 *_Anuncio de grupo_* 」\n*Grupo* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Con exito')
					}
					break
				case 'bc':
					if (!isOwner) return reply('Seguro?')
					if (args.length < 1) return reply('.......')
					anu = await denz.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await denz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							denz.sendMessage(_.jid, bc, image, {caption: `「 *_Anuncio_* 」\n\n${body.slice(4)}`})
						}
						denz.sendMessage(_.jid, bc, image, {caption: `「 *_Anuncio_* 」\n\n${body.slice(4)}`})
						reply('Con exito')
						} else {
						for (let _ of anu) {
							sendMess(_.jid, `「 *_Anuncio_* 」\n\n${body.slice(4)}`)
						}
						reply('Con exito')
					}
					break
				case 'add':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('¿A quién quieres agregar?')
					if (args[0].startsWith('08')) return reply('Pon código de área')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						denz.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar porque esta privada su cuenta')
					}
					break
			    case 'kick':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a la persona')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Ordenes recibidas :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupRemove(from, mentioned)
					} else {
						mentions(`Ordenes recibidas : @${mentioned[0].split('@')[0]}`, mentioned, true)
						denz.groupRemove(from, mentioned)
					}
					break 
				case 'kicktime':
					if (isBanned) return reply(mess.only.benned)
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a la persona')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					denz.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('Con exito')
					}, 7000)
					setTimeout( () => {
					denz.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					denz.sendMessage(from, `Expulsado @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					denz.sendMessage(from, 'Obtener comida :D', text)
					}, 2500)
					setTimeout( () => {
					reply('Pedidos recibidos min :D')
					}, 0)
					break
				case 'promote':
				case 'pm':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a la persona')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Recibido, ahora sera un admi fachero:\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Recibido, @${mentioned[0].split('@')[0]} Ahora eres admin fachero *${groupMetadata.subject}*`, mentioned, true)
						denz.groupMakeAdmin(from, mentioned)
					}
					break
				case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
			    case 'demote':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Etiqueta a la persona')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Recibido ya no sera admin :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Ahuevo un admin menos: @${mentioned[0].split('@')[0]} por gay`, mentioned, true)
						denz.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'listadmins':
				case 'listadmin':
				case 'adminlist':
				case 'adminslist':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					teks = `Lista de admin facheros*${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
				case 'simih':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isSimi) return reply('El modo SIMI está activo')
						samih.push(from)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`Activado con éxito el modo simi en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						samih.splice(from, 1)
						fs.writeFileSync('./database/json/simi.json', JSON.stringify(samih))
						reply(`\`\`\`Desactivado con éxito el modo simi\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('Escribe on para prender y off para apagar')
					}
					break
			    case 'nsfw':
			    if (isBanned) return reply(mess.only.benned)    
			    if (!isUser) return reply(mess.only.userB)
			    				
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('Ya está activo el modo nsfw')
						nsfw.push(from)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓“Modo nsfw activado con éxito en grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/json/nsfw.json', JSON.stringify(nsfw))
						reply(`\`\`\`✓“Modo nsfw desactivado con éxito en grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('Escribe on para prender y off para apagar')
					}
					break
				case 'modeanime':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isAnime) return reply('Ya está activo')
						anime.push(from)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓“Modo anime activado con éxito en grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						anime.splice(from, 1)
						fs.writeFileSync('./database/json/anime.json', JSON.stringify(anime))
						reply(`\`\`\`✓“Modo anime desactivado con éxito en grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('Escribe on para prender y off para apagar')
					}
					break
				case 'welcome':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Hmmmm')
					if ((args[0]) === 'on') {
						if (isWelkom) return reply('Ya está activo')
						welkom.push(from)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“Bienvenida activada con éxito en grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						welkom.splice(from, 1)
						fs.writeFileSync('./database/json/welkom.json', JSON.stringify(welkom))
						reply(`\`\`\`✓“Bienvenida desactivada con éxito en grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('Escribe on para prender y off para apagar')
					}
					break 
				case 'antilink':
				if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('escriba #antilink on para activar')
					if ((args[0]) === 'on') {
						if (isAntiLink) return reply('anti link ya está activado')
						antilink.push(from)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Activado con éxito la función anti-enlace en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiLink) return reply('anti link sudah off')
						antilink.splice(from, 1)
						fs.writeFileSync('./database/json/antilink.json', JSON.stringify(antilink))
						reply(`\`\`\`✓“Desactivado con éxito la función anti-enlace en el grupo\`\`\` *${groupMetadata.subject}*`)
					} else {
						reply('Escribe on para prender y off para apagar')
					}
					break
				case 'antibadword':
                    if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                if (args.length < 1) return reply('Escribe on para prender y off para apagar')
                if (args[0] === 'on') {
                if (isBadWord) return reply('Ya está activo')
                 	   badword.push(from)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                  	   reply(`\`\`\`✓“Activadp con éxito la función anti badword en el grupo\`\`\` *${groupMetadata.subject}*`)
              	  } else if (args[0] === 'off') {
                    	if (!isBadWord) return reply('anti badword sudah off')
                  	  badword.splice(from, 1)
                 	   fs.writeFileSync('./database/json/badword.json', JSON.stringify(badword))
                 	    reply(`\`\`\`✓“Desactivado con éxito la función anti badword en el grupo\`\`\` *${groupMetadata.subject}*`)
             	   } else {
                 	   reply(ind.satukos())
                	}
                    break
                    case 'do':
                    if (!isOwner) return reply(mess.only.ownerB)
					denz.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                    case 'addbadword':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Envia ${prefix}addbadword [Groserias]. Ejemplo ${prefix}addbadword puto`)
                    const bw = body.slice(12)
                    bad.push(bw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Se añadio con exito')
                    break
                case 'delbadword':
                    if (!isOwner) return reply(mess.only.ownerB)
                    if (args.length < 1) return reply( `Envia ${prefix}delbadword [Groseria]. Ejemplo ${prefix}delbadword puto`)
                    let dbw = body.slice(12)
                    bad.splice(dbw)
                    fs.writeFileSync('./database/json/bad.json', JSON.stringify(bad))
                    reply('Se elimino con exito la palabra')
                    break 
                case 'listbadword':
                    let lbw = `Lista de groserias \nTotal : ${bad.length}\n`
                    for (let i of bad) {
                        lbw += `➸ ${i.replace(bad)}\n`
                    }
                    await reply(lbw)
                    break 
				case 'caklontong':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${VthearApi}`, {method: 'get'})
					caklontong = `*${anu.result.soal}*`
					setTimeout( () => {
					denz.sendMessage(from, '*➸ Respuesta:* '+anu.result.jawaban+ '\n\n• Explicación: *'+ anu.result.desk+'*', text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Segundos…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Segundos_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Segundos_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, caklontong, text, {quoted: mek}) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'tebakgambar':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://videfikri.com/api/tebakgambar`, {method: 'get'})
					bufferkkk = await getBuffer(anu.result.soal_gbr)
					setTimeout( () => {
					denz.sendMessage(from, '*➸ Pregunta :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Segundos…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Segundos_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Segundos_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, bufferkkk, image, { caption: '_ Explica qué significa esta imagen_', quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break  
				case 'family100':
                if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.vhtear.com/family100&apikey=${VthearApi}`, {method: 'get'})
					family = `*${anu.result.soal}*`
					setTimeout( () => {
					denz.sendMessage(from, '*➸ Pregunta :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
					}, 30000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_10 Segundos…_', text) // ur cods
					}, 20000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_20 Segundos_…', text) // ur cods
					}, 10000) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, '_30 Segundos_…', text) // ur cods
					}, 2500) // 1000 = 1s,
					setTimeout( () => {
					denz.sendMessage(from, family, text, {quoted: mek }) // ur cods
					}, 0) // 1000 = 1s,
					await limitAdd(sender) 
					break 
				case 'randombokep':
				denz.updatePresence(from, Presence.composing) 
				 if (isBanned) return reply(mess.only.benned)    
				 if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isNsfw) return reply(' *NSFW OF* ')
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./sergio/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 denz.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				await limitAdd(sender) 
				break

				case 'clone':
				if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Etiqueta a la persona')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag gan')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await denz.getProfilePicture(id)
						buffer = await getBuffer(pp)
						denz.updateProfilePicture(botNumber, buffer)
						mentions(`Se modifico la foto de peril usando la de @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('No se pudo modificar')
					}
					break
//setting bot
				case 'setprefix':
				case 'setpref':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`El prefijo se ha cambiado correctamente a : ${prefix}`)
					break 
					case 'setlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					limitt = args[0]
					reply(`El límite se ha cambiado con éxito a : ${limitt}`)
					break 
				case 'setmemlimit':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					memberLimit = args[0]
					reply(`El limite de miembros se cambio con éxito a: ${memberLimit}`)
					break 
				case 'setnamebot':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					name = body.slice(12)
					reply(`El nombre del bot se cambio con éxito a : ${name}`)
					break 
				case 'setreply':
					if (!isOwner) return reply(mess.only.ownerB)
                    denz.updatePresence(from, Presence.composing) 
					if (args.length < 1) return
					rmenu = body.slice(10)
					reply(`la respuesta se ha cambiado con éxito a : ${rmenu}`)
				break 
////////////
				case 'wait':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await denz.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							denz.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Solo una foto')
					}
					break 
					
			case 'quran':
			 if (isBanned) return reply(mess.only.benned)    
                if (!isUser) return reply(mess.only.userB)
          				
                if (isLimit(sender)) return reply(limitend(pushname2))
					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})
					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} párrafo ${anu.acak.id.ayat}`
					denz.sendMessage(from, quran, text, {quoted: mek})
					await limitAdd(sender) 
					break 
	case 'infocuaca':
	 if (isBanned) return reply(mess.only.benned)    
     if (!isUser) return reply(mess.only.userB)
     				
     if (isLimit(sender)) return reply(limitend(pushname2))
     if (args.length < 1) return reply(from, 'Envia el comando correctamente', text)
     reply(mess.wait)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             denz.sendMessage(from, `➸ Lugar : ${weather.result.tempat}\n\n➸ Viento : ${weather.result.angin}\n➸ Tiempo : ${weather.result.cuaca}\n➸ Descripción : ${weather.result.desc}\n➸ Humedad : ${weather.result.kelembapan}\n➸ Temperatura : ${weather.result.suhu}\n➸ Aire : ${weather.result.udara}`, text, {quoted: mek})
            }
            await limitAdd(sender)
            break 

         case 'pinterest':
         if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Escribe lo que quieres buscar')
					pinte = body.slice(11)
					anu = await fetchJson(`https://api.vhtear.com/pinterest?query=${pinte}&apikey=${VthearApi}`, {method: 'get'})
					reply(mess.wait)
					var pin = JSON.parse(JSON.stringify(anu.result));
					var trest =  pin[Math.floor(Math.random() * pin.length)];
					pinehg = await getBuffer(trest)
					denz.sendMessage(from, pinehg, image, { caption: '*Pinterest*\n\n*Resultado de búsqueda : '+pinte+'*', quoted: mek })
					await limitAdd(sender) 
					break 
					
		case 'jadwalsholat':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					if (args.length < 1) return reply('Ingresa el nombre del área')
					sholat = `${body.slice(14)}`
					anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${sholat}&apiKey=${BarBarApi}`, {method: 'get'})
					reply(mess.wait)
					if (anu.result) return reply(anu.result)
					jsol = `Resultado *${sholat}* hoy es\n\n*Amanecer :* ${anu.Subuh} WIB\n*Dzuhur :* ${anu.Dzuhur} WIB\n*Asr :* ${anu.Ashar} WIB\n*magreb :* ${anu.Maghrib} WIB\n*âž¸ Isya :* ${anu.Isya} WIB`
					denz.sendMessage(from, jsol, text, {quoted: mek})
					await limitAdd(sender) 
					break 
            case 'jadwaltvnow':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  denz.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
method: 'get'
  })
  reply(anu.result.jadwalTV)
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break
case 'jadwaltv':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
  ch = body.slice(10)
  if (args.length < 1) return reply('Escribe el nombre del canal')
  denz.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarApi}`, {
method: 'get'
  })
  n = JSON.parse(JSON.stringify(anu.result));
  hasil = `*Resultado* : ${ch} Hoy\n${n}`
  reply(hasil)
  await limitAdd(sender)
  } catch {
    reply(mess.wait)
  }
  break

// premium user
         case 'joox':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
                anu = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${body.slice(6)}&apikey=${TobzApi}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 infomp3 = `╭─「 *JOOX* 」\n│\n│ *• Nombre* : ${anu.result.title}\n│ *• Album* : ${anu.result.album}\n│ *• Publicado* : ${anu.result.dipublikasi}\n│\n│*ESPERE MÁS PARA ENVIAR*\n│*POR FAVOR NO HAGA SPAM*\n╰─────────────────────`
                bufferddd = await getBuffer(anu.result.thumb)
                 reply(mess.wait)
                buff = await getBuffer(anu.result.mp3)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                denz.sendMessage(from, buff, audio, {mimetype: 'audio/mp4', filename: `${anu.result.judul}.mp3`, quoted: mek})
                await limitAdd(sender) 
                break  
                
          case 'snack':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				
				if (args.length < 1) return reply('Y el link?')
					if (!isUrl(args[0]) && !args[0].includes('sck')) return reply(mess.error.Iv)
                anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/sckdown?url=${args[0]}`, {method: 'get'})
               if (anu.error) return reply(anu.error)
                 sck = `「 *VIDEO DOWNLOADER* 」\n\n*• Formato:* ${anu.format}\n*• Tamaño:* ${anu.size}\n\n*ESPERE DE NUEVO ENVIANDO POR FAVOR NO SPAM*`
                bufferddd = await getBuffer('https://raw.githubusercontent.com/FarhanXCode7/termux-bot-wa/main/src/glitchtext.png')
                 reply(mess.wait)
                buff = await getBuffer(anu.result)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: sck})
                denz.sendMessage(from, buff, video, {mimetype: 'video/mp4', filename: `${anu.format}.mp4`, quoted: mek})
                await limitAdd(sender) 
                break  
                
       case 'play':
case 'playmp3':
                  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Escribe lo que buscas`)
                data = await fetchJson(`https://onlydevcity.herokuapp.com/api/ytmp3?url=${body.slice(6)}&apikey=onlyonedeveloper`, {method: 'get'})
                 reply(mess.wait)
                 infomp3 = `「 *PLAY* 」\n*Nombre* : ${data.result.title}\n*Duración* : ${data.result.duration}\n*Tamaño* : ${data.result.size}\n\n*[ AGUANTA ] No seas desesperado y espera que el audio se envie....*`
                bufferddd = await getBuffer(data.result.image)
                lagu = await getBuffer(data.result.mp3)
                denz.sendMessage(from, bufferddd, image, {quoted: mek, caption: infomp3})
                denz.sendMessage(from, lagu, audio, {mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek})
                break
                
                case 'ytmp3':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Y el link?`)
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Formato de link incorrecto')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=apivinz`)
  infomp3 = `*Audio*\n‣ Nombre : ${anu.result.title}\n‣ Fuente : ${anu.result.source}\n‣ Tamaño : ${anu.result.size}\n\n_Enviando archivos, espere_ \ n \ n_Si el audio no aparece, descárguelo usted mismo usando el enlace a continuación_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  denz.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  denz.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break

case 'ytmp4':
  if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (args.length < 1) return reply(`Y el link?`)
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=apivinz`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Format link salah, gunakan link youtube')
  if (anu.error) return reply(anu.error)
  infomp3 = `*Viedo*\n‣ *Nombre* : ${anu.result.title}\n‣ *Fuente* : ${anu.result.source}\n‣ *Tamalo* : ${anu.result.size}\n\n_Enviando archivos, espere_ \ n \ n_Si el audio no aparece, descárguelo usted mismo usando el enlace a continuación_\n‣ *link* : ${anu.result.url_video}`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  denz.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  denz.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  await limitAdd(sender)
  } catch {
    reply(mess.ferr)
  }
  break
 
            case 'smule':
	       if (isBanned) return reply(mess.only.benned)
	       
				if (!isUser) return reply(mess.only.userB)
					if (args.length < 1) return reply('Y el link?')
					if (!isUrl(args[0]) && !args[0].includes('c-ash.smule')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/smule?link=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Titulo* : ${anu.title}\n\n Espere un minuto 2 minutos Puede ser un poco largo debido a la descarga de videos`
					thumb = await getBuffer(anu.thumb)
					denz.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					denz.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek, caption: 'Aquí hermano'})
					await limitAdd(sender) 	
					break 

// Akhir Fitur Premium 

case 'wiki':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
                    if (args.length < 1) return reply('y el texto')
                    reply(mess.wait)
                   wiki = `${body.slice(6)}`
                    anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${wiki}&apikey=${TobzApi}`, {method: 'get'})
                    if (anu.error) return reply(anu.error)
                    wikii = `${anu.result}`
                    denz.sendMessage(from, wikii, text, {quoted: mek})
                   await limitAdd(sender) 
                   break  
                   
               case 'pastebin':
                   if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				paste = `${body.slice(10)}`
                   anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${paste}`, {method: 'get'})
                   denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
                   await limitAdd(sender) 				
                   break 
		case 'bpfont':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
							
			bp = `${body.slice(8)}`
			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})
			reply (anu.text)
			await limitAdd(sender) 
			break  
		case 'spamcall':
			if (isBanned) return reply(mess.only.benned)
			if (isLimit(sender)) return reply(limitend(pushname2))
			if (!isUser) return reply(mess.only.userB)
							
			call = `${body.slice(11)}`
			anu = await fetchJson(`https://videfikri.com/api/call/?nohp=${call}`, {method: 'get'})
			denz.sendMessage(from, `${anu.result.logs}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'spamgmail':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			spam = `${body.slice(10)}`
			anu = await fetchJson(`https://videfikri.com/api/spamemail/?email=${spam}&subjek=PT.PLN&pesan=Silahkan%20bayar%20tagihan%20listrik%20Anda`, {method: 'get'})
			denz.sendMessage(from, `${anu.result.log_lengkap}`, text, {quoted: mek})
			await limitAdd(sender) 
			break  
		case 'quransurah':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			surah = `${body.slice(12)}`
			anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=${surah}&apikey=${ZeksApi}`)
			quran = `\`Número: *${surah}*\n: *${anu.surah}*\nDerivado en la ciudad: *${anu.type}*\nNúmero de versos: *${anu.jumlah_ayat}*\n\n*${anu.ket}\n=============================\n`
			for (let surah of anu.quran) {
			quran += `${surah.number}\n${surah.text}\n${surah.translation_id}\n=====================\n`
			}
			reply(quran.trim())
			await limitAdd(sender) 
			break 
			case 'quranlist':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			anu = await fetchJson(`https://api.vhtear.com/quranlist?&apikey=${VthearApi}`, {method: 'get'})
			list = ''
			for (let sur of anu){
			list = `Número: ${sur.list}\n`
			}
			reply(list.trim())
			break
		case 'bitly':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			link = `${body.slice(7)}`
			anu = await fetchJson(`https://tobz-api.herokuapp.com/api/bitly?url=${link}&apikey=${TobzApi}`, {method: 'get'})
			bitly = `${anu.result}`
			denz.sendMessage(from, anu, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			case 'textstyle':
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			if (isLimit(sender)) return reply(limitend(pushname2))
			reply(mess.wait)
			style = `${body.slice(11)}`
			anu = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${style}`, {method: 'get'})
			reply (anu.result)
			await limitAdd(sender) 
			break  
			case 'pantun':
			if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
			gatauda = body.slice(8)					
					anu = await fetchJson(`https://api.zeks.xyz/api/pantun?apikey=apivinz`, {method: 'get'})
					reply(anu.result.pantun)
					await limitAdd(sender)
					break
			
		case 'jamdunia':
		if (isLimit(sender)) return reply(limitend(pushname2))
			if (isBanned) return reply(mess.only.benned)
			if (!isUser) return reply(mess.only.userB)
							
			reply(mess.wait)
		 jamdunia = `${body.slice(10)}`
			anu = await fetchJson(`https://api.i-tech.id/tools/jam?key=${TechApi}&kota=${jamdunia}`, {method: 'get'})
			wtime = `*${anu.timezone}*\n*${anu.date}*\n*${anu.time}*`
			denz.sendMessage(from, wtime, text, {quoted: mek})
			await limitAdd(sender) 
			break  
			
		 case 'tomp3':
                if (isBanned) return reply(mess.only.benned)    
                if (isLimit(sender)) return reply(limitend(pushname2))
				if (!isUser) return reply(mess.only.userB)
								
                	denz.updatePresence(from, Presence.composing) 
					if (!isQuotedVideo) return reply('_*Responde a un video*_')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('No se pudo convertir a mp3')
						bufferlkj = fs.readFileSync(ran)
						denz.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
						fs.unlinkSync(ran)
					})
					await limitAdd(sender) 
					break 
					
				case 'setppbot':
					if (!isOwner) return reply(mess.only.owner)
				    denz.updatePresence(from, Presence.composing) 
					if (!isQuotedImage) return reply(`Manda una foto con el comando ${prefix}setbotpp o etiqueta de imagen que ya se han enviado`)
					enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await denz.downloadAndSaveMediaMessage(enmedia)
					await denz.updateProfilePicture(botNumber, media)
					reply('Gracias por el nuevo perfil☺️ ™‚')
					break

// Fitur Defacer

				case 'dorking':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				reply(mess.wait)
				dork = `${body.slice(9)}`
					anu = await fetchJson(`https://api-anoncybfakeplayer.herokuapp.com/dorking?dork=${dork}`, {method: 'get'})
					hasil = `${anu.result}`
					denz.sendMessage(from, hasil, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode64 = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=encode&string=${encode64}`, {method: 'get'})
				denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break 
				case 'decode64':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode64 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs64?key=${TechApi}&type=decode&string=${decode64}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=decode&string=${decode32}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encode32':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encode32 = `${body.slice(10)}`
					anu = await fetchJson(`https://api.i-tech.id/hash/bs32?key=${TechApi}&type=encode&string=${encode32}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encbinary = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?encode=${encbinary}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'decbinary':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decbin = `${body.slice(11)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/binary/?decode=${decbin}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'encoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				encoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?encode=${encoc}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender)
					break  
				case 'decoctal':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				decoc = `${body.slice(10)}`
					anu = await fetchJson(`https://api.anoncybfakeplayer.com/api/octal/?decode=${decoc}`, {method: 'get'})
					denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
					await limitAdd(sender) 
					break  
				case 'becrypt':
				if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
				becry = `${body.slice(10)}`
				anu = await fetchJson(`https://api.i-tech.id/hash/bcrypt?key=${TechApi}&string=${becry}`, {method: 'get'})
				denz.sendMessage(from, `${anu.result}`, text, {quoted: mek})
				await limitAdd(sender) 
				break 
					case 'hashidentifier':
					if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
								
				if (isLimit(sender)) return reply(limitend(pushname2))
					  hash = `${body.slice(16)}`
					  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/hash-identifier?hash=${hash}`)
					  hasilhash = `Tipo: *${anu.hash_type}*\nTipo de char: *${anu.char_type}*`
					  denz.sendMessage(from, hasilhash, text, {quoted: mek})
					  await limitAdd(sender)
					  break 
// akhir encrypt & decrypt Fitur

			case 'google':
                const googleQuery = body.slice(8)
               if (isBanned) return reply(mess.only.benned)    
				if (!isUser) return reply(mess.only.userB)
				if (isLimit(sender)) return reply(limitend(pushname2))
                if(googleQuery == undefined || googleQuery == ' ') return reply(`*Resultado de búsqueda : ${googleQuery}* `)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Resultado : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Nombre* : ${results[i].title}\n\n*Descripción* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    reply(vars)
                }).catch(e => {
                    console.log(e)
                    denz.sendMessage(from, 'Google Error : ' + e);
                })
                await limitAdd(sender) 
                break 
                
                case 'addbucin':
                    if (!isOwner) return reply(mess.only.owner)
				    huu = body.slice(10)
						bucinrandom.push(huu)
						fs.writeFileSync('./database/json/bucin.json', JSON.stringify(bucinrandom))
						reply(`Se añadio\n*${huu}*\n a la base de datos`)
						break
                    case 'bucin':
                    case 'quotebucin':
                    if (isBanned) return reply(mess.only.benned)    
                    if (!isUser) return reply(mess.only.userB)
                    hasil = bucinrandom[Math.floor(Math.random() * (bucinrandom.length))]
                    denz.sendMessage(from, '*'+hasil+'*', text, {quoted: mek})
                    await limitAdd(sender)
            break
            case 'beritahoax':
                     if (!isUser) return reply(mess.only.userB)
                    denz.updatePresence(from, Presence.composing) 
					data = await fetchJson(`https://docs-jojo.herokuapp.com/api/infohoax`, {method: 'get'})
					teks = '=================\n'
					for (let i of data.result) {
						teks += `*Fotografía* : ${i.image}\n*Titulo* : ${i.title}\n*link* : ${i.link}\n*tag* : ${i.tag}\n=================\n`
					}
					reply(teks.trim())
					await limitAdd(sender)
					break 
case 'husbu':
				if (!isUser) return reply(mess.only.userB)
				try {
						res = await fetchJson(`https://tobz-api.herokuapp.com/api/husbu?apikey=BotWeA`)
						buffer = await getBuffer(res.image)
						denz.sendMessage(from, buffer, image, {quoted: mek, caption: '¡Recuerda! Ama a tu madre'})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply(' *ERROR* ')
					}
					await limitAdd(sender)
					break
            case 'nangis':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
                case 'ngewe':
				if (!isUser) return reply(mess.only.userB)
				if (!isNsfw) return reply(' *NSFW OF* ')
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'cium':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
					case 'peluk':
				if (!isUser) return reply(mess.only.userB)
				ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson('https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA', {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(rano)
						denz.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break		
					case 'moddroid':
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/moddroid?q=${body.slice(10)}&apikey=BotWeA`)
			hepi = data.result[0] 
			teks = `*Nombre*: ${data.result[0].title}\n*publicado*: ${hepi.publisher}\n*mod info:* ${hepi.mod_info}\n*size*: ${hepi.size}\n*ultima version*: ${hepi.latest_version}\n*genero*: ${hepi.genre}\n*link:* ${hepi.link}\n*download*: ${hepi.download}`
			buffer = await getBuffer(hepi.image)
			denz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
			case 'happymod':
				if (!isUser) return reply(mess.only.userB)
				data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`)
			hupo = data.result[0] 
			teks = `*Nombre*: ${data.result[0].title}\n*version*: ${hupo.version}\n*tamaño:* ${hupo.size}\n*root*: ${hupo.root}\n*publicado*: ${hupo.price}\n*link*: ${hupo.link}\n*download*: ${hupo.download}`
			buffer = await getBuffer(hupo.image)
			denz.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
			await limitAdd(sender)
			break
				default:
				if (budy.includes("://chat.whatsapp.com/")){
					if (!isGroup) return
					if (!isAntiLink) return
					if (isGroupAdmins) return reply(`*${pushname2}* Podrías ser expulsado por el admin`)
					denz.updatePresence(from, Presence.composing)
					if (messagesLink.includes("#izinadmin")) return reply("*_「 Aceptado 」_*")
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`*_「 Link detectado 」_*\nPerdón *${pushname2}* Enviaste un link *${groupMetadata.subject}*`)
						setTimeout( () => {
						denz.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
					}, 100)
		setTimeout( () => {
		denz.groupRemove(from, [Kick]).catch((e) => {reply(`*ERROR:* ${e}`)}) 
					}, 10)
		setTimeout( () => {
		reply(`*Te sacaré!*`)
		}, 0)
		}
		if (budy.includes("Bot")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/yawey.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Dead")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/ghostal.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/satan.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj kukira dia menyukaiku", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Still")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/StillDre.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Magic")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/magic.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Magic :)", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Bichota")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/bichota.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Epic")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/sergio.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("sergio")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/queq.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/nostoi.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : mamang garox remix", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Soy guapo")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/soy guapo.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/guapo.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj take away", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Tapi")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/tapi.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Moonlight")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/moonlight.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("Puto")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/Vetealv.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Gansta")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/ganstasp.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj into your arms", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("Dakiti")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/dakiti.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("Bebecita")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/bebecita.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("Amorfoda")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/amorfoda.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/triste.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj boma boma ye", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("Ouse")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/ouse.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj boma boma ye", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("Bot")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/queq.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/pvto.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj new rules", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("bot")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/queq.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/pvto.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj new rules", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/numa.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("numa")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/numa.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("away")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/away.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj take away", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
		if (budy.includes("bot")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("menyukaiku")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/menyukaiku.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj kukira dia menyukaiku", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("hallo")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("magic")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/magic.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : magic rude", 'jpegThumbnail': fs.readFileSync('./sticker/gorrito.webp')}}}})
        }
        if (budy.includes("brando")){
        brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
        denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Brando")){
        brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
        denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("Windah")){
        brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
        denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("windah")){
        brando = await getBuffer(`https://pencarikode.xyz/api/cita-cita?apikey=pais`, {method: 'get'})
        denz.sendMessage(from, brando, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("garox")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/garox.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : mamang garox remix", 'jpegThumbnail': fs.readFileSync('./sticker/azul.webp')}}}})
        }
        if (budy.includes("your")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/your.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj into your arms", 'jpegThumbnail': fs.readFileSync('./sticker/azul.webp')}}}})
        }
        if (budy.includes("pagi")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/pagi.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("halo")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("hai")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/hai.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
        if (budy.includes("tapi")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/tapi.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/azul.webp')}}}})
        }
        if (budy.includes("boong")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/boong.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj tapi boong", 'jpegThumbnail': fs.readFileSync('./sticker/azul.webp')}}}})
        }
        if (budy.includes("iri")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/azul.webp')}}}})
        }
        if (budy.includes("bilang")){
		denz.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./mp3/iri.mp3')
        denz.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj iri bilang boss", 'jpegThumbnail': fs.readFileSync('./sticker/azul.webp')}}}})
        }
        if (budy.includes("5213317595519")){  // respon tag ubah aja
        reply(`Que le quieres decir a mi dueño *${pushname2}*, no molestar por cosas fake`)
        const d = fs.readFileSync('./sticker/pvto.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Hola guap@", 'jpegThumbnail': fs.readFileSync('./sticker/azul.webp')}}}})
        }
        if (budy.includes("Crear bot")){  // respon tag ubah aja
        reply(`*${pushname2}*, En el canal hay tutoriales`)
        const d = fs.readFileSync('./sticker/dns.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Hola guap@", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Es el bot")){  // respon tag ubah aja
        reply(`*${pushname2}*, Soy mas que un simple bot. Vengo a dominar al mundo`)
        const d = fs.readFileSync('./sticker/pvto.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Hola guap@", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Es el simi")){  // respon tag ubah aja
        reply(`*${pushname2}*, No es el simi, tengo vida propia y hablo`)
        const d = fs.readFileSync('./sticker/pvto.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Hola guap@", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Callate bot")){  // respon tag ubah aja
        reply(`*${pushname2}*, Callate tu mongolo`)
        const d = fs.readFileSync('./sticker/pvto.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Hola guap@", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Hay bot?")){  // respon tag ubah aja
        reply(`*${pushname2}*, Ya estoy activo`)
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Hola guap@", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
        if (budy.includes("Activen al bot")){  // respon tag ubah aja
        reply(`*${pushname2}*, Ya estoy activo`)
        const d = fs.readFileSync('./sticker/jget.webp');
        denz.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Hola guap@", 'jpegThumbnail': fs.readFileSync('./sticker/guapa.webp')}}}})
        }
		if (budy.includes(`Thanks`)) {
                  reply(`De nada *${pushname2}* >-<`)
                  }
                  if (budy.includes(`Gracias`)) {
                  reply(`De nada *${pushname2}* >-<`)
                  }
                  if (budy.includes(`Tq`)) {
                  reply(`Yo más *${pushname2}* >-<`)
                  }
                  if (budy.includes(`Thx`)) {
                  reply(`De nada *${pushname2}* >-<`)
                  }
                  if (budy.includes(`Te amo`)) {
                  reply(`Yo más *${pushname2}*`)
                  }
                  if (budy.includes(`Bot`)) {
                  reply(`Que quires *${pushname2}*`)
                  }
                  if (budy.includes(`bot`)) {
                  reply(`Que quieres*${pushname2}*`)
                  }
                  if (budy.includes(`simi`)) {
                  reply(`No soy simi soy mas que eso *${pushname2}*`)
                  }
                  if (budy.includes(`Fake`)) {
                  reply(`Fake tu ex *${pushname2}*`)
                  }
                  if (budy.includes(`V3`)) {
                  reply(` Que acaso quieres mi github? es priv sorry*${pushname2}*`)
                  }
                  if (budy.includes(`thanks`)) {
                  reply(`De nada *${pushname2}*,>-<`)
                  }
                  if (budy.includes(`github`)) {
                  reply(`Mmm acosador, buscas a mis hermanos bots *${pushname2}*,`)
                  }
                  if (budy.includes(`Github`)) {
                  reply(`Mmm acosador, buscas a mis hermanos bots *${pushname2}*,`)
                  }
                  if (budy.includes(`Git`)) {
                  reply(`Mmm acosador, buscas a mis hermanos bots *${pushname2}*,`)
                  }
                  if (budy.includes(`git`)) {
                  reply(`Mmm acosador, buscas a mis hermanos bots *${pushname2}*,`)
                  }
			      if (budy.includes(`F`)) {
                  reply(`F *${pushname2}*`)
                  }
                  if (budy.includes(`f`)) {
                  reply(`f *${pushname2}*`)
                  }
                  if (body.startsWith(`${prefix}${command}`)) {
comd = `      ────────────────\nHola *${pushname2}* !!!\nEl comando no esta en mi lista *${prefix}${command}*\nUsa menu para verla*${prefix}menu*\n      ────────────────`
denz.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Usa #menu", 'jpegThumbnail': fs.readFileSync('./sticker/azul.webp')}}}})
				  }
                  if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[db]','aqua'), 'Comando no registrado', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'white'))
		}
	})
}
starts()
    