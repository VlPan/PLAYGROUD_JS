// Attention! This solution will correctly work only with integer (natural) numbers
class Client {
	timeToOrder;
	constructor(timeToOrder) {
		this.timeToOrder = timeToOrder;
	}
}

class Till {
	isOrdering;
	orderingTime;
	timeLeft;

	constructor(time) {
		this.orderingTime = 0;
		this.timeLeft = time;
		this.setState();
	}

	receiveNewOrder(client = {timeToOrder: 0}) {
		if (!this.isOrdering) {
			this.timeLeft = client.timeToOrder;
			this.setState();
		} else {
			console.error("Received new order error = cas is busy", this.timeLeft);
		}
	}

	orderTime(n) {
		this.timeLeft -= n;
		this.orderingTime += n;
		this.setState();
		if (!this.isOrdering) {
			return this.orderingTime;
		}
	}

	setState() {
		if (this.timeLeft > 0) {
			this.isOrdering = true;
		} else {
			this.isOrdering = false;
		}
	}
}


function queueTime(customers, n) {
	let tills = [];
	let currentClients = [];

	for (let i = 0; i < n; i++) {
		tills.push(new Till(0));
		currentClients.push((new Client(customers.shift())));
	}

	while(true) {
		const tick = 1;
		const emptyTills = tills.filter(c => c.isOrdering === false);

		if(emptyTills.length > 0) {
			emptyTills.forEach((c) => {
				c.receiveNewOrder(currentClients.shift());

				if(customers.length > 0) {
					currentClients.push((new Client(customers.shift())));
				}
			});
		}

		const busyTills = tills.filter(c => c.isOrdering === true);
		if(busyTills.length > 0) {
			busyTills.forEach((c) => {
				c.orderTime(tick);
			});
		}
	
		if(currentClients.length <= 0 && busyTills.length === 0) {
			break;
		}
	}

	return Math.max(...tills.map(c => c.orderingTime));
}



// Correct solution:
function queueTime(customers, n) {
	var w = new Array(n).fill(0);
	for (let t of customers) {
	  let idx = w.indexOf(Math.min(...w));
	  w[idx] += t;
	}
	return Math.max(...w);
  }