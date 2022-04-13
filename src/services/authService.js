import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import * as authRepository from "../repositories/authRepository.js";
import * as errors from "../utils/errorUtils.js";

export async function findUserById(name, email, password) {
  const existingUsers = await authRepository.findUserByEmail(email);

  if (existingUsers > 0) {
    throw errors.conflictError("this user already exist");
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  await authRepository.signUpNewUser(name, email, hashedPassword);
}

export async function userSignIn(email, password) {
  const user = await authRepository.findUserByEmail(email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw errors.unauthorizedError("user not authorized");
  }

  return jwt.sign({ id: user.id }, process.env.JWT_SECRET);
}

export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET);
}
