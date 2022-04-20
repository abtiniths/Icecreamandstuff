const zlib = require('zlib')
module.exports = (sequelize, DataTypes) => { 
    
   const Flavour = sequelize.define('flavour', {
   
       flavour: {
           type: DataTypes.STRING,
           unique: true,
       },
       vote: {
           type: DataTypes.INTEGER,
           defaultValue: 10
       }, 
       description: {
           type: DataTypes.STRING,
           set(value) {
               const compressed = zlib.deflateSync(value).toString('base64');
               this.setDataValue('description', compressed);
           },
           get() {
               const value = this.getDataValue('description');
               const uncompressed = zlib.inflateSync(Buffer.from(value, 'base64'));
               return uncompressed.toString();
           }
       }  
       
   });
   
  return Flavour
   }

  
   
   
   
    
   
   
   
  

   