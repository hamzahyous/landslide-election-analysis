// visualization 1
const margin = { top: 50, right: 30, bottom: 120, left: 70 };
const width = 800 - margin.left - margin.right;
const height = 600 - margin.top - margin.bottom;


const svg = d3.select("#comparison-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("elections.csv", function(d) {
    return {
        year: +d.year, // cols we wanna use
        winner: d.winner,
        ec_percent: +d.ec_percent
    };
}).then(function(data) {
    let show2024 = false;
    let showLossLine = false;

    // highest perc first
    data.sort((a,b) => b.ec_percent - a.ec_percent);

    let landslides = data
        .filter(d => d.year !== 2024)
        .slice(0,10);

    let currentData = [...landslides];

    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0,100])
        .range([height,0]);

    const xAxisGrp = svg.append("g")
        .attr("transform", `translate(0, ${height})`);

    const yAxisGrp = svg.append("g")
        .call(d3.axisLeft(y));

    svg.append("text")
    .attr("x", width / 2)
    .attr("y", -20)
    .attr("text-anchor", "middle")
    .style("font-size", "22px")
    .style("font-weight", "bold")
    .style("fill", "#0B2D72")   // dark blue from your palette
    .text("Historic Electoral College Landslides Since 1900");

    svg.append("text")
    .attr("x", width / 2)
    .attr("y", height + 80)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Election Year");

    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -50)
    .attr("text-anchor", "middle")
    .style("font-size", "14px")
    .text("Percentage of Electoral Votes Won");

    // just so i can deal w changes based on toggles
    function updateChart(dataToRender) {

        x.domain(dataToRender.map(d => d.year));

        xAxisGrp
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "rotate(-45)")
            .style("text-anchor", "end");

        svg.selectAll("rect")
            .data(dataToRender, d => d.year)
            .join(
                // initial
                enter => enter.append("rect")
                    .attr("x", d => x(d.year))
                    .attr("width", x.bandwidth())
                    .attr("y", height)
                    .attr("height", 0)
                    .attr("fill", d => d.year === 2024 ? "red" : "blue")
                    .call(enter => enter.transition()
                        .duration(800)
                        .attr("y", d => y(d.ec_percent))
                        .attr("height", d => height - y(d.ec_percent))
                    ),

                update => update
                // on update
                    .attr("fill", d => d.year === 2024 ? "red" : "blue")
                    .call(update => update.transition()
                        .duration(800)
                        .attr("x", d => x(d.year))
                        .attr("width", x.bandwidth())
                        .attr("y", d => y(d.ec_percent))
                        .attr("height", d => height - y(d.ec_percent))
                    ),

                exit => exit
                // to rm the red 2024 one on toggling
                    .call(exit => exit.transition()
                        .duration(600)
                        .attr("y", height)
                        .attr("height", 0)
                        .remove()
                    )
            );
    }
    // to load w/ initial data
    updateChart(currentData);

    d3.select("#toggle2024").on("click", function() {

        show2024 = !show2024;
        d3.select(this).classed("active", show2024);

        if (show2024) {
            const year2024 = data.find(d => d.year === 2024);
            currentData = [...landslides, year2024];

            d3.selectAll(".approval-line")
                .style("opacity", d => d[0] === "Trump '24" ? 1 : 0.3)
                .attr("stroke-width", d => d[0] === "Trump '24" ? 4 : 2);


        } else {
            currentData = [...landslides];

            d3.selectAll(".approval-line")
                .style("opacity", 1)
                .attr("stroke-width", 2);
        }

        updateChart(currentData);
    });

    d3.select("#toggleLoss").on("click", function() {

        showLossLine = !showLossLine;
        d3.select(this).classed("active", showLossLine);

        if (showLossLine) {
            svg.append("line")
                .attr("class", "loss-line")
                .attr("x1", 0)
                .attr("x2", width)
                .attr("y1", y(50))
                .attr("y2", y(50))
                .attr("stroke", "black")
                .attr("stroke-dasharray", "5,5")
                .attr("stroke-width", 2);
        } else {
            svg.selectAll(".loss-line").remove();
        }
    });

});

// 2nd visualization

const margin2 = { top:50, right:120, bottom:60, left:70 };
const width2 = 800 - margin2.left - margin2.right;
const height2 = 500 - margin2.top - margin2.bottom;

const svg2 = d3.select("#approval-chart")
    .append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
    .append("g")
    .attr("transform",`translate(${margin2.left},${margin2.top})`);

d3.csv("approval.csv").then(function(data){

    data.forEach(d=>{
        d.month = +d.month;
        d.net = +d.net;
    });

    const x = d3.scaleLinear()
        .domain([1,12])
        .range([0,width2]);

    const y = d3.scaleLinear()
        // did this bc bush went to 80 and trump was as low as -30
        .domain([-30,80])
        .range([height2,0]);

    svg2.append("g")
        .attr("transform",`translate(0,${height2})`)
        .call(d3.axisBottom(x).ticks(12));

    svg2.append("g")
        .call(d3.axisLeft(y));

    svg2.append("text")
        .attr("x", width2/2)
        .attr("y",-20)
        .attr("text-anchor","middle")
        .style("font-size","20px")
        .text("Net Favorability in First Year After Election");

    const grouped = d3.groups(data, d => d.election);

    const color = d3.scaleOrdinal()
        .domain(grouped.map(d => d[0]))
        .range(["#1f77b4","#2ca02c","#9467bd","#ff7f0e","red"]);

    const line = d3.line()
        .x(d => x(d.month))
        .y(d => y(d.net));

    svg2.selectAll(".approval-line")
        .data(grouped)
        .enter()
        .append("path")
        .attr("class","approval-line")
        .attr("fill","none")
        .attr("stroke", d => color(d[0]))
        .attr("stroke-width",2)
        .attr("d", d => line(d[1].sort((a,b)=>a.month-b.month)));

    svg2.selectAll(".legend")
        .data(grouped)
        .enter()
        .append("text")
        .attr("class","legend")
        .attr("x", width2 + 20)
        .attr("y", (d,i) => i * 20)
        .style("fill", d => color(d[0]))
        .text(d => d[0]);
});


// third viz

const margin3 = {top: 40, right: 40, bottom: 40, left: 120};
const width3 = 1000 - margin3.left - margin3.right;
const height3 = 500 - margin3.top - margin3.bottom;

const svg3 = d3.select("#thirdparty-chart")
  .append("svg")
  .attr("width", width3 + margin3.left + margin3.right)
  .attr("height", height3 + margin3.top + margin3.bottom)
  .append("g")
  .attr("transform", `translate(${margin3.left},${margin3.top})`);

d3.csv("third_party.csv").then(function(data){

  data.forEach(d => d.percent = +d.percent);

  const x3 = d3.scaleLinear()
    .domain([0,100])
    .range([0,width3]);

  const y3 = d3.scaleBand()
    .domain(data.map(d => d.party))
    .range([0,height3])
    .padding(0.3);

  svg3.append("g")
    .call(d3.axisLeft(y3));

  svg3.append("g")
    .attr("transform", `translate(0,${height3})`)
    .call(d3.axisBottom(x3));

svg3.append("text")
    .attr("x", width3 / 2)
    .attr("y", -10)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .text("Percent of Voters at Least Somewhat Likely to Vote for a Third-Party Candidate, by Party");

  svg3.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("y", d => y3(d.party))
    .attr("height", y3.bandwidth())
    .attr("width", d => x3(d.percent))
    .attr("fill", "#2a7de1");

  svg3.selectAll(".label")
    .data(data)
    .enter()
    .append("text")
    .attr("class","label")
    .attr("x", d => x3(d.percent) + 5)
    .attr("y", d => y3(d.party) + y3.bandwidth()/2)
    .attr("dy", ".35em")
    .text(d => d.percent + "%");
});