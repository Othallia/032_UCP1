module.exports = (sequelize, DataTypes) => {
    const music = sequelize.define('music', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Nama:{
        type: DataTypes.STRING,
    },
    Author:{
        type: DataTypes.STRING,
    },
    TahunTerbit:{
        type: DataTypes.INTEGER,
    },
    Genre:{
        type: DataTypes.STRING,
    }
    
    });
    return music;
};
