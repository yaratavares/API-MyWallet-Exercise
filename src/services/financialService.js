import * as financialRepository from "../repositories/financialRepository.js";
import * as errors from "../utils/errorUtils.js";

export async function createNewFinancial({ value, type }, { id }) {
  if (!value || !type) {
    throw errors.unprocessableError("informations not valid");
  }

  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    throw errors.unprocessableError(
      "informations type is not INCOME or OUTCOME"
    );
  }

  if (value < 0) {
    throw errors.unprocessableError("value need to be bigger then zero");
  }

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
