function wrongData() {
  return {
    type: "wrongData",
    message: `The fields are wrong!`,
  };
}

function conflict(resource) {
  return {
    type: "conflict",
    message: `${resource} already exist.`,
  };
}

function notFound(resource) {
  return {
    type: "notFound",
    message: `${resource} not found.`,
  };
}
function sameCity() {
  return {
    type: "sameCity",
    message: `Origin and destination cities must be different.`,
  };
}
function invalidDate() {
  return {
    type: "invalidDate",
    message: `Selected date is invalid/past date for flight booking.`,
  };
}


export const errors = {
  wrongData,
  conflict,
  notFound,
  sameCity,
  invalidDate
};
