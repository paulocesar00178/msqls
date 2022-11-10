app.get('/books',(req,res)=>{

const quiery = "SELECT*FROM books"
  
    
    conn.query(quiry,funcion(err,data){
        if (err){
            console.log(err)
            return

        }
        
        const books = data
        console.log (books)

    })

    