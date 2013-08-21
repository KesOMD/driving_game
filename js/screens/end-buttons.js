var endButton = me.GUI_Object.extend(
{	
   init:function(x, y, orbID)
   {
      settings = {}
      settings.image = "orb_blue";
      settings.spritewidth = 55;
      settings.spriteheight = 54;
      // parent constructor
      this.orbID = orbID;
      this.parent(x, y, settings);
   },
	
   // output something in the console
   // when the object is clicked
   onClick:function()
   {
      console.log(this.orbID + " clicked!");
      // don't propagate the event
      return false;
   }
});