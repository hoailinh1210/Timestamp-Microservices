let fs = require('fs');
let dirHtml = './view/public_html';
module.exports.viewHtml = (res, nameFile) => {
    let pathFile = `${dirHtml}/${nameFile}.html`;
    fs.stat(pathFile, (err)=>{
        if (err){
            res.writeHead(404);
            res.end('File Not Found');
        }
        else{
            let file = fs.createReadStream(pathFile);
            file.pipe(res);
        }
    });
}