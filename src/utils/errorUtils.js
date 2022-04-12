export function notFoundError(message) {
  return { type: "not_found", message };
}

export function conflictError(message) {
  return { type: "conflict", message };
}

export function unprocessableError(message) {
  return { type: "unprocessable_entity", message };
}

export function unauthorizedError(message) {
  return { type: "unauthrorized", message };
}
