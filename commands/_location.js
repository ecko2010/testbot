/*CMD
  command: /location
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!params) { return }

let array = params.split(' ')
let lng = array[0]
let lat = array[1]

if (lng && lat){
  Api.sendLocation({ longitude: lng, latitude: lat })
}else{
  Bot.sendMessage("*Something went wrong*")
}
