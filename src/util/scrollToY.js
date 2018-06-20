const scrollToY = (scrollTargY, sp, ease, callback) => {
	const scrollY = window.scrollY || document.documentElement.scrollTop;
	const scrollTargetY = scrollTargY || 0;
	const speed = sp || 2000;
	const easing = ease || 'easeOutSine';
	let currentTime = 0;

	console.log(speed);
	let time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

	const easingEquations = {
		easeOutSine: (pos) => {
			return Math.sin(pos * (Math.PI / 2));
		},
		easeInOutSine: (pos) => {
			return (-0.5 * (Math.cos(Math.PI * pos) - 1));
		},
		easeInOutQuint: (pos) => {
			if((pos /= 0.5) < 1) {
				return 0.5 * Math.pow(pos, 5);
			}
			return 0.5 * (Math.pow((pos - 2), 5) + 2);
		}
	}

	const tick = () => {
		currentTime += 1 / 60;

		let p = currentTime / time;
		let t = easingEquations[easing](p);

		if( p < 1) {
			requestAnimationFrame(tick);
			window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
		} else {

			window.scrollTo(0, scrollTargetY);

			if(typeof callback === "function") {
				callback();
			}
		}
	}

	tick(); 
}

export default scrollToY;