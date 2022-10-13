const joinNames = (namesObj) => {
  const listOfNames = namesObj
    .map((obj) => obj.name)
    .join(", ")
    .split(" ");

  const l = listOfNames.length;
  listOfNames.splice(l - 1, 0, "&");
  return listOfNames.join(" ");
};

module.exports = joinNames;
