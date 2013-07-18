game.PlayScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		//load a level	
	    me.levelDirector.loadLevel("area01"); // TODO
	    //console.log("viewport position " + me.game.viewport.pos.y);
	    //console.log(me.entityPool);
	    var t;
	    
	    t = new me.Tween(me.game.viewport.pos).to({y:5720}, 1000)
			.onComplete(function()
			{
				//hitObstacle = false;
				//res.obj.collidable = true;
			});
		t.easing(me.Tween.Easing.Quadratic.EaseOut);
		t.start();	
	},
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// TODO
	}
});
