const mongoose = require('mongoose');
const connect = async () => {

    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}
//Crate a Schema
const LoginSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
//Collection Part
const collection = new mongoose.model("users", LoginSchema);
// module.exports = collection;
module.exports = connect, collection;