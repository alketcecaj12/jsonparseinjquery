function storeCoordinate(xVal, yVal, array) {
    array.push({x: xVal, y: yVal});
  //  console.log("funxione "+xVal+", "+ yVal);
}

var coords = [];
storeCoordinate(3, 5, coords);
storeCoordinate(19, 1000, coords);
storeCoordinate(-300, 4578, coords);


// to loop through coordinate values
for (var i = 0; i < coords.length; i++) {
    var x = coords[i].x;
    var y = coords[i].y;
	//console.log("ciclo for "+x+" , "+y);
}