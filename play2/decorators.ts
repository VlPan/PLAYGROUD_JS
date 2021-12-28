// https://indepth.dev/posts/1491/attaching-new-behaviors-through-decorators-in-javascript


class MyNotification {

	constructor(private type: string) {
		this.type = 'Success';
	}

	notifyUser = function() {
		console.log(`${this.type} notification`);
	}
}

const notification = new MyNotification ('Success')

notification.notifyUser(); 

const delayMiliseconds = (fn: Function, delay:number = 0) => () => {
	setTimeout(() => fn(), delay);
	return 'notifyUser is called';
};


delayMiliseconds(notification.notifyUser, 3000);


function delayMiliseconds2( milliseconds: number = 0 ) {
	return function (
	  target: Object, 
	  propertyKey: string | symbol,
	  descriptor: PropertyDescriptor
	) {
  
	 const originalMethod = descriptor.value;
  
	 descriptor.value = function (...args) {
			setTimeout(() => {
			  originalMethod.call(this, ...args);
			 }, milliseconds); 
		  };
  
	  return descriptor;
	};
  }

  @delayMiliseconds2(300)
 	notifyUser() {
		console.log(`${this.type} notification`);
	}