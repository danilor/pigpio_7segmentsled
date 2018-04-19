/**
	Let control class for GPIO OnOff Module
*/
const Led7 =		{
	status: 'Working',
	Gpio: require('onoff').Gpio,
	dot: null,
	down_right_bar 	: 	null,
	down_left_bar	:	null,
	down_center_bar	: 	null,
	
	pins : {
		top_left 		: 		null,
		top 			: 		null,
		top_right		: 		null,
		center			:		null,
		bottom_left		:		null,
		bottom			:		null,
		bottom_right	:		null,
		dot				:		null,
	},
	
	setUp		:		function( options ){
		
		if( typeof options.top_left !== 'undefined' ){
			this.pins.top_left 		=		new this.Gpio( options.top_left , 'out' );
		}
		
		if( typeof options.top !== 'undefined' ){
			this.pins.top 		=		new this.Gpio( options.top , 'out' );
		}
		
		if( typeof options.top_right !== 'undefined' ){
			this.pins.top_right 		=		new this.Gpio( options.top_right , 'out' );
		}
		
		if( typeof options.center !== 'undefined' ){
			this.pins.center 		=		new this.Gpio( options.center , 'out' );
		}
		
		if( typeof options.bottom_left !== 'undefined' ){
			this.pins.bottom_left 		=		new this.Gpio( options.bottom_left , 'out' );
		}
		
		if( typeof options.bottom !== 'undefined' ){
			this.pins.bottom 		=		new this.Gpio( options.bottom , 'out' );
		}
		
		if( typeof options.bottom_right !== 'undefined' ){
			this.pins.bottom_right 		=		new this.Gpio( options.bottom_right , 'out' );
		}
		if( typeof options.dot !== 'undefined' ){
			this.pins.dot 		=		new this.Gpio( options.dot , 'out' );
		}
		
	},
	
	showNumber	:		function( number , show_dot ){
		this.cleanAll(); // Before showing the number we have to clean it
		if( number > 9 ){
			this.con( 'Number invalid' );
			return; // If the number is greater than 9, we don't do a thing
		}
		if( show_dot ){ 
			this.turnOnPin( this.pins.dot );
			this.con( 'Dot Enabled' );
		}
		this.con( 'Showing Number: ' + number );
		
		switch(number){
			case 0:
				this.turnOnPin( this.pins.top_left );
				this.turnOnPin( this.pins.top );
				this.turnOnPin( this.pins.top_right );
				this.turnOnPin( this.pins.bottom_left );
				this.turnOnPin( this.pins.bottom );
				this.turnOnPin( this.pins.bottom_right );
			break;
			case 1:
				
				this.turnOnPin( this.pins.top_right );
				this.turnOnPin( this.pins.bottom_right );
			break;
			case 2:
				this.turnOnPin( this.pins.top );
				this.turnOnPin( this.pins.top_right );
				this.turnOnPin( this.pins.center );
				this.turnOnPin( this.pins.bottom_left );
				this.turnOnPin( this.pins.bottom );
			break;
			case 3:
				this.turnOnPin( this.pins.top );
				this.turnOnPin( this.pins.top_right );
				this.turnOnPin( this.pins.center );
				this.turnOnPin( this.pins.bottom );
				this.turnOnPin( this.pins.bottom_right );
			break;
			case 4:
				this.turnOnPin( this.pins.top_left );
				this.turnOnPin( this.pins.top_right );
				this.turnOnPin( this.pins.center );
				this.turnOnPin( this.pins.bottom_right );
			break;
			case 5:
				this.turnOnPin( this.pins.top_left );
				this.turnOnPin( this.pins.top );
				this.turnOnPin( this.pins.center );
				this.turnOnPin( this.pins.bottom );
				this.turnOnPin( this.pins.bottom_right );
			break;
			case 6:
				this.turnOnPin( this.pins.top_left );
				this.turnOnPin( this.pins.top );
				this.turnOnPin( this.pins.center );
				this.turnOnPin( this.pins.bottom_left );
				this.turnOnPin( this.pins.bottom );
				this.turnOnPin( this.pins.bottom_right );
			break;
			case 7:
				this.turnOnPin( this.pins.top );
				this.turnOnPin( this.pins.top_right );
				this.turnOnPin( this.pins.bottom_right );
			break;
			case 8:
				this.turnOnPin( this.pins.top_left );
				this.turnOnPin( this.pins.top );
				this.turnOnPin( this.pins.top_right );
				this.turnOnPin( this.pins.center );
				this.turnOnPin( this.pins.bottom_left );
				this.turnOnPin( this.pins.bottom );
				this.turnOnPin( this.pins.bottom_right );
			break;
			case 9:
				this.turnOnPin( this.pins.top_left );
				this.turnOnPin( this.pins.top );
				this.turnOnPin( this.pins.top_right );
				this.turnOnPin( this.pins.center );
				this.turnOnPin( this.pins.bottom );
				this.turnOnPin( this.pins.bottom_right );
			break;
			default:
				this.cleanAll();
			break;
		}
		
	},
	
	turnOnPin	:		function( pin ){
		if( typeof pin !== 'undefined' && pin !== null ){
			pin.writeSync( 1 );
		}
	},
	
	turnOffPin	:		function( pin ){
		if( typeof pin !== 'undefined' && pin !== null ){
			pin.writeSync( 0 );
		}
	},
	
	cleanAll	:		function(){
		this.turnOffPin( this.pins.top_left );
		this.turnOffPin( this.pins.top );
		this.turnOffPin( this.pins.top_right );
		this.turnOffPin( this.pins.center );
		this.turnOffPin( this.pins.bottom_left );
		this.turnOffPin( this.pins.bottom );
		this.turnOffPin( this.pins.bottom_right );
		this.turnOffPin( this.pins.dot );
	},
	
	showEmpty	:		function(){
		this.cleanAll();
		this.turnOnPin( this.pins.dot );
	},
	
	con			:		function( t ){
		console.log( 'Let7: ' + t );
	}
	
	
};

module.exports = Led7;
