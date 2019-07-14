/*#bf3636 #36bf7b #369abf #dbdb30 #d0d7de #919aa3*/
window.onload = function () {

	let map = [];
	for (let k = 0; k < 100; k++) {
		map[k] = k;
	}

	function compareRandom(a, b) {
		return Math.random() - 0.5;
	}
	map.sort(compareRandom);

	/* Переменные*/
	let start = 0
	let wrap = document.querySelector('.wrap');
	let CanGo = 'rgb(208, 215, 222)';
	let NotVisited = "rgb(101, 74, 74)";
	let Visited = "rgb(191, 80, 54)";
	let Protection = "rgb(239, 83, 227)";
	let Black = "rgb(0, 0, 0)";
	let FerstCell = "rgb(170, 6, 6)";
	let Wins = "rgb(219, 219, 48)";

	function l() {
		for (let i = 1; i <= 10; i++) {
			for (let j = 1; j <= 10; j++) {
				let div = document.createElement("div");
				div.style.backgroundColor = NotVisited;
				wrap.appendChild(div);
				div.row = i;
				div.colum = j;
				
				div.addEventListener('click', function () {
					console.log("row:" + this.row + ' ' + "col:" + this.colum);
					for (let l = 0; l <= 100; l++) {
						if (wrap.childNodes[l] == this) {
							if (wrap.childNodes[map[47] + 1] == this) {
								wrap.childNodes[map[47] + 1].style.backgroundColor = Wins;
							}
							for (let x = 48; x < 53; x++) {
								if (wrap.childNodes[map[x] + 1] == this) {
									wrap.childNodes[map[x] + 1].style.backgroundColor = Protection;
								}
							}



							if (wrap.children[l - 1].style.backgroundColor == CanGo) {
								wrap.children[l - 1].style.backgroundColor = Visited;
								opensWay(l, CanGo);
							}

						}

					}

				})
			}
		}
	}
	l();


	for (let e = 0; e < 45; e++) {
		wrap.childNodes[map[e] + 1].style.backgroundColor = Black;
	}

	wrap.childNodes[map[46] + 1].style.backgroundColor = FerstCell;
	start = map[46] + 1;
	console.log(map);

	function celCol(cell) {
		let cellColors = wrap.childNodes[cell].style.backgroundColor;
		return cellColors != Black && cellColors != Visited && cellColors != FerstCell && cellColors != Protection && cellColors != Wins
	}

	function opensWay(cell, color) {

		if (wrap.childNodes[cell].colum == 1 && wrap.childNodes[cell].row == 1) {
			if (celCol(cell + 1)) wrap.childNodes[cell + 1].style.backgroundColor = color;
			if (celCol(cell + 10)) wrap.childNodes[cell + 10].style.backgroundColor = color;
			if (celCol(cell + 11)) wrap.childNodes[cell + 11].style.backgroundColor = color;
		} else if (wrap.childNodes[cell].colum == 10 && wrap.childNodes[cell].row == 1) {
			if (celCol(cell - 1)) wrap.childNodes[cell - 1].style.backgroundColor = color;
			if (celCol(cell + 9)) wrap.childNodes[cell + 9].style.backgroundColor = color;
			if (celCol(cell + 10)) wrap.childNodes[cell + 10].style.backgroundColor = color;
		} else if (wrap.childNodes[cell].colum == 1 && wrap.childNodes[cell].row == 10) {
			if (celCol(cell - 10)) wrap.childNodes[cell - 10].style.backgroundColor = color;
			if (celCol(cell - 9)) wrap.childNodes[cell - 9].style.backgroundColor = color;
			if (celCol(cell + 1)) wrap.childNodes[cell + 1].style.backgroundColor = color;
		} else if (wrap.childNodes[cell].colum == 10 && wrap.childNodes[cell].row == 10) {
			if (celCol(cell - 11)) wrap.childNodes[cell - 11].style.backgroundColor = color;
			if (celCol(cell - 10)) wrap.childNodes[cell - 10].style.backgroundColor = color;
			if (celCol(cell - 1)) wrap.childNodes[cell - 1].style.backgroundColor = color;
		} else if (wrap.childNodes[cell].row == 1 && wrap.childNodes[cell].colum != 1) {
			if (celCol(cell - 1)) wrap.childNodes[cell - 1].style.backgroundColor = color;
			if (celCol(cell + 1)) wrap.childNodes[cell + 1].style.backgroundColor = color;
			if (celCol(cell + 9)) wrap.childNodes[cell + 9].style.backgroundColor = color;
			if (celCol(cell + 10)) wrap.childNodes[cell + 10].style.backgroundColor = color;
			if (celCol(cell + 11)) wrap.childNodes[cell + 11].style.backgroundColor = color;
		} else if (wrap.childNodes[cell].row == 10 && wrap.childNodes[start].colum != 10) {
			if (celCol(cell - 1)) wrap.childNodes[cell - 1].style.backgroundColor = color;
			if (celCol(cell + 1)) wrap.childNodes[cell + 1].style.backgroundColor = color;
			if (celCol(cell - 9)) wrap.childNodes[cell - 9].style.backgroundColor = color;
			if (celCol(cell - 10)) wrap.childNodes[cell - 10].style.backgroundColor = color;
			if (celCol(cell - 11)) wrap.childNodes[cell - 11].style.backgroundColor = color;
		} else if (wrap.childNodes[cell].colum == 1 && wrap.childNodes[start].row != 1) {
			if (celCol(cell + 10)) wrap.childNodes[cell + 10].style.backgroundColor = color;
			if (celCol(cell - 10)) wrap.childNodes[cell - 10].style.backgroundColor = color;
			if (celCol(cell - 9)) wrap.childNodes[cell - 9].style.backgroundColor = color;
			if (celCol(cell + 1)) wrap.childNodes[cell + 1].style.backgroundColor = color;
			if (celCol(cell + 11)) wrap.childNodes[cell + 11].style.backgroundColor = color;
		} else if (wrap.childNodes[cell].colum == 10 && wrap.childNodes[start].row != 10) {
			if (celCol(cell + 10)) wrap.childNodes[cell + 10].style.backgroundColor = color;
			if (celCol(cell - 10)) wrap.childNodes[cell - 10].style.backgroundColor = color;
			if (celCol(cell + 9)) wrap.childNodes[cell + 9].style.backgroundColor = color;
			if (celCol(cell - 1)) wrap.childNodes[cell - 1].style.backgroundColor = color;
			if (celCol(cell - 11)) wrap.childNodes[cell - 11].style.backgroundColor = color;
		} else {
			if (celCol(cell - 11)) wrap.childNodes[cell - 11].style.backgroundColor = color;
			if (celCol(cell - 10)) wrap.childNodes[cell - 10].style.backgroundColor = color;
			if (celCol(cell - 9)) wrap.childNodes[cell - 9].style.backgroundColor = color;
			if (celCol(cell - 1)) wrap.childNodes[cell - 1].style.backgroundColor = color;
			if (celCol(cell + 1)) wrap.childNodes[cell + 1].style.backgroundColor = color;
			if (celCol(cell + 9)) wrap.childNodes[cell + 9].style.backgroundColor = color;
			if (celCol(cell + 10)) wrap.childNodes[cell + 10].style.backgroundColor = color;
			if (celCol(cell + 11)) wrap.childNodes[cell + 11].style.backgroundColor = color;
		}
	}
	opensWay(start, CanGo);
	
}