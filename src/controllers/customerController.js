const controller ={};

controller.list = (req, res)=>{
    req.getConnection((err,conn)=>
    {
        conn.query('SELECT * FROM customer ORDER BY votos DESC', (err, result)=> {
            
            res.render('customers',{
                data: result
                

            });
        });
    });
};
controller.save =(req,res) =>{
    
    const data = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO customer set ?', [data], (err, result)=>{
           
            res.redirect('/');
            
        })
    })
    
};

controller.edit=(req,res)=>{
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, result) => {
           
            res.render('update',{
                data: result[0]
            });
            
        });
    });

}

controller.update=(req,res)=>{
    const id = req.params.id;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer set ? WHERE id = ?', [newCustomer,id], (err, result) => {
           
            res.redirect('/');
            
        });
    });

}

controller.delete = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, result) => {
           
            res.redirect('/');
            
        });
    });
};

controller.incrementVotes = (req, res) => {
    const id = req.params.id;
    req.getConnection((err, conn) => {
        conn.query('UPDATE customer SET votos = votos + 1 WHERE id = ?', [id], (err, result) => {
            res.redirect('/');
        });
    });
};
module.exports = controller;