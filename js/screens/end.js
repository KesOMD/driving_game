game.EndScreen = me.ScreenObject.extend({
	//constructor
	init: function()
	{
		//
		this.parent(true);

		//end screen image
		this.title = null;
	},
	//reset function
	onResetEvent: function() {
		if (this.title == null)
		{
			//init not yet completed
			this.title = me.loader.getImage("end_temp");
		}
    },
    // update function
    update: function() {
    	//
    },
    //draw function
	draw: function(context)
	{
		context.drawImage(this.title, 0, 0);

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