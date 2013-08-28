//collision obstacle entity
game.EnemyEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "invader";
		settings.spritewidth = 96;
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

game.CowEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "cow";
		settings.spritewidth = 192;
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

game.CarspunrightEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "carspun-right";
		settings.spritewidth = 96;
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

game.WaterEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "water";
		settings.spritewidth = 94;
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

game.BananaEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "banana";
		settings.spritewidth = 94;
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

game.FerrariEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "ferrari";
		settings.spritewidth = 196;
		//call the parent constructor
		this.parent(x, y, settings);
		//tighten the collision box around the sprite
		this.updateColRect(-1, 0, 13, 120);
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

game.OilEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "oil";
		settings.spritewidth = 96;
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

game.NukeLeftEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "nukeLeft";
		settings.spritewidth = 160;
		//call the parent constructor
		this.parent(x, y, settings);
		//tighten the collision box around the sprite 
		//x, width, y, height
		this.updateColRect(45, 96, 213, 73);
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

game.NukeRightEntity = me.ObjectEntity.extend({

	init: function(x, y, settings)
	{
		//define this here instead of in Tiled
		settings.image = "nukeRight";
		settings.spritewidth = 224;
		//call the parent constructor
		this.parent(x, y, settings);
		//tighten the collision box around the sprite
		this.updateColRect(0, 96, 165, 73);
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