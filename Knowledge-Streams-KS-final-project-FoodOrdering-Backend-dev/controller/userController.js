// const jwt = require("jsonwebtoken");
// const users = require("../Models/usersceema");
// const bcrypt = require("bcryptjs");
// const jwtSecret = "jwt-secretyuiop-wjcgeejke";

// const createUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   const hashPassword = bcrypt.hashSync(password, 10);
//   const newUser = new users({ name, email, password: hashPassword });
//   await newUser.save();
//   res.status(201).json("User Created");
// };

// const Login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const validUser = await users.findOne({ email });
//     console.log(req.body);
//     if (!validUser) return 404, "User not found!";
//     const validPassword = bcrypt.compareSync(password, validUser.password);
//     if (!validPassword) return 401, "Wrong credential!";
//     const data = {
//       user: {
//         id: validUser.id,
//       },
//     };
//     const authToken = jwt.sign(data, jwtSecret);
//     return res.status(200).json({ success: true, authToken: authToken });
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = { createUser, Login };

const jwt = require("jsonwebtoken");
const users = require("../Models/usersceema");
const bcrypt = require("bcryptjs");
const jwtSecret = "jwt-secretyuiop-wjcgeejke";

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new users({ name, email, password: hashPassword });
    await newUser.save();
    res.status(201).json({ success: true, message: "User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const validUser = await users.findOne({ email });

    if (!validUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found!" });
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ success: false, message: "Wrong credentials!" });
    }

    const data = {
      user: {
        id: validUser.id,
      },
    };
    const authToken = jwt.sign(data, jwtSecret);
    res.status(200).json({ success: true, authToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const getUserProfile = async (req, res) => {
  try {
    console.log(req);
    const userId = req.users._id;
    const userProfile = await users.findById(userId);

    if (!userProfile) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.status(200).json({
      success: true,
      email: userProfile.email,
      name: userProfile.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { createUser, login, getUserProfile };
module.exports = { createUser, login };
