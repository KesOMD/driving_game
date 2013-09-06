game.WellDoneScreen = me.ScreenObject.extend({

	init: function()
	{
		this.parent(true);

		this.bg = null;
	},

	onResetEvent: function()
	{
		window.bonusUnlocked = false;
		if (this.bg == null)
		{
			this.bg = me.loader.getImage("well_done");
			setTimeout(function()
				{
					me.state.change(me.state.MENU);
				}, 3000);
		}
		document.getElementById("scont").style.top = '550px';
	},

	update: function()
	{
		//
	},

	draw: function(context)
	{
		context.drawImage(this.bg, 0, 0);
	}
})