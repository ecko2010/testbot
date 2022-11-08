/*CMD
  command: send-contact
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var line = "-----------------------------------"

Bot.sendMessage("_Thank You For Sharing your phone number_\n*" +
    line + "*\n*Your Number is:* `+" + options.phone_number + "`")

let admin_phone_text = "<b>Phone Number From:</b> " +
    '<a href="' + 'tg://user?id=' + user.telegramid + '">' + user
    .first_name + '</a>' + ' <code>' + user.telegramid +
    '</code>' + " \n<b>" + line + " </b>\n" +
    "<b>Number:</b> <code>+" + options.phone_number +
    "</code>"

var ADMIN_ID = AdminPanel.getPanelValues("AdminInfo").ADMIN_ID;
var channel_name = AdminPanel.getPanelValues("Chanell").channel_name;

function sendMessage(chat_id, text){
    if(!chat_id){ return }
    Api.sendMessage({
        chat_id: chat_id,
        text: text,
        parse_mode: "html"
    }) 
}

//notifiy admin if any user entered phone number
sendMessage(ADMIN_ID, admin_phone_text)

/*Save phone number in a channel*/
sendMessage(channel_name, admin_phone_text)
