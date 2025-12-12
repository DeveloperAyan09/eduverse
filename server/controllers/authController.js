const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {


    let { name, email, phone, password } = req.body

    if (!name || !email || !phone || !password) {
        res.status(400)
        throw new Error("Please Fill All Details")
    }



    let emailExist = await User.findOne({ email: email })
    let phoneExist = await User.findOne({ phone: phone })

    if (emailExist || phoneExist) {
        res.send(400)
        throw new Error("User Already Exist")
    }


    if (phone.length !== 10) {
        res.status(400)
        throw new Error("Please Enter Valid Phone Number")
    }

    //Hash Password

    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)


    let user = await User.create({
        name,
        email,
        phone,
        password: hashedPassword
    })


    if (!user) {
        res.status(400)
        throw new Error("User Not Created")
    }


    res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        isActive: user.isActive,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
        token: generateToken(user.id)
    })


}


const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        res.status(400)
        throw new Error("Please Fill All Details")
    }


    const user = await User.findOne({ email })


    if (user && await bcrypt.compare(password, user.password)) {
        if (user.isActive) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                isActive: user.isActive,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
                token: generateToken(user.id)
            })
        } else {
            res.status(401)
            throw new Error('Account Disabled!. Contact Admin')
        }
    } else {
        res.status(401)
        throw new Error('Invalid Credentials')
    }




}


const privateController = async (req, res) => {
    console.log(req.user)
    res.json({
        msg: "I am Private Route On Loggedin User can Access Me"
    })
}



//Generate Token
const generateToken = (id) => {
    let token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "15d" })
    return token
}

module.exports = { registerUser, loginUser, privateController }