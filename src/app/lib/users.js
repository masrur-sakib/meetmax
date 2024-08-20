import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: uuidv4(),
    name,
    email,
    password: hashedPassword,
  };
  users.push(newUser);
  return newUser;
};

export const getUserByEmail = (email) => {
  return users.find((user) => user.email === email);
};

export const validatePassword = async (user, inputPassword) => {
  return bcrypt.compare(inputPassword, user.password);
};
