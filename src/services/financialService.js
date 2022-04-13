import * as financialRepository from "../repositories/financialRepository.js";
import * as errors from "../utils/errorUtils.js";

export async function createNewFinancial(value, type, id) {
  await financialRepository.insertNewFinancial(id, value, type);
}

export async function getEvents({ id }) {
  const events = financialRepository.selectEventsFinancial(id);

  return events.rows;
}

export async function getSumEvents(events) {
  const sum = events.reduce(
    (total, event) =>
      event.type === "INCOME" ? total + event.value : total - event.value,
    0
  );

  return sum;
}
