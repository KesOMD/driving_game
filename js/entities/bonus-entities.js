//player entity
game.KartEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		settings.image = "kart";
		settings.spritewidth = 96;
		settings.spriteheight = 160;
		
		//call the constructor
		this.parent(x, y, settings);
		
		//set the default horizontal & vertical speed (accel vector)
		this.setVelocity(18, 12);
		
		myAngle = 2;
		isMoving = false;
		isForward = false;
		isReverse = false;
		hitObstacle = false;
		divTarget = null;
		intFunc = null;

		ref = this;

		//set the display to follow our position on the vertical axis
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.VERTICAL);
		me.game.viewport.setDeadzone(0, 0);
		console.log("KartEntity initialised");

	},

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
			
			if (!hitObstacle)
			{
				this.renderable.angle = 0;
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
			//console.log('pressed up');
		}
		else if (me.input.isKeyPressed('reverse'))
		{
			//for debug purposes remove later
			if (!hitObstacle)
			{
				isMoving = true;
				isForward = false;
				isReverse = true;
				this.vel.y = this.maxVel.y * me.timer.tick;
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

		//check collision
		var res = me.game.collide(this);
		var t;
		var t2;
		var t3;

		if (res)
		{
			//when collide with an obstacle
			if (res.obj.type == me.game.ENEMY_OBJECT)
			{
				//disable the object
				res.obj.collidable = false;
				ref.collidable = false;
				
				hitObstacle = true;
				isMoving = false;
				isForward = false;
				isReverse = false;
				this.vel.y = 0;
				this.vel.x = 0;
				
				scaleTarget = this.renderable;
				t = new me.Tween(this.renderable).to({ angle:Number.prototype.degToRad(1080) }, 1000)
				.onComplete(function()
					{
						me.state.change(me.state.GAMEOVER);
					});
				t.easing(me.Tween.Easing.Quadratic.EaseOut);
				t.start();

				t2 = new me.Tween(this.pos).to({ y:res.obj.pos.y, x:res.obj.pos.x + 30 }, 1000);
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
				//hit the finish line
				if (res.obj.TransitionSettings.id == 7)
				{
					me.game.viewport.reset(0, /*this.pos.y*/1240);
					hitObstacle = true;
					isMoving = false;
					isForward = false;
					isReverse = false;

					t3 = new me.Tween(this.pos).to({y:this.pos.y - 600}, 1000)
					.onComplete(function()
					{
						me.state.change(me.state.GAMEOVER);
					});
					t3.easing(me.Tween.Easing.Linear.EaseNone);
					t3.start();
				}
				
			}
		}

		//
		if (this.vel.y!=0) {
            // update object animation
            this.parent();
            return true;
        }
        // else inform the engine we did not perform
        // any update (e.g. position, animation)
        return false;
	}
})

game.BlackHoleEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "blackHole";
		settings.spritewidth = 160;
		//call the parent constructor
		this.parent(x, y, settings);
		//tighten the collision box around the sprite
		//this.updateColRect(0, 96, 165, 73);
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
	},

	update: function()
	{
		if(!this.inViewport)
		{
			return false;
		}
		else
		{
			this.parent();
			return true;
		}
	}
})