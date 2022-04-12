import * as financialService from "../services/financialService.js";

export async function newFinancial(req, res) {
  const financial = req.body;
  const { user } = res.locals;

  financialService.createNewFinancial(financial, user.id);

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
