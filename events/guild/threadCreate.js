//The Module
module.exports = async (client, thread) => {
    try{
        if(thread.joinable && !thread.joined){
            await thread.join();
        }
    }catch (e){
        console.log(String(e).grey)
    }
}
/**
 * @INFO
 * Bot Coded by Itachi#2711 | https://discord.gg/milrato
 * @INFO
 * Work for Milrato Development | https://
 * @INFO
 * Please mention him / Milrato Development, when using this Code!
 * @INFO
 */
