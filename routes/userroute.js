const express = require("express");
const router = express.Router();
const User = require("../model/usermodule");

router.post("/studentregister", (req, res) => {
  const { name, email, password, role } = req.body;
  const NewUser = new User({ name, email, password, role });
  try {
    NewUser.save();
    res.send("User Successfully registered");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/teacherregister", (req, res) => {
  const { name, email, password, role } = req.body;
  const NewUser = new User({ name, email, password, role });
  try {
    NewUser.save();
    res.send("User Successfully registered");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/studentlogin", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await User.find({ email, password, role });
    if (user.length > 0) {
      const current_user = {
        name: user[0].name,
        email: user[0].email,
        role: user[0].role,
        _id: user[0]._id,
      };
      res.send(current_user);
    } else throw "login failed";
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});
router.post("/teacherlogin", async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const user = await User.find({ email, password, role });
    if (user.length > 0) {
      const current_user = {
        name: user[0].name,
        email: user[0].email,
        role: user[0].role,
        _id: user[0]._id,
      };
      res.send(current_user);
    } else throw "login failed";
  } catch (error) {
    return res.status(400).json({ message: "user Not found" });
  }
});

module.exports = router;
