import bcrypt from 'bcrypt';
import { Users } from '../connections/databaseConnection.js';
import sendSms from '../functions/sendSms.js';
import jwt from 'jsonwebtoken';
export const signUp = async (req, res) => {
    try {
        const { name, password, username, phone } = req.body;
        // Validate request body
        if (!name || !password || !username || !phone) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        // Check if the username is already taken
        const existingUser = await Users.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user with the hashed password
        const newUser = new Users({
            name,
            password: hashedPassword,
            username,
            phone,
        });
        const token = jwt.sign({ username: newUser.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
        // Save the user to the database
        await newUser.save();
        res.status(201).json({
            "Access_Token": token,
            "message": "Signup Successful"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        // Validate request body
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required' });
        }
        // Check if the user exists
        const user = await Users.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Ensure that user.password is non-null and non-undefined
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        // Generate a JSON Web Token (JWT)
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).json({
            "Access_Token": token,
            "message": "Login Successful"
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Internal server error',
        });
    }
};
export const updateUser = async (req, res) => {
    try {
        const { username, name, phone } = req.body;
        // Validate request body
        if (!name && !phone) {
            return res.status(400).json({ message: 'Invalid request' });
        }
        // Check if the user exists
        const user = await Users.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (name) {
            user.name = name;
        }
        // if (password) {
        //   // Hash the new password
        //   const hashedPassword = await bcrypt.hash(password, 10);
        //   user.password = hashedPassword;
        // }
        if (phone) {
            user.phone = phone;
        }
        // Save the updated user to the database
        await user.save();
        res.status(200).json({ message: 'User updated successfully' });
    }
    catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const updatePassword = async (req, res) => {
    const { username, currentPassword, newPassword } = req.body;
    try {
        // Validate request body
        if (!username && !newPassword) {
            return res.status(400).json({ message: 'Invalid request' });
        }
        // Check if the user exists
        const user = await Users.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Ensure user.password is a string before proceeding
        if (typeof user.password !== 'string') {
            return res.status(500).json({ message: 'Invalid user data' });
        }
        // Compare the current password with the stored hash
        const passwordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!passwordMatch) {
            // If passwords don't match, return an error
            return res.status(401).json({ message: 'Current password is incorrect' });
        }
        // Hash the new password
        const newHashedPassword = await bcrypt.hash(newPassword, 10);
        // Update the user's password in the database
        user.password = newHashedPassword;
        await user.save();
        res.status(200).json({ message: 'Password updated successfully' });
    }
    catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const getUser = async (req, res) => {
    try {
        const username = req.username;
        // Validate request parameters
        if (!username) {
            return res.status(400).json({ message: 'Invalid request' });
        }
        // Check if the user exists
        const user = await Users.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (user.balance < 0) {
            user.balance = 0;
            user.save();
        }
        // Return the user details
        res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export const sendOTP = async (req, res) => {
    try {
        const data = await sendSms("+8801761143991", "Your verification code is 45464");
        console.log(data);
        res.status(200).json(data);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
};
