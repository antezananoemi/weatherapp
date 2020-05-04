export const formatDateNow = (dateNow) => {
  let dateobj = new Date(dateNow * 1000);
  dateobj = dateobj.toISOString().slice(0, 10);
  return dateobj;
};
