var hovering = function()
{
	$('.cell').on('mouseover', function()
	{
		$(this).addClass('hoveredOn');
	});
};


$(document).ready(function()
{
	for (var i = 0; i < 16*16; i++)
	{
		$('#container').append("<div class='cell'></div>"); //NOT $(#container)
	}

	hovering();

	$('#reset').click(function()
	{
		var cellSideCount = prompt('Enter number of cells on a row', '2');
		$('#container').empty();
		for (var x = 0; x < (cellSideCount*cellSideCount); x++)
		{
			$('#container').append("<div class='cell'></div>");
			$('.cell').width(600px/cellSideCount);
			$('.cell').height(600px/cellSideCount);
		}

		hovering();	
	});
});