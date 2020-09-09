/*
  Format a string so its first letter will be in upper case
*/
export const formatTitle = (title) => {
  const lowerCaseTitle = title.toLowerCase();
  return `${lowerCaseTitle.charAt(0).toUpperCase()}${lowerCaseTitle.slice(1)}`;
};

/*
  Remove an element with the id passed as a parameter by filtering the input array
  Returns a new array, doesn't modify the input array
*/
export const removeItemFromArray = (array, id) => {
  if (id && array.length > 0) {
    return array.filter((element) => element.id !== id);
  }
};
