function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

let vectorOuter = [[0, -30], [-65, -90], [0, -300], 
									 [-120, -390],
									 [0, -550],
									// [-220, -690], [0, -900],[220, -690],[0, -600],
									 [120, -390],[0, -300], 
									 [65, -90],[0, -30]]

let angle=0

let colorArray = ['#FFF9F9','#FFD495','#E78EA9','rgb(68,204,190)','rgb(68,204,190)','#E78EA9','#FFD495','#FFF9F9']


function draw() {
	
	translate(windowWidth/2, windowHeight/2)
	let vectorArraysOuter = []
	let vectorArraysInner = []

	let sizeArr=vectorOuter.length;
	let stepSize=120
	let scaleFactor=0.8
	let step = (frameCount) % (stepSize* (vectorOuter.length-1) );

	rotate(radians(angle))
	for (k=0; k<sizeArr-1;k++) {
		let vectorPolygonOuter = createVector(map(step,k*stepSize,k*stepSize+(stepSize-1),vectorOuter[k][0]*scaleFactor,vectorOuter[k+1][0]*scaleFactor), 
																			map(step,k*stepSize,k*stepSize+(stepSize-1),vectorOuter[k][1]*scaleFactor,vectorOuter[k+1][1]*scaleFactor))

		append(vectorArraysOuter, vectorPolygonOuter)


	}
	
	let vectorIndex = int(step/stepSize);
	strokeWeight(5)

	stroke(colorArray[vectorIndex]);
	circle(vectorArraysOuter[vectorIndex].x,vectorArraysOuter[vectorIndex].y,3)


	angle=(angle+36)%360

	
}

