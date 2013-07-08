// player entity
game.PlayerEntity = me.ObjectEntity.extend({

	/*

	constructor

	*/

	init: function(x, y, settings)
	{
		//call the constructor
		this.parent(x, y, settings);

		//set the default horizontal & vertical speed (accel vector)
		this.setVelocity(6, 15);
		console.log('player max vel = ' + this.maxVel);
		
		//console.log('car gravity = ' + this.gravity)
		//set the display to follow our position on the vertical axis
		me.game.viewport.follow(this.pos, me.game.viewport.AXIS.VERTICAL)
		me.game.viewport.setDeadzone(0, 0);
	},

	/*

	update the player position

	*/
	update: function()
	{
		var myAngle = 1;
		var isMoving = false;
		var isForward = false;
		var isReverse = false;
		if (me.input.isKeyPressed('left'))
		{
			if (this.isMoving)
			{
				//update the enity velocity
				this.vel.x -= this.accel.x * me.timer.tick;
				if (this.isForward)
				{
					//rotate left
					this.renderable.angle = -myAngle.degToRad();
				}
				else if(this.isReverse)
				{
					//rotate right
					this.renderable.angle = myAngle.degToRad();
				}
			}
			//console.log('pressed left');
		}
		else if (me.input.isKeyPressed('right'))
		{
			if (this.isMoving)
			{
				//update the entity velocity
				this.vel.x += this.accel.x * me.timer.tick;
				if (this.isForward)
				{
					//rotate right
					this.renderable.angle = myAngle.degToRad();
				}
				else if (this.isReverse)
				{
					//rotate left
					this.renderable.angle = -myAngle.degToRad();
				}
			}
			//console.log('pressed right');
		}
		else
		{
			this.vel.x = 0;
			this.renderable.angle = 0;
		}
		if (me.input.isKeyPressed('accelerate'))
		{
			this.isMoving = true;
			this.isForward = true;
			this.isReverse = false;
			//this.vel.y = -this.maxVel.y * me.timer.tick;
			//console.log('pressed up');
			if (this.vel.y < this.maxVel.y)
			{
				this.vel.y--;
			}
			console.log('current forward velocity = ' + this.vel.y);
		}
		else if (me.input.isKeyPressed('reverse'))
		{
			this.isMoving = true;
			this.isForward = false;
			this.isReverse = true;
			this.vel.y = this.maxVel.y * me.timer.tick;
			//console.log('pressed down');
		}
		else
		{
			this.isMoving = false;
			this.isForward = false;
			this.isReverse = false;
			this.vel.y = 0;
		}

		//check & update player movement
		this.updateMovement();

		//check collision
		var res = me.game.collide(this);

		if (res)
		{
			//console.log('collide = ' + res);
			//when collide with an obstacle
			if (res.obj.type == me.game.ENEMY_OBJECT)
			{
				//
			}
			//when collide with token
			else if(res.obj.type == me.game.COLLECTABLE_OBJECT)
			{
				console.log('collected token')
			}
		}

		return false;
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
	},

	//this function is called by the engine, when
	//an object is touched by something (in this case collected)
	onCollision: function()
	{
		//commands to execute when collected

		//make sure it can't be collected again
		this.collidable = false;
		//remove it from the canvas
		me.game.remove(this);
	}
})
