// import askQuestions from 'ask_questions';
import * as d3 from 'd3';
import * as Util from './utils'


document.addEventListener('DOMContentLoaded', () => {
    const height = 1000;
    const width = 1000;
    const chart = d3.select('#root')
        .append('svg')
        .attr("height", height)
        .attr("width", width)
            .append("g")
            .attr("transform", "translate(0,0)");

    const drawBubblesFromData = (error, records) => {

    }

    const callFDA = (callback) => {
        Util.getFood
    }
    d3.queue()
        .defer(callFDA)
        .await(drawBubblesFromData)

})
