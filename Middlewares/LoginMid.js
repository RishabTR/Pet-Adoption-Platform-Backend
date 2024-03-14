const bcrypt = require('bcrypt');
const { User } = require('../Database/schema');

const LoginMiddleware = async (req, res) => {
    const { username, password } = req.body;
    console.log(username,password);
    try {
        const user = await User.findOne({ username });
        console.log(user)
        if (!user) {
            // Username not found
            return res.status(201).json({ message: "User name not found" });
        }

        // const passwordMatch = await bcrypt.compare(password, user.password);
        // console.log(password)
        // console.log(user.password)       
        else if (password == user.password) {
            return res.status(200).json({ message: "Login Successful" });
        }
        else{
            return res.status(201).json({message:"Password Incorrect"})
        }
    } catch (e) {
        console.error("Error during login:", e);
        res.status(500).json({ message: "An error occurred during login" });
    }
}

module.exports = LoginMiddleware;
