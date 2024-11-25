// connect db
import mongoose  from "mongoose";   

export const ConnectDb  = {
   mongoose : async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log(error);
        
    }
   }
}