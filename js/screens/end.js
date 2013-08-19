game.EndScreen = me.ScreenObject.extend({
	//constructor
	init: function()
	{
		//
		this.parent(true);

		//end screen image
		this.bg = null;

		this.car_image = null;

		this.orb1 = null;
		this.orb2 = null;
		this.orb3 = null;
		this.orb4 = null;
		this.orb5 = null;
		this.orb6 = null;
		this.orb7 = null;
		this.orb8 = null;
		this.orb9 = null;
		this.orb10 = null;
		this.orb11 = null;
		this.orb12 = null;
		this.orb13 = null;
	},
	//reset function
	onResetEvent: function()
	{
		var result1 = this.inArray(window.collectedOrbs, 1);
		var result2 = this.inArray(window.collectedOrbs, 2);
		var result3 = this.inArray(window.collectedOrbs, 3);
		var result4 = this.inArray(window.collectedOrbs, 4);
		var result5 = this.inArray(window.collectedOrbs, 5);
		var result6 = this.inArray(window.collectedOrbs, 6);
		var result7 = this.inArray(window.collectedOrbs, 7);
		var result8 = this.inArray(window.collectedOrbs, 8);
		var result9 = this.inArray(window.collectedOrbs, 9);
		var result10 = this.inArray(window.collectedOrbs, 10);
		var result11 = this.inArray(window.collectedOrbs, 11);
		var result12 = this.inArray(window.collectedOrbs, 12);
		var result13 = this.inArray(window.collectedOrbs, 13);

		if (this.bg == null)
		{
			//init not yet completed
			this.bg = me.loader.getImage("end_bg");
			this.car_image = me.loader.getImage("end_car");
			if (result1)
			{
				this.orb1 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb1 = me.loader.getImage("orb_grey");
			}
		}

		if (result13)
			console.log("13 is present");
    },

    inArray: function(array, value)
    {
    	return array.indexOf(value) > -1 ? true : false;
    },
    // update function
    update: function() {
    	//
    	if (me.input.isKeyPressed('enter'))
		{
			me.state.change(me.state.PLAY);
		}
    },
    //draw function
	draw: function(context)
	{
		context.drawImage(this.bg, 0, 0);
		context.drawImage(this.car_image, 289, 200);
		//this.font.draw(context, "PRESS ENTER TO PLAY", 356, 500);
	},
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function()
	{
		//
	}
})