import { User } from "../models/userModels.js";
import bcrypt from "bcryptjs";
export const register = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password doesn't match" });
    }
    const user = await User.findOne(username);
    if (user) {
      return res
        .status(400)
        .json({ message: "Username already exist, choose another" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    // profile photo
    const malePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femalePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    await User.create({
      fullName,
      username,
      password: hashedPassword,
      profilePhoto: gender === male ? malePhoto : femalePhoto,
      gender,
    });
  } catch (error) {}
};
