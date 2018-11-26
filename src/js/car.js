export default {
	color: 'white',
	dours: 4,
	speed: 0,
	defaultSpeed: 60,
	maxSpeed: 100,
	seats: 4,
	passengers: [],
	put () {
		if (this.passengers.length < this.seats) {
			this.passengers.push(true);
		}
	},
	land () {
		this.passengers.pop();
		if (!this.passengers.length) {
			this.speed = 0;
		}
	},
	drive (newSpeed = this.defaultSpeed) {
		if (this.passengers.length && newSpeed <= this.maxSpeed && newSpeed >= 0) {
			this.speed = newSpeed;
		}
		else if (newSpeed > this.maxSpeed) {
			this.speed = this.maxSpeed;
		}
	}
};