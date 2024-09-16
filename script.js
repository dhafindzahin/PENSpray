const up = document.getElementById("up");
const right = document.getElementById("right");
const down = document.getElementById("down");
const left = document.getElementById("left");
const keyMap = {
	ArrowUp: up,
	ArrowRight: right,
	ArrowDown: down,
	ArrowLeft: left,
};
let keyHold = {};

document.addEventListener("keydown", (e) => {
	Object.keys(keyMap).forEach((button) => {
		if (e.key === button) {
			keyMap[button].classList.add("bg-secondary");
			keyMap[button].classList.add("text-black");
			if (!keyHold[button]) {
				keyHold[button] = true;
			}
		}
	});
});

document.addEventListener("keyup", (e) => {
	Object.keys(keyMap).forEach((button) => {
		if (e.key === button) {
			if (keyHold[button]) {
				keyMap[button].classList.remove("bg-secondary");
				keyMap[button].classList.remove("text-black");
				keyHold[button] = false;
			}
		}
	});
});
