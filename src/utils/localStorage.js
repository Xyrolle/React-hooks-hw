export const saveState = (value) => {
  localStorage.setItem("tasks", JSON.stringify(value));
};

export const getState = () => {
  return JSON.parse(localStorage.getItem("tasks"));
};
