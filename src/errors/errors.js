function wrongData() {
  return {
    type: "wrongData",
    message: `The fields are wrong!`,
  };
}

function conflict(resource) {
  return {
    type: "conflict",
    message: `${resource} already exist`,
  };
}


export const errors = {
  wrongData,
  conflict
};
