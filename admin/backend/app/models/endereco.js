
module.exports = (sequelize, DataTypes) =>{
    const Endereco = sequelize.define('Endereco',{
        
        rua:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numero:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        bairro:{
            type: DataTypes.STRING,
            allowNull: false
        },
        cidade:{
            type: DataTypes.STRING,
            allowNull: false
        },
        uf:{
            type: DataTypes.CHAR,
            allowNull: false
        },
        cep:{
            type: DataTypes.STRING,
            allowNull: false
        },
        complemento:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return Contato
}