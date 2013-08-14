
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
        me.sys.fps = 60;
        me.sys.preRender = false;

        me.debug.renderHitBox = true;
        //set the title Screen Object
        me.state.set(me.state.MENU, new game.TitleScreen());
        //set the "Play/Ingame" Screen Object
        me.state.set(me.state.PLAY, new game.PlayScreen());
        //set the Game Over screen
        me.state.set(me.state.GAMEOVER, new game.EndScreen());
        //set the Bonus stage
        
        //set the End Credits screen

        //set a global fading transition for the screen
        me.state.transition("fade", "#000000", 250);

        //add our player entity in the entity pool
        me.entityPool.add("mainPlayer", game.PlayerEntity);
        //collectable entity
        me.entityPool.add("TokenEntity", game.TokenEntity);
        //enemy/obstacle entities
        me.entityPool.add("EnemyEntity", game.EnemyEntity);
        me.entityPool.add("CowEntity", game.CowEntity);
        me.entityPool.add("CarspunrightEntity", game.CarspunrightEntity);
        me.entityPool.add("WaterEntity", game.WaterEntity);
        me.entityPool.add("BananaEntity", game.BananaEntity);
        me.entityPool.add("FerrariEntity", game.FerrariEntity);
        me.entityPool.add("OilEntity", game.OilEntity);
        me.entityPool.add("NukeLeftEntity", game.NukeLeftEntity);
        me.entityPool.add("NukeRightEntity", game.NukeRightEntity);
        //transition
        me.entityPool.add("TransitionEntity", game.TransitionEntity);
        
        // Start the game.
        me.state.change(me.state.MENU);
    }
};
