const { token, guildID } = require('./config.json');
const phin = require('phin').unpromisified

headers = {'Authorization': "Bot " + token}

  setInterval(() =>{
    
 
           phin({
            url: `https://discord.com/api/v8/guilds/${guildID}/members?limit=100`,
            method: 'GET',
            parse: 'json',
            headers: headers
         }, (err, res) => {
            res.body.forEach(member=>{


            phin({
              url:`https://discord.com/api/v9/guilds/${guildID}/bans/${member.user.id}?reson=yikes`,
              method:'PUT',
              parse: 'json',
              headers: headers
            }, (err, res) =>{
              if(!res.body){
              
                console.log(`${member.user.username} got banned`)
              }

            })
            })
            
   })
  }, 2100)
