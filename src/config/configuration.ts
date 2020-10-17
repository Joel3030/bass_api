export default () => ({
    PORT: parseInt(process.env.PORT, 10) || 4000,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost/test',
    JWT_SECRET: process.env.JWT_SECRET   || 'ASDMADFL56548458S4DAS4DASD1',  
    DEFAULT_USERNAME: process.env.DEFAULT_USERNAME   || 'admin',  
    DEFAULT_PASSWORD: process.env.DEFAULT_PASSWORD   || '@admin3030', 
     
  });