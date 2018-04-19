//player and computer choice
const PLAYER_TOKEN = "X"
const COMPUTER_TOKEN = "O"

//grid
$("document").ready(function(){
	var grid = [
	[' ',' ',' '],
	[' ',' ',' '],
	[' ',' ',' ']
	];

	function isGameOver(){
		// check horizontal
		for (var i = 0; i < 3; i++) {
			if(grid[i][0] !== ' ' &&
				grid[i][0] === grid[i][1] &&
				grid[i][0] === grid[i][2]){
				return grid[i] [0]

		}
	}

		//check vertical
		for (var j = 0; j < 3; j++) {
			if (grid[0][j] !== ' ' &&
				grid[0][j] === grid[1][j] &&
				grid[0][j] === grid[2][j]) {
				return grid[0][j]
		}
	}

		//check diadonal - top left bottom right
		if (grid[0][0] !== ' ' &&
			grid[0][0] === grid[1][1] &&
			grid[0][0] === grid[2][2]) {
			return grid[0][0]
	}

		//check diagonal - bottom left top right
		if (grid[2][0] !== ' ' &&
			grid[2][0] === grid[1][1] &&
			grid[2][0] === grid[0][2]) {
			return grid[2][0]
	}

	for (var i = 0; i <3; i++) {
		for (var j = 0; j < 3; j++) {
			if (grid[i][j] === ' ') {
				return false;
			}
		}
	}

	return null;
}

function moveAI() {
	for (var i = 0; i <3; i++) {
		for (var j = 0; j < 3; j++) {
			if (grid[i][j] === ' ') {
				return {
					i: i,
					j: j 
				};
			}
		}
	}

}

$(".col").on("click", function(){
	$this = $(this);
	$(this).html(PLAYER_TOKEN);
	const i = $this.data("i");
	const j = $this.data("j");
	grid[i][j] = PLAYER_TOKEN;

	let gameState = isGameOver()
	if (gameState) {
		alert('Game Over: ' + gameState);
		return;
	}
 else {
			//move the AI 
			const move = moveAI()
			grid[move.i][move.j] = COMPUTER_TOKEN;
			$('.col[data-i=' + move.i + '][data-j=' + move.j +']').html(COMPUTER_TOKEN)
		}
			gameState = isGameOver()
			if (gameState){ 
				alert('Game Over:' + gameState);
			}
		});

				$('#restart').click(function(){
					for (var i = 0; i <3; i++) {
						for (var j = 0; j < 3; j++) {
							grid[i][j] = ' ';
							$('.col[data-i=' + i + '][data-j=' + j +']').html(' ')
						}
						};

					});
			});