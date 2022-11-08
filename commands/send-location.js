/*CMD
  command: send-location
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var line = "-----------------------------------"

let user_text =
    "_Thank You For Sharing your current location_\n*Your Location Is:* \n*" +
    line + "*\n*Longitude:* `" + options.location.longitude +
    "`\n" + "*Latitude:* `" + options.location.latitude + "`"

Bot.sendInlineKeyboard([{
    title: "Show it",
    command: "/location" + " " + options.location
        .longitude + " " + options.location.latitude
}], user_text)

let admin_text = "<b>Location From:</b> " + '<a href="' +
    'tg://user?id=' + user.telegramid + '">' + user.first_name +
    '</a>' + ' <code>' + user.telegramid + '</code>' + " \n<b>" +
    line + "</b>\n<b>Longitude:</b> <code>" + options.location
    .longitude + "</code>\n" + "<b>Latitude:</b> <code>" + request
    .location.latitude + "</code>"


var admin_button = [
    [{
        text: "View Location",
        callback_data: "/location " + 
            options.location.longitude + " " + options.location.latitude
    }]
]

var ADMIN_ID = AdminPanel.getPanelValues("AdminInfo").ADMIN_ID;
var channel_name = AdminPanel.getPanelValues("Chanell").channel_name;


//send notification to admin if user enter location
if (ADMIN_ID) {
    Api.sendMessage({
        chat_id: ADMIN_ID,
        text: admin_text,
        parse_mode: "html",
        reply_markup: {
            inline_keyboard: admin_button
        }
    })
}

//Stote your bot data on a channel. you can set channel on your bb app adminpanel.
if (!channel_name) { return }

Api.sendMessage({
    chat_id: log_channel,
    text: admin_text,
    parse_mode: "html"
})

Api.sendLocation({
    chat_id: log_channel,
    longitude: options.location.longitude,
    latitude: options.location.latitude
})
