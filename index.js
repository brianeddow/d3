const target1 = d3.select("#target1").append("svg");
			target1.attr("width", 117);
			target1.attr("height", 117);

const target2 = d3.select("#target2").append("svg");
			target2.attr("width", 117);
			target2.attr("height", 117);

const target3 = d3.select("#target3").append("svg");
			target3.attr("width", 117);
			target3.attr("height", 117);

const nodes = [
	{ x: 30, y: 50, rx: 6, ry: 6, o: "steelblue" },
  { x: 40, y: 40, rx: 5, ry: 5, o: "gray" },
  { x: 50, y: 30, rx: 4, ry: 4, o: "lightgray" },
  { x: 60, y: 20, rx: 3, ry: 3, o: "gray" },
  { x: 70, y: 10, rx: 4, ry: 4, o: "steelblue" },
  { x: 80, y: 20, rx: 3, ry: 3, o: "gray" },
  { x: 90, y: 30, rx: 4, ry: 4, o: "lightgray" },
  { x: 100, y: 40, rx: 5, ry: 5, o: "gray" },
  { x: 110, y: 50, rx: 6, ry: 6, o: "steelblue" }
];

target1.selectAll("div")
	.data(nodes)
	.enter()
	.append("svg:ellipse")
	.attr("cx", function(d) { return d.x })
  .attr("cy", function(d) { return d.y })
  .attr("rx", function(d) { return d.rx })
  .attr("ry", function(d) { return d.ry })
  .attr("fill", function(d) { return d.o });

target2.selectAll("div")
	.data(nodes)
	.enter()
	.append("svg:ellipse")
	.attr("cx", function(d) { return d.x })
  .attr("cy", function(d) { return d.y })
  .attr("rx", function(d) { return d.rx })
  .attr("ry", function(d) { return d.ry })
  .attr("fill", function(d) { return d.o });

target3.selectAll("div")
	.data(nodes)
	.enter()
	.append("svg:ellipse")
	.attr("cx", function(d) { return d.x })
  .attr("cy", function(d) { return d.y })
  .attr("rx", function(d) { return d.rx })
  .attr("ry", function(d) { return d.ry })
  .attr("fill", function(d) { return d.o });

