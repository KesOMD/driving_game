game.TitleScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	//constructor
	init: function()
	{
		this.parent(true);

		//title screen image
		this.title = null;

		this.font = null;
		this.scrollerfont = null;
		this.scrollertween = null;

		this.scroller = "YOU SHOULD BE PLAYING THIS GAME IT IS AWESOME         ";
		this.scrollerpos = 1300;
	},

	//reset function
	onResetEvent: function() {
		if (this.title == null)
		{
			//init not yet completed
			this.title = me.loader.getImage("start_screen_temp");
			
			//font to display for menu items
			this.font = new me.BitmapFont("32x32_font", 32);

			//set the scroller
			this.scrollerfont = new me.BitmapFont("32x32_font", 32);
		}

		//reset to default position
		this.scrollerpos = 1312;

		//scroller tween
		
		this.scrollertween = new me.Tween(this).to({
			scrollerpos: -1500
		}, 20000).onComplete(this.scrollover.bind(this)).start();
		
		//enable some keyboard keys
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);

    },

    scrollover: function()
    {
    	this.scrollerpos = 1312;
    	this.scrollertween.to({
    		scrollerpos: -1500
    	}, 20000).onComplete(this.scrollover.bind(this)).start();
    },
	
	//update function
	update: function()
	{
		//enter pressed ?
		if (me.input.isKeyPressed('enter'))
		{
			me.state.change(me.state.PLAY);
		}
		return true;
	},

	//draw function
	draw: function(context)
	{
		context.drawImage(this.title, 336, 0);

		this.font.draw(context, "PRESS ENTER TO PLAY", 356, 240);
		this.scrollerfont.draw(context, this.scroller, this.scrollerpos, 440);
		//console.log(this.scrollerpos);
	},
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		me.input.unbindKey(me.input.KEY.ENTER);

		this.scrollertween.stop();
	}
});
