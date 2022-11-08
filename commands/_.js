/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.contact) {
    Bot.run({
        command: "send-contact",
        options: {
            phone_number: request.contact.phone_number
        }
    })
}

if (request.location) {
    Bot.run({
        command: "send-location",
        options: {
            location: request.location
        }
    })
}
