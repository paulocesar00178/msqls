app.post('/books/insertbook',(req,res)=>{


const title =req.body.title
const page =req.body.pages

const query = 'INSERT INTO books (title,page)VALUES('

    conn.query (query,funcion(err){
        if (err ){
              console.log(err){
            }
            res.rediresct('/')
})
