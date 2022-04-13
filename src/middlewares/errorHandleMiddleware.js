export default function errorHandlerMiddleware(error, req, res, next) {
  if (error.type === "not_found") return res.sendStatus(404);

  if (error.type === "conflict") return res.sendStatus(409);

  if (error.type === "unprocessable_entity") return res.sendStatus(422);

  if (error.type === "unauthrorized") return res.sendStatus(401);

  console.log(error);
  return res.sendStatus(500);
}
