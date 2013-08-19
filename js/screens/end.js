game.EndScreen = me.ScreenObject.extend({
	//constructor
	init: function()
	{
		//
		this.parent(true);

		//end screen image
		this.title = null;

		this.car_image = null;
	},
	//reset function
	onResetEvent: function()
	{
		if (this.title == null)
		{
			//init not yet completed
			this.title = me.loader.getImage("end_bg");
			this.car_image = me.loader.getImage("end_car");
		}

		var result = this.inArray(window.collectedOrbs, 13);
		if (result)
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
		context.drawImage(this.title, 0, 0);
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