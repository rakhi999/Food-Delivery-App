


import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("DB Connected")
        console.log("DATABASE NAME:", mongoose.connection.db.databaseName)
        console.log("MONGO_URI:", process.env.MONGO_URI)
    })
    .catch((err)=>console.log("DB Error:", err))
};