import * as d3 from 'd3';
import * as Util from "./utils";

Util.getFoodData(`${count()}${allReactions()}&${limit(100)}`)
  .then((data) => {
    Util.getReactions(data);
  });


const askQuestions = () => {

};

export default askQuestions;
