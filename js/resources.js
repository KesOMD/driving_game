game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	//our level tileset
	{name: "section1", type: "image", src: "data/img/leveltiles/section1.png"},
	{name: "bridge1", type: "image", src: "data/img/leveltiles/bridge1.png"},
	{name: "metatiles32x32", type:"image", src: "data/img/metatiles32x32.png"},
	//main car sprite
	{name: "car1", type: "image", src: "data/img/sprite/1.png"},
	{name: "car2", type: "image", src: "data/img/sprite/2.png"},
	{name: "car3", type: "image", src: "data/img/sprite/3.png"},
	{name: "car4", type: "image", src: "data/img/sprite/4.png"},
	{name: "car5", type: "image", src: "data/img/sprite/5.png"},
	{name: "car6", type: "image", src: "data/img/sprite/6.png"},
	{name: "car7", type: "image", src: "data/img/sprite/7.png"},
	//spinning coin spritesheet
	{name: "spinning_coin_gold", type: "image", src: "data/img/sprite/spinning_coin_gold.png"},
	{name: "orb_sprite", type: "image", src: "data/img/sprite/orb_sprite.png"},
	//obstacle spritesheet
	{name: "obtemp", type: "image", src: "data/img/sprite/obtemp.png"},
	{name: "invader", type: "image", src: "data/img/sprite/invader_sprite.png"},
	//transition object
	{name: "trans", type: "image", src: "data/img/sprite/trans.jpg"},
	//the parallax elements
	{name: "area01_bkg0", type: "image", src: "data/img/area01_bkg0.png"},
	{name: "area01_bkg1", type:"image", src: "data/img/area01_bkg1.png"},
	//game font
	{name: "32x32_font", type:"image", src: "data/img/font/32x32_font.png"},
	//title screen image
	{name: "start_screen_temp", type:"image", src: "data/img/start_screen_temp.jpg"},
	/* Atlases 
	 * @example
	 * {name: "example_tps", type: "tps", src: "data/img/example_tps.json"},
	 */
		
	/* Maps. 
	 * @example
	 * {name: "example01", type: "tmx", src: "data/map/example01.tmx"},
	 * {name: "example01", type: "tmx", src: "data/map/example01.json"},
 	 */
 	 {name: "area01", type: "tmx", src: "data/map/area01.tmx"},
 	 {name: "main_game_level", type: "tmx", src: "data/map/main_game_level.tmx"}

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	
	
	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
];
