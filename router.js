let renderer = require('./renderer');
let timestamp = require('./timestamp');
module.exports.home = (req, res) => {
    if (req.url === '/'){
        res.writeHead(200,{'Content-Type' : 'text/html'});
        renderer.viewHtml(res,'home');
    }
};

module.exports.time = (req, res) => {
    let path = req.url.toString().replace('/','').replace('%20',' ');
    if (path.length > 0 && path !== 'favicon.ico'){
        let timeObject = {
            unix : null,
            natural : null
        }
        if (timestamp.timeToUnix(path) !== 'NaN'){
            console.log(timestamp.timeToUnix(path));
            timeObject.unix = timestamp.timeToUnix(path);
            timeObject.natural = path;
        }
        else if (timestamp.unixToTime(path) !== 'error'){
            timeObject.unix = path;
            timeObject.natural = timestamp.unixToTime(path);
        }
        res.writeHead(200,{'Content-Type' : 'text/plain'});
        res.end(JSON.stringify(timeObject));
    }
}