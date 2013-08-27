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

		this.konami = null;
		//this.font = null;

		this.enterPrompt = null;
		
		keys = [];
		konami = 'UP,UP,DOWN,DOWN,LEFT,RIGHT,LEFT,RIGHT,B,A';
	},

	//reset function
	onResetEvent: function() {
		if (this.title == null)
		{
			//init not yet completed
			this.title = me.loader.getImage("title_screen");
			this.enterPrompt = me.loader.getImage("press_enter");
			this.konami = me.loader.getImage("konami");
		}
		//enable some keyboard keys
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);
        me.input.bindKey(me.input.KEY.LEFT, "left", true);
        me.input.bindKey(me.input.KEY.RIGHT, "right", true);
        me.input.bindKey(me.input.KEY.UP, "up", true);
        me.input.bindKey(me.input.KEY.DOWN, "down", true);
        me.input.bindKey(me.input.KEY.B, "b", true);
        me.input.bindKey(me.input.KEY.A, "a", true);
	    document.getElementById("scont").style.top = '0px';
    },
	
	//update function
	update: function()
	{
		//enter pressed ?
		if (me.input.isKeyPressed('enter'))
		{
			me.state.change(me.state.PLAY);
		}
		else if (me.input.isKeyPressed('up'))
		{
			keys.push("UP");
		}
		else if (me.input.isKeyPressed('down'))
		{
			keys.push("DOWN");
		}
		else if (me.input.isKeyPressed('left'))
		{
			keys.push("LEFT");
		}
		else if (me.input.isKeyPressed('right'))
		{
			keys.push("RIGHT");
		}
		else if (me.input.isKeyPressed('b'))
		{
			keys.push("B");
		}
		else if (me.input.isKeyPressed('a'))
		{
			keys.push("A");
			
		}
		return true;
	},

	checkKonami: function()
	{
		//console.log(keys.toString());
		if ( keys.toString().indexOf( konami ) >= 0)
			return true;
		return false;
	},

	//draw function
	draw: function(context)
	{
		context.drawImage(this.title, 0, 0);
		context.drawImage(this.enterPrompt, 392, 500);
		if (this.checkKonami())
		{
			if (!window.bonusUnlocked)
			{
				window.bonusUnlocked = true;
			}
			context.drawImage(this.konami, 381, 630);
		}
	},
	
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function()
	{
		me.input.unbindKey(me.input.KEY.ENTER);
		me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
	}
});
