import mongoose from 'mongoose'

const connectDB = async(DB_URL)=>{
    try {
        const DB_OPTIONS = {
            dbName: 'rest_api'
        }
        await mongoose.connect(DB_URL, DB_OPTIONS)
        console.log(`DB Connected`)
        
    } catch (error) {
        console.log(error)
    }
}
export default connectDB