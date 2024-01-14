import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { Users } from '../connections/databaseConnection';

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

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const login = async (req: Request, res: Response) => {
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

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
