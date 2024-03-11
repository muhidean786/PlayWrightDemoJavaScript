const { Console } = require("console")


class DatabaseConnection{

    constructor (page)
    {
        this.page = page
    }
    async DBQuery(Name){




// var connection = new ActiveXObject("ADODB.Connection") ;

// var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

// connection.Open(connectionstring);
// var rs = new ActiveXObject("ADODB.Recordset");

// rs.Open("SELECT * FROM table", connection);
// rs.MoveFirst
// while(!rs.eof)
// {
//    document.write(rs.fields(1));
//    rs.movenext;
// }
// rs.close; 
        console.log('Executing the following query from DB for Backend Validation')
        console.log("Select * from Customer table where First name  = '"+Name+"'")
// connection.close; 



    }
}

module.exports = {DatabaseConnection}