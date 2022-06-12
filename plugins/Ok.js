let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://telegra.ph/file/3c94a903dadc7d621ba4e.png', m, { packname: "sticker by", author: "Fikrii" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
