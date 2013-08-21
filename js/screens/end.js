game.EndScreen = me.ScreenObject.extend({
	//constructor
	init: function()
	{
		licenseDisplayed = false;
		currentLicense = null;
		inTransition = false;
		//
		this.parent(true);

		//end screen image
		this.bg = null;

		this.car_image = null;

		this.orb1 = null;
		this.orb2 = null;
		this.orb3 = null;
		this.orb4 = null;
		this.orb5 = null;
		this.orb6 = null;
		this.orb7 = null;
		this.orb8 = null;
		this.orb9 = null;
		this.orb10 = null;
		this.orb11 = null;
		this.orb12 = null;
		this.orb13 = null;

		this.bonusStar = null;

		this.bonusMessage = null;

		bonusPos = {};

		this.clickMessage = null;

		this.enterMessage = null;

		enterPos = {};
	},
	//reset function
	onResetEvent: function()
	{
		ref = this;

		result1 = this.inArray(window.collectedOrbs, 1);
		result2 = this.inArray(window.collectedOrbs, 2);
		result3 = this.inArray(window.collectedOrbs, 3);
		result4 = this.inArray(window.collectedOrbs, 4);
		result5 = this.inArray(window.collectedOrbs, 5);
		result6 = this.inArray(window.collectedOrbs, 6);
		result7 = this.inArray(window.collectedOrbs, 7);
		result8 = this.inArray(window.collectedOrbs, 8);
		result9 = this.inArray(window.collectedOrbs, 9);
		result10 = this.inArray(window.collectedOrbs, 10);
		result11 = this.inArray(window.collectedOrbs, 11);
		result12 = this.inArray(window.collectedOrbs, 12);
		result13 = this.inArray(window.collectedOrbs, 13);

		if (this.bg == null)
		{
			//init not yet completed
			this.bg = me.loader.getImage("end_bg");
			this.car_image = me.loader.getImage("end_car");

			this.clickMessage = me.loader.getImage("click_to_view");

			if (result1)
			{
				this.orb1 = new endButton(390, 385, "orb1");
				me.game.add((this.orb1), 1000);
			}
			else
			{
				this.orb1 = me.loader.getImage("orb_grey");
			}

			if (result2)
			{
				this.orb2 = new endButton(475, 385, "orb2");
				me.game.add((this.orb2), 1000);
			}
			else
			{
				this.orb2 = me.loader.getImage("orb_grey");
			}

			if (result3)
			{
				this.orb3 = new endButton(563, 385, "orb3");
				me.game.add((this.orb3), 1000);
			}
			else
			{
				this.orb3 = me.loader.getImage("orb_grey");
			}

			if (result4)
			{
				this.orb4 = new endButton(651, 385, "orb4");
				me.game.add((this.orb4), 1000);
			}
			else
			{
				this.orb4 = me.loader.getImage("orb_grey");
			}

			if (result5)
			{
				this.orb5 = new endButton(738, 385, "orb5");
				me.game.add((this.orb5), 1000);
			}
			else
			{
				this.orb5 = me.loader.getImage("orb_grey");
			}

			if (result6)
			{
				this.orb6 = new endButton(827, 385, "orb6");
				me.game.add((this.orb6), 1000);
			}
			else
			{
				this.orb6 = me.loader.getImage("orb_grey");
			}

			if (result7)
			{
				this.orb7 = new endButton(915, 385, "orb7");
				me.game.add((this.orb7), 1000);
			}
			else
			{
				this.orb7 = me.loader.getImage("orb_grey");
			}

			if (result8)
			{
				this.orb8 = new endButton(362, 440, "orb8");
				me.game.add((this.orb8), 1000);
			}
			else
			{
				this.orb8 = me.loader.getImage("orb_grey");
			}

			if (result9)
			{
				this.orb9 = new endButton(460, 440, "orb9");
				me.game.add((this.orb9), 1000);
			}
			else
			{
				this.orb9 = me.loader.getImage("orb_grey");
			}

			if (result10)
			{
				this.orb10 = new endButton(553, 440, "orb10");
				me.game.add((this.orb10), 1000);
			}
			else
			{
				this.orb10 = me.loader.getImage("orb_grey");
			}

			if (result11)
			{
				this.orb11 = new endButton(651, 440, "orb11");
				me.game.add((this.orb11), 1000);
			}
			else
			{
				this.orb11 = me.loader.getImage("orb_grey");
			}

			if (result12)
			{
				this.orb12 = new endButton(743, 440, "orb12");
				me.game.add((this.orb12), 1000);
			}
			else
			{
				this.orb12 = me.loader.getImage("orb_grey");
			}

			if (result13)
			{
				this.orb13 = new endButton(840, 440, "orb13", ref);
				me.game.add((this.orb13), 1000);
			}
			else
			{
				this.orb13 = me.loader.getImage("orb_grey");
			}
			//window.bonusUnlocked = true;
			if (window.bonusUnlocked)
			{
				this.bonusStar = me.loader.getImage("star_gold");
				this.bonusMessage = me.loader.getImage("bonus_unlocked");
				bonusPos = {x:240, y:80};
				this.enterMessage = me.loader.getImage("enter_bonus");
				enterPos = {x:319, y:526};
			}
			else
			{
				this.bonusStar = me.loader.getImage("star_grey");
				this.bonusMessage = me.loader.getImage("bonus_collect");
				bonusPos = {x:190, y:80};
				this.enterMessage = me.loader.getImage("enter_retry");
				enterPos = {x:415, y:526};
			}
		}
		document.getElementById("popupContainer").style.top = '-1000px';
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);
    },
    moveLicense: function()
    {
    	//console.log("called move license");
    	console.log(this.car_image);
    	context = document.getElementById('canvas').getContext('2d');
    	console.log(context);
    	/*
    	if (!licenseDisplayed)
    	{
    		t = new me.Tween(this.car_image.style).to({opacity:0}, 1000)
				.onComplete(function()
					{
						//console.log("tween complete");
					});
			t.easing(me.Tween.Easing.Back.EaseOut);
			t.start();
    	}
    	*/
    },
    inArray: function(array, value)
    {
    	return array.indexOf(value) > -1 ? true : false;
    },
    // update function
    update: function() {
    	//
    	if (me.input.isKeyPressed('enter'))
		{
			me.state.change(me.state.PLAY);
		}
    },
    //draw function
	draw: function(context)
	{
		context.drawImage(this.bg, 0, 0);
		context.globalAlpha = 0.5;
		context.drawImage(this.car_image, 289, 200);
		context.globalAlpha = 1;
		if (!result1)
		{
			context.drawImage(this.orb1, 390, 385);
		}
		if (!result2)
		{
			context.drawImage(this.orb2, 475, 385);
		}
		if (!result3)
		{
			context.drawImage(this.orb3, 563, 385);
		}
		if (!result4)
		{
			context.drawImage(this.orb4, 651, 385);
		}
		if (!result5)
		{
			context.drawImage(this.orb5, 738, 385);
		}
		if (!result6)
		{
			context.drawImage(this.orb6, 827, 385);
		}
		if (!result7)
		{
			context.drawImage(this.orb7, 915, 385);
		}

		if (!result8)
		{
			context.drawImage(this.orb8, 362, 440);
		}		
		if (!result9)
		{
			context.drawImage(this.orb9, 460, 440);
		}
		if (!result10)
		{
			context.drawImage(this.orb10, 553, 440);
		}
		if (!result11)
		{
			context.drawImage(this.orb11, 651, 440);
		}
		if (!result12)
		{
			context.drawImage(this.orb12, 743, 440);
		}
		if (!result13)
		{
			context.drawImage(this.orb13, 840, 440);
		}

		context.drawImage(this.bonusStar, 929, 442);

		context.drawImage(this.bonusMessage, bonusPos.x, bonusPos.y);

		context.drawImage(this.clickMessage, 374, 136);
		context.drawImage(this.enterMessage, enterPos.x, enterPos.y);
	},
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function()
	{
		//
		console.log("end onDestroyEvent");
		me.input.unbindKey(me.input.KEY.ENTER);
		window.collectedOrbs = [];
	}
})