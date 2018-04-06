import { pipe, map } from 'ramda';

const assignOptns = (item) => {
  const optns = [
    {
      text: item,
      callback_data: item
    }
  ];
  return optns;
};

const getRows = map(assignOptns);

const formatInline = (arr) => {
  const rows = getRows(arr);
  return rows;
};

export default formatInline;
