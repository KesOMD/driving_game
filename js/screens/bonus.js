game.BonusScreen = me.ScreenObject.extend({

	onResetEvent: function() {
		//enable the keyboard
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP, "accelerate");
        me.input.bindKey(me.input.KEY.DOWN, "reverse");
		//load a level
		//me.game.onLevelLoaded = this.loadFinished.bind(this);
	    me.levelDirector.loadLevel("bonus_level");
	    //me.levelDirector.loadLevel("area01");
	},

	onDestroyEvent: function() {

		me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.UP);
        me.input.unbindKey(me.input.KEY.DOWN);
	}
})