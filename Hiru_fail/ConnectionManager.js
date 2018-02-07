module.exports=function(){

    this.dbConnections = [];
    
    this.dbConnections["hiru"] = {
        host: process.env.EndPoint_rdsHiru,
        port: 3306,
        user: "test",
        password: "12345678",
        database: "hiru",
    };
    
    };