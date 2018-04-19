var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(13, 'out'); //use GPIO pin 4, and specify that it is output
var blinkInterval = setInterval(blinkLED, 500); //run the blinkLED function every 250ms

const c = require('./modules/console.js');
const Led7 = require('./modules/led7.js');

Led7.setUp({ // We set up each pin for each segment of the lead
	top_left	: 		27,
	top			:		22,
	top_right	:		23,
	center		:		17,
	bottom_left	:		24,
	bottom		:		25,
	bottom_right:		16,
	dot			:		12,
});

// Led7.cleanAll();
// Led7.turnOnPin( Led7.pings.bottom_right );

c.spaces(5);
c.logM('======================');
c.logM('    7 Segment Test    ');
c.logM('======================');
c.space();

let counter = 0;
let active = false;

function blinkLED() { //function to start blinking
  if (active === false) { //check the pin state, if the state is 0 (or off)
    Led7.showNumber( counter , true );
	c.logM( counter );
	if( counter === 9 ){
		counter = 0;
	}else{
		counter ++;
	}
	active = true;
  } else {
    Led7.showEmpty();
	active = false;
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED.writeSync(0); // Turn LED off
  LED.unexport(); // Unexport GPIO to free resources
}

// setTimeout(endBlink, 5000); //stop blinking after 5 seconds

process.on('SIGINT', function () { //on ctrl+c
  Led7.cleanAll();
});
