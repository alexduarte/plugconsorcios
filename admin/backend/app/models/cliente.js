
module.exports = (sequelize, DataTypes) => {
    
    const Cliente = sequelize.define('Cliente', {
        NomeEmpresa: DataTypes.STRING,
        
    })

    return Cliente 
}