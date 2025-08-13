// Complete the js code
function Car(make, model) {
	this.make="Toyota";
		this.model = "Corolla";
	
}
getMakeModel(){
	return `${this.make} + ${this.model}`
}

function SportsCar(make, model, topSpeed) {
	super(make,model);
	this.topSpeed = topSpeed;
}
getTopSpeed(){
	return `1000 km`;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
