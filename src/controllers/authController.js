import * as authService from "../services/authService.js";

export async function signUp(req, res) {
  const user = req.body;

  await authService.findUserById(user);

  res.sendStatus(201);
}

export async function signIn(req, res) {
  const user = req.body;

  const token = await authService.userSignIn(user);

  res.send({ token });
}
