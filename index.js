///Code
//Join
client.on('message', message => {
         let messageArray = message.content.split(" ");
    let args = messageArray.slice(1).join(" ");
if (id.includes(message.author.id)) 
{
    if(message.content.startsWith(prefix + "join")) {
  console.log("Joining..."); 
  let hope = client.channels.get(`${args}`)
  
  hope.join();
}
}})
//Leave
client.on('message', message => {
  let messageArray = message.content.split(" ");
    let args = messageArray.slice(1).join(" ");
  if (id.includes(message.author.id)) 
{
    if(message.content.startsWith(prefix + "leave")) {
  console.log("Leaving..."); 
  let hope = client.channels.get(`${args}`)
  hope.leave();
}
}})
///Login
client.login(process.env.token);
