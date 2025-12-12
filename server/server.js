const express = require("express")
const connectDB = require("./config/dbConfig")
const path = require("path")
const errorHandler = require("./middleware/errorHandler")
require("dotenv").config()


const PORT = process.env.PORT || 5000
const app = express()

//DB CONNECTION
connectDB()


//Body PArser
app.use(express.json())
app.use(express.urlencoded());





//Default Route

if(process.env.NODE_ENV === "production"){
    const __dirname = path.resolve();
    app.use(express.static(path.join(__dirname, "/client/dist")))

    app.get("/",(req,res)=>{
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
    })
}else{
    app.get("/", (req,res)=>{
        res.send("API is running... (development mode)")
    })
}


//Auth Routes
app.use("/api/auth", require("./routes/authRoutes"))

//Listing Routes
app.use("/api/product", require("./routes/productRoute"))

//Messages Routes
app.use("/api/message", require("./routes/messageRoutes"))

//Event Routes
app.use("/api/event", require("./routes/eventRoutes"))

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"))

//Error Handler
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT PORT : ${PORT}`);
});
