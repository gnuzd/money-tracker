import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;
const SECRET_KEY = process.env.SECRET_KEY!;

export function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
}

export function comparePassword(password: string, hash_pw: string) {
  return bcrypt.compare(password, hash_pw);
}

export function generateToken(data: object) {
  return jwt.sign(data, SECRET_KEY);
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET_KEY);
}
