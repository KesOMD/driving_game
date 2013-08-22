var endButton = me.GUI_Object.extend(
{	
   init:function(x, y, orbID, ref)
   {
      settings = {}
      settings.image = "orb_blue";
      settings.spritewidth = 55;
      settings.spriteheight = 54;
      this.orbID = orbID;
      this.REF = ref;
      // parent constructor
      
      this.parent(x, y, settings);
   },
	
   // output something in the console
   // when the object is clicked
   onClick:function()
   {
      //console.log(this.orbID + " clicked!");
      this.REF.moveLicense(this.orbID);
      // don't propagate the event
      return false;
   }
});