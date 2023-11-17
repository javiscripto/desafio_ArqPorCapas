import dotenv from "dotenv";

dotenv.config()
export default{
    PORT:process.env.PORT,
    mongoString:process.env.mongoString,
}