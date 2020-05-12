
module.exports = (sequelize, DataTypes) =>{
    const Contato = sequelize.define('Contato',{
        
        telefone:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        site:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Contato
}