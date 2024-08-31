const mongoose = require('mongoose');
const connectDB = async () => {
try {
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    
}catch(err){
    console.log(`Error ${err.message}`);
    // if exist an error, it will fail the process. 
    process.exit(1);
}
}

module.exports = connectDB;

