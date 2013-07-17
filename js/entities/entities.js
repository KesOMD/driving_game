// player entity
game.PlayerEntity = me.ObjectEntity.extend({

	/*

	constructor

	*/

	init: function(x, y, settings)
	{

		settings.image = "cartemp2";
		settings.spritewidth = 96;
		settings.spriteheight = 192;
		//call the constructor
		this.parent(x, y, settings);

		//set the default horizontal & vertical speed (accel vector)
		this.setVelocity(6, 12);
		//set the display to follow our position on the vertical axis
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.VERTICAL)
		me.game.viewport.setDeadzone(0, 0);

		myAngle = 1;
		isMoving = false;
		isForward = false;
		isReverse = false;
		hitObstacle = false;
		divTarget = null;
		intFunc = null;
		amountToMove = 10;

		document.getElementById("pop1").style.top = '-300px';
		document.getElementById("pop2").style.top = '-300px';
		//console.log(this.pos.x)
	},

	/*

	update the player position

	*/
	update: function()
	{
		//user controls
		if (me.input.isKeyPressed('left'))
		{
			if (isMoving)
			{
				if (!hitObstacle)
				{
					//update the enity velocity
					this.vel.x -= this.accel.x * me.timer.tick;
					if (isForward)
					{
						//rotate left
						this.renderable.angle = -myAngle.degToRad();
					}
					else if(isReverse)
					{
						//rotate right
						this.renderable.angle = myAngle.degToRad();
					}
				}
			}
			//console.log('pressed left');
		}
		else if (me.input.isKeyPressed('right'))
		{
			if (isMoving)
			{
				if (!hitObstacle)
				{
					//update the entity velocity
					this.vel.x += this.accel.x * me.timer.tick;
					if (isForward)
					{
						//rotate right
						this.renderable.angle = myAngle.degToRad();
					}
					else if (isReverse)
					{
						//rotate left
						this.renderable.angle = -myAngle.degToRad();
					}
				}
			}
			//console.log('pressed right');
		}
		else
		{
			this.vel.x = 0;
			//console.log('hit obstacle is ' + hitObstacle)
			if (!hitObstacle)
			{
				this.renderable.angle = 0;
			} 
			else
			{
				//console.log('there is no angle reset')
			}
		}
		if (me.input.isKeyPressed('accelerate'))
		{
			if (!hitObstacle)
			{
				isMoving = true;
				isForward = true;
				isReverse = false;
				this.vel.y = -this.maxVel.y * me.timer.tick;
			}
			if (divTarget)
			{
				var currentPosition = parseInt(divTarget.style.top);
				divTarget.style.top = currentPosition + amountToMove + "px";
			}
			//console.log('pressed up');
		}
		else if (me.input.isKeyPressed('reverse'))
		{
			if (!hitObstacle)
			{
				isMoving = true;
				isForward = false;
				isReverse = true;
				this.vel.y = this.maxVel.y * me.timer.tick;
			}
			if (divTarget)
			{
				var currentPosition = parseInt(divTarget.style.top);
				divTarget.style.top = currentPosition - amountToMove + "px";
			}
			//console.log('pressed down');
		}
		else
		{
			isMoving = false;
			isForward = false;
			isReverse = false;
			this.vel.y = 0;
		}

		//check & update player movement
		this.updateMovement();

		//console.log('current x position = ' + this.pos.x);

		//check collision
		var res = me.game.collide(this);
		var t;
		var t2;

		if (res)
		{
			//console.log('collide = ' + res);
			//when collide with an obstacle
			if (res.obj.type == me.game.ENEMY_OBJECT)
			{
				//disable the object
				res.obj.collidable = false;
				//console.log('collide with obstacle');
				hitObstacle = true;
				isMoving = false;
				isForward = false;
				isReverse = false;
				this.vel.y = 0;
				this.vel.x = 0;
				//console.log(res.obj.collidable);
				t = new me.Tween(this.renderable).to({angle:Number.prototype.degToRad(360)}, 1000)
				.onComplete(function()
					{
						hitObstacle = false;
						res.obj.collidable = true;
					});
				t.easing(me.Tween.Easing.Back.EaseOut);
				t.start();

				var directionValue;
				if (this.pos.x < 608)
				{
					directionValue = 100;
				}
				else if (this.pos.x > 608)
				{
					directionValue = -100;
				}
				else
				{
					var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
					directionValue = plusOrMinus * 100;
				}

				t2 = new me.Tween(this.pos).to({y:this.pos.y - 250, x:this.pos.x + directionValue}, 1000);
				t2.easing(me.Tween.Easing.Back.EaseOut);
				t2.start();
			}
			//when collide with token
			else if(res.obj.type == me.game.COLLECTABLE_OBJECT)
			{
				//console.log('collected token');
			}
			//level transition
			else if(res.obj.type == me.game.ACTION_OBJECT)
			{
				//update sprite				
				this.parent();
				return true;
			}
		}

		//return false;
	}
})

//collectable token entity
game.TokenEntity = me.CollectableEntity.extend({

	init: function(x, y, settings)
	{
		//call the parent constructor
		this.parent(x, y, settings);
		this.collidable = true;
		this.type = me.game.COLLECTABLE_OBJECT;
		this.tokenSettings = settings;
		//console.log(settings);
	},

	//this function is called by the engine, when
	//an object is touched by something (in this case collected)
	onCollision: function()
	{
		//commands to execute when collected
		//make sure it can't be collected again
		this.collidable = false;
		
		divTarget = document.getElementById("pop" + this.tokenSettings.id);

		console.log('popup div is ' + divTarget + " and top = " + divTarget.style.top);
		//remove it from the canvas
		me.game.remove(this);
	}
})

//collision obstacle entity
game.EnemyEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "obtemp";
		settings.spritewidth = 32;
		//call the parent constructor
		this.parent(x, y, settings);
		//make it collidable
		this.collidable = true;
		//make it an enemy object
		this.type = me.game.ENEMY_OBJECT;
	},

	onCollision: function()
	{
		//commands to execute when collected

		//make sure it can't be collected again
		//this.collidable = false;
		
	}
})

game.TransitionEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		this.parent(x, y, settings);
		this.collidable = true;
		this.type = me.game.ACTION_OBJECT;
		this.TransitionSettings = settings;
	},

	onCollision: function()
	{
		//
		//console.log('transition id = ' + this.TransitionSettings.id);
		this.collidable = false;
	}
})