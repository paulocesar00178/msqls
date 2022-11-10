const { appendFile } = require("fs")

const conn=mysql . createConnection({
    host:'localhost',
    user:'host',
    passoword:'',
    database:'nodemysqll'
})

conn.connect(function (err){

    if(err){
    console.log(err)
}
    console.log('conectado ao mysql')


    appendFile.listen(port)
})