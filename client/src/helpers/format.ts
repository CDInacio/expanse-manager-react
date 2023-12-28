export const format = (d: Date) => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const formatedDate = `${day}/${month}/${year}`;
  return formatedDate;
};
