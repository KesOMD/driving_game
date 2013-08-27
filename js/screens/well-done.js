game.WellDoneScreen = me.ScreenObject.extend({

	init: function()
	{
		this.parent(true);

		this.bg = null;
	},

	onResetEvent: function()
	{
		if (this.bg == null)
		{
			this.bg = me.loader.getImage("well_done");
		}
		document.getElementById("scont").style.top = '0px';
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