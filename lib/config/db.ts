import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        const user = await mongoose.connect('mongodb+srv://pawan30jul:pawan30jul@cluster0.slmoy.mongodb.net/blogapp');
        console.log("Database is Connected", user);
    } catch (error) {
        console.log((error as Error).message, 'error');
    }
}

export default ConnectDB;