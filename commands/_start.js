/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

let text = "Hello! " +
    '<a href="' + 'tg://user?id=' + 
       user.telegramid + '">' + user.first_name +
    '</a> ' +
    "welcome to demo keyboard button tools bot " +
    'Demo bot builded by <a href="' + 'tg://user?id=606228013">' +
    'SRB </a>'

var keyboard = [
    [{
        text: "Send Phone Number",
        request_contact: true
    }],
    [{
        text: "Send Location",
        request_location: true
    }]
]

Api.sendMessage({
    text: text,
    parse_mode: "html",
    reply_markup: {
        keyboard: keyboard,
        resize_keyboard: true// for big buttons
    }
});
