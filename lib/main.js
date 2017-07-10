// import askQuestions from 'ask_questions';
import * as d3 from 'd3';
import * as life from './life_expectancy';
import * as Util from './utils';


document.addEventListener('DOMContentLoaded', () => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const chart = d3.select('#root')
        .append('svg')
        .attr("height", height)
        .attr("width", width)
            .append("g")
            .attr("transform", "translate(0,0)");

    let data;
    if (localStorage.getItem('runtao_yang_life_exp')) {
        data = JSON.parse(localStorage.getItem('runtao_yang_life_exp'));
    } else {
        data = Util.sortByAllFields(life.allExpectancies);
        localStorage.setItem('runtao_yang_life_exp',JSON.stringify(data));
    }
    const colorFromSex = (data) => {
        if (!data.sex) return 'red'
        switch (data.sex) {
            case "Male":
                return 'lightblue';
            case "Female":
                return 'lightpink';
            default:
                return 'plum';
        }
    }

    const dataToRadius = (datum) => {
        if (!datum.age) {
            console.log("no age");
            return 0;
        }
        return Math.pow((datum.age / 25), 3);
    }

    const forceInverse = (datum) => {
        const radius = dataToRadius(datum)
        return 100 /(radius * radius);
    }

    const drawBubblesFromData = () => {
        const circles = chart.selectAll(".country")
            .data(data.sex.female)
            .enter().append("circle")
            .attr("class", "country")
            .attr("class", data => data.country)
            .attr("class", data => data.sex)
            .attr("r", dataToRadius)
            .attr("fill", colorFromSex)
                // .attr("cy", height/2)
                // .attr("cx", midpointFromSex)

        const frameUpdate = () => {
            circles
                .attr("cx", (d) => {
                    return d.x
                })
                .attr("cy", (d) => {
                    return d.y
                });
        }

        const simulation = d3.forceSimulation()
            .force("x", d3.forceX(width/ 2).strength(.05))
            .force("y", d3.forceY(height/2).strength(.05))
            .force("collision", d3.forceCollide((datum) => (dataToRadius(datum) + 2)))
        simulation.nodes(data.sex.female)
            .on('tick', frameUpdate)
    }



    drawBubblesFromData()

})

//
// 1. on screen resize
// 2. controlls for switching
// 3. sort data to get biggest and smallest
