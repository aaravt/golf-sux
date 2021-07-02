
var canvas= new fabric.Canvas("canvasg")
ballx=0
bally=0
holex=800
holey=400
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png" , function (Img) {
		hole_obj=Img
		hole_obj.scaleToWidth(50)
		hole_obj.scaleToHeight(50)
		hole_obj.set({
			top:holey,
			left:holex
		})
		canvas.add(hole_obj)
	})
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function (Img) {
		ball_obj=Img
		ball_obj.scaleToWidth(50)
		ball_obj.scaleToHeight(50)
		ball_obj.set({
			top:bally,
			left:ballx
		})
		canvas.add(ball_obj)
})
}
window.addEventListener("keydown", kd);
function kd(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ballx==holex)&&(bally==holey)){ 
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTML="You have hit the goal yay now bye bye!!!"
        document.getElementById("canvasg").style.borderColor="pink"
	}

	{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (bally>0) {
			bally=bally-block_image_height;
			console.log("block_image_height" + block_image_height)
			console.log("when down is pressed,X=" +bally+ ", y " +bally)
			canvas.remove(ball_obj)
			new_image();
		}	
	}

	function down()
	{
		if (bally<=450) {
			bally=bally+block_image_height;
			console.log("block_image_height" + block_image_height)
			console.log("when down is pressed,X=" +bally+ ", y " +bally)
			canvas.remove(ball_obj)
			new_image();
		}
	}

	function left()
	{
		if(ballx >0)
		{
				ballx=ballx+block_image_width;
				console.log("block_image_width" + block_image_width)
				console.log("when down is pressed,X=" +ballx+ ", y " +ballx)
				canvas.remove(ball_obj)
				new_image();
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
				ballx=ballx+block_image_width;
				console.log("block_image_width" + block_image_width)
				console.log("when down is pressed,X=" +ballx+ ", y " +ballx)
				canvas.remove(ball_obj)
				new_image();
			
		}
	}
}	
