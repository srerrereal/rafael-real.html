window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2", // "light1", "light2", "dark1", "dark2"
	title: {
		text: "Skills"
	},
	axisY: {
		title: "Knowledge Rate (in %)",
		suffix: "%",
		includeZero: false
	},
	axisX: {
		title: "Technologies"
	},
	data: [{
		type: "column",
		yValueFormatString: "#,##0.0#\"%\"",
		dataPoints: [
			{ label: "HTML", y: 85 },
			{ label: "CSS", y: 80  },
			{ label: "Javascript", y: 75 },
			{ label: "Photoshop", y: 83 },
			{ label: "Bootstrap", y: 78 },
			{ label: "Node.js", y: 65 }

		]
	}]
});
chart.render();

};
