import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Users } from '../connections/databaseConnection';
import { AuthenticatedRequest } from '../middlewares/checkLogin';
const jwt = require('jsonwebtoken');



export const signUp = async (req: Request, res: Response) => {
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const login = async (req: Request, res: Response) => {
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
    const passwordMatch = await bcrypt.compare(password, user.password!);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JSON Web Token (JWT)
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });


    res.status(200).json({
      "Access_Token": token,
      "message": "Login Successful"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',

    });
  }
};



export const updateUser = async (req: Request, res: Response) => {
  try {
    const { username,name, password, phone } = req.body;

    // Validate request body
    if(!name && !password && !phone) {
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

    if (password) {
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    if (phone) {
      user.phone = phone;
    }

    // Save the updated user to the database
    await user.save();

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const getUser = async (req: AuthenticatedRequest, res: Response) => {
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

    // Return the user details
    res.status(200).json({
      name: user.name,
      username: user.username,
      phone: user.phone,
      date: user.date,
      // Add any other user properties you want to include
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

