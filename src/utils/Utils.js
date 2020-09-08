/*
 Format a string so its first letter will be in upper case
*/
export const formatTitle = (title) => {
  const lowerCaseTitle = title.toLowerCase();
  return `${lowerCaseTitle.charAt(0).toUpperCase()}${lowerCaseTitle.slice(1)}`;
};
