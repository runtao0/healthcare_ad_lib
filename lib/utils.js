export const getDrugData = (queryString) => {
  return $.ajax({
    url: `https://api.fda.gov/drug/event.json?api_key=35TQKELHdWlAv5o5vOfVEcjd43GwFr7kcTe6ApRH&${queryString}`,
    method: "GET"
  })
}

export const getFoodData = (queryString) => {
  return $.ajax({
    url: `https://api.fda.gov/food/event.json?api_key=35TQKELHdWlAv5o5vOfVEcjd43GwFr7kcTe6ApRH&${queryString}`,
    method: "GET"
  })
}

export const getReactions = ({results}) => {
// TODO: do things with reactions
// create reaction objects
  let total = 0;
  for (let x = 0; x < results.length; x ++) {
    total += parseInt(results[x].count);
  }
  console.log(total);
  console.log(results);
}

export const getOutcomes = ({results}) => {
  // TODO: do things with outcomes
}

export const parseDrugNames = ({results}) => {
  // TODO: do things with drug names
  console.log(results);
}
