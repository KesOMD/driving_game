game.EndScreen = me.ScreenObject.extend({
	//constructor
	init: function()
	{
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
		var result1 = this.inArray(window.collectedOrbs, 1);
		var result2 = this.inArray(window.collectedOrbs, 2);
		var result3 = this.inArray(window.collectedOrbs, 3);
		var result4 = this.inArray(window.collectedOrbs, 4);
		var result5 = this.inArray(window.collectedOrbs, 5);
		var result6 = this.inArray(window.collectedOrbs, 6);
		var result7 = this.inArray(window.collectedOrbs, 7);
		var result8 = this.inArray(window.collectedOrbs, 8);
		var result9 = this.inArray(window.collectedOrbs, 9);
		var result10 = this.inArray(window.collectedOrbs, 10);
		var result11 = this.inArray(window.collectedOrbs, 11);
		var result12 = this.inArray(window.collectedOrbs, 12);
		var result13 = this.inArray(window.collectedOrbs, 13);

		if (this.bg == null)
		{
			//init not yet completed
			this.bg = me.loader.getImage("end_bg");
			this.car_image = me.loader.getImage("end_car");

			this.clickMessage = me.loader.getImage("click_to_view");

			if (result1)
			{
				this.orb1 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb1 = me.loader.getImage("orb_grey");
			}

			if (result2)
			{
				this.orb2 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb2 = me.loader.getImage("orb_grey");
			}

			if (result3)
			{
				this.orb3 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb3 = me.loader.getImage("orb_grey");
			}

			if (result4)
			{
				this.orb4 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb4 = me.loader.getImage("orb_grey");
			}

			if (result5)
			{
				this.orb5 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb5 = me.loader.getImage("orb_grey");
			}

			if (result6)
			{
				this.orb6 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb6 = me.loader.getImage("orb_grey");
			}

			if (result7)
			{
				this.orb7 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb7 = me.loader.getImage("orb_grey");
			}

			if (result8)
			{
				this.orb8 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb8 = me.loader.getImage("orb_grey");
			}

			if (result9)
			{
				this.orb9 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb9 = me.loader.getImage("orb_grey");
			}

			if (result10)
			{
				this.orb10 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb10 = me.loader.getImage("orb_grey");
			}

			if (result11)
			{
				this.orb11 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb11 = me.loader.getImage("orb_grey");
			}

			if (result12)
			{
				this.orb12 = me.loader.getImage("orb_blue");
			}
			else
			{
				this.orb12 = me.loader.getImage("orb_grey");
			}

			if (result13)
			{
				this.orb13 = new endButton(60, 60);
				me.game.add((this.orb13), 40);
				console.log(this.orb13);
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

		//document.getElementById("econt").style.top = '0px';
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
		context.drawImage(this.car_image, 289, 200);

		context.drawImage(this.orb1, 390, 385);
		context.drawImage(this.orb2, 475, 385);
		context.drawImage(this.orb3, 563, 385);
		context.drawImage(this.orb4, 651, 385);
		context.drawImage(this.orb5, 738, 385);
		context.drawImage(this.orb6, 827, 385);
		context.drawImage(this.orb7, 915, 385);

		context.drawImage(this.orb8, 362, 440);
		context.drawImage(this.orb9, 460, 440);
		context.drawImage(this.orb10, 553, 440);
		context.drawImage(this.orb11, 651, 440);
		context.drawImage(this.orb12, 743, 440);
		//context.drawImage(this.orb13, 840, 440);

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
	}
})