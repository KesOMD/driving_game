var endButton = me.GUI_Object.extend(
{	
   init:function(x, y)
   {
      settings = {}
      settings.image = "orb_blue";
      settings.spritewidth = 55;
      settings.spriteheight = 54;
      // parent constructor
      this.parent(x, y, settings);
      console.log("button added!");
   },
	
   // output something in the console
   // when the object is clicked
   onClick:function()
   {
      console.log("clicked!");
      // don't propagate the event
      return true;
   }
});