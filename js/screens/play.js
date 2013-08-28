game.PlayScreen = me.ScreenObject.extend({
	/**	
	 *  action to perform on state change
	 */

	onResetEvent: function() {
		window.collectedOrbs = [];
		//enable the keyboard
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP, "accelerate");
        me.input.bindKey(me.input.KEY.DOWN, "reverse");
		//load a level
		//me.game.onLevelLoaded = this.loadFinished.bind(this);
	    me.levelDirector.loadLevel("main_game_level");
	    //me.levelDirector.loadLevel("area01");
	    document.getElementById("scont").style.top = '-1000px';

	    document.getElementById("popupContainer").style.top = '0px';
	    document.getElementById("lcont").style.top = '-1200px';
	},

	"loadFinished": function()
	{
		console.log("call camera tween");
	    var t;
	    
	    t = new me.Tween(me.game.viewport.pos).to({y:319288}, 1000);
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
