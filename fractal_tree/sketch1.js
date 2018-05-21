var tree = [];
var leaves = [];
var counter = 0;
function setup(){
	createCanvas(400,400);
	var a = createVector(width / 2, height);
	var b = createVector(width / 2, height - 100);
	var root = new Branch(a, b);
	tree[0] = root;
	
}

function mousePressed(){
	for(var i = tree.length-1; i >= 0 && counter < 6; i--){
		if(!tree[i].finished){
			tree.push(tree[i].branchA());
			tree.push(tree[i].branchB());
	}
	tree[i].finished = true;
	}
	counter++;
	if (counter === 6){
		for(var i=0;i<tree.length;i++){
			if(!tree[i].finished){
				var leaf = tree[i].end.copy();
				leaves.push(leaf);
			}
		}
		for(var i = tree.length-1;i >= 0 ;i--){
			tree.pop(tree[i],branchA());
			noStroke();
			tree.pop(tree[i],branchB());
			noStroke();
		}
	}
}


function draw(){
	background(51);

	for(var i=0;i < tree.length ; i++){
	tree[i].show();
	//tree[i].jitter();
	}
	for(var i=0;i < leaves.length ; i++){
		fill(255,0,100,100);
		noStroke();
		ellipse(leaves[i].x, leaves[i].y, 8, 8);
		//tree[i].jitter();
		leaves[i].y += random(0, 2);
	}
}
