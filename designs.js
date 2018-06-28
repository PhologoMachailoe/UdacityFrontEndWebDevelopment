// Select color input
// Select size input
var height, width, color; //declaration of size (heigt and width) and color variables.

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){
	event.preventDefault();  //blocks any event default action from being triggered. Hence no grid or previous grid shows upon refresh.
	height = $('#inputHeight').val(); //this requests the value from height in put typed
	width = $('#inputWeight').val(); //this requests the value from width in put typed NB: It was misspelled as "inputWeight"
	makeGrid(height, width); //this calls for a grid to be created with the input from height and width
	//console.log("height: "+ height +"\nwidth:"+ width); //Used to test if the submit is working
})//end of sizePicker submit function

function makeGrid(x, y) {//start of makeGrid function declaring x and y for the height and width

// Your code goes here!
	$('tr').remove(); //to remove any rows that were created before the new input
	for (var r = 1; r <= x; r++) { //start for Loop to create the table rows with r as variable representing row
		$('#pixelCanvas').append('<tr id=table' + r +'></tr>');
		for (var c = 1; c <= y; c++) { //start for loop to create the cells with c as variable representing cell
			$('#table'+r ).append('<td></td>');
		} //end of For Loop creating cells
	} //end For Loop creating Rows
	//Adding color to the cells
	$('td').click(function addColor(){ //start of action for adding color
		color = $('#colorPicker').val();

		if ($(this).attr('style')){
			$(this).removeAttr('style') //allows for the removal of added attribute or color
		} else {
			$(this).attr('style', 'background-color:' + color); //Adds the color to blank cell
		}
	})//End of color add function
}//end of makeGrid function
