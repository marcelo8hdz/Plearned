const sql = require('mssql')

const config = {
    user: 'NT Service\MSSQLSERVER',
    password: '123contraseña123',
    database: 'bdplearnium',
    server: 'localhost',
    options: {
    trustedConnection: true
  }
} 

let stringConnection = 'Server=tcp:webplearniumdb.database.windows.net,1433;Initial Catalog=WebPlearniumDB;Persist Security Info=False;User ID=webplearniumdb;Password=Webplearnium123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;'

const poolPromise = new sql.ConnectionPool(stringConnection)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}

