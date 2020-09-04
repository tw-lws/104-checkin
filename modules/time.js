const date = new Date();
const current_time = function(){
    const current_time = date.getFullYear()+'-'+("0" + (date.getMonth() + 1)).slice(-2)+'-'+("0" + date.getDate()).slice(-2)+'_'+date.getHours()+'-'+date.getMinutes()
    return current_time
} 

// console.log(current_time())

const random_secs = function(max_secs){
    const secs = Math.floor(Math.random()*max_secs)*1
    return secs;
}
// console.log(random_secs(1000))

module.exports = {
    current_time,
    random_secs
}