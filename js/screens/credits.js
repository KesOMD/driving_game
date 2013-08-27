game.CreditScreen = me.ScreenObject.extend({

	init: function()
	{
		this.parent(true);
		//background image
		this.bg = null;
	},

	onResetEvent: function()
	{
		if (this.bg == null)
		{
			this.bg = me.loader.getImage("credits");
			setTimeout(function() { me.state.change(me.state.GAME_END); }, 3000);
		}
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