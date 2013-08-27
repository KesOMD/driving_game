game.EndScreen = me.ScreenObject.extend({
	//constructor
	init: function()
	{
		licenseDisplayed = false;
		currentLicense = null;
		nextLicense = null;
		inTransition = false;
		divTarget = null;
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
		collOrbs = window.collectedOrbs;
		allOrbs = window.orbs;
		if ( collOrbs.toString().indexOf( allOrbs.toString() ) )
		{
			window.bonusUnlocked = true;
			console.log(window.bonusUnlocked);
		}
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
				this.orb1 = new endButton(382, 385, "1", ref);
				me.game.add((this.orb1), 1001);
			}
			else
			{
				this.orb1 = me.loader.getImage("orb_grey");
			}

			if (result2)
			{
				this.orb2 = new endButton(467, 385, "2", ref);
				me.game.add((this.orb2), 1002);
			}
			else
			{
				this.orb2 = me.loader.getImage("orb_grey");
			}

			if (result3)
			{
				this.orb3 = new endButton(555, 385, "3", ref);
				me.game.add((this.orb3), 1003);
			}
			else
			{
				this.orb3 = me.loader.getImage("orb_grey");
			}

			if (result4)
			{
				this.orb4 = new endButton(643, 385, "4", ref);
				me.game.add((this.orb4), 1004);
			}
			else
			{
				this.orb4 = me.loader.getImage("orb_grey");
			}

			if (result5)
			{
				this.orb5 = new endButton(730, 385, "5", ref);
				me.game.add((this.orb5), 1005);
			}
			else
			{
				this.orb5 = me.loader.getImage("orb_grey");
			}

			if (result6)
			{
				this.orb6 = new endButton(819, 385, "6", ref);
				me.game.add((this.orb6), 1006);
			}
			else
			{
				this.orb6 = me.loader.getImage("orb_grey");
			}

			if (result7)
			{
				this.orb7 = new endButton(907, 385, "7", ref);
				me.game.add((this.orb7), 1007);
			}
			else
			{
				this.orb7 = me.loader.getImage("orb_grey");
			}

			if (result8)
			{
				this.orb8 = new endButton(354, 440, "8", ref);
				me.game.add((this.orb8), 1008);
			}
			else
			{
				this.orb8 = me.loader.getImage("orb_grey");
			}

			if (result9)
			{
				this.orb9 = new endButton(452, 440, "9", ref);
				me.game.add((this.orb9), 1009);
			}
			else
			{
				this.orb9 = me.loader.getImage("orb_grey");
			}

			if (result10)
			{
				this.orb10 = new endButton(545, 440, "10", ref);
				me.game.add((this.orb10), 1010);
			}
			else
			{
				this.orb10 = me.loader.getImage("orb_grey");
			}

			if (result11)
			{
				this.orb11 = new endButton(643, 440, "11", ref);
				me.game.add((this.orb11), 1011);
			}
			else
			{
				this.orb11 = me.loader.getImage("orb_grey");
			}

			if (result12)
			{
				this.orb12 = new endButton(735, 440, "12", ref);
				me.game.add((this.orb12), 1012);
			}
			else
			{
				this.orb12 = me.loader.getImage("orb_grey");
			}

			if (result13)
			{
				this.orb13 = new endButton(832, 440, "13", ref);
				me.game.add((this.orb13), 1013);
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
				bonusPos = {x:240, y:65};
				this.enterMessage = me.loader.getImage("enter_bonus");
				enterPos = {x:319, y:526};
			}
			else
			{
				this.bonusStar = me.loader.getImage("star_grey");
				this.bonusMessage = me.loader.getImage("bonus_collect");
				bonusPos = {x:190, y:65};
				this.enterMessage = me.loader.getImage("enter_retry");
				enterPos = {x:415, y:526};
			}
		}
		winHeight = $(window).height();
		document.getElementById("popupContainer").style.top = '-1000px';
		if (winHeight < 769)
		{
			document.getElementById("econt").style.top = 141 + 'px';
		}
		else
		{
			document.getElementById("econt").style.top = (winHeight/4) + 10 + 'px';
		}
		me.input.bindKey(me.input.KEY.ENTER, "enter", true);
    },
    moveLicense: function(id)
    {
    	divTarget = document.getElementById("e" + id);
    	//console.log(divTarget.offsetWidth);
    	winWidth = $(window).width();
    	//console.log(winWidth);

    	position = {x: 2000};
    	centerPos = (winWidth/2) - (divTarget.offsetWidth/2);
    	moveOff = {x:centerPos};
    	offscreenPos = 2000;

    	if (!inTransition)
    	{
    		if (licenseDisplayed)
    		{
    			//
    			if (currentLicense == divTarget)
    			{
    				console.log("license already displayed");
    			}
    			else
    			{
    				inTransition = true;
    				t = new me.Tween(moveOff).to( { x:2000 }, 250)
    				.easing(me.Tween.Easing.Cubic.EaseIn)
					.onUpdate( function() { updateMoveOff(currentLicense) })
					
    				t2 = new me.Tween(position).to( { x:centerPos }, 250 )
					.delay(250)
					.easing(me.Tween.Easing.Cubic.EaseIn)
					.onUpdate( function() { updateAnim(divTarget) })
					.onComplete( function() {
						inTransition = false
						currentLicense = divTarget;
					} )
					t.chain(t2);
					
					t.start();
    			}
    		}
    		else
    		{
    			inTransition = true;
    			t = new me.Tween(position).to( { x:centerPos }, 250 )
				.easing(me.Tween.Easing.Cubic.EaseOut)
				.onUpdate( function() { updateAnim(divTarget) })
				.onComplete( function() {
					inTransition = false
					currentLicense = divTarget;
				} )
				t.start();
				licenseDisplayed = true;
    		}
    	}

    	function updateAnim(target)
		{
			target.style.left = position.x + "px";
		}
		function updateMoveOff(target)
		{
			target.style.left = moveOff.x + "px";
		}
    },
    
    findFirstDescendant: function(parent, tagname)
    {
    	parent = document.getElementById(parent);
    	var descendants = parent.getElementsByTagName(tagname);
    	if ( descendants.length )
    		return descendants[0];
    	return null;
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
			if (window.bonusUnlocked)
			{
				me.state.change(me.state.STATE_BONUS);
			}
			else
			{
				me.state.change(me.state.PLAY);
			}
			document.getElementById("econt").style.top = -600 + 'px';

			for (var i = 0; i < 13; i++) {
				Things = document.getElementById("e" + (i+1));
				Things.style.left = 2000 + "px";
			};
		}
    },
    //draw function
	draw: function(context)
	{
		context.drawImage(this.bg, 0, 0);
		context.globalAlpha = 0.2;
		context.drawImage(this.car_image, 289, 200);
		context.globalAlpha = 1;
		if (!result1)
		{
			context.drawImage(this.orb1, 382, 385);
		}
		if (!result2)
		{
			context.drawImage(this.orb2, 467, 385);
		}
		if (!result3)
		{
			context.drawImage(this.orb3, 555, 385);
		}
		if (!result4)
		{
			context.drawImage(this.orb4, 643, 385);
		}
		if (!result5)
		{
			context.drawImage(this.orb5, 730, 385);
		}
		if (!result6)
		{
			context.drawImage(this.orb6, 819, 385);
		}
		if (!result7)
		{
			context.drawImage(this.orb7, 907, 385);
		}

		if (!result8)
		{
			context.drawImage(this.orb8, 354, 440);
		}		
		if (!result9)
		{
			context.drawImage(this.orb9, 451, 440);
		}
		if (!result10)
		{
			context.drawImage(this.orb10, 545, 440);
		}
		if (!result11)
		{
			context.drawImage(this.orb11, 643, 440);
		}
		if (!result12)
		{
			context.drawImage(this.orb12, 735, 440);
		}
		if (!result13)
		{
			context.drawImage(this.orb13, 832, 440);
		}

		context.drawImage(this.bonusStar, 919, 442);

		context.drawImage(this.bonusMessage, bonusPos.x, bonusPos.y);

		context.drawImage(this.clickMessage, 374, 121);
		context.drawImage(this.enterMessage, enterPos.x, enterPos.y);
	},
	/**	
	 *  action to perform when leaving this screen (state change)
	 */
	onDestroyEvent: function()
	{
		//
		console.log("end onDestroyEvent");

		licenseDisplayed = false;
		currentLicense = null;
		nextLicense = null;
		inTransition = false;
		divTarget = null;

		this.bg = null;
		me.input.unbindKey(me.input.KEY.ENTER);
	}
})