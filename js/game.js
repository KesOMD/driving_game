
/* Game namespace */
var game = {
    // Run on page load.
    "onload" : function () {
        // Initialize the video.
        if (!me.video.init("screen", 1312, 680, true, 0)) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }
		
		// add "#debug" to the URL to enable the debug Panel
		if (document.location.hash === "#debug") {
			window.onReady(function () {
				me.plugin.register.defer(debugPanel, "debug");
			});
		}

        // Initialize the audio.
        me.audio.init("mp3,ogg");

        // Set a callback to run when loading is complete.
        me.loader.onload = this.loaded.bind(this);
     
        // Load the resources.
        me.loader.preload(game.resources);

        // Initialize melonJS and display a loading screen.
        me.state.change(me.state.LOADING);
    },



    // Run on game resources loaded.
    "loaded" : function () {
        //global gravity setting
        me.sys.gravity = 0;
        me.debug.renderHitBox = true;
        //set the title Screen Object
        me.state.set(me.state.MENU, new game.TitleScreen());
        //set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());

        //set a global fading transition for the screen
        me.state.transition("fade", "#000000", 250);

        //add our player entity in the entity pool
        me.entityPool.add("mainPlayer", game.PlayerEntity);
        me.entityPool.add("TokenEntity", game.TokenEntity);
        me.entityPool.add("EnemyEntity", game.EnemyEntity);
        //enable the keyboard
        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.UP, "accelerate");
        me.input.bindKey(me.input.KEY.DOWN, "reverse");
        // Start the game.
        me.state.change(me.state.MENU);
    }
};
