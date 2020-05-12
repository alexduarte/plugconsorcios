class Client {
    constructor(name){
        this.name = name
    }

    static AddClientSQL(name){
        let sql = `Insert into Clients(name)  
                   Values('${name}')`
        return sql
    }

    static getAllClientSQL(){
        let sql = 'Select * from Clients'
        return sql
    }
}


module.exports = Client