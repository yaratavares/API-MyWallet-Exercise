import * as financialService from "../services/financialService.js";

export async function newFinancial(req, res) {
  const { value, type } = req.body;
  const { id } = res.locals.user;
  console.log(value);
  console.log(type);

  if (!value || !type) {
    throw errors.unprocessableError("informations not valid");
  }

  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    res.sendStatus(422);
  }

  if (value < 0) {
    res.sendStatus(422);
  }

  await financialService.createNewFinancial(value, type, id);

  res.sendStatus(201);
}

export async function getFinancialEvents(req, res) {
  const { user } = res.locals;

  const events = await financialService.getEvents(user);

  res.send(events);
}

export async function getFinancialSum(req, res) {
  const { user } = res.locals;

  const events = await financialService.getEvents(user);

  const sum = financialService.getSumEvents(events);

  res.send({ sum });
}
