const months = ['','January','February','March','April','May','June','July','August','September',
                'October','November','December'];
module.exports.timeToUnix = function(time){
    return (Date.parse(time)/1000).toString();
}
module.exports.unixToTime = function (unix){
    let date = new Date(parseInt(unix)*1000);
    console.log(date);
    if (date === 'Invalid Date'){
        return 'error';
    }
    else{
        return date.toDateString();
    }
}