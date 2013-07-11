game.resources = [

	/* Graphics. 
	 * @example
	 * {name: "example", type:"image", src: "data/img/example.png"},
	 */
	//our level tileset
	{name: "sewer_tileset", type: "image", src: "data/img/sewer_tileset.png"},
	{name: "metatiles32x32", type:"image", src: "data/img/metatiles32x32.png"},
	//main car sprite
	{name: "cartemp", type: "image", src: "data/img/sprite/cartemp.png"},
	//spinning coin spritesheet
	{name: "spinning_coin_gold", type: "image", src: "data/img/sprite/spinning_coin_gold.png"},
	//obstacle spritesheet
	{name: "obtemp", type: "image", src: "data/img/sprite/obtemp.png"},
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
 	 {name: "area01", type: "tmx", src: "data/map/area01.tmx"}

	/* Background music. 
	 * @example
	 * {name: "example_bgm", type: "audio", src: "data/bgm/", channel : 1},
	 */	
	
	/* Sound effects. 
	 * @example
	 * {name: "example_sfx", type: "audio", src: "data/sfx/", channel : 2}
	 */
];
