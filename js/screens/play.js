game.PlayScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */
	onResetEvent: function() {
		//enable the keyboard
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP, "accelerate");
        me.input.bindKey(me.input.KEY.DOWN, "reverse");
		//load a level	
	    me.levelDirector.loadLevel("area01"); // TODO
	    //console.log("viewport position " + me.game.viewport.pos.y);
	    //console.log(me.entityPool);
	    var t;
	    
	    t = new me.Tween(me.game.viewport.pos).to({y:5720}, 1000);
		t.easing(me.Tween.Easing.Quadratic.EaseOut);
		t.start();	
	},
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function() {
		// TODO
		me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
	}
});
