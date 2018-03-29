const assignInlineFormatTo = (arr) => {
  const data = arr.map(assignOptns);
  const threeRowArray = createThreeRowArrayFor(data);
  return threeRowArray;
};

const assignOptns = (item) => {
  const optns = {
    text: item,
    callback_data: item
  };
  return optns;
};

const createThreeRowArrayFor = (members) => {
  let formattedArray = [];

  while (members.length) {
    const membersPerRow = 1;
    const row = members.splice(0, membersPerRow);
    formattedArray = [...formattedArray, row];
  }

  return formattedArray;
};

export default assignInlineFormatTo;
