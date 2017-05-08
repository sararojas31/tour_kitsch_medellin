(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 100,
	height: 300,
	fps: 12,
	color: "#09AFC6",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Interpolación7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E31F26").ss(0.3).p("AAAhyIAADl");
	this.shape.setTransform(0.7,0);

	this.text = new cjs.Text("PROGRAMA DE COMUNICACIÓN \nGRÁFICA PUBLICITARIA", "3px 'Arial'", "#E31F26");
	this.text.textAlign = "center";
	this.text.lineHeight = 4;
	this.text.setTransform(-22,4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E31F26").ss(0.3).p("AiAAAIEBAA");
	this.shape_1.setTransform(-21.6,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E31F26").s().p("Ag3ALIgCgCIgBgCIAAgEIAEAAIAAADQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIgBgDIgCgCIgEgBIgBgEIAAgBIACgEQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABIABACIABAEIgEAAIAAgCIgBgBQAAABgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIADACIACABIABADIAAABIgBAFQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgDABgAh9ALQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAIgBgDIAAgQIAFAAIAAAQQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgQIAFAAIAAAPIgBAEIgCACIgDABgAB8ALIgDgLIAAALIgDAAIAAgVIADAAIAEALIAAgLIADAAIAAAVgABvALIAAgVIAFAAIAAAVgABlALIAAgVIADAAIAAARIAGAAIAAAEgABaALIAAgVIAEAAIAAARIAFAAIAAAEgABOALIAAgVIAKAAIAAAEIgFAAIAAAFIAEAAIAAACIgEAAIAAAGIAFAAIAAAEgABBALIAAgVIAGAAIADAAIABACIABACIAAAMQAAAFgFAAgABFAIIACAAIABgBIAAgCIAAgKIgBgBIgCAAgAA2ALIAAgVIAJAAIAAAEIgGAAIAAAFIAGAAIAAACIgGAAIAAAGIAHAAIAAAEgAAwALIAAgQIAAAAIgDAQIgDAAIgDgQIAAAQIgDAAIAAgVIAFAAIADAMIACgMIAFAAIAAAVgAASALIAAgVIAJAAIAAAEIgGAAIAAAFIAGAAIAAACIgGAAIAAAGIAHAAIAAAEgAAEALIAAgVIAGAAIADAAIACACIAAACIAAAMQAAAFgEAAgAAJAIIABAAIABgBIAAgCIAAgIIAAgCIAAgBIgCAAgAgNALIAAgVIAGAAIADAAIACACIAAACIAAAMQAAAFgEAAgAgIAIIABAAIABgBIABgCIAAgIIgBgCIAAgBIgCAAgAgSALIgBgEIgDAAIgBAEIgDAAIADgVIAGAAIADAVgAgWACIADAAIgBgIgAgnALIAAgVIAGAAIADAAIACACIAAACIAAAMQAAAFgEAAgAgiAIIABAAIABgBIAAgCIAAgKIAAgBIgCAAgAgtALIAAgVIAEAAIAAAVgAg/ALIAAgFIgBgDIgBgBIgBAAIAAAJIgEAAIAAgVIAGAAIADAAIACACIAAADIAAAEIgBABIgBAAIABABIABACIAAAGIAAACgAhCAAIABAAIABgBIABgDIgBgCIgBAAIgBAAgAhSALIAAgVIAJAAIAAAEIgEAAIAAAFIAEAAIAAACIgEAAIAAAGIAFAAIAAAEgAhcALIgDgVIADAAIADAOIACgOIAEAAIgEAVgAhlALIAAgVIAEAAIAAAVgAhrALIgEgLIAAALIgDAAIAAgVIADAAIAEALIAAgLIADAAIAAAVg");
	this.shape_2.setTransform(-21.6,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FABAC0").s().p("AAAAAIAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_3.setTransform(-22.9,-8.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDE8EA").s().p("AAAADIAAAAIAAgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAADIAAAAIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAFg");
	this.shape_4.setTransform(-23,-7.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ED1B2D").s().p("AABADQAAgFgBAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIAAADIgBAAIAAgDIAAAAIAAAAIABAAIgBAAIAAAAIABAAIAAAAIgBgBIABAAIAAAAIAAgBIAAgBIAAABIAAgBIAAAAIAAABIAAgBIABABIAAABIAAAAIABAAIgBABIAAAAIABAAIAAAAIgBAAIABAAIAAAAIAAAAIAAAAIAAAAIAAABIAAAAIAAABIAAAAIAAABg");
	this.shape_5.setTransform(-23,-7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(-23.3,-7.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_7.setTransform(-22.7,-7.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(-22.5,-7.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_9.setTransform(-23.4,-7.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIgBAAg");
	this.shape_10.setTransform(-23.3,-7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_11.setTransform(-22.6,-7.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_12.setTransform(-22.5,-7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_13.setTransform(-23.4,-7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_14.setTransform(-22.7,-7.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(-22.6,-7.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_16.setTransform(-23.4,-7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_17.setTransform(-22.7,-8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_18.setTransform(-23.3,-8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(-22.5,-8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_20.setTransform(-23,-8.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_21.setTransform(-22.8,-8.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_22.setTransform(-23.1,-8.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_23.setTransform(-23.4,-8.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_24.setTransform(-22.8,-8.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_25.setTransform(-23.2,-8.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_26.setTransform(-23.3,-8.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_27.setTransform(-23.3,-8.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_28.setTransform(-23.3,-8.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_29.setTransform(-23.3,-8.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_30.setTransform(-23.3,-8.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#ED1B2D").s().p("AgDAIIAAAAIgBAAIAAgBIAAgBIAAAAIAAgEIABgBIgBAAIAAgBIABAAIgBgBIAAgCIABAAIAAgDIgBgBIABAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAABIAAAAIAAADIAAAAIABgBIAAAAIAAABIAAAAIAAgBIAAAAIAAABIAAAAIAAgBIABAAIAAABIABAAIAAgDIgBAAIAAgBIABAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIAAABIAAAAIAAADIABAAIAAACIgBABIABAAIAAAGIAAAAIAAABIAAABIgBAAIgBAAg");
	this.shape_31.setTransform(-23,-8.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FABAC0").s().p("AAAAAIAAAAIAAABQAAAAAAAAg");
	this.shape_32.setTransform(-22.8,-9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FABAC0").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAgBIABAAIAAABIgBAAIABAAIAAABIAAAAIgBgBIAAABIAAAAIAAgBIAAACg");
	this.shape_33.setTransform(-23,-9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ED1B2D").s().p("AAAACIgBAAIAAgBIABgBIAAgBIAAAAIAAgBIAAAAIAAAAIAAABIABAAIAAABIgBAAIABABQABAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAIAAAAIAAAAIAAABIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_34.setTransform(-23,-9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ED1B2D").s().p("AACADIgHgBIAAgCIAIABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAIgHAAIAAgCIAHABQAEAAgBABQgBABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_35.setTransform(-26.3,-8.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#ED1B2D").s().p("AAAAGIABgFIgCAEIAAAAIAAgFIgCAEIgCgBIAFgJIABABIgBAFIAEgEIACABIgFAKg");
	this.shape_36.setTransform(-19.7,-11.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ED1B2D").s().p("AgDgEIADgBIADAJIgBABIgBgCIgBAAIAAADIAAAAg");
	this.shape_37.setTransform(-22.8,-12.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ED1B2D").s().p("AAAAFIABgCQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCgBQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIACAAIAAACIgCABIABABIAEAAIABACIgBADIgBAAIgCAAg");
	this.shape_38.setTransform(-24.5,-11.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ED1B2D").s().p("AgBADIABgGIAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIAAABgAAAACIAAAAIABgCIgBgBIAAAAg");
	this.shape_39.setTransform(-21.2,-12.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#ED1B2D").s().p("AgCAEIgCgBIAHgHIABABQADADgEACIgDACIAAABIgCgBgAgBACQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAFgCgCgBg");
	this.shape_40.setTransform(-18.5,-11.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ED1B2D").s().p("AgCgEIACAAQACAAABAEQAAAFgDAAIgBABgAAAADIAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAg");
	this.shape_41.setTransform(-22.1,-12.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#ED1B2D").s().p("AAAAFIgDgJIABAAIACAAIADADQADAEgEABIgCABgAABACQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIgBgBg");
	this.shape_42.setTransform(-23.6,-11.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#ED1B2D").s().p("AgFgBIACgCQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAAABQABABAAAAQABABAAABQAAAAAAAAQAAAAAAAAIAEACIgBABIgDgCIgBABIACACIgBABgAgCgBIACABIAAAAQAAAAABAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBAAIgBABg");
	this.shape_43.setTransform(-25,-10.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ED1B2D").s().p("AgBADIABgGIACABIAAACIgCgBIAAABIABAAIAAABIgBgBIAAACIAAAAIAAACg");
	this.shape_44.setTransform(-20.6,-12.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ED1B2D").s().p("AgFACIAIgGIACADIgBABIgBgBIgCABIABAAIgBABIgBgBIgCACIABACIgBABg");
	this.shape_45.setTransform(-17.9,-10.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#ED1B2D").s().p("AgDAEIAEgJIAEADIgBABIgCgBIgBACIABAAIgBAAIgBAAIgBAEIABABIAAABg");
	this.shape_46.setTransform(-18.9,-11.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ED1B2D").s().p("AgFgBIADgDIABABIgBACIACABIAAgBIAAABIAAAAIADACIABgCIACABIgDAEg");
	this.shape_47.setTransform(-25.4,-10.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ED1B2D").s().p("AgFAAIABAAIAEAAIgDgCIACgBIAHAGIgBABg");
	this.shape_48.setTransform(-25.8,-10);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#ED1B2D").s().p("AgEAAIAJgDIAAACIgHACIABACIgCABg");
	this.shape_49.setTransform(-17.3,-9.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#ED1B2D").s().p("AgEAAIAIgDIABABIgGAEIABACIgCABg");
	this.shape_50.setTransform(-17.6,-10);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ED1B2D").s().p("AgEAAIAJgBIABABIgKACg");
	this.shape_51.setTransform(-17,-9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#ED1B2D").s().p("AgDgDIACgBIAEAIIgCABg");
	this.shape_52.setTransform(-24.1,-11.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#ED1B2D").s().p("AgFAAIABgCIAJADIgBACg");
	this.shape_53.setTransform(-26,-9.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ED1B2D").s().p("AgEACIAEgCIgEAAIgBgBIAKgCIAAACIgFACIAFgBIABACIgKABg");
	this.shape_54.setTransform(-16.9,-8.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#ED1B2D").s().p("AgFABIAAgBIAFAAIgEgBIABgCIAJADIgBABIgFAAIAFABIgBACg");
	this.shape_55.setTransform(-26.2,-8.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FABAC0").s().p("AgCAAIAAAAIAFAAIgBAAQgCAAgCAAg");
	this.shape_56.setTransform(-20.8,-6.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FABAC0").s().p("AgBAAIAAAAIADAAIAAAAg");
	this.shape_57.setTransform(-20.8,-6.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FABAC0").s().p("AAAAGIAAAAIAAgFIAAgBIAAAAIAAgBIAAgCQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIADAAIAAACIgBABIgBAIIAAAAIAAABg");
	this.shape_58.setTransform(-20.8,-5.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAAAg");
	this.shape_59.setTransform(-21,-5.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgBAAIgBgBIAAgBIACAAIAAAAIAAAAIAAAAIAAABIAAgBIAAADIAAAAIABAAIgBgBIABgHIABgBIAAAAIAAAHIABADIgFAGg");
	this.shape_60.setTransform(-20.8,-5.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.1,0).s().p("AgBABQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBAAIACAAIgCABg");
	this.shape_61.setTransform(-20.5,-6.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.1,0).s().p("AgBABIACgBIgBAAIACAAIgCABg");
	this.shape_62.setTransform(-20.5,-6.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBABQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIgBAAIACAAIgCABg");
	this.shape_63.setTransform(-20.5,-6.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIACAAIgCAAIAAABg");
	this.shape_64.setTransform(-20.5,-6.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIACAAIgCAAIAAABg");
	this.shape_65.setTransform(-20.5,-6.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBABIABgBIABAAIgBAAIACAAIgCAAIAAABg");
	this.shape_66.setTransform(-20.5,-6.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgCABIACgBIACAAIgCAAIADAAIgDAAIAAABg");
	this.shape_67.setTransform(-20.5,-6.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgCABIACgBIACAAIgCAAIADAAIgDAAIAAABg");
	this.shape_68.setTransform(-20.5,-6.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_69.setTransform(-20.5,-6.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_70.setTransform(-20.5,-6.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_71.setTransform(-20.5,-6.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_72.setTransform(-20.5,-6.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_73.setTransform(-20.5,-6.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_74.setTransform(-20.5,-6.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABQAAgBAEAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_75.setTransform(-20.5,-6.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQABgBAEgBIgCABIADAAIgDABIAAABg");
	this.shape_76.setTransform(-20.5,-6.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQABgBAEgBIgCABIADAAIgDABIAAABg");
	this.shape_77.setTransform(-20.5,-6.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAAACIAAAAIgFgBIACgBQACgBADAAIAAABIAEgBQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABIABABIgCAAIgDAAg");
	this.shape_78.setTransform(-20.4,-6.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#ED1B2D").s().p("AgEAEIgBgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAAAIgBgBIABgBIAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIgBgCIAAgDIABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAFgBIAAABIADgBQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIABABQgBADgFgDIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAACIAAADIAAAAIAAACIAAAFIgFAHg");
	this.shape_79.setTransform(-20.4,-5.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#ED1B2D").s().p("AAAACIgCgCIACgBIAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIAAAAIgBABIgCACgAAAAAIAAAAIAAABIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAg");
	this.shape_80.setTransform(-18.3,-3.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#ED1B2D").s().p("AAAAAIAAAAIgBAAIABgCIABACIgBAAIACACIgBABg");
	this.shape_81.setTransform(-19.1,-3.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#ED1B2D").s().p("AAAADIgCgEIACgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIgCABIgBgCIAAAAIAAACIAAABgAAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_82.setTransform(-19.6,-2.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#ED1B2D").s().p("AgBgBIABgBQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIABABIgBABIgBAAIAAABgAAAABIAAgBIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAIAAAAIAAgBIAAABg");
	this.shape_83.setTransform(-20.5,-2.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#ED1B2D").s().p("AAAADIAAgDIgBgCIABAAIAAACIAAgCIACABIgCABIAAADg");
	this.shape_84.setTransform(-22.1,-2.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#ED1B2D").s().p("AgCgBIACgBIAAABIADABIgCABIAAAAIgBABIAAAAIAAAAIAAABg");
	this.shape_85.setTransform(-18.6,-3.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ED1B2D").s().p("AAAADIAAgBIAAAAIAAgBIAAABIgBgBIABgCIAAgBIACABIAAAEg");
	this.shape_86.setTransform(-23.1,-2.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ED1B2D").s().p("AAAADIAAgDIgBACIgBgBIACgDIAAAAIAAACIACgBIABABIgDADg");
	this.shape_87.setTransform(-24.3,-3.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#ED1B2D").s().p("AgBgBIABgBIAAABIAAABIAAAAIABAAIAAAAIgBAAIAAABIABAAIABABIgCABg");
	this.shape_88.setTransform(-20.1,-2.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#ED1B2D").s().p("AgCABIACgDIACACIgBAAIAAAAIgBAAIABAAIgBABIAAgBIAAABIAAABIAAABg");
	this.shape_89.setTransform(-24.6,-3.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#ED1B2D").s().p("AAAADIAAgFIAAAAIAAADIABAAIAAACg");
	this.shape_90.setTransform(-21.3,-2.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#ED1B2D").s().p("AAAACIAAgDIAAAAIAAADg");
	this.shape_91.setTransform(-21,-2.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#ED1B2D").s().p("AAAACIAAgEIABABIgBAEg");
	this.shape_92.setTransform(-23.4,-2.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#ED1B2D").s().p("AgBABIACgCIABABIgCACg");
	this.shape_93.setTransform(-24.9,-3.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#ED1B2D").s().p("AgBABQgBgBAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABAAQAAABABAAQAAAAABABIgCAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_94.setTransform(-23.8,-3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#ED1B2D").s().p("AgCAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABABIAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_95.setTransform(-25.2,-4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgDgCQAAAAAAAAQABgBAAAAQABAAABAAQAAAAAAAAIAEAFQgDABgBACg");
	this.shape_96.setTransform(-22.3,-6.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgDgCIADgCIAEAHIgEACg");
	this.shape_97.setTransform(-22.8,-6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#ED1B2D").s().p("AgHgBIAAAAIAAgBIABAAIgBAAIADgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIACgBIAAABIACAAIAEAGIgGACIgBABIgDADg");
	this.shape_98.setTransform(-22.5,-5.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#ED1B2D").s().p("AAAABIgBgBIABAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIABAAIgCAAIAAABIAAAAg");
	this.shape_99.setTransform(-20.4,-7.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#ED1B2D").s().p("AgBAAIABAAIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_100.setTransform(-19.7,-7.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#ED1B2D").s().p("AgBAAIABAAIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_101.setTransform(-21.1,-7.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#ED1B2D").s().p("AAAAFIAAgKIABAAIgBAKIAAgBIAAACg");
	this.shape_102.setTransform(-19.8,-8.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#ED1B2D").s().p("AAAAFIABgKIgBAKIABgBIAAACg");
	this.shape_103.setTransform(-21.2,-8.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#ED1B2D").ss(0.2).p("AAIABIADgBIADAAIAAAAQABAAABAAIgCAAIgBAAIgFAAIAAgCQAAgCgBAAIgBACIAAACIgFAAIgBAAIAAAAIAAAAIABAAIACAAIADABIAAALIABABIABAAIAAgBg");
	this.shape_104.setTransform(-21.2,-9.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AAAAJIAAgBIAAgJIgCgBIgDAAIgBAAIgBgBIABABIABgBIAFAAIAAgDIAAgCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAADIAGAAIABABIABgBIgBABIgBAAIgDAAIgDABIAAAJIAAABg");
	this.shape_105.setTransform(-20.4,-8.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F5828C").s().p("AgLAOIAAgIIAQgRIAHgCIAAAHIgTAUg");
	this.shape_106.setTransform(-20.4,-8.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#ED1B2D").ss(0.5).p("AgLgNQALAIAMgFQACANgEAOIgVAAg");
	this.shape_107.setTransform(-20.3,-8.6,1,1,0,0,0,0,0.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgLAPIAAgdQALAHAMgFQACANgEAOg");
	this.shape_108.setTransform(-20.4,-8.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#ED1B2D").ss(0.5).p("AgLAOQAOgKAHgVIgVAAg");
	this.shape_109.setTransform(-20.4,-5.4,1,1,0,0,0,0,-0.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgKgPIAVAAQgIAVgNAKg");
	this.shape_110.setTransform(-20.5,-5.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#ED1B2D").ss(0.5).p("AAMAOQgOgKgHgVIAVAAg");
	this.shape_111.setTransform(-22.8,-5.4,1,1,0,0,0,0,-0.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgKgPIAVAAIAAAfQgOgKgHgVg");
	this.shape_112.setTransform(-22.8,-5.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#ED1B2D").s().p("AgMAQIAAgfQAMAHAMgFQADARgEAMg");
	this.shape_113.setTransform(-20.3,-8.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#ED1B2D").s().p("AgLgQIAXAAIAAAhQgPgMgIgVg");
	this.shape_114.setTransform(-22.9,-5.3);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#ED1B2D").s().p("AgLgQIAXAAQgHAVgQAMg");
	this.shape_115.setTransform(-20.4,-5.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FBD1D5").s().p("AgJABIgCgBIAWAAIAAABg");
	this.shape_116.setTransform(-22.8,-7.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FCDDE0").s().p("AgEACIAEgGQAEACABACIgFAFIgEgDg");
	this.shape_117.setTransform(-17.4,-6.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F2606C").s().p("AgDAAIADgDQACACACABIgEAEg");
	this.shape_118.setTransform(-18,-5.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F5828C").s().p("AgCABIACgDIADACIgDADQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAg");
	this.shape_119.setTransform(-18.4,-5.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F2606C").s().p("AAAAAIAAAAIAAABg");
	this.shape_120.setTransform(-18.7,-4.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F5828C").s().p("AgFgCIACgEIADAFIAFACIgCADIAAABIABABIABAAIABABQgGAAgFgJg");
	this.shape_121.setTransform(-19.1,-5.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#F2606C").s().p("AgBACIgEgDIACgFIADAGQADACACABIgCAEQgDgBgBgEg");
	this.shape_122.setTransform(-18.9,-6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FCDDE0").s().p("AgDAGIgEgGQADgHAAgDQAEACABAGQAEAEADABIgHAIQgBgBgDgEg");
	this.shape_123.setTransform(-18.5,-6.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#ED1B2D").s().p("AgCAIIACgDQgCgBgDgEIgEgDIADgHIAEAGQACAEACAAIAGgGIABABIgDAEIAEACIgKAKQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_124.setTransform(-18.5,-5.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F5828C").s().p("AgEAGIABAAIABgBIAAgBIgCgDQAEgBADgGIADAEQgGAJgEAAg");
	this.shape_125.setTransform(-24.1,-5.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#ED1B2D").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIABAAIgBAAIABAAIAAAAIgBAAIABAAIgBAAIAAABgAAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_126.setTransform(-23,-9.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AAAADIAAgBIgBgBIAAAAIgBgBIABAAIAAAAIAAAAIAAgBIABAAIAAAAIAAAAIAAgBIAAABIABAAIAAAAIABAAIAAABIABAAIAAABIgBABIgBABg");
	this.shape_127.setTransform(-23,-9.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F8A4AB").s().p("AgDAEIgBgDIAAgBIABgBIABgBIAAgBIAGgBQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQgBABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAACIgBACQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAgBAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_128.setTransform(-23,-9.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FDE8EA").s().p("AgLAFIAAgHQALADAMgGIAAAJQgGAEgCgEIgEABIgFgBQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgDgBg");
	this.shape_129.setTransform(-22.9,-9.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#ED1B2D").ss(0.5).p("AAMgNQgMAIgLgFQgBAPADAMIAVAAg");
	this.shape_130.setTransform(-22.9,-8.6,1,1,0,0,0,0,0.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgJAPQgDgLABgQQALAFAMgHIAAAdg");
	this.shape_131.setTransform(-22.9,-8.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#ED1B2D").s().p("AgKAQQgEgMADgRQALAFANgHIAAAfg");
	this.shape_132.setTransform(-23,-8.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FCDDE0").s().p("AgEAAQAAgCAEgCIAFAGQgDABgBACg");
	this.shape_133.setTransform(-25.9,-6.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F2606C").s().p("AgCAAIACgDIADADIgDAEg");
	this.shape_134.setTransform(-25.3,-5.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F5828C").s().p("AgCAAIACgCIADADQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_135.setTransform(-24.9,-5.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F2606C").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_136.setTransform(-24.6,-4.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F2606C").s().p("AgEADQACgBACgCIADgGIACAFIgDADQgCAEgCABIgCgEg");
	this.shape_137.setTransform(-24.4,-6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FCDDE0").s().p("AgGADQADgBADgEQABgHADgBIADAKIgDAGQgDAEgCABg");
	this.shape_138.setTransform(-24.8,-6.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#ED1B2D").s().p("AgJABIAEgCIgDgEIABgBIAGAGQADgBAFgJIADAHQgFAGgEACIABADQABAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_139.setTransform(-24.8,-5.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgnAoQgRgRAAgXQAAgWARgRQARgRAWAAQAXAAARARQARARgBAWQABAXgRARQgRARgXAAQgWAAgRgRg");
	this.shape_140.setTransform(-21.6,-7.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#ED1B2D").s().p("AgpAqQgRgSAAgYQAAgYARgRQASgSAXAAQAYAAASASQARARAAAYQAAAYgRASQgSASgYAAQgXAAgSgSg");
	this.shape_141.setTransform(-21.6,-7.6);

	this.text_1 = new cjs.Text("FACULTAD DE COMUNICACIÓN", "3px 'Arial'", "#E31F26");
	this.text_1.lineHeight = 4;
	this.text_1.setTransform(7.1,4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#E31F26").ss(0.3).p("AiAAAIEAAA");
	this.shape_142.setTransform(23.5,3.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E31F26").s().p("Ag3ALIgCgCIAAgCIAAgEIADAAIAAADQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgDIgFgDIgBgEIAAgBIABgEQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABIACACIAAAEIgEAAIAAgCIgBgBQAAABgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAIABACIACACIADABIABADIAAABIAAAFQgBAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgDABgAh9ALIgCgCIAAgDIAAgQIADAAIAAAQQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgQIADAAIAAAPIAAAEIgCACIgCABgAB8ALIgDgLIABALIgFAAIAAgVIAFAAIADALIgBgLIAFAAIAAAVgABvALIAAgVIAEAAIAAAVgABkALIAAgVIAFAAIAAARIAEAAIAAAEgABaALIAAgVIAFAAIAAARIAEAAIAAAEgABOALIAAgVIAKAAIAAAEIgGAAIAAAFIAGAAIAAACIgGAAIAAAGIAGAAIAAAEgABCALIAAgVIAFAAIADAAIACACIABACIAAAMQgBAFgFAAgABGAIIABAAIABgBIAAgMIgBgBIgBAAgAA1ALIAAgVIAKAAIAAAEIgFAAIAAAFIAFAAIAAACIgFAAIAAAGIAFAAIAAAEgAAwALIAAgQIgDAQIgDAAIgDgQIABAQIgFAAIAAgVIAHAAIABAMIACgMIAGAAIAAAVgAASALIAAgVIAJAAIAAAEIgFAAIAAAFIAFAAIAAACIgFAAIAAAGIAFAAIAAAEgAAFALIAAgVIAFAAIAEAAIABACIAAACIAAAMQABAFgGAAgAAIAIIACAAIABgBIABgCIAAgKIgCgBIgCAAgAgMALIAAgVIAFAAIAEAAIABACIABACIAAAMQAAAFgGAAgAgIAIIABAAIABgBIAAgCIAAgIIAAgCIgBgBIgBAAgAgSALIAAgEIgDAAIgBAEIgFAAIAFgVIAEAAIAFAVgAgVACIACAAIgBgIgAgmALIAAgVIAFAAIADAAIACACIAAACIAAAMQABAFgGAAgAgjAIIACAAIABgBIABgCIAAgIIgBgCIgBgBIgCAAgAgtALIAAgVIAEAAIAAAVgAg/ALIAAgFIAAgDIgBgBIgCAAIAAAJIgEAAIAAgVIAGAAIADAAIABACIABADIAAAEIgBABIgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIABACIABAIgAhCAAIACAAIABgBIAAgDIAAgCIgBAAIgCAAgAhSALIAAgVIAKAAIAAAEIgGAAIAAAFIAFAAIAAACIgFAAIAAAGIAGAAIAAAEgAhcALIgEgVIAFAAIABAOIABAAIACgOIAEAAIgEAVgAhlALIAAgVIAEAAIAAAVgAhsALIgDgLIABALIgFAAIAAgVIAFAAIADALIgBgLIAFAAIAAAVg");
	this.shape_143.setTransform(23.5,0.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FABAC0").s().p("AAAAAIAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_144.setTransform(22.2,-8.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FDE8EA").s().p("AAAADQAAgFAAAAQABAAAAAFg");
	this.shape_145.setTransform(22.1,-7.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_146.setTransform(22.5,-7.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_147.setTransform(22.6,-7.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_148.setTransform(21.8,-7.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_149.setTransform(22.4,-7.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_150.setTransform(22.5,-7.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_151.setTransform(21.7,-7.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_152.setTransform(21.8,-7.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_153.setTransform(22.3,-7.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_154.setTransform(22.5,-7.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_155.setTransform(22.6,-7.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_156.setTransform(21.6,-7.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_157.setTransform(21.8,-7.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_158.setTransform(22.3,-7.9);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_159.setTransform(22.5,-7.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_160.setTransform(21.7,-7.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_161.setTransform(22.4,-8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_162.setTransform(22.5,-8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_163.setTransform(22.1,-8.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_164.setTransform(22.2,-8.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_165.setTransform(21.6,-8.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_166.setTransform(22.3,-8.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_167.setTransform(22.5,-8.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_168.setTransform(21.7,-8.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_169.setTransform(22.4,-8.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_170.setTransform(21.7,-8.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_171.setTransform(22.4,-8.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_172.setTransform(21.8,-8.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_173.setTransform(22.4,-8.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_174.setTransform(21.8,-8.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#ED1B2D").s().p("AgDAIIAAAAIgBgBIAAgBIAAAAIAAgCIABgBIAAgEIgBAAIAAgCIABAAIAAgEIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIABAAIAAABIgBAAIAAADIABAAIAAgBIAAAAIAAABIAAAAIAAgBIABAAIAAABIABAAIAAgDIgBAAIAAgBIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAABIAAAAIAAADIABAAIAAABIAAABIAAAAIgBABIABAAIAAAGIAAAAIAAABIAAABIgBAAIAAAAgAAAAAIABAAIAAAAIgBAAg");
	this.shape_175.setTransform(22.1,-8.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FABAC0").s().p("AAAAAIAAAAIAAABQAAAAAAAAg");
	this.shape_176.setTransform(22.2,-9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FABAC0").s().p("AAAABIAAAAIAAgBIAAgBIAAABIAAAAIAAAAIABABIgBAAIAAgBIAAAAIAAABIAAAAIAAAAIAAABIAAgBg");
	this.shape_177.setTransform(22,-9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#ED1B2D").s().p("AAAACIAAAAIgBgBIABgBIAAgBIAAAAIAAgBIAAAAIAAABIABAAIAAABIAAAAIAAAAIAAABQABAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAAAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_178.setTransform(22.1,-9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#ED1B2D").s().p("AACADIgHgBIAAgCIAIABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgBAAIgHAAIAAgCIAHABQAEAAgBABQAAABAAABQgBAAAAAAQAAABgBAAQAAAAAAAAIgCAAg");
	this.shape_179.setTransform(18.7,-8.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#ED1B2D").s().p("AAAAGIABgFIgCAEIAAAAIAAgFIgCAEIgCgBIAFgJIABABIgBAFIAEgEIACABIgFAKg");
	this.shape_180.setTransform(25.4,-11.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#ED1B2D").s().p("AgCgEIACgBIADAJIgBABIgCgCIAAAAIAAAAIAAABIAAACIgBAAgAAAACIAAgBIAAAAIAAgBIAAAAg");
	this.shape_181.setTransform(22.2,-12.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#ED1B2D").s().p("AAAAFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgCIgCgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIACAAIAAACQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIAAABIAEAAIABACIgBADIgBAAIgCAAg");
	this.shape_182.setTransform(20.5,-11.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#ED1B2D").s().p("AgBADIABgGIAAAAQACACAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIAAABgAAAACIAAAAIABgCIgBgBIAAAAg");
	this.shape_183.setTransform(23.9,-12.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#ED1B2D").s().p("AgDAEIgBgBIAGgHIACABQACADgDACIgDACIAAABIgDgBgAgBACQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIADgCQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_184.setTransform(26.6,-11.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#ED1B2D").s().p("AgCgEIACAAQACAAABAEQABAFgEAAIgBABgAAAADIAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAg");
	this.shape_185.setTransform(22.9,-12.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#ED1B2D").s().p("AAAAFIgDgJIACAAIABAAIADADQADAEgEABIgCABgAABACQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIgBgBg");
	this.shape_186.setTransform(21.4,-11.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#ED1B2D").s().p("AgFgBIACgCIADgBIAAABQABABAAAAQABABAAABQAAAAAAAAQAAAAAAAAIAEACIgBABIgDgCIgBABIACACIgBABgAgCgBIACABIAAAAQAAAAABAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBAAIgBABg");
	this.shape_187.setTransform(20,-10.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#ED1B2D").s().p("AgBADIABgGIACABIAAACIgCgBIAAABIABAAIAAABIgBgBIAAACIAAAAIAAACg");
	this.shape_188.setTransform(24.4,-12.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#ED1B2D").s().p("AgEACIAHgGIACADIAAABIgCgBIgCABIABAAIgBABIgBgBIgCACIABACIgBABg");
	this.shape_189.setTransform(27.2,-10.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#ED1B2D").s().p("AgEAEIAFgJIAEADIgBABIgCgBIgBACIABAAIgBAAIgBAAIgBAEIABABIAAABg");
	this.shape_190.setTransform(26.1,-11.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#ED1B2D").s().p("AgEgBIACgDIABABIgBACIACABIAAgBIABABIgBAAIAEACIAAgCIABABIgCAEg");
	this.shape_191.setTransform(19.6,-10.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#ED1B2D").s().p("AgEAAIAAAAIAEAAIgDgCIABgBIAHAGIgBABg");
	this.shape_192.setTransform(19.3,-10);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#ED1B2D").s().p("AgEAAIAJgDIAAACIgHACIABACIgCABg");
	this.shape_193.setTransform(27.8,-9.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#ED1B2D").s().p("AgEAAIAIgDIABABIgGAEIABACIgCABg");
	this.shape_194.setTransform(27.5,-10);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#ED1B2D").s().p("AgFAAIAKgBIAAABIgJACg");
	this.shape_195.setTransform(28,-9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#ED1B2D").s().p("AgDgDIACgBIAFAIIgCABg");
	this.shape_196.setTransform(21,-11.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#ED1B2D").s().p("AgFAAIABgCIAKADIgCACg");
	this.shape_197.setTransform(19.1,-9.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#ED1B2D").s().p("AgEACIAEgCIgFAAIAAgBIAKgCIABACIgFACIAFgBIAAACIgKABg");
	this.shape_198.setTransform(28.1,-8.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#ED1B2D").s().p("AgFABIAAgBIAFAAIgEgBIABgCIAJADIAAABIgGAAIAFABIgBACg");
	this.shape_199.setTransform(18.9,-8.9);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FABAC0").s().p("AgCAAIAEAAIAAAAg");
	this.shape_200.setTransform(24.3,-6.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FABAC0").s().p("AgCAAIAAAAIAEAAIAAAAQgCAAgCAAg");
	this.shape_201.setTransform(24.3,-6.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FABAC0").s().p("AgCAAIAAAAIAEAAIAAAAg");
	this.shape_202.setTransform(24.3,-6.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FABAC0").s().p("AAAAGIAAgFIAAgBIAAAAIAAAAIAAAAIAAgBIAAgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAEAAIAAACIgBABIgBAIIAAAAIAAABg");
	this.shape_203.setTransform(24.3,-5.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_204.setTransform(24.1,-5.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AAAAAIgBAAIAAgCIABAAIAAAEIAAAAIAAgBIABgIIAAAAIABAAIAAADIAAADIAAADIgDAHIABgJg");
	this.shape_205.setTransform(24.3,-5.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],0,0,0.3,0).s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBAAIABAAIgBABg");
	this.shape_206.setTransform(24.5,-6.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.1,0).s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBAAIABAAIgBABg");
	this.shape_207.setTransform(24.5,-6.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.1,0).s().p("AgBABIACgBIgBAAIACAAIgCABg");
	this.shape_208.setTransform(24.5,-6.7);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.2,0).s().p("AgBABIACgBIgBAAIACAAIgCABg");
	this.shape_209.setTransform(24.5,-6.7);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIgBAAIACAAIgCABg");
	this.shape_210.setTransform(24.5,-6.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgBABIABgBIABAAIgBAAIACAAIgCAAIAAABg");
	this.shape_211.setTransform(24.5,-6.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgBABIABgBIACAAIgCAAIACAAIgCAAIAAABg");
	this.shape_212.setTransform(24.5,-6.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgBABIABgBIACAAIgCAAIACAAIgCAAIAAABg");
	this.shape_213.setTransform(24.5,-6.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_214.setTransform(24.5,-6.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_215.setTransform(24.5,-6.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABIACgBIACAAIgCAAIADAAIgDABIAAAAgAACAAIAAAAg");
	this.shape_216.setTransform(24.5,-6.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_217.setTransform(24.6,-6.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_218.setTransform(24.6,-6.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_219.setTransform(24.6,-6.7);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQACgBADAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAEAAIgDABIgBAAg");
	this.shape_220.setTransform(24.6,-6.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQACgBADgBIgCABIAEAAIgDABIgBABg");
	this.shape_221.setTransform(24.6,-6.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQABgBAFgBIgDABIAEAAIgDABIgBABg");
	this.shape_222.setTransform(24.6,-6.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAAACIAAAAIgEgBQgBAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQACgBADAAIAAABIAEgBQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIABABIgCAAIgDAAg");
	this.shape_223.setTransform(24.7,-6.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#ED1B2D").s().p("AgEAEIgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBQAAAAAAAAQgBAAAAAAQAAAAABgBQAAAAAAAAIAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIgBgCIAAgBIAAgBIABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAEgBIAAABIADgBQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIABABQgBACgFgCIAAABIAAABIAAADIAAADIAAAAIAAACIAAAFIgFAHg");
	this.shape_224.setTransform(24.6,-5.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#ED1B2D").s().p("AAAACIgBgCIABgBIAAAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAAAIAAAAIAAABIgCACgAAAAAIAAAAIAAABIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAg");
	this.shape_225.setTransform(26.8,-3.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#ED1B2D").s().p("AAAAAIgBAAIAAAAIABgCIABACIgBAAIACACIgBABg");
	this.shape_226.setTransform(25.9,-3.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#ED1B2D").s().p("AAAADIgBgEIABgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIgBABIACABIgBABIgBgCIAAAAIAAACIAAABgAAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_227.setTransform(25.5,-2.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#ED1B2D").s().p("AgBgBIABgBIAAAAQABAAAAAAQAAABABAAQAAAAAAABQgBAAAAAAIABABIgBABIgBAAIAAABgAAAABIAAAAIAAgBIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAIAAgBIAAABg");
	this.shape_228.setTransform(24.5,-2.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#ED1B2D").s().p("AAAADIAAgDIgBgCIABAAIAAACIAAgCIACABIgCABIAAADg");
	this.shape_229.setTransform(23,-2.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#ED1B2D").s().p("AgCgBIABgBIABABIADABIgBABIgBAAIgBABIAAAAIAAABg");
	this.shape_230.setTransform(26.5,-3.4);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#ED1B2D").s().p("AABADIAAgBIgBAAIAAgBIAAABIgBgBIABgCIABgBIABABIAAAEg");
	this.shape_231.setTransform(22,-2.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#ED1B2D").s().p("AAAADIAAgDIAAACIgCgBIACgDIAAAAIAAACIABgBIABABIgCADg");
	this.shape_232.setTransform(20.8,-3.2);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#ED1B2D").s().p("AgBgBIABgBIAAABIAAABIAAAAIABAAIAAAAIgBAAIAAABIABAAIABABIgCABg");
	this.shape_233.setTransform(25,-2.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#ED1B2D").s().p("AgCABIACgDIADACIgBAAIgCAAIAAAAIABAAIgBABIAAgBIAAABIAAABIAAABg");
	this.shape_234.setTransform(20.4,-3.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#ED1B2D").s().p("AAAADIAAgFIAAAAIAAADIABAAIAAACg");
	this.shape_235.setTransform(23.7,-2.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#ED1B2D").s().p("AAAACIAAgDIAAAAIAAADg");
	this.shape_236.setTransform(24.1,-2.5);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#ED1B2D").s().p("AAAACIAAgEIABABIgBAEg");
	this.shape_237.setTransform(21.7,-2.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#ED1B2D").s().p("AgBABIACgCIABABIgCACg");
	this.shape_238.setTransform(20.1,-3.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#ED1B2D").s().p("AgBABQgBgBAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABABAAAAQAAAAABABIgCAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIABACIgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_239.setTransform(21.3,-3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#ED1B2D").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIgCAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_240.setTransform(19.9,-4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgHgBIABAAIAEAHIADgCIgEACgAABAEIABgBIAAAAIAEgCIAAgBIABAAIgEgFIAAAAIAFAGIgGACIAAABIgBAAg");
	this.shape_241.setTransform(22.5,-5.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgDgCIADgBIAEAFQgDABgBACg");
	this.shape_242.setTransform(22.8,-6.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgDgCIADgCIAEAHIgEACg");
	this.shape_243.setTransform(22.2,-6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#ED1B2D").s().p("AgHgBIABAAIAAgBIAAAAIAAAAQABAAAEgCIADgCIAAABIABAAIAFAGIgGACIAAABIgFADg");
	this.shape_244.setTransform(22.5,-5.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#ED1B2D").s().p("AAAABIgBgBIAAAAIABAAIAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCAAIAAABIAAAAg");
	this.shape_245.setTransform(24.7,-7.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#ED1B2D").s().p("AAAgFIAAAAIAAALg");
	this.shape_246.setTransform(23.9,-8.4);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#ED1B2D").s().p("AgBAAIABAAIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_247.setTransform(25.4,-7.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#ED1B2D").s().p("AgBAAIABAAIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_248.setTransform(24,-7.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#ED1B2D").s().p("AAAAFIABgKIgBAKIABgBIAAACg");
	this.shape_249.setTransform(25.2,-8.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#ED1B2D").s().p("AAAAFIAAgKIAAAKIABgBIAAACg");
	this.shape_250.setTransform(23.8,-8.4);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#ED1B2D").ss(0.2).p("AgIABIADgBIACAAQABAAAAAAIABAAIABAAIgBAAIgBAAIgGAAIAAgCQAAgCgBAAIgBACIAAACIgFAAIgBAAIgBAAQAAAAABAAIABAAIACAAIADABIAAALIABABIABAAIAAgBg");
	this.shape_251.setTransform(25.7,-9.1);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AAAAJIAAgBIAAgJIgDgBIgCAAIgBAAIgBgBIABABIABgBIAFAAIAAgDIAAgCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAADIAGAAIABABIABgBIgBABIgBAAIgBAAIgCAAIgDABIAAAJIAAABg");
	this.shape_252.setTransform(24.7,-8.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#F5828C").s().p("AgLAOIAAgIIAQgRIAHgCIAAAHIgTAUg");
	this.shape_253.setTransform(24.7,-8.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#ED1B2D").ss(0.5).p("AgLgNQALAIAMgFQACANgEAOIgVAAg");
	this.shape_254.setTransform(24.7,-8.6,1,1,0,0,0,0,0.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgLAPIAAgdQALAHAMgFQACANgEAOg");
	this.shape_255.setTransform(24.7,-8.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#ED1B2D").ss(0.5).p("AgLAOQAPgLAGgUIgVAAg");
	this.shape_256.setTransform(24.6,-5.4,1,1,0,0,0,0,-0.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgKgPIAVAAQgGAUgPALg");
	this.shape_257.setTransform(24.6,-5.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#ED1B2D").ss(0.5).p("AAMAOQgOgKgHgVIAVAAg");
	this.shape_258.setTransform(22.2,-5.4,1,1,0,0,0,0,-0.2);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgKgPIAVAAIAAAfQgNgKgIgVg");
	this.shape_259.setTransform(22.3,-5.4);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#ED1B2D").s().p("AgMAQIAAgfQAMAHAMgFQADAPgEAOg");
	this.shape_260.setTransform(24.8,-8.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#ED1B2D").s().p("AgLgQIAXAAIAAAhQgQgMgHgVg");
	this.shape_261.setTransform(22.2,-5.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#ED1B2D").s().p("AgBAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAABQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_262.setTransform(21.4,-9.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#ED1B2D").s().p("AgLgQIAXAAQgHAVgQAMg");
	this.shape_263.setTransform(24.7,-5.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FBD1D5").s().p("AgKABIgBgBIAXAAIAAABg");
	this.shape_264.setTransform(22.2,-7.3);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FCDDE0").s().p("AgEACIAEgGQAFACAAACIgFAFIgEgDg");
	this.shape_265.setTransform(27.7,-6.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#F2606C").s().p("AgDAAIADgDQACACABABIgDAEg");
	this.shape_266.setTransform(27.1,-5.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#F5828C").s().p("AgCABIACgDIADACIgDADQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAg");
	this.shape_267.setTransform(26.7,-5.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#F2606C").s().p("AAAAAIAAAAIAAABg");
	this.shape_268.setTransform(26.4,-4.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#F5828C").s().p("AgEgCIACgEIACAFIAFACIgCADIAAABIABABIABAAIAAABQgFAAgEgJg");
	this.shape_269.setTransform(25.9,-5.4);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#F2606C").s().p("AAAACIgEgDIACgFIACAGQACACAEABIgDAEQgDgBAAgEg");
	this.shape_270.setTransform(26.2,-6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FCDDE0").s().p("AgCAGIgFgGIAEgKQADACACAGQADAEADABIgGAIQgCgBgCgEg");
	this.shape_271.setTransform(26.6,-6.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#ED1B2D").s().p("AgBAIIABgDQgCgBgDgEIgEgDIADgHIAFAGIADAEIAGgGIABABIgDAEIAEACIgKAKQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBABAAg");
	this.shape_272.setTransform(26.5,-5.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#F5828C").s().p("AgEAGIABAAIABgBIAAgBIgCgDQAEgBADgGIADAEQgGAJgFAAg");
	this.shape_273.setTransform(20.9,-5.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#ED1B2D").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_274.setTransform(22,-9.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AAAADIgBgBIgBgBIAAgBIABgBIABAAIAAAAIAAAAIAAgBIAAABIABAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIgBABIAAAAIgBABIAAABg");
	this.shape_275.setTransform(22.1,-9.5);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F8A4AB").s().p("AgDAEIgBgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAGgBQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAACIgBACQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_276.setTransform(22.1,-9.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FDE8EA").s().p("AAEAEIgEABIgFgBQgDADgDgCIAAgHQALADAMgGIAAAJQgDACgCAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_277.setTransform(22.1,-9.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#ED1B2D").ss(0.5).p("AAMgNQgMAIgLgFQgBAPADAMIAVAAg");
	this.shape_278.setTransform(22.1,-8.6,1,1,0,0,0,0,0.2);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgJAPQgDgLABgQQALAFAMgHIAAAdg");
	this.shape_279.setTransform(22.1,-8.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#ED1B2D").s().p("AgJAQQgFgMADgRQALAFANgHIAAAfg");
	this.shape_280.setTransform(22,-8.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FCDDE0").s().p("AgEAAQABgCADgCIAFAGQgDABgBACg");
	this.shape_281.setTransform(19.2,-6.2);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#F2606C").s().p("AgDAAIADgDIAEADIgEAEg");
	this.shape_282.setTransform(19.7,-5.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#F5828C").s().p("AgCAAIACgCIADADQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_283.setTransform(20.2,-5.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#F2606C").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_284.setTransform(20.4,-4.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#F2606C").s().p("AgFADQAEgBABgCIAEgGIACAFQgFAGgCACg");
	this.shape_285.setTransform(20.7,-6);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FCDDE0").s().p("AgHADQADgBAEgEQABgGAEgCQAAADADAHIgEAGQgDAEgCABIgGgIg");
	this.shape_286.setTransform(20.2,-6.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#ED1B2D").s().p("AgJABIAFgCIgEgEIABgBIAGAGQAEgBAEgJIADAHQgEAGgFACIACADQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAg");
	this.shape_287.setTransform(20.3,-5.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgRAWAAQAXAAARARQAQARABAWQgBAXgQARQgRARgXAAQgWAAgRgRg");
	this.shape_288.setTransform(23.5,-7.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#ED1B2D").s().p("AgpAqQgRgSAAgYQAAgYARgRQASgSAXAAQAYAAASASQASARAAAYQAAAYgSASQgSASgYAAQgXAAgSgSg");
	this.shape_289.setTransform(23.5,-7.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("A4MCmIAAlLMAwYAAAIAAFLg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.text_1},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.text},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.9,-16.6,309.8,33.3);


(lib.Interpolación6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Au6AjIAAhFId0AAIAABFg");
	this.shape.setTransform(-0.1,-21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#434B53").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_1.setTransform(0.2,-9.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DBDCDD").s().p("AuSBVQgmAAAAgFIAAikIdxAAIAACkQAAAFgmAAg");
	this.shape_2.setTransform(0.2,-9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BDC1C4").s().p("AkQCBQgEgBgDgDQgFgEALgGIAZgMQAcgPAKgTQAFgLACgeIAOicIF6AAIAGBUQAIBUAEAQIACALQAGAMAMAJIAxAcIAFAFQADAGgJACg");
	this.shape_3.setTransform(0,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-24.8,191.2,49.8);


(lib.Interpolación3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#98D0D8").s().p("AilCRQgZgYAAgkQAAgbAQgWQAPgWAZgIQgMgYAAgbQAAgzAlgkQAkglAzAAQAtAAAjAfQAjAfAGAuQAKgEANAAQAcAAAVAUQAUAUAAAaQAAAdgUAUQgVAUgcAAQgRAAgQgJQgPgIgJgOQgkAmgzAAIAAAAIAAAIQAAAjgZAZQgYAZgjAAQgjAAgYgZg");
	this.shape.setTransform(19.3,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#80BECB").s().p("AHUDAIvpAAQgPgXAAgdQAAgoAdgdQAcgcApAAQAVAAATAIIgBgIQAAgtAhggQAhghAuAAQAcAAAZAMIgBgDQAAgvAighQAhgiAvAAQAgAAAcARQAaAQAPAbQAMgWAUgNQAVgNAaAAQAZAAAWAMQAVANAMAVQAHgiAcgWQAcgWAlAAQAmAAAdAXQAcAXAGAjQAKgDAGAAQATAAANANQANANAAATQAAAQgKAMQBPAWAKBJIALgBQAdAAAUAUQAVAVAAAdQAAAdgVAVQgUAUgdAAg");
	this.shape_1.setTransform(22.2,30.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94C9D3").s().p("AgOAOQgFgGAAgIQAAgHAFgGQAHgHAHAAQAIAAAHAHQAFAGAAAHQAAAIgFAGQgHAGgIABQgHgBgHgGg");
	this.shape_2.setTransform(33.3,-41.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#94C9D3").s().p("AgYAYQgKgKAAgOQAAgOAKgJQALgLANAAQAOAAALALQAKAJAAAOQAAAOgKAKQgLALgOAAQgNAAgLgLg");
	this.shape_3.setTransform(40.8,-46.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#94C9D3").s().p("AgQBQQgSgPgHgXQgFACgHAAQgRAAgMgMQgMgMgBgRQABgMAHgKQAIgLAMgEIgBgIQAAgVAQgPQAPgQAVAAQATAAAPAPQAPAPABAVQAaAEASATQASAUAAAZQgBAdgUAUQgVAVgcAAQgZAAgRgPg");
	this.shape_4.setTransform(40.8,-27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94C9D3").s().p("AATBmQgMgIgEgPQgJATgWAAQgPAAgMgMQgLgLAAgQQAAgMAIgLQghgZAAgmQAAgjAZgZQAYgYAjAAQAhAAAYAYQAYAZAAAjQAAAbgSAWQAQAEAKAMQAKANAAAPQAAAUgNANQgOANgTAAQgPAAgMgKg");
	this.shape_5.setTransform(83.6,-20.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AqQC5QAAg8AogqQAogrA4AAQAdAAAaANIAAgNQAAhCAtgxQAugxBAAAQA5AAAsAoQARgEAKgBQAEgiAYgXQAYgYAhAAQAWAAASALQALgtAigcQAhgdAsAAQAkAAAeAUQAdASARAgIAKgXQAXgZAngKQAjgIAlAHQAoAIAZAaQATAUAEAeIAJgEQAMgEALgBQAcgDAXAYQAZAbgEAnQgCAbgeAUQBHgEAhASQA0AbAQBgQANBNgeAzQgJAPgMAMIgLAIIzXADQgVgiAAgrg");
	this.shape_6.setTransform(13.2,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C9D3").s().p("AtlFTQgagqAAgxQAAhHAygzQAzgyBHAAQAkAAAiAPIAAgPQAAhQA5g6QA6g5BSAAQAxAAAqAWIAAgFQAAhTA7g7QA7g7BUAAQA4AAAwAdQAuAcAZAwQAVgmAlgXQAmgXAuAAQAsAAAmAWQAlAWAVAlQANg8AxgmQAygnBBAAQBDAAAyApQAyAoALA9QAPgFANAAQAgAAAYAXQAXAXAAAhQAAAbgSAXQB1AgAfBiQAQAygIArIAAC8g");
	this.shape_7.setTransform(-3.1,15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.8,-49.9,185.6,99.9);


(lib.Interpolación2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F859E").s().p("AtvHtIAAvZIbfAAIAAPZg");
	this.shape.setTransform(0.1,-21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Au4IUIAAwIQAAgNALgJQAMgKAQAAIckAAQAQAAALAKQALAJAAANIAAQIg");
	this.shape_1.setTransform(0,-24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#434B53").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_2.setTransform(0.3,43.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBDCDD").s().p("AuSKOQgPAAgMgLQgLgMAAgQIAAzNQAAgQALgLQAMgMAPAAIclAAQAPAAAMAMQALALAAAQIAATNQAAAQgLAMQgMALgPAAg");
	this.shape_3.setTransform(0.1,-13);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDC1C4").s().p("AkQCAQgEAAgDgDQgFgEALgGQAMgEANgIQAcgQAKgRQAFgMACgfIAOiaIF6AAIAGBTQAIBUAEAPIACALQAGAOAMAIIAxAcIAFAFQADAFgJACg");
	this.shape_4.setTransform(0.1,65.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.3,-78.4,190.8,156.7);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#025F66").s().p("A4MGjIAAtGMAwZAAAIAANGg");
	this.shape.setTransform(155,42);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310,84);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHAaIABgzIAOAAIgBAzg");
	this.shape_1.setTransform(0.9,2.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1.7,5.3);


(lib.CompoundPath_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AKQAAgdAWgVQAWgWAdAAQAgAAAWAYQgPAYgjAcIg3AxQgWgVAAggg");
	this.shape.setTransform(6.5,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,12.7);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/AKQABgdAVgWQAWgWAdABQAgAAAWAYQgPAYgjAcIg3AxQgWgXAAgeg");
	this.shape.setTransform(6.5,6.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,12.9,12.8);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(176,222,241,0.098)","rgba(171,221,241,0.106)","rgba(80,195,237,0.263)","rgba(22,179,234,0.361)","rgba(0,173,233,0.4)"],[0.404,0.42,0.702,0.906,1],0,14.5,0,-14.5).s().p("AicCRQgKAAgggjQgegigDgMQgDgJABgLQAAgXAMgTQAIgMARgLQAPgKAWgEIAcgEQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAgBQAJgsAggeQAVgTAZgGQAOgDATABQAUABARAIQAaAMAQAYIAHAKQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAQASgCAJABQASABAMAKQAOANACAVIgCAcQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAABQAFADAJACQAPADALAIQAOANADAVIAJAKQAKAKAEAKQAOAigrArg");
	this.shape.setTransform(23.5,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,47.1,29);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(176,222,241,0.098)","rgba(171,221,241,0.106)","rgba(80,195,237,0.263)","rgba(22,179,234,0.361)","rgba(0,173,233,0.4)"],[0.404,0.42,0.702,0.906,1],0,23.8,0,-23.7).s().p("Ah6DsIh/gBQgRAAgzg5Qgxg3gGgUQgEgNABgTQABgmATgfQANgVAcgSQAYgPAkgHIAugHQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAOhJA1gxQAhgeAqgKQAZgGAeACQAgABAcANQAqATAcAqIAKAQQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAbgEARABQAeADATAQQAYAVACAiQABANgEAhQAAABAAAAQAAABAAABQABAAAAABQABAAAAAAQAJAGAOADQAYAFASAOQAXAVAFAiIAKAUQALAUAFARQAPA8gtA3QgJAEjRAAIj3gBg");
	this.shape.setTransform(37.7,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,75.4,47.6);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(176,222,241,0.098)","rgba(171,221,241,0.106)","rgba(80,195,237,0.263)","rgba(22,179,234,0.361)","rgba(0,173,233,0.4)"],[0.404,0.42,0.702,0.906,1],0,21.5,0,-21.5).s().p("AjoDXQgPgBgugzQgtgygFgTQgEgLABgRQABgkARgbQAMgTAZgQQAZgPAegGIAqgGQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAQAMhDAwgsQAegbAmgJQAUgFAdABQAeABAZAMQAlAQAaAnIAKAPQAAAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQAWgDASABQAbACASAPQAWATABAfQABAQgEAZQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAQAIAFANADQAXAFAPAMQAUATAGAfQAAACANANQAPAPAGAPQAUAyg/BAg");
	this.shape.setTransform(34.8,21.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.6,43);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(176,222,241,0.098)","rgba(171,221,241,0.106)","rgba(80,195,237,0.263)","rgba(22,179,234,0.361)","rgba(0,173,233,0.4)"],[0.404,0.42,0.702,0.906,1],0,17.3,0,-17.3).s().p("Ai6CsQgNAAglgpQgkgogEgPQgDgKAAgNQABgdAOgWQALgQATgMQATgLAZgFIAigFQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBQAKg2AngjQAZgXAdgGQAUgFAUACQAWAAAWAKQAfAOAUAeIAHAMQABABAAAAQAAAAABAAQAAABABAAQAAAAAAgBQATgCANABQAXABANAMQASAQABAZQAAANgCAUIABADQAGAEALADQASADAMAKQARAPAEAZIALAMQAMAMAFAMQAQAogzAzg");
	this.shape.setTransform(28,17.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.1,34.6);


(lib.Interpolación1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghBHIgBAAIAAgUQAAgKAHgHQAHgGAKgBIAOAAQAKABAHAGQAHAHAAAKIAAAUIAAAAIgBAAQgLAGgQAAQgQAAgRgGgAAlBBIAAgPQAAgUgRgJQAEgGAAgJQAAgJgIgIQAGgCAGAAIAaAAQAQAAAMALQALAKAAAPIAAAgIAAAAIgCACQgSAIgcAAgAhaA5IgCgBIAAghQAAgPALgKQAMgLAQAAIAgABQgJAHAAALQAAAJAEAGQgRAJAAAUIAAAPQgagCgVgGgAgPAVQgGgGAAgIQAAgHAGgEQAFgFAIgBQAGABAFAFQAGAEAAAHQAAAIgGAGQgFAFgGAAQgIAAgFgFgAAUgYQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJgAg+gYQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape.setTransform(-55.1,-89.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F859E").s().p("AgSghIAkAhIgkAig");
	this.shape_1.setTransform(-83.2,-86);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F859E").s().p("AgSghIAlAhIglAig");
	this.shape_2.setTransform(-90.2,-86);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0F859E").s().p("AgRghIAkAhIgkAig");
	this.shape_3.setTransform(-97.2,-86);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0F859E").s().p("AiHCYQglAAgagaQgagaAAglQAAghAWgZQAVgXAggFIgBgJQAAgYAQgRQARgQAXAAQAUAAAQAOQAQglASgQQAYgXAqAAQA2AAAfAlQAbAiAAAyIAAAIQAfAGAUAWQAUAZAAAgQAAAlgaAaQgaAaglAAg");
	this.shape_4.setTransform(-55.5,-91.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgiAzIgDg1QAAgEAFgCIAGAAIgBgOQgBgMAIgJQAHgJAMgBQAKAAAJAIQAIAHABAMIAAAPIAFAAQADAAAAAFIADA1QAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAIhAAEQgGAAAAgDgAAAgqQgIABgEAFQgEAGAAAHIABAOIAfgBIAAgPQgBgHgFgFQgEgFgGAAIAAAAg");
	this.shape_5.setTransform(-112.5,-13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0F859E").s().p("AAYBqQgVgNgKgWIgSgEQgwgOgaglQgZgjALgmQALgnApgSQAqgRAtANQAwAOAZAlQAaAlgLAkQgMAsgzARIgCAGQgDALAFANQAFAMALAJIgCAGQgZgIgQgKg");
	this.shape_6.setTransform(-112.8,-11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#D0E2FA").ss(2).p("AAEgEQADAAABABQADADgBABQgBAEgEAAIgIAAIgBAAQgDAAgBgDQgCgCACgCQABgCADAAIABAAIACAAIAEAAg");
	this.shape_7.setTransform(-85.7,31.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D0E2FA").s().p("AgDAFIgBgBQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgCgCACgCQABgCADAAIABAAIACABIAEAAIABgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQADADgBACQgBADgEAAg");
	this.shape_8.setTransform(-85.7,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#D0E2FA").ss(2).p("AAiAqIAIhUIhMAng");
	this.shape_9.setTransform(-117,-47.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D0E2FA").s().p("AglgDIBLgnIgIBVg");
	this.shape_10.setTransform(-116.6,-47.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D0E2FA").ss(2).p("AgBgGQABgEADACQAEABAAAEIAAACIgEAEIgBADQgCAEgCgBQgCAAgCgCQgBgDABgCg");
	this.shape_11.setTransform(-118.9,-42.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D0E2FA").s().p("AgCAJQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBgBAAQgBgDABgCIAFgIQABgEADACQAEABAAAEIAAACIgEAEIgBADQgBAEgBAAIgCgBg");
	this.shape_12.setTransform(-118.9,-42.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#D0E2FA").ss(2).p("AgCgFQABgEACAAQAEAAABAEQABABgBACIgDAHIAAABIgCADQgBACgDgCQgDgCABgEIAAgBg");
	this.shape_13.setTransform(-121.1,-36.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D0E2FA").s().p("AgDAJQgDgCABgEIAAgBIADgHQABgEACAAQAEAAABAEQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIgDAHIAAABIgCADIgBABIgDgBg");
	this.shape_14.setTransform(-121.1,-36.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#D0E2FA").ss(2).p("AgDgEQAAgEADgBQAEAAABAEIAAADIgBAGIAAABQAAAEgEABQgDAAgBgEIAAgCIAAgBIABgGg");
	this.shape_15.setTransform(-122.2,-30.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D0E2FA").s().p("AgEAGIAAgCIAAgBIABgGIAAgBQAAgEADgBQAEAAABAEIAAADIgBAGIAAABQAAAEgEABIAAAAQgDAAgBgEg");
	this.shape_16.setTransform(-122.2,-30.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#D0E2FA").ss(2).p("AgEgEQAAgEAEgBQACgBACAEIABACIAAAEIAAADIAAABQABAFgFABQgCABgCgEIAAgCIgBgBIAAgGg");
	this.shape_17.setTransform(-122.3,-24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D0E2FA").s().p("AgDAHIAAgCIgBgBIAAgGIAAgCQAAgEAEgBQACgBACAEIABACIAAAEIAAADIAAABQABAFgFABIgBAAQgCAAgBgDg");
	this.shape_18.setTransform(-122.3,-24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#D0E2FA").ss(2).p("AgFgDQAAgEAEgBQACgCACADIABACIABAJQABAEgEACQgEACgBgGg");
	this.shape_19.setTransform(-121.5,-17.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D0E2FA").s().p("AgDAGIgCgJQAAgEAEgBQACgCACADIABACIABAJQABAEgEACIgCAAQgCAAgBgEg");
	this.shape_20.setTransform(-121.5,-17.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#D0E2FA").ss(2).p("AgFgCQgBgEAEgCQACgCACADIABACIADAIQABAEgDACQgEACgBgDQAAAAgBgCIgCgGg");
	this.shape_21.setTransform(-120.1,-11.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D0E2FA").s().p("AgBAIIgBgCIgCgGIgBgCQgBgEAEgCQACgCACADIABACIADAIQABAEgDACIgDABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAgBgBg");
	this.shape_22.setTransform(-120.1,-11.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#D0E2FA").ss(2).p("AgGgCQAAgDABgCQACgCADAAQABABABACIADAGIABACQACAEgEADQgEACgBgDIgBgCg");
	this.shape_23.setTransform(-118.1,-5.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D0E2FA").s().p("AgBAIIgBgCIgEgIQAAgDABgCQACgCADAAQAAAAAAABQAAAAABAAQAAABABAAQAAABAAAAIADAGIABACQACAEgEADIgDABQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAgBgBAAg");
	this.shape_24.setTransform(-118.1,-5.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#D0E2FA").ss(2).p("AgGgBQgBgEACgCQACgDADACQABABABABIADAGIABACQACAEgDADQgEACgBgDIgBgCg");
	this.shape_25.setTransform(-115.7,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D0E2FA").s().p("AAAAIIgBgCIgFgHQgBgEACgCQACgDADACQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAAAIADAGIABACQACAEgDADIgDABQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAg");
	this.shape_26.setTransform(-115.7,0.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#D0E2FA").ss(2).p("AgGgBQgCgEAEgCQADgDACADIAAABIAGAHQACAEgDADQgEADgCgDIgBgBIgBgEg");
	this.shape_27.setTransform(-112.8,6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D0E2FA").s().p("AAAAIIgBgBIgBgEIgEgEQgCgEAEgCQADgDACADIAAABIAGAHQACAEgDADQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgCgCg");
	this.shape_28.setTransform(-112.8,6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgCgDADgDQACgDADABIABACIADAFIACABIABABQACADgDAEQgCADgEgDIgBgCIgCgEIgCgCg");
	this.shape_29.setTransform(-109.5,11.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D0E2FA").s().p("AAAAIIgBgCIgCgEIgCgCIgBAAQgCgDADgDQACgDADABIABACIADAFIACABIABABQACADgDAEQAAAAgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_30.setTransform(-109.5,11.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgCgCACgDQABgCADgBQACAAABACIAAABIAFAFIABAAQADAEgDADQgDAEgEgDIAAgBIAAgBIgFgGg");
	this.shape_31.setTransform(-105.8,16.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D0E2FA").s().p("AAAAIIAAgBIgBgBIgEgGIgBAAQgCgCACgDQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQACAAABACIAAABIAFAFIABAAQADAEgEADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_32.setTransform(-105.8,16.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgDgBACgEQADgEADABIABACIAAABIAHAFQADADgCADQgDAEgEgBIgBgCIgFgHg");
	this.shape_33.setTransform(-101.6,21.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D0E2FA").s().p("AABAJIgBgCIgFgHIgBAAQgDgBACgEQADgEADACIABABIAAABIAHAFQADADgCADQgCADgDAAIgCAAg");
	this.shape_34.setTransform(-101.6,21.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgEgBADgEQACgEAFACIAAABIAAABIAHAFQADABgCAEQgCAEgEgBIgCgBIAAgCg");
	this.shape_35.setTransform(-97,25.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D0E2FA").s().p("AACAIIgCgBIAAgCIgGgFQgEgBADgEQACgEAFACIAAABIAAABIAHAFQADABgCAEQgBADgDAAIgCAAg");
	this.shape_36.setTransform(-97,25.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#D0E2FA").ss(2).p("AgGACQgDgCABgDQABgEAFABIABAAIADADIACABIACABIABAAQAEABgCAEQgBAEgEgBIgCAAIgCgCIgBgBg");
	this.shape_37.setTransform(-91.8,29.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D0E2FA").s().p("AAEAHIgCAAIgCgCIgBgBIgFgCQgDgCABgDQABgEAFABIABAAIADADIACABIACABIABAAQAEABgCAEQgBADgDAAIgBAAg");
	this.shape_38.setTransform(-91.8,29.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#D0E2FA").ss(2).p("AAAgGQACgDAEACQADACgBAEIgBABIgEAEIgDACIAAABQgDADgDgDQgDgEACgDIABAAIABAAIABgBIABAAIABgBIABgBIAAgBg");
	this.shape_39.setTransform(-85.6,31.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D0E2FA").s().p("AgGAHQgDgEACgDIABAAIABAAIABgBIABAAIABgBIABgBIAAgBIABgCQACgDAEACQADACgBAEIgBABIgEAEIgDACIAAABIgDABQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_40.setTransform(-85.6,31.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#D0E2FA").ss(2).p("AApArIghhMIguBDg");
	this.shape_41.setTransform(-131.3,-41.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D0E2FA").s().p("AgnAeIAuhEIAhBMg");
	this.shape_42.setTransform(-131.2,-40.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#D0E2FA").ss(2).p("AgDgEQAAgEADgBQADAAACAEIAAACIAAABIAAAHQgBAFgEAAQgDABgBgFIABgJg");
	this.shape_43.setTransform(-131.4,-35.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D0E2FA").s().p("AgEAGIABgJIAAgBQAAgEADgBQADAAACAEIAAACIAAABIAAAHQgBAFgEAAIAAAAQgDAAgBgEg");
	this.shape_44.setTransform(-131.3,-35.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#D0E2FA").ss(2).p("AgEgEQAAgFAEAAQADgBABAFIAAADIABAGQAAAEgEACQgCABgCgEIgBgCIAAgHg");
	this.shape_45.setTransform(-131.4,-29);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#D0E2FA").s().p("AgDAHIgBgCIAAgHIAAgCQAAgFAEAAQADgBABAFIAAADIABAGQAAAEgEACIgBAAQgBAAgCgDg");
	this.shape_46.setTransform(-131.4,-29);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#D0E2FA").ss(2).p("AgFgDQAAgCABgCQACgCACAAQADAAABAFIAAADIABAFQABAEgEACQgCABgCgDIgBgCIgCgGg");
	this.shape_47.setTransform(-130.7,-22.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D0E2FA").s().p("AgCAIIgBgCIgCgGIAAgDQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQADAAABAFIAAADIABAFQABAEgEACIgCAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_48.setTransform(-130.7,-22.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#D0E2FA").ss(2).p("AgFgCQgBgEAEgCQACgCACADIABACIABADIABADIABACQABAEgEACQgDACgBgDIgBgCg");
	this.shape_49.setTransform(-129.4,-16.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D0E2FA").s().p("AgBAIIgBgCIgDgIQgBgEAEgCQACgCACADIABACIABADIABADIABACQABAEgEACIgCABQgBAAAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_50.setTransform(-129.4,-16.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#D0E2FA").ss(2).p("AgFgCQgCgEAFgCQADgCACAFIADAIQABACgBACQgCADgDAAQgBAAgCgEIAAgCIgCgEg");
	this.shape_51.setTransform(-127.5,-10.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#D0E2FA").s().p("AABAKQgBAAgCgEIAAgCIgCgEIgBgCQgCgEAFgCQADgCACAFIADAIQAAAAABABQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAIgBAAg");
	this.shape_52.setTransform(-127.5,-10.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#D0E2FA").ss(2).p("AgGgBQgBgEADgDQAEgCABADIABACIABADIADAEQACAEgEADQgDACgBgDIgBgBg");
	this.shape_53.setTransform(-125.1,-4.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D0E2FA").s().p("AAAAIIgBgBIgFgIQgBgEADgDQAEgCABADIABACIABADIADAEQACAEgEADIgDABQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_54.setTransform(-125.1,-4.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#D0E2FA").ss(2).p("AgGgBQgBgBABgCQABgEADgBQACAAABADIACACIADAGQADADgEADQgDADgCgDIgBgBIgEgHg");
	this.shape_55.setTransform(-122.3,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D0E2FA").s().p("AAAAIIgBgBIgEgHIgBgBQAAAAAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQABgEADgBQACAAABADIACACIADAGQADADgEADIgDACIgCgCg");
	this.shape_56.setTransform(-122.3,1.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgCgEADgDQAEgDABADIACACIACAEIACABIABABQACADgCADQgCADgDgBQgCAAAAgCIgBgBIgEgGg");
	this.shape_57.setTransform(-119.1,6.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D0E2FA").s().p("AACAJQgCAAAAgCIgBgBIgEgGIgBAAQgCgEADgDQAEgDABADIACACIACAEIACABIABABQACADgCADQgBABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_58.setTransform(-119.1,6.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgCgEADgDQADgDACADIACACIACAEIACABIABABQACADgCADQgDAEgEgDIAAgBIAAgBIgFgGg");
	this.shape_59.setTransform(-115.5,11.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D0E2FA").s().p("AAAAIIAAgBIAAgBIgFgGIgBAAQgCgEADgDQADgDACADIACACIACAEIACABIABABQACADgCADQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIgDgBg");
	this.shape_60.setTransform(-115.5,11.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgCgCACgDQABgDADAAQACAAAAACIADADIAEADQADADgDAEQgCADgEgBIgBgCg");
	this.shape_61.setTransform(-111.5,16.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D0E2FA").s().p("AABAJIgBgCIgGgHQgCgCACgDQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAIADADIAEADQADADgDAEQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCAAg");
	this.shape_62.setTransform(-111.5,16.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgDgCACgDQADgEAEACIAAABIAHAGQADACgDAEQgDAEgEgCIAAgBIAAgBg");
	this.shape_63.setTransform(-107.2,21.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D0E2FA").s().p("AAAAIIAAgBIAAgBIgGgGQgDgCACgDQADgEAEACIAAABIAHAGQADACgDAEQAAABgBAAQAAABgBAAQAAABgBAAQAAAAgBAAIgDgBg");
	this.shape_64.setTransform(-107.2,21.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#D0E2FA").ss(2).p("AgGAAQgEgBADgEQADgEAEACIAAADIAGAEIABAAQADABgCAEQgCAEgEgBIgCgCg");
	this.shape_65.setTransform(-102.5,25.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#D0E2FA").s().p("AACAIIgCgCIgGgGQgEgBADgEQADgEAEACIAAADIAGAEIABAAQADABgCAEQgBADgDAAIgCAAg");
	this.shape_66.setTransform(-102.5,25.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#D0E2FA").ss(2).p("AgGABQgDgBABgDQACgEAEABIACAAIAAABIAEADIACABIABABQAEAAgCAEQgBAFgFgBIgBgBIgBAAIgGgFg");
	this.shape_67.setTransform(-97.4,29.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#D0E2FA").s().p("AADAIIgBgBIgBAAIgGgFIgBgBQgDgBABgDQACgEAEABIACAAIAAABIAEADIACABIABABQAEAAgCAEQgBAEgDAAIgCAAg");
	this.shape_68.setTransform(-97.4,29.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#D0E2FA").ss(2).p("AgFADIgCgBQgDgCACgDQACgDAEABIABAAIAHADIADACQACAAgCAEQgCADgEgBIgDgBIgDgBIgCgBg");
	this.shape_69.setTransform(-91.6,32.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#D0E2FA").s().p("AADAGIgDgBIgDgBIgCgBIAAAAIgCgBQgDgCACgDQACgDAEABIABAAIAHADIADACQACAAgCAEQgCACgCAAIgCAAg");
	this.shape_70.setTransform(-91.6,32.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#BC6119","#BE6520","#C16D2A","#C26F2E"],[0,0.157,0.553,1],-13.2,0,13.3,0).s().p("Ag/B1IAGgTQgSgLgMgPIgSAJIgWgsIASgJQgGgTADgTIgTgGIAPgvIATAGQAKgQAQgOIgJgSIAsgWIAJASQAUgGASADIAGgTIAvAPIgGATQARAKANAQIASgJIAWAsIgSAJQAGAUgDASIATAGIgPAvIgTgGQgLASgPAMIAJASIgsAWIgJgSQgUAGgSgDIgGATgAgEhLQgQABgNAHQgcAPgKAeQgKAcAOAcQARAgAiAIQANADAIgBQAQgBANgHQAcgOAKgfQAKgcgOgcQgRgggigIQgJgCgIAAIgEAAg");
	this.shape_71.setTransform(-63.2,37.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EAAB28").s().p("AgSCmQgJAAgKgDQgYgGgXgNIgTAVIgvgoIAUgWQgVgbgKgjIgdACIgEg7IAdgCQAFgkARgeIgVgTIAoguIAWATQAbgWAjgJIgCgdIA7gEIACAdIASAEQAaAGAWANIAUgWIAtAoIgTAWQAWAcAJAiIAdgBIAEA7IgdACQgEAkgTAdIAXATIgpAuIgVgTQgdAWgiAJIACAdIg8AEgAgHh6QgzAEghAmQgjAmAEAyQACApAcAgQAaAeAnAJQASAEAQgBQA0gDAigmQAigngEgxQgCgpgbggQgbgfgogJQgOgDgPAAIgFAAg");
	this.shape_72.setTransform(-80,7.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AggAFQgBgEAEgBIA5gIQAEgBABAFQAAAEgEAAIg4AJIgCAAQgCAAgBgEg");
	this.shape_73.setTransform(-143,-91.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAcAJIg5gJQgEgBABgEQABgFAFABIA3AJQAFABgBAFQgBAEgDAAIgBgBg");
	this.shape_74.setTransform(-143,-96.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AAWASIgwgcQgEgBACgFQACgEAEACIAxAdQAFACgDAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgDgBg");
	this.shape_75.setTransform(-141.2,-101.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAPAZIgkgrQgDgEAEgDQAEgDACAEIAjAsQAFADgFADIgDABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBg");
	this.shape_76.setTransform(-137.9,-105.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAFAdIgSg2QgBgEAEgCQAEgBACAEIASA2QABAEgEACIgCAAQgCAAgCgDg");
	this.shape_77.setTransform(-133.4,-107.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgcAQQgCgDADgDIAygbQAEgCACAEQACAEgEACIgxAbIgDABQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_78.setTransform(-115.7,-101.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgVAZQgDgCADgEIAkgrQADgDAEACQADADgDAEIgkArQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAIgEgCg");
	this.shape_79.setTransform(-118.9,-105.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgLAfQgEgCACgEIASg1QACgEAEABQAEACgBAEIgTA2QAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgDgBg");
	this.shape_80.setTransform(-123.3,-107.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgDAdIAAg5QAAgFADAAQAFAAgBAFIAAA5QAAAFgEAAQgDAAAAgFg");
	this.shape_81.setTransform(-128.4,-108.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#BC6119","#BE6520","#C16D2A","#C26F2E"],[0,0.157,0.553,1],-5.5,0,5.6,0).s().p("AgbArQgDgCgDgHIgVgqIBhgjIALAuQACAIgBACQgBAEgIADIg+AWIgHACIgEgBg");
	this.shape_82.setTransform(-124.2,-80.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#BC6119","#BE6520","#C16D2A","#C26F2E"],[0,0.157,0.553,1],-4.5,0,4.5,0).s().p("AAGA2IgxhNQgCgDADgCQAAAAABAAQABAAAAAAQABAAAAAAQAAAAABAAIAAABIAGACQAQAGAQgGQASgHAIgPIACgFQACgDADABQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABIAJBcQABAEgEAAQgEAAAAgEIgIhPQgLAOgQAFQgRAHgRgFIAsBDQACADgEACIgCABIgDgCg");
	this.shape_83.setTransform(-127.3,-87.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgSA4QgXgFgSgPQgSgQgIgVQgNgkARgjQAQgiAkgNQAigMAjAQQAiAQANAkQAIAYgEAYQgEAVgPASIAQBLIhJAag");
	this.shape_84.setTransform(-128.5,-90.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AizBxQgLAAgJgHQgJgHgDgLQgDgIABgKQAAgWAMgUQAIgNARgLQAPgIAUgDIAbgEQAAAAABgBQAAAAAAAAQABAAAAgBQAAAAAAAAQAJgrAfgdQATgSAZgGQAOgEAQABQAVACAQAHQAZAMAQAYIAHAJIACABQASgCAIABQASABALAKQAPANAAAUQABAJgCAQQgBAAAAAAQAAABABAAQAAAAAAABQAAAAABAAQAEADAJACQAOADALAKQANAMAEAUQABAMgCAKQgDAPgOAHQgMAGgRAAg");
	this.shape_85.setTransform(-83.8,-62.9);

	this.instance = new lib.Path_1_2();
	this.instance.setTransform(-81.1,-60.7,1,1,0,0,0,23.5,14.6);
	this.instance.alpha = 0.898;

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AkmC5QgRAAgPgMQgPgLgFgSQgEgNABgSQABglASgeQAOgWAagRQAYgNAigHIAtgHQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBQAMhGA0gwQAggdApgKQAYgFAaABQAhACAcAMQAoASAbApIAKAPQABABAAAAQABABAAAAQABAAAAAAQAAAAABAAQAagDARABQAdACASAQQAXATACAiQABAMgEAeQAAABAAABQAAAAABABQAAABAAAAQABABAAAAQAHAEAPAEQAYAFARAPQAWAVAFAhQADARgEASQgFAYgYAMQgSAKgcAAg");
	this.shape_86.setTransform(-99.1,-81.2);

	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(-95.4,-77.2,1,1,0,0,0,37.7,23.8);
	this.instance_1.alpha = 0.898;

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D0E2FA").s().p("AAIChQANgBAQgEIADALQgQAFgPAAgAg0CmIADgLQAOAEAPACIgBALQgQgBgPgFgABBCRQAMgGAOgKIAHAKIgOAJQgHAFgHACgAhtCJIAHgJQANAKAMAGIgFAKQgNgGgOgLgABxBuQAKgLAIgNIAKAGQgJAOgLALgAiYBaIAKgGQAKAQAIAIIgJAIQgLgNgIgNgABoA0IBJgwIABBYgAiuAfIALgCQACAMAGAQIgLAEQgGgRgCgNgAixAAQABgRACgOIAMACQgDAPAAAOgAilg+QAFgNAJgPIAKAGQgHANgGAOgAiDh0QAOgOAKgHIAHAJQgNAKgKAKgAhQiaQAPgHAPgEIADALQgPAEgNAHgAgSifIgBgMQAQgBAOABIgBAMQgNgCgPACg");
	this.shape_87.setTransform(124,-2.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D0E2FA").s().p("AhaDBQgIgIAAgNQAAgMAIgIQAJgKAMABQANgBAIAKQAJAIAAAMQAAANgJAIQgIAJgNAAQgMAAgJgJgAgcCWQAQgEAMgHIADALQgNAIgPAEgAAXB8QAOgLAIgKIAJAIQgKALgOALgAA/BQQAIgNAGgOIAKAEQgFAOgJAPgABVAZQACgRAAgLIAAgBIAMAAIAAABQAAAOgDAQgABMg+IALgFQAFANAEASIgLACQgDgNgGgPgAAthxIAIgIQAMANAIANIgKAGQgIgNgKgLgAgBiUIAEgLQALAGAQALIgHAJQgOgKgKgFgAg8iWQgJgJAAgMQAAgMAJgJQAJgJAMAAQANAAAIAJQAJAJAAAMQAAAMgJAJQgIAIgNABQgMgBgJgIg");
	this.shape_88.setTransform(136.4,-37);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AkKCoQgQAAgNgLQgOgKgFgQQgDgLAAgRQACgiAQgbQANgUAYgPQAVgMAfgGIAogGQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAMhBAvgqQAdgbAlgJQAWgFAXACQAgABAXALQAlARAYAkIAJAPQABAAAAAAQABABAAAAQAAAAABAAQAAAAABAAQAVgDARABQAaACARAOQAWASABAfQABAQgEAWQAAABAAAAQABABAAAAQAAAAAAABQABAAAAABQAHAFANACQAXAFAOAOQAUARAFAfQACAPgDARQgEAWgWALQgRAJgZAAg");
	this.shape_89.setTransform(93,-103.8);

	this.instance_2 = new lib.Path_1_0();
	this.instance_2.setTransform(97,-100.2,1,1,0,0,0,34.8,21.5);
	this.instance_2.alpha = 0.898;

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#165975").s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_90.setTransform(120.4,-110.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#165975").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHgBQgGABAAgHg");
	this.shape_91.setTransform(110.6,-110);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#165975").s().p("AgEAFQgCgDAAgCQAAgBACgCQADgDABAAQACAAADADQACACAAABQAAACgCADQgDACgCAAQgBAAgDgCg");
	this.shape_92.setTransform(120.5,-100.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#165975").s().p("AgFAAQAAgFAFgBQAHABgBAFQABAHgHAAQgFAAAAgHg");
	this.shape_93.setTransform(130.3,-110.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#165975").s().p("AgGAAQAAgFAGgBQAHABAAAFQAAAHgHgBQgGABAAgHg");
	this.shape_94.setTransform(120.4,-119.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#165975").s().p("AAQAXIgogkQgFgEAFgFQAAAAABAAQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAQAAAAABABQAAAAABAAQAAAAABABIAoAjQAEAEgEAFQgCADgCAAIgFgCg");
	this.shape_95.setTransform(117.8,-112.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#165975").s().p("AgFAiIAAhDQAAgGAFgBQAGABAAAGIAABDQAAAHgGgBQgFABAAgHg");
	this.shape_96.setTransform(120.4,-114.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AhOBPQghghAAguQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAughAhQghAhguAAQgtAAghghg");
	this.shape_97.setTransform(120.4,-110.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EAAB28").s().p("AhgBhQgogoAAg5QAAg3AogpQApgoA3gBQA4ABApAoQAoApAAA3QAAA5goAoQgpApg4AAQg3AAgpgpg");
	this.shape_98.setTransform(120.4,-110.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#0F859E").s().p("Ag2BlIAFgQQgPgIgLgPIgQAIIgTgmIAPgIQgEgSACgOIgRgGIAOgoIAQAFQAIgPAPgLIgIgQIAmgTIAIAPQAPgEARACIAGgRIAoAOIgFAQQAOAIAMAPIAQgIIATAmIgPAIQAEASgCAOIARAGIgOAoIgQgFQgJAPgOALIAIAQIgmATIgIgPQgPAEgSgCIgFARgAgDhBQgNABgNAGQgYANgJAaQgIAYAMAZQAOAbAeAHQAKADAIgBQANgBAMgGQAZgNAJgaQAIgYgMgZQgOgbgegHQgIgCgHAAIgDAAg");
	this.shape_99.setTransform(130.5,-37.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#80BECB").s().p("AgSCiIgSgEQgXgFgXgNIgTAVIgsgnIASgVQgWgdgIggIgcACIgEg6IAcgCQAEghASgfIgVgTIAngsIAVASQAbgVAigJIgCgcIA6gEIACAcIASADQAYAGAWANIATgVIAsAnIgSAVQAUAaAKAjIAcgCIAEA6IgcACQgFAjgRAdIAVATIgnAsIgWgSQgaAVgiAJIACAcIg6AEgAgGh3QgyADghAmQghAlADAwQADApAaAeQAaAeAmAJQARAEAQgBQAygEAhglQAhglgDgwQgDgpgageQgagegmgJQgNgDgNAAIgHAAg");
	this.shape_100.setTransform(112.7,-66.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#0F859E").s().p("AhUBfIAJgiIgWAAQgGAAgEgDQgEgFAAgGIAAiGQAAgGAEgFQAEgEAGAAIDDAAQAGAAAEAEQAEAFAAAGIAACGQAAAGgEAFQgEADgGAAIiBAAIguAnQgDADgDAAQgDAAACgIg");
	this.shape_101.setTransform(108.4,54.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#0F859E").s().p("AA6BkIgugnIhtAAQgGAAgEgEQgEgEAAgGIAAggIBvAAQAKAAAIgHQAGgHAAgJIAAheIBKAAQAGAAAEAEQAEAEAAAGIAACHQAAAGgEAEQgEAEgGAAIgpAAIAAABIAJAhQABAGgCACIgBAAQgCAAgEgDg");
	this.shape_102.setTransform(118.3,60.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AjWCHQgMAAgLgJQgLgIgEgNQgDgKABgMQABgbANgWQAKgSATgLQATgKAYgEIAggFQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAKg0AlgiQAZgWAcgHQAQgEAVABQAZACATAJQAdANAUAdIAHAMIADABQATgDAMABQAVACAOALQARAPABAYQAAAOgCARIABADQAIAEAIACQASAEAMAKQARAQADAXQACAMgDAOQgDASgSAJQgNAHgUAAg");
	this.shape_103.setTransform(82.1,75.6);

	this.instance_3 = new lib.Path_1_3();
	this.instance_3.setTransform(85.3,78.4,1,1,0,0,0,28,17.3);
	this.instance_3.alpha = 0.898;

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#DD9C00").s().p("AgBgDIACACIADABIgHAEg");
	this.shape_104.setTransform(94.5,98.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B9EBF2").s().p("AgBgNIAJAGIgPAVg");
	this.shape_105.setTransform(94.9,97.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D6F3F7").s().p("AgFgNIAIAGIAJAHIgXAOg");
	this.shape_106.setTransform(95.3,97.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EAC261").s().p("AgfAdIA8hVQAGADAEADIhNBrg");
	this.shape_107.setTransform(98,93.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#D8AD43").s().p("AgkAdIA8hVQAMAFAHAJIg8BVIgZAOg");
	this.shape_108.setTransform(98.4,93.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B9EBF2").s().p("AgiAgIBBhbQAGACAEAEIhRBxg");
	this.shape_109.setTransform(98.2,92.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D6F3F7").s().p("AgnAgIBChbQAIAEALAKIhBBbIgZAOg");
	this.shape_110.setTransform(98.7,92.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CE4F44").s().p("AgnAlIBHhiQAEgGAFAEIAFADIhaB+g");
	this.shape_111.setTransform(98.7,92.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D36259").s().p("AgqAlIBHhiQAEgGAFAEIAIAGQAFAEgDAFIhGBjIgaAPg");
	this.shape_112.setTransform(99,92.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#DD9C00").s().p("AgBgDIACACIADABIgHAEg");
	this.shape_113.setTransform(80.2,106.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B9EBF2").s().p("AgBgNIAJAGIgOAVg");
	this.shape_114.setTransform(80.6,106);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#D6F3F7").s().p("AgFgNIAIAGIAJAHIgXAOg");
	this.shape_115.setTransform(81,106);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#EAC261").s().p("AgfAcIA8hUQAFADAFADIhNBrg");
	this.shape_116.setTransform(83.7,101.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D8AD43").s().p("AgkAcIA8hUQAKAEAJAJIg8BVIgZAPg");
	this.shape_117.setTransform(84.1,101.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B9EBF2").s().p("AgiAfIBBhaIAKAGIhRBxg");
	this.shape_118.setTransform(83.9,101.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D6F3F7").s().p("AgnAfIBChaQAKAGAIAHIhABcIgZAOg");
	this.shape_119.setTransform(84.4,101.3);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#CE4F44").s().p("AgmAlIBGhjQAEgFAFAEIAEADIhZB+g");
	this.shape_120.setTransform(84.3,100.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#D36259").s().p("AgqAlIBHhjQADgFAGAEIAIAGQAFAEgDAFIhHBjIgZAPg");
	this.shape_121.setTransform(84.7,100.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#DD9C00").s().p("AgBgDIACACIADABIgHAEg");
	this.shape_122.setTransform(77.2,97.6);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B9EBF2").s().p("AgBgNIAJAHIgPAUg");
	this.shape_123.setTransform(77.6,96.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D6F3F7").s().p("AgFgNIAIAHIAJAGIgXAOg");
	this.shape_124.setTransform(78.1,96.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#EAC261").s().p("AgfAcIA7hUIALAGIhNBrg");
	this.shape_125.setTransform(80.8,92.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#D8AD43").s().p("AgkAcIA8hUQAKAEAKAJIg9BVIgaAPg");
	this.shape_126.setTransform(81.2,92.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B9EBF2").s().p("AgiAgIBBhcIAKAHIhRByg");
	this.shape_127.setTransform(81,92);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D6F3F7").s().p("AgnAgIBBhcQALAGAJAJIhBBaIgaAQg");
	this.shape_128.setTransform(81.4,92);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CE4F44").s().p("AgmAlIBGhjQADgFAGAEIAEADIhaB+g");
	this.shape_129.setTransform(81.4,91.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D36259").s().p("AgqAlIBGhjQAEgFAFAEIAJAGQAFAEgDAFIhHBjIgZAPg");
	this.shape_130.setTransform(81.8,91.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#DD9C00").s().p("AgBgDIACACIADABIgHAEg");
	this.shape_131.setTransform(63.6,103.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B9EBF2").s().p("AAAgNQADADAFADIgOAVg");
	this.shape_132.setTransform(64,102.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D6F3F7").s().p("AgFgNQAFADADADIAJAHIgXAOg");
	this.shape_133.setTransform(64.5,102.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EAC261").s().p("AggAcIA8hUQAGADAEADIhMBrg");
	this.shape_134.setTransform(67.2,97.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#D8AD43").s().p("AgkAdIA8hVQAKAEAJAKIg8BUIgZAPg");
	this.shape_135.setTransform(67.6,97.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B9EBF2").s().p("AgiAgIBBhbQAEABAGAFIhRBxg");
	this.shape_136.setTransform(67.4,97.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#D6F3F7").s().p("AgmAgIBAhbQAKAEAJAJIhABbIgZAPg");
	this.shape_137.setTransform(67.8,97.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CE4F44").s().p("AgmAlIBGhjQAEgFAFAEIAEADIhZB+g");
	this.shape_138.setTransform(67.8,97);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#D36259").s().p("AgqAlIBHhjQAEgFAFAEIAIAGQAFAEgDAFIhHBjIgZAPg");
	this.shape_139.setTransform(68.1,97);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D0E2FA").s().p("AglB/IBFBNIhmAUgAhwChIAHgMQAQALAQAGIgFANQgSgHgQgLgAioBsIALgIQAIALAQAQIgKAKgAjJAmIAOgDQAFATAHAOIgNAHQgIgTgFgSgAjOglIAOACQgCAPABAUIgOAAQgCgPADgWgAC9g/IAOgEQAEATACATIgOABQgBgRgFgSgAjGhLQAFgRAJgSIANAHQgJARgFAQgACeiAIALgIQAMAQAIARIgMAHQgJgTgKgNgAijiOQAMgPAPgNIAJAKQgNALgMAPgABqixIAIgMQARAMANAMIgKAKQgNgMgPgKgAhpjBQAQgKATgHIAFAOQgPAFgSAKgAAojMIACgOQAQADAVAIIgFANQgRgGgRgEgAghjcQAUgCARAAIAAANQgQAAgSAEg");
	this.shape_140.setTransform(-95.6,101.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0F859E").s().p("AhDB9IAGgUQgRgLgPgRIgTAKIgYgvIATgKQgFgVACgUIgUgHIAQgxIAUAGQAMgSAQgOIgJgTIAvgYIAJATQAVgGAUADIAGgUIAyAQIgGAVQASAKAOARIATgJIAYAvIgTAJQAFAWgCATIAUAGIgQAyIgUgHQgMAVgQAMIAJATIguAXIgKgSQgVAFgUgCIgGAUgAgEhQQgQABgPAHQgfAQgKAgQgLAeAQAeQARAjAlAIQALADALgBQAQAAAQgJQAegPAKggQALgegPgfQgSghglgKQgKgBgIAAIgEAAg");
	this.shape_141.setTransform(-95.8,100.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#80BECB").s().p("AgUCxIgTgDQgbgGgYgPIgUAYIgygrIAVgYQgXgdgKglIgfACIgEg/IAfgDQAEgmAUggIgYgUIArgxIAYAUQAegYAkgJIgCgfIA/gEIADAfIATADQAbAGAYAPIAUgYIAxArIgUAYQAYAfAJAjIAfgCIAEBAIgfACQgEAkgUAiIAYAUIgrAyIgYgVQgeAYgkAJIACAfIhAAEgAgHiCQg3ADgkApQgkApAEA1QACAsAdAiQAcAgAqAKQATAFASgCQA3gDAkgpQAkgqgEg0QgDgsgcgiQgcgggqgKQgOgEgPAAIgIABg");
	this.shape_142.setTransform(-113.7,68.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_3},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.instance_2},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.instance_1},{t:this.shape_86},{t:this.instance},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.4,-124.2,292.8,248.5);


(lib.cohete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#165975").s().p("AglAgQAugsAagXIADADQgKANgaAUQgYAWgKANg");
	this.shape.setTransform(-23.2,50.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#165975").s().p("AgmAcIA4hDQAMADAJAHQgFANgcATQgcAXgJAOQgEgFgDgHg");
	this.shape_1.setTransform(-24.1,49.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47A2B4").s().p("AgLAjQgNAAgNgHQAughAYgdQAFAJAAAMQAAATgPAOQgPAPgSAAIgBAAg");
	this.shape_2.setTransform(-22.1,51.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#165975").s().p("AgkAfIBHhAIACAEQgYAdgtAig");
	this.shape_3.setTransform(-22.5,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0E7A90").s().p("AgkAhQAKgNAagUQAXgVALgOIADAGIhHBAg");
	this.shape_4.setTransform(-22.7,50.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0E7A90").s().p("AglAhQAJgOAcgVQAcgVAFgNIAFAGQgaAWguAtg");
	this.shape_5.setTransform(-23.4,50);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#47A2B4").s().p("AgdAPQAAgUAPgOQAOgPATAAIALABIg4BEQgDgLAAgJg");
	this.shape_6.setTransform(-25.3,48.6);

	this.instance = new lib.CompoundPath_0();
	this.instance.setTransform(-24.2,49,1,1,0,0,0,6.5,6.4);
	this.instance.alpha = 0.398;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#BC6119","#BE6520","#C16D2A","#C26F2E"],[0,0.157,0.553,1],-7,0,7.1,0.1).s().p("AAABGQgcAAgVgVQgUgUAAgdQAAgcAVgVQAUgUAcAAQAdAAAVAVQAUAVAAAbQAAAegVAUQgUAUgdAAIAAAAg");
	this.shape_7.setTransform(-23.3,50.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#165975").ss(2).p("ABKAAQAAAfgWAVQgWAWgeAAQgeAAgWgWQgVgWAAgeQAAgeAWgWQAWgWAdABQAfAAAWAWQAVAWAAAdg");
	this.shape_8.setTransform(-23.3,50.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#165975").s().p("AAABKQgeAAgWgWQgVgWAAgeQAAgeAWgWQAWgVAdAAQAfAAAWAWQAVAWAAAdQAAAfgWAVQgWAWgeAAIAAAAg");
	this.shape_9.setTransform(-23.3,50.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#165975").s().p("AglAgQAugsAagXIADADQgKANgbAUQgXAWgKANIgFgEg");
	this.shape_10.setTransform(-22.9,32.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#165975").s().p("AgmAcIA4hEQAMADAJAIQgFAMgcAUQgcAXgJAOQgFgHgCgFg");
	this.shape_11.setTransform(-23.8,31.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#47A2B4").s().p("AglAcQAtgfAZgfQAEAKABALQgBATgPAPQgOAOgUAAQgNAAgMgHg");
	this.shape_12.setTransform(-21.9,33.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#165975").s().p("AgkAfQA0gsATgUIACAEQgZAegsAhg");
	this.shape_13.setTransform(-22.3,33.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0E7A90").s().p("AgkAhQAKgNAZgUQAZgWAKgNIADAGQgTAUg0Asg");
	this.shape_14.setTransform(-22.5,32.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0E7A90").s().p("AglAhQAJgOAcgVQAbgWAGgMIAFAFQgbAXgtAtg");
	this.shape_15.setTransform(-23.2,32);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#47A2B4").s().p("AgdAOQAAgTAOgOQAPgPATAAIALABIg4BEQgDgKAAgLg");
	this.shape_16.setTransform(-25.1,30.6);

	this.instance_1 = new lib.CompoundPath();
	this.instance_1.setTransform(-24,31,1,1,0,0,0,6.5,6.4);
	this.instance_1.alpha = 0.398;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#BC6119","#BE6520","#C16D2A","#C26F2E"],[0,0.157,0.553,1],-7,0,7.1,0.1).s().p("AgxAxQgUgVAAgcQAAgdAVgUQAVgVAbABQAdAAAVAVQAUAVAAAbQAAAdgVAVQgVAUgcAAQgcAAgVgVg");
	this.shape_17.setTransform(-23.1,32.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#165975").ss(2).p("ABKAAQgBAfgWAWQgVAVgeAAQgeAAgWgWQgVgWAAgeQABgeAVgWQAWgWAdABQAfAAAWAWQAVAWAAAdg");
	this.shape_18.setTransform(-23.1,32.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#165975").s().p("Ag0A0QgVgWAAgeQAAgeAWgWQAWgWAdABQAfAAAVAWQAWAWAAAdQAAAfgXAWQgWAVgdAAQgeAAgWgWg");
	this.shape_19.setTransform(-23.1,32.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2E2E2").s().p("AhmDiIgFgCQAthfALhZQANhagNiPIADAAQA7ABAzgiQAZA5ALA6QAMA6gDA1QgJBzgzBDQgZAigWALg");
	this.shape_20.setTransform(-18.2,40.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgjCpQgrhFgGhiQgEhBAOg7QAPg7AYguQAiAkBQACQANCOgMBeQgFAsgSAxQgMAjgZA1QgZgMgegvg");
	this.shape_21.setTransform(-31,39.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#B1551C","#B25921","#B6612B","#B7642F"],[0,0.118,0.533,1],-9.5,2.2,5.8,-2.6).s().p("AgqBnIgEAAIgNiCQgDgfgFgPIAageQA/BFAuBoQgzAig5AAIgCgBg");
	this.shape_22.setTransform(-18.7,10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#BC6119","#BE6520","#C16D2A","#C26F2E"],[0,0.157,0.553,1],-7.8,0,7.8,0.1).s().p("Ag5A0QAlhGA3hHIAJAxIANCCQhQgCgigkg");
	this.shape_23.setTransform(-28.9,11.8);

	this.instance_2 = new lib.Path_1();
	this.instance_2.setTransform(-26.6,65.5,1,1,0,0,0,0.8,2.6);
	this.instance_2.alpha = 0.301;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#165975").s().p("Ag2AaIAAgzIBtABIAAAzg");
	this.shape_24.setTransform(-23.9,65.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#B1551C","#B25921","#B6612B","#B7642F"],[0,0.118,0.533,1],-7.6,-2.9,8.8,2.5).s().p("Ag2A2QgIg4AMgdQAOggAmgoIAlghQAFACAFAFIAIAIIABAAQhAAvgWBDQgQAxAEBfQgNhEgBgPg");
	this.shape_25.setTransform(-41.7,62.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#BC6119","#BE6520","#C16D2A","#C26F2E"],[0,0.157,0.553,1],8.1,0.1,-8,0).s().p("AhOB9QgFhfARgzQAWhGBAguQAmAYAPAxQAHAYAAAUQhHAEgwBMQgZAogLAmg");
	this.shape_26.setTransform(-37.9,63.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#B1551C","#B25921","#B6612B","#B7642F"],[0,0.118,0.533,1],-1.6,0.6,5.7,-1.7).s().p("AAcgJQgUhDhAgvIABgBQALgHALgDIAhAfQAmAmANAhQALAcgIA4QgDAXgNA8QAGhegQgyg");
	this.shape_27.setTransform(-5.8,62.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#BC6119","#BE6520","#C16D2A","#C26F2E"],[0,0.157,0.553,1],-8,0,8.1,0.1).s().p("AAoA9QgvhOhIgEQABgUAIgYQAQgxAmgYQA/AwAVBFQAQAzgGBfIgDAOQgLgngYgng");
	this.shape_28.setTransform(-9.8,63.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFD047").s().p("AADBIIgLANQgXgYgOglQgdhHArg7IBCAAQAoBCggBPQgQApgYAbg");
	this.shape_29.setTransform(-24.1,78.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FAB600").s().p("AAFBeIgRASQgjgggVgwQgsheBBhNIAAgBIBkABIAAABQA9BVgwBoQgZA2gkAkg");
	this.shape_30.setTransform(-24.2,82.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_2},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_1},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.6,0,47.6,96.3);


// stage content:
(lib.cel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mucgas figuras
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(157.5,133.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:151.9},3).to({y:136.9},3).to({x:155.2,y:143.9},3).to({x:158.5,y:140.6},3).to({x:155.2,y:137.3},3).to({x:158.5,y:140.6},3).to({x:160.7,y:138.4},3).to({x:158.5,y:140.6},3).to({x:160.7,y:142.8},3).to({x:162.9,y:143.9},3).to({x:160.7,y:141.7},3).to({x:162.9,y:143.9},3).to({x:160.7,y:141.7},3).to({x:159.6},3).to({x:157.4,y:143.9},3).to({x:155.2,y:146.1},9).to({y:148.3},5).to({x:157.4,y:146.1},5).wait(67));

	// Objects
	this.instance_1 = new lib.Interpolación6("synched",0);
	this.instance_1.setTransform(157.4,217.8);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},12).to({_off:true},111).wait(8));

	// nubes
	this.instance_2 = new lib.Interpolación3("synched",0);
	this.instance_2.setTransform(160.1,143.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},10).to({_off:true},113).wait(8));

	// cohete
	this.instance_3 = new lib.cohete();
	this.instance_3.setTransform(158.5,185.4,1,1,75,0,0,-23.9,48.1);
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({regX:-23.8,rotation:-54.8,x:-45.8,y:28.4},22).to({_off:true},79).wait(8));

	// PC
	this.instance_4 = new lib.Interpolación2("synched",0);
	this.instance_4.setTransform(157.5,164.4);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},12).to({startPosition:0},10).to({startPosition:0},36).to({_off:true},65).wait(8));

	// fondo texto
	this.instance_5 = new lib.Path();
	this.instance_5.setTransform(50.4,-164.4,1,0.351,90,0,0,155,42);
	this.instance_5.alpha = 0.5;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(12).to({_off:false},0).to({x:51.9,y:155},10).to({_off:true},101).wait(8));

	// logos
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E31F26").ss(0.3).p("AAAhyIAADl");
	this.shape.setTransform(155.7,388.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E31F26").s().p("AACAJIAAAAIACAAIABgBIgCgCIgBgDIgFAAIgCADIAAACIAAABIADAAIAAAAIgHAAIAAAAIACAAIABgDIAGgOIAAAAIAHAOIABADIACAAIAAAAgAgCACIAEAAIgCgGg");
	this.shape_1.setTransform(148.5,398.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIAAAAIgCgBIgBAAIAAAAIAHAAIAAAAIgBAAIgCABIAAACIAAALIAAACIABAAIABABIABAAIAAAAg");
	this.shape_2.setTransform(147,398.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E31F26").s().p("AAEAJIgFgJIgBAAIAAAAIgBAAIAAAGIABACIABABIABAAIAAAAIgIAAIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgCgBIAAAAIAAAAIAHAAIACAAIADACIABADIgBADQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAEAFIADADIACABIAAAAgAgDgHIAAAHIABAAIAAAAIACAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIgBgBIgDAAg");
	this.shape_3.setTransform(145.6,398.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E31F26").s().p("AADAJIAAAAIABAAIABgBIgBgCIgBgDIgGAAIgBADIgBACIABABIABAAIAAAAIgGAAIAAAAIACAAIACgDIAFgOIAAAAIAGAOIACADIACAAIAAAAgAgDACIAFAAIgCgGg");
	this.shape_4.setTransform(143.5,398.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgNIgCAAIgCAAIgCABIAAACIgBAAIAAgEIAOAAIABAEIgBAAIAAgBIgCgCIgCAAIgCAAIAAANIAAACIACABIAAAAIAAAAg");
	this.shape_5.setTransform(141.9,398.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIAAAAIgCgBIgBAAIAAAAIAHAAIAAAAIgBAAIgCABIAAACIAAALIAAACIABAAIABABIABAAIAAAAg");
	this.shape_6.setTransform(140.5,398.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQAAgBgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_7.setTransform(139,398.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIAAAAIgCgBIgBAAIAAAAIAHAAIAAAAIgBAAIgCABIAAACIAAALIAAACIABAAIABABIABAAIAAAAg");
	this.shape_8.setTransform(137.6,398.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E31F26").s().p("AgHAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIgCgBIgBAAIAAAAIAHAAIAAAAIAAABIgBAAIgBADIAAAKIABABIAAABIABAAIABAAIAEAAIABgBIABgDIABAAIgCAFg");
	this.shape_9.setTransform(136.3,398.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E31F26").s().p("AgHAJIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgCgBIAAAAIAAAAIAHAAIADAAIADACIABADIAAADIgDAAIADABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgBADIgCACIgFAAgAgCAIIACAAIAEgBIABgDIgBgCIgCgCIgCAAIgBAAIgBAAgAgCAAIACAAIAAAAIACAAIACgBIAAgCIgBgDIgDgBIgCAAg");
	this.shape_10.setTransform(134.4,398.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E31F26").s().p("AgDAIIgCgDIgBgEIAAgGIAAgDIgCAAIgBAAIAAgBIAIAAIAAABIAAAAIgCABIAAACIAAAHIAAACIAAACIACABIABABIADgBIACgCIABgEIAAgGIgBgDIgBAAIgBAAIAAgBIAHAAIAAABIAAAAIgDABIAAACIAAAGIgBAEIgCADIgEACIgDgCg");
	this.shape_11.setTransform(132.4,398.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E31F26").s().p("AgGAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIgCgBIgBAAIAAAAIAGAAIAEAAIACACIABADQAAABAAAAQAAABAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBIgBAAIAAAGIABACIAAABIABAAIAAAAgAgBgHIAAAHIABAAIAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIABgDIgBgCIgBgCIgCAAIgBAAg");
	this.shape_12.setTransform(130.5,398.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E31F26").s().p("AADAJIAAAAIABAAIABgBIgBgCIgBgDIgGAAIgBADIgBACIABABIACAAIAAAAIgHAAIAAAAIACAAIABgDIAGgOIAAAAIAGAOIACADIACAAIAAAAgAgCACIAEAAIgCgGg");
	this.shape_13.setTransform(128,398.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQAAgBgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_14.setTransform(126,398.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIAAAAIgCgBIgBAAIAAAAIAHAAIAAAAIgBAAIgCABIAAACIAAALIAAACIABAAIABABIABAAIAAAAg");
	this.shape_15.setTransform(124.5,398.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E31F26").s().p("AgGAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIgBAAIgBgBIgBAAIAAAAIANAAIAAAEIgBAAIAAgCIgCgBIgCAAIgCAAIAAAHIABAAIACAAIABgCIAAAAIAAAEIAAAAIAAgBIgBgBIgCAAIgBAAIAAAGIAAACIAAAAIAAABIABAAIAAAAg");
	this.shape_16.setTransform(123.3,398.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E31F26").s().p("AADAMIAAAAIABAAIAAgBIAAgCIgBgDIgGAAIgBADIgBACIABABIABAAIAAAAIgGAAIAAAAIACAAIACgDIAFgOIAAAAIAGAOIACADIACAAIAAAAgAgDAFIAFAAIgCgGgAAAgGIAAgGIADAAIgDAGg");
	this.shape_17.setTransform(121.5,397.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E31F26").s().p("AAEAJIgFgJIgBAAIAAAAIgBAAIAAAGIABACIABABIABAAIAAAAIgIAAIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgCgBIAAAAIAAAAIAHAAIACAAIADACIABADIgBADQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAEAFIADADIACABIAAAAgAgDgHIAAAHIABAAIAAAAIACAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIgBgBIgDAAg");
	this.shape_18.setTransform(119.5,398.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E31F26").s().p("AgHAGQgBgDAAgDIABgDQABgDADgBQACgCABAAIACAAIADABIABABIAAgBIAAgBIABAAIAAAGIAAAAIgCgDQgBgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgBAAgDADQgBADAAACIABAEQAAABABAAQAAABAAAAQABABAAAAQAAAAABABIABABIACgBIADAAIAAgGIgBgCIgBAAIgBAAIAAAAIAHAAIAAAAIAAAAIgBAAIgBACIAAAGIgDABIgEABQgDAAgEgEg");
	this.shape_19.setTransform(117.5,398.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E31F26").s().p("AAHAJIgLgOIAAALIAAACIACAAIABAAIAAABIgHAAIAAgBIABAAIABAAIABgCIAAgMIgCgCIgBAAIgBAAIAAgBIAFAAIAKANIAAgJIAAgDIgCAAIgBAAIAAgBIAHAAIAAABIgBAAIgBAAIgBADIAAAOg");
	this.shape_20.setTransform(154.4,394.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E31F26").s().p("AgFAKQgDgDAAgFQAAgCADgDQADgDACAAQADAAADADQADADAAACQAAAFgDADQgDADgDAAQgCAAgDgDgAgDgDQgCADAAACQAAAFACADQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQACgDAAgEQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAgAAAgHIAAgFIADAAIgDAFg");
	this.shape_21.setTransform(152.3,394);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIAAAAIgCgBIgBAAIAAAAIAHAAIAAAAIgBAAIgCABIAAACIAAALIAAACIABAAIABABIABAAIAAAAg");
	this.shape_22.setTransform(150.7,394.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQgBgDgCgBQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_23.setTransform(149.3,394.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E31F26").s().p("AACAKIAAgBIACAAIABgBIgBgCIgCgDIgFAAIgCADIAAABIAAACIADAAIAAABIgHAAIAAgBIACAAIABgEIAGgOIAAAAIAHAPIABADIACAAIAAABgAgCACIAEAAIgCgGg");
	this.shape_24.setTransform(147.3,394.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQgBgDgCgBQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_25.setTransform(145.2,394.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIAAAAIgCgBIgBAAIAAAAIAHAAIAAAAIgBAAIgCABIAAACIAAALIAAACIABAAIABABIABAAIAAAAg");
	this.shape_26.setTransform(143.8,394.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E31F26").s().p("AAHAJIgLgOIAAALIAAACIACAAIABAAIAAABIgHAAIAAgBIABAAIABAAIABgCIAAgMIgCgCIgBAAIgBAAIAAgBIAFAAIAKANIAAgJIAAgDIgCAAIgBAAIAAgBIAHAAIAAABIgBAAIgBAAIgBADIAAAOg");
	this.shape_27.setTransform(142.2,394.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E31F26").s().p("AgDAIIgDgCIAAgGIAAgFIgBgDIgBAAIgBAAIAAgBIAJAAIAAABIgBAAIgCABIAAACIAAAGIAAADIABADIACABIAAAAIAEAAIACgCIAAgFIAAgGIAAgDIgCAAIgBAAIAAgBIAHAAIAAABIgBAAIgCABIAAACIAAAGIAAAFIgCACIgFABIgDgBg");
	this.shape_28.setTransform(140.1,394.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E31F26").s().p("AAEAJIAAAAIABAAIACgBIAAgCIAAgLIgHAOIAAAAIgHgOIAAALIAAACIACABIABAAIAAAAIgHAAIAAAAIABAAIACgBIAAgCIAAgLIAAgCIgBAAIgCgBIAAAAIAFAAIAGANIAHgNIAFAAIAAAAIgBAAIgCABIAAACIAAALIAAACIACABIABAAIAAAAg");
	this.shape_29.setTransform(137.7,394.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E31F26").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQADADAAADQAAAEgDADQgCADgEAAQgDAAgCgDgAgCgGQgCADAAADQAAAEACADQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQACgDAAgEQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_30.setTransform(135.3,394.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQgBgDgCgBQgBgBAAAAQAAAAgBAAQgBgBAAAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_31.setTransform(133.3,394.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E31F26").s().p("AgHAJIAAAAIABAAIABgBIABAAIAAgCIAAgLIAAgCIgCgBIgBAAIAAAAIANAAIAAAEIAAAAIgBgCIgBgBIgCAAIgEAAIAAAHIADAAIACAAIABgCIAAAAIAAAEIAAAAIgBgBIAAgBIgCAAIgDAAIAAAGIABACIAAAAIABAAIACAAIACAAIABgBIADgDIAAAAIgCAFg");
	this.shape_32.setTransform(130.7,394.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E31F26").s().p("AgIAJIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgCgBIAAAAIAAAAIAIAAIAEABQADABABACIABAEQAAADgCADQgDADgEAAgAgDgHIAAAPIADAAQACAAACgCQACgCAAgEQAAgDgCgCQgCgCgCAAIgDAAg");
	this.shape_33.setTransform(128.6,394.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E31F26").s().p("AADAKIAAgBIABAAIAAgBIAAgCIgBgDIgGAAIgBADIgBABIABACIACAAIAAABIgHAAIAAgBIACAAIACgEIAFgOIAAAAIAGAPIACADIACAAIAAABgAgCACIAEAAIgCgGg");
	this.shape_34.setTransform(126,394.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E31F26").s().p("AAEAJIAAAAIABAAIABgBIAAgCIAAgLIgGAOIAAAAIgHgOIAAALIAAACIACABIABAAIAAAAIgHAAIAAAAIABAAIABgBIABgCIAAgLIgBgCIgBAAIgBgBIAAAAIAGAAIAFANIAGgNIAGAAIAAAAIAAAAIgDABIAAACIAAALIAAACIADABIAAAAIAAAAg");
	this.shape_35.setTransform(123.6,394.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E31F26").s().p("AADAKIAAgBIABAAIABgBIgBgCIgBgDIgGAAIgBADIgBABIABACIACAAIAAABIgHAAIAAgBIACAAIABgEIAGgOIAAAAIAGAPIACADIACAAIAAABgAgCACIAEAAIgCgGg");
	this.shape_36.setTransform(121.3,394.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E31F26").s().p("AAEAJIgFgJIgBAAIAAAAIgBAAIAAAGIABACIABABIABAAIAAAAIgIAAIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgCgBIAAAAIAAAAIAHAAIACAAIADACIABADIgBADQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAEAFIADADIACABIAAAAgAgDgHIAAAHIABAAIAAAAIACAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIgBgBIgDAAg");
	this.shape_37.setTransform(119.3,394.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E31F26").s().p("AgGAGQgCgDAAgDIABgDQABgDADgBQACgCABAAIACAAIACABIABABIABgBIAAgBIABAAIAAAGIAAAAIgDgDQAAgBAAAAQgBAAAAAAQgBgBgBAAQAAAAgBAAQgCAAgCADQgBADAAACIABAEQAAABABAAQAAABAAAAQABABAAAAQABABAAAAIACABIABgBIACAAIAAgGIAAgCIgBAAIgBAAIAAAAIAIAAIAAAAIgBAAIgBAAIgBACIAAAGIgDABIgDABQgFAAgCgEg");
	this.shape_38.setTransform(117.3,394.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E31F26").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQADAAADADQADADAAADQAAAEgDADQgCADgEAAQgDAAgCgDgAgCgGQgCADAAADQAAAEACADQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQACgDAAgEQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAg");
	this.shape_39.setTransform(115.1,394.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E31F26").s().p("AAEAJIgFgJIgBAAIAAAAIgBAAIAAAGIABACIABABIABAAIAAAAIgIAAIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgCgBIAAAAIAAAAIAHAAIACAAIADACIABADIgBADQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIAEAFIADADIACABIAAAAgAgDgHIAAAHIABAAIAAAAIACAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAIgBgDIgBgBIgDAAg");
	this.shape_40.setTransform(113.1,394.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E31F26").s().p("AgGAJIAAAAIABAAIABgBIABgCIAAgLIgBgCIgBgBIgBAAIAAAAIAGAAIADAAIADACIABADQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgBgBIgBAAIAAAGIABACIAAABIABAAIAAAAgAgBgHIAAAHIABAAIAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIAAgDIAAgCIgBgCIgCAAIgBAAg");
	this.shape_41.setTransform(111.2,394.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#E31F26").ss(0.3).p("AiAAAIEBAA");
	this.shape_42.setTransform(133.3,392);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E31F26").s().p("Ag3ALIgCgCIgBgCIAAgEIAEAAIAAADQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAIgBgDIgCgCIgEgBIgBgEIAAgBIACgEQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABIABACIABAEIgEAAIAAgCIgBgBQAAABgBAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAAACIADACIACABIABADIAAABIgBAFQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgDABgAh9ALQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBAAAAIgBgDIAAgQIAFAAIAAAQQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgQIAFAAIAAAPIgBAEIgCACIgDABgAB8ALIgDgLIAAALIgDAAIAAgVIADAAIAEALIAAgLIADAAIAAAVgABvALIAAgVIAFAAIAAAVgABlALIAAgVIADAAIAAARIAGAAIAAAEgABaALIAAgVIAEAAIAAARIAFAAIAAAEgABOALIAAgVIAKAAIAAAEIgFAAIAAAFIAEAAIAAACIgEAAIAAAGIAFAAIAAAEgABBALIAAgVIAGAAIADAAIABACIABACIAAAMQAAAFgFAAgABFAIIACAAIABgBIAAgCIAAgKIgBgBIgCAAgAA2ALIAAgVIAJAAIAAAEIgGAAIAAAFIAGAAIAAACIgGAAIAAAGIAHAAIAAAEgAAwALIAAgQIAAAAIgDAQIgDAAIgDgQIAAAQIgDAAIAAgVIAFAAIADAMIACgMIAFAAIAAAVgAASALIAAgVIAJAAIAAAEIgGAAIAAAFIAGAAIAAACIgGAAIAAAGIAHAAIAAAEgAAEALIAAgVIAGAAIADAAIACACIAAACIAAAMQAAAFgEAAgAAJAIIABAAIABgBIAAgCIAAgIIAAgCIAAgBIgCAAgAgNALIAAgVIAGAAIADAAIACACIAAACIAAAMQAAAFgEAAgAgIAIIABAAIABgBIABgCIAAgIIgBgCIAAgBIgCAAgAgSALIgBgEIgDAAIgBAEIgDAAIADgVIAGAAIADAVgAgWACIADAAIgBgIgAgnALIAAgVIAGAAIADAAIACACIAAACIAAAMQAAAFgEAAgAgiAIIABAAIABgBIAAgCIAAgKIAAgBIgCAAgAgtALIAAgVIAEAAIAAAVgAg/ALIAAgFIgBgDIgBgBIgBAAIAAAJIgEAAIAAgVIAGAAIADAAIACACIAAADIAAAEIgBABIgBAAIABABIABACIAAAGIAAACgAhCAAIABAAIABgBIABgDIgBgCIgBAAIgBAAgAhSALIAAgVIAJAAIAAAEIgEAAIAAAFIAEAAIAAACIgEAAIAAAGIAFAAIAAAEgAhcALIgDgVIADAAIADAOIACgOIAEAAIgEAVgAhlALIAAgVIAEAAIAAAVgAhrALIgEgLIAAALIgDAAIAAgVIADAAIAEALIAAgLIADAAIAAAVg");
	this.shape_43.setTransform(133.4,389.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FABAC0").s().p("AAAAAIAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_44.setTransform(132.1,379.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FDE8EA").s().p("AAAADIAAAAIAAgDQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAADIAAAAIAAgDQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAFg");
	this.shape_45.setTransform(132,381);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#ED1B2D").s().p("AABADQAAgFgBAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAIAAADIgBAAIAAgDIAAAAIAAAAIABAAIgBAAIAAAAIABAAIAAAAIgBgBIABAAIAAAAIAAgBIAAgBIAAABIAAgBIAAAAIAAABIAAgBIABABIAAABIAAAAIABAAIgBABIAAAAIABAAIAAAAIgBAAIABAAIAAAAIAAAAIAAAAIAAAAIAAABIAAAAIAAABIAAAAIAAABg");
	this.shape_46.setTransform(132,381);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_47.setTransform(131.7,381.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAABg");
	this.shape_48.setTransform(132.3,381.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(132.4,381.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_50.setTransform(131.5,381.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIgBAAg");
	this.shape_51.setTransform(131.7,380.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_52.setTransform(132.3,380.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_53.setTransform(132.5,380.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_54.setTransform(131.5,380.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_55.setTransform(132.2,380.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_56.setTransform(132.4,380.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_57.setTransform(131.6,380.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_58.setTransform(132.3,380.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_59.setTransform(131.7,380.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_60.setTransform(132.4,380.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_61.setTransform(132,380.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_62.setTransform(132.1,380.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_63.setTransform(131.8,380.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_64.setTransform(131.5,380.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_65.setTransform(132.2,380.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_66.setTransform(131.8,380.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_67.setTransform(131.6,380.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_68.setTransform(131.6,380.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_69.setTransform(131.6,379.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_70.setTransform(131.6,379.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_71.setTransform(131.6,379.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#ED1B2D").s().p("AgDAIIAAAAIgBAAIAAgBIAAgBIAAAAIAAgEIABgBIgBAAIAAgBIABAAIgBgBIAAgCIABAAIAAgDIgBgBIABAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAABIAAAAIAAADIAAAAIABgBIAAAAIAAABIAAAAIAAgBIAAAAIAAABIAAAAIAAgBIABAAIAAABIABAAIAAgDIgBAAIAAgBIABAAIAAAAIAAAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIAAABIAAAAIAAADIABAAIAAACIgBABIABAAIAAAGIAAAAIAAABIAAABIgBAAIgBAAg");
	this.shape_72.setTransform(132,380.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FABAC0").s().p("AAAAAIAAAAIAAABQAAAAAAAAg");
	this.shape_73.setTransform(132.1,379.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FABAC0").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAgBIABAAIAAABIgBAAIABAAIAAABIAAAAIgBgBIAAABIAAAAIAAgBIAAACg");
	this.shape_74.setTransform(131.9,379.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#ED1B2D").s().p("AAAACIgBAAIAAgBIABgBIAAgBIAAAAIAAgBIAAAAIAAAAIAAABIABAAIAAABIgBAAIABABQABAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIgBAAIAAAAIAAAAIAAABIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_75.setTransform(132,379.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#ED1B2D").s().p("AACADIgHgBIAAgCIAIABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAIgBAAIgHAAIAAgCIAHABQAEAAgBABQgBABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAg");
	this.shape_76.setTransform(128.6,380.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#ED1B2D").s().p("AAAAGIABgFIgCAEIAAAAIAAgFIgCAEIgCgBIAFgJIABABIgBAFIAEgEIACABIgFAKg");
	this.shape_77.setTransform(135.3,376.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#ED1B2D").s().p("AgDgEIADgBIADAJIgBABIgBgCIgBAAIAAADIAAAAg");
	this.shape_78.setTransform(132.1,376.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#ED1B2D").s().p("AAAAFIABgCQAAAAABgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIgCgBQgBAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIACAAIAAACIgCABIABABIAEAAIABACIgBADIgBAAIgCAAg");
	this.shape_79.setTransform(130.4,377.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#ED1B2D").s().p("AgBADIABgGIAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIAAABgAAAACIAAAAIABgCIgBgBIAAAAg");
	this.shape_80.setTransform(133.8,376.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#ED1B2D").s().p("AgCAEIgCgBIAHgHIABABQADADgEACIgDACIAAABIgCgBgAgBACQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAFgCgCgBg");
	this.shape_81.setTransform(136.4,377.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#ED1B2D").s().p("AgCgEIACAAQACAAABAEQAAAFgDAAIgBABgAAAADIAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAg");
	this.shape_82.setTransform(132.8,376.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#ED1B2D").s().p("AAAAFIgDgJIABAAIACAAIADADQADAEgEABIgCABgAABACQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIgBgBg");
	this.shape_83.setTransform(131.3,376.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#ED1B2D").s().p("AgFgBIACgCQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAAABQABABAAAAQABABAAABQAAAAAAAAQAAAAAAAAIAEACIgBABIgDgCIgBABIACACIgBABgAgCgBIACABIAAAAQAAAAABAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBAAIgBABg");
	this.shape_84.setTransform(129.9,377.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#ED1B2D").s().p("AgBADIABgGIACABIAAACIgCgBIAAABIABAAIAAABIgBgBIAAACIAAAAIAAACg");
	this.shape_85.setTransform(134.3,376.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ED1B2D").s().p("AgFACIAIgGIACADIgBABIgBgBIgCABIABAAIgBABIgBgBIgCACIABACIgBABg");
	this.shape_86.setTransform(137.1,378);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ED1B2D").s().p("AgDAEIAEgJIAEADIgBABIgCgBIgBACIABAAIgBAAIgBAAIgBAEIABABIAAABg");
	this.shape_87.setTransform(136,377.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#ED1B2D").s().p("AgFgBIADgDIABABIgBACIACABIAAgBIAAABIAAAAIADACIABgCIACABIgDAEg");
	this.shape_88.setTransform(129.5,378.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#ED1B2D").s().p("AgFAAIABAAIAEAAIgDgCIACgBIAHAGIgBABg");
	this.shape_89.setTransform(129.1,378.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#ED1B2D").s().p("AgEAAIAJgDIAAACIgHACIABACIgCABg");
	this.shape_90.setTransform(137.7,379.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#ED1B2D").s().p("AgEAAIAIgDIABABIgGAEIABACIgCABg");
	this.shape_91.setTransform(137.4,378.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#ED1B2D").s().p("AgEAAIAJgBIABABIgKACg");
	this.shape_92.setTransform(137.9,379.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#ED1B2D").s().p("AgDgDIACgBIAEAIIgCABg");
	this.shape_93.setTransform(130.9,376.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#ED1B2D").s().p("AgFAAIABgCIAJADIgBACg");
	this.shape_94.setTransform(129,379.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#ED1B2D").s().p("AgEACIAEgCIgEAAIgBgBIAKgCIAAACIgFACIAFgBIABACIgKABg");
	this.shape_95.setTransform(138,380.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#ED1B2D").s().p("AgFABIAAgBIAFAAIgEgBIABgCIAJADIgBABIgFAAIAFABIgBACg");
	this.shape_96.setTransform(128.8,379.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FABAC0").s().p("AgCAAIAAAAIAFAAIgBAAQgCAAgCAAg");
	this.shape_97.setTransform(134.2,382.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FABAC0").s().p("AgBAAIAAAAIADAAIAAAAg");
	this.shape_98.setTransform(134.2,382.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FABAC0").s().p("AAAAGIAAAAIAAgFIAAgBIAAAAIAAgBIAAgCQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAIADAAIAAACIgBABIgBAIIAAAAIAAABg");
	this.shape_99.setTransform(134.2,383);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAAAIABAAIAAAAg");
	this.shape_100.setTransform(134,383);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgBAAIgBgBIAAgBIACAAIAAAAIAAAAIAAAAIAAABIAAgBIAAADIAAAAIABAAIgBgBIABgHIABgBIAAAAIAAAHIABADIgFAGg");
	this.shape_101.setTransform(134.2,383.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.1,0).s().p("AgBABQABgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBAAIACAAIgCABg");
	this.shape_102.setTransform(134.4,381.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.1,0).s().p("AgBABIACgBIgBAAIACAAIgCABg");
	this.shape_103.setTransform(134.4,381.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBABQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIgBAAIACAAIgCABg");
	this.shape_104.setTransform(134.4,381.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIACAAIgCAAIAAABg");
	this.shape_105.setTransform(134.4,381.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIACAAIgCAAIAAABg");
	this.shape_106.setTransform(134.4,381.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBABIABgBIABAAIgBAAIACAAIgCAAIAAABg");
	this.shape_107.setTransform(134.4,381.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgCABIACgBIACAAIgCAAIADAAIgDAAIAAABg");
	this.shape_108.setTransform(134.4,381.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgCABIACgBIACAAIgCAAIADAAIgDAAIAAABg");
	this.shape_109.setTransform(134.4,381.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_110.setTransform(134.4,381.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_111.setTransform(134.4,381.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_112.setTransform(134.4,381.9);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_113.setTransform(134.4,381.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_114.setTransform(134.5,381.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_115.setTransform(134.5,381.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABQAAgBAEAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_116.setTransform(134.4,381.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQABgBAEgBIgCABIADAAIgDABIAAABg");
	this.shape_117.setTransform(134.5,381.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQABgBAEgBIgCABIADAAIgDABIAAABg");
	this.shape_118.setTransform(134.5,381.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AAAACIAAAAIgFgBIACgBQACgBADAAIAAABIAEgBQAAABAAAAQgBAAAAAAQAAAAAAAAQgBAAAAABIABABIgCAAIgDAAg");
	this.shape_119.setTransform(134.6,381.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#ED1B2D").s().p("AgEAEIgBgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAAAAAAAIgBgBIABgBIAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIgBgCIAAgDIABAAQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAFgBIAAABIADgBQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIABABQgBADgFgDIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAACIAAADIAAAAIAAACIAAAFIgFAHg");
	this.shape_120.setTransform(134.5,383);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#ED1B2D").s().p("AAAACIgCgCIACgBIAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIAAAAIgBABIgCACgAAAAAIAAAAIAAABIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAg");
	this.shape_121.setTransform(136.7,384.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#ED1B2D").s().p("AAAAAIAAAAIgBAAIABgCIABACIgBAAIACACIgBABg");
	this.shape_122.setTransform(135.8,385.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#ED1B2D").s().p("AAAADIgCgEIACgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACABIgCABIgBgCIAAAAIAAACIAAABgAAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_123.setTransform(135.4,385.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#ED1B2D").s().p("AgBgBIABgBQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAIABABIgBABIgBAAIAAABgAAAABIAAgBIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAIAAAAIAAgBIAAABg");
	this.shape_124.setTransform(134.4,386);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#ED1B2D").s().p("AAAADIAAgDIgBgCIABAAIAAACIAAgCIACABIgCABIAAADg");
	this.shape_125.setTransform(132.8,386.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#ED1B2D").s().p("AgCgBIACgBIAAABIADABIgCABIAAAAIgBABIAAAAIAAAAIAAABg");
	this.shape_126.setTransform(136.3,385.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#ED1B2D").s().p("AAAADIAAgBIAAAAIAAgBIAAABIgBgBIABgCIAAgBIACABIAAAEg");
	this.shape_127.setTransform(131.9,386);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#ED1B2D").s().p("AAAADIAAgDIgBACIgBgBIACgDIAAAAIAAACIACgBIABABIgDADg");
	this.shape_128.setTransform(130.7,385.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#ED1B2D").s().p("AgBgBIABgBIAAABIAAABIAAAAIABAAIAAAAIgBAAIAAABIABAAIABABIgCABg");
	this.shape_129.setTransform(134.9,385.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#ED1B2D").s().p("AgCABIACgDIACACIgBAAIAAAAIgBAAIABAAIgBABIAAgBIAAABIAAABIAAABg");
	this.shape_130.setTransform(130.3,385.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#ED1B2D").s().p("AAAADIAAgFIAAAAIAAADIABAAIAAACg");
	this.shape_131.setTransform(133.6,386.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#ED1B2D").s().p("AAAACIAAgDIAAAAIAAADg");
	this.shape_132.setTransform(134,386.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#ED1B2D").s().p("AAAACIAAgEIABABIgBAEg");
	this.shape_133.setTransform(131.6,385.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#ED1B2D").s().p("AgBABIACgCIABABIgCACg");
	this.shape_134.setTransform(130,384.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#ED1B2D").s().p("AgBABQgBgBAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABAAQAAABABAAQAAAAABABIgCAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAACIAAAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_135.setTransform(131.2,385.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#ED1B2D").s().p("AgCAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIABABIAAABQAAAAAAAAQgBAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_136.setTransform(129.8,384.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgDgCQAAAAAAAAQABgBAAAAQABAAABAAQAAAAAAAAIAEAFQgDABgBACg");
	this.shape_137.setTransform(132.7,382.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgDgCIADgCIAEAHIgEACg");
	this.shape_138.setTransform(132.1,382.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#ED1B2D").s().p("AgHgBIAAAAIAAgBIABAAIgBAAIADgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIACgBIAAABIACAAIAEAGIgGACIgBABIgDADg");
	this.shape_139.setTransform(132.4,382.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#ED1B2D").s().p("AAAABIgBgBIABAAIAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIABAAIgCAAIAAABIAAAAg");
	this.shape_140.setTransform(134.6,380.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#ED1B2D").s().p("AgBAAIABAAIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_141.setTransform(135.3,380.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#ED1B2D").s().p("AgBAAIABAAIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_142.setTransform(133.9,380.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#ED1B2D").s().p("AAAAFIAAgKIABAAIgBAKIAAgBIAAACg");
	this.shape_143.setTransform(135.1,380.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#ED1B2D").s().p("AAAAFIABgKIgBAKIABgBIAAACg");
	this.shape_144.setTransform(133.7,380.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#ED1B2D").ss(0.2).p("AAIABIADgBIADAAIAAAAQABAAABAAIgCAAIgBAAIgFAAIAAgCQAAgCgBAAIgBACIAAACIgFAAIgBAAIAAAAIAAAAIABAAIACAAIADABIAAALIABABIABAAIAAgBg");
	this.shape_145.setTransform(133.8,379.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AAAAJIAAgBIAAgJIgCgBIgDAAIgBAAIgBgBIABABIABgBIAFAAIAAgDIAAgCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAADIAGAAIABABIABgBIgBABIgBAAIgDAAIgDABIAAAJIAAABg");
	this.shape_146.setTransform(134.6,380);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F5828C").s().p("AgLAOIAAgIIAQgRIAHgCIAAAHIgTAUg");
	this.shape_147.setTransform(134.6,380.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#ED1B2D").ss(0.5).p("AgLgNQALAIAMgFQACANgEAOIgVAAg");
	this.shape_148.setTransform(134.6,380,1,1,0,0,0,0,0.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgLAPIAAgdQALAHAMgFQACANgEAOg");
	this.shape_149.setTransform(134.6,380);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#ED1B2D").ss(0.5).p("AgLAOQAOgKAHgVIgVAAg");
	this.shape_150.setTransform(134.5,383.2,1,1,0,0,0,0,-0.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgKgPIAVAAQgIAVgNAKg");
	this.shape_151.setTransform(134.5,383.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#ED1B2D").ss(0.5).p("AAMAOQgOgKgHgVIAVAAg");
	this.shape_152.setTransform(132.1,383.2,1,1,0,0,0,0,-0.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgKgPIAVAAIAAAfQgOgKgHgVg");
	this.shape_153.setTransform(132.2,383.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#ED1B2D").s().p("AgMAQIAAgfQAMAHAMgFQADARgEAMg");
	this.shape_154.setTransform(134.7,379.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#ED1B2D").s().p("AgLgQIAXAAIAAAhQgPgMgIgVg");
	this.shape_155.setTransform(132.1,383.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#ED1B2D").s().p("AgLgQIAXAAQgHAVgQAMg");
	this.shape_156.setTransform(134.6,383.3);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FBD1D5").s().p("AgJABIgCgBIAWAAIAAABg");
	this.shape_157.setTransform(132.1,381.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FCDDE0").s().p("AgEACIAEgGQAEACABACIgFAFIgEgDg");
	this.shape_158.setTransform(137.6,382.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#F2606C").s().p("AgDAAIADgDQACACACABIgEAEg");
	this.shape_159.setTransform(137,383.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F5828C").s().p("AgCABIACgDIADACIgDADQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAg");
	this.shape_160.setTransform(136.6,383.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#F2606C").s().p("AAAAAIAAAAIAAABg");
	this.shape_161.setTransform(136.3,383.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F5828C").s().p("AgFgCIACgEIADAFIAFACIgCADIAAABIABABIABAAIABABQgGAAgFgJg");
	this.shape_162.setTransform(135.8,383.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F2606C").s().p("AgBACIgEgDIACgFIADAGQADACACABIgCAEQgDgBgBgEg");
	this.shape_163.setTransform(136.1,382.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FCDDE0").s().p("AgDAGIgEgGQADgHAAgDQAEACABAGQAEAEADABIgHAIQgBgBgDgEg");
	this.shape_164.setTransform(136.5,381.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#ED1B2D").s().p("AgCAIIACgDQgCgBgDgEIgEgDIADgHIAEAGQACAEACAAIAGgGIABABIgDAEIAEACIgKAKQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBAAAAg");
	this.shape_165.setTransform(136.4,382.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F5828C").s().p("AgEAGIABAAIABgBIAAgBIgCgDQAEgBADgGIADAEQgGAJgEAAg");
	this.shape_166.setTransform(130.8,383.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#ED1B2D").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIABAAIgBAAIABAAIAAAAIgBAAIABAAIgBAAIAAABgAAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_167.setTransform(132,379.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AAAADIAAgBIgBgBIAAAAIgBgBIABAAIAAAAIAAAAIAAgBIABAAIAAAAIAAAAIAAgBIAAABIABAAIAAAAIABAAIAAABIABAAIAAABIgBABIgBABg");
	this.shape_168.setTransform(131.9,379.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F8A4AB").s().p("AgDAEIgBgDIAAgBIABgBIABgBIAAgBIAGgBQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQgBABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAACIgBACQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAgBAAAAQAAAAAAAAQgBAAgBAAQAAAAgBAAg");
	this.shape_169.setTransform(132,379.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FDE8EA").s().p("AgLAFIAAgHQALADAMgGIAAAJQgGAEgCgEIgEABIgFgBQAAABgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgDgBg");
	this.shape_170.setTransform(132,379);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#ED1B2D").ss(0.5).p("AAMgNQgMAIgLgFQgBAPADAMIAVAAg");
	this.shape_171.setTransform(132,380,1,1,0,0,0,0,0.2);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgJAPQgDgLABgQQALAFAMgHIAAAdg");
	this.shape_172.setTransform(132,380);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#ED1B2D").s().p("AgKAQQgEgMADgRQALAFANgHIAAAfg");
	this.shape_173.setTransform(131.9,379.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FCDDE0").s().p("AgEAAQAAgCAEgCIAFAGQgDABgBACg");
	this.shape_174.setTransform(129.1,382.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#F2606C").s().p("AgCAAIACgDIADADIgDAEg");
	this.shape_175.setTransform(129.6,383.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#F5828C").s().p("AgCAAIACgCIADADQgBAAAAAAQgBABAAAAQAAAAAAABQgBAAAAAAg");
	this.shape_176.setTransform(130.1,383.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F2606C").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_177.setTransform(130.3,383.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F2606C").s().p("AgEADQACgBACgCIADgGIACAFIgDADQgCAEgCABIgCgEg");
	this.shape_178.setTransform(130.6,382.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FCDDE0").s().p("AgGADQADgBADgEQABgHADgBIADAKIgDAGQgDAEgCABg");
	this.shape_179.setTransform(130.1,381.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#ED1B2D").s().p("AgJABIAEgCIgDgEIABgBIAGAGQADgBAFgJIADAHQgFAGgEACIABADQABAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAg");
	this.shape_180.setTransform(130.2,382.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgnAoQgRgRAAgXQAAgWARgRQARgRAWAAQAXAAARARQARARgBAWQABAXgRARQgRARgXAAQgWAAgRgRg");
	this.shape_181.setTransform(133.4,381);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#ED1B2D").s().p("AgpAqQgRgSAAgYQAAgYARgRQASgSAXAAQAYAAASASQARARAAAYQAAAYgRASQgSASgYAAQgXAAgSgSg");
	this.shape_182.setTransform(133.3,381);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E31F26").s().p("AAHAJIgLgOIAAALIAAACIACAAIABAAIAAABIgHAAIAAgBIABAAIABAAIABgCIAAgMIgCgCIgBAAIgBAAIAAgBIAFAAIAKANIAAgJIAAgDIgCAAIgBAAIAAgBIAHAAIAAABIgBAAIgBAAIgBADIAAAOg");
	this.shape_183.setTransform(204.3,394.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#E31F26").s().p("AgFAKQgDgDAAgFQAAgCADgDQADgDACAAQAEAAADADQACADAAACQAAAFgCADQgEADgDAAQgCAAgDgDgAgCgDQgCADgBACQABAFACADQAAAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQACgDAAgEQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABAAAAgAAAgHIAAgFIADAAIgDAFg");
	this.shape_184.setTransform(202.2,394);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIAAAAIgCgBIgBAAIAAAAIAHAAIAAAAIgBAAIgCABIAAACIAAALIAAACIABAAIABABIABAAIAAAAg");
	this.shape_185.setTransform(200.6,394.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQgBgDgCgBQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_186.setTransform(199.2,394.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E31F26").s().p("AADAKIAAgBIABAAIAAgBIAAgCIgBgDIgGAAIgBADIgBABIABACIABAAIAAABIgGAAIAAgBIACAAIACgEIAFgOIAAAAIAGAPIACADIACAAIAAABgAgDACIAFAAIgCgGg");
	this.shape_187.setTransform(197.2,394.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQgBgDgCgBQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_188.setTransform(195.1,394.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIAAAAIgCgBIgBAAIAAAAIAHAAIAAAAIgBAAIgCABIAAACIAAALIAAACIABAAIABABIABAAIAAAAg");
	this.shape_189.setTransform(193.7,394.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E31F26").s().p("AAHAJIgLgOIAAALIAAACIACAAIABAAIAAABIgHAAIAAgBIABAAIABAAIABgCIAAgMIgCgCIgBAAIgBAAIAAgBIAFAAIAKANIAAgJIAAgDIgCAAIgBAAIAAgBIAHAAIAAABIgBAAIgBAAIgBADIAAAOg");
	this.shape_190.setTransform(192.1,394.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E31F26").s().p("AgDAIIgCgCIgBgGIAAgFIAAgDIgCAAIgBAAIAAgBIAIAAIAAABIAAAAIgCABIAAACIAAAGIAAADIAAADIACABIABAAIADAAIACgCIABgFIAAgGIgBgDIgBAAIgBAAIAAgBIAHAAIAAABIAAAAIgDABIAAACIAAAGIgBAFIgCACIgEABIgDgBg");
	this.shape_191.setTransform(190,394.3);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E31F26").s().p("AAEAJIAAAAIAAAAIACgBIAAgCIAAgLIgGAOIAAAAIgHgOIAAALIABACIABABIABAAIAAAAIgHAAIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgBAAIgBgBIAAAAIAGAAIAFANIAGgNIAGAAIAAAAIAAAAIgCABIAAACIAAALIAAACIACABIAAAAIAAAAg");
	this.shape_192.setTransform(187.6,394.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E31F26").s().p("AgFAHQgDgDAAgEQAAgDADgDQADgDACAAQAEAAADADQACADAAADQAAAEgCADQgEADgDAAQgDAAgCgDgAgDgGQgCADAAADQAAAEACADQABAAAAABQABAAAAAAQABAAAAABQAAAAAAAAQAAAAABAAQABgBAAAAQABAAAAAAQABgBAAAAQACgDAAgEQAAgDgCgDQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_193.setTransform(185.2,394.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQgBgDgCgBQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_194.setTransform(183.2,394.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E31F26").s().p("AgHAJIAAAAIABAAIABgBIAAAAIABgCIAAgLIgBgCIgBgBIgBAAIAAAAIANAAIABAEIgBAAIgBgCIgBgBIgCAAIgDAAIAAAHIACAAIACAAIABgCIABAAIAAAEIgBAAIAAgBIgBgBIgCAAIgCAAIAAAGIAAACIAAAAIABAAIABAAIADAAIACgBIABgDIABAAIgCAFg");
	this.shape_195.setTransform(180.6,394.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E31F26").s().p("AgIAJIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgCgBIAAAAIAAAAIAIAAIAEABQADABABACIABAEQAAADgCADQgDADgEAAgAgDgHIAAAPIADAAQACAAACgCQACgCAAgEQAAgDgCgCQgCgCgCAAIgDAAg");
	this.shape_196.setTransform(178.5,394.3);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#E31F26").s().p("AgIAJIAAAAIAAAAIACgBIABgCIAAgLIgBgCIgCgBIAAAAIAAAAIAIAAIAEABQADABABACIABAEQAAADgCADQgDADgEAAgAgDgHIAAAPIADAAQACAAACgCQACgCAAgEQAAgDgCgCQgCgCgCAAIgDAAg");
	this.shape_197.setTransform(175.6,394.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E31F26").s().p("AADAKIAAgBIABAAIABgBIgBgCIgBgDIgGAAIgBADIgBABIABACIACAAIAAABIgHAAIAAgBIACAAIACgEIAFgOIAAAAIAGAPIACADIACAAIAAABgAgCACIAEAAIgCgGg");
	this.shape_198.setTransform(173.6,394.3);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E31F26").s().p("AgDAJIAAAAIABAAIACgBIAAgCIAAgNIgCAAIgCAAIgCABIAAACIgBAAIAAgEIAOAAIABAEIgBAAIAAgBIgCgCIgCAAIgCAAIAAANIAAACIACABIAAAAIAAAAg");
	this.shape_199.setTransform(171.9,394.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E31F26").s().p("AgHAJIAAAAIABAAIABgBIABgCIAAgLIgBgCIgBgBIgBAAIAAAAIAHAAIAAAAIAAABIgBAAIAAADIAAAKIAAABIABABIAAAAIABAAIADAAIACgBIACgDIAAAAIgCAFg");
	this.shape_200.setTransform(170.5,394.3);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#E31F26").s().p("AgDAIIgCgCIgBgGIAAgFIAAgDIgCAAIgBAAIAAgBIAIAAIAAABIAAAAIgCABIAAACIAAAGIAAADIAAADIACABIABAAIADAAIACgCIABgFIAAgGIgBgDIgBAAIgBAAIAAgBIAHAAIAAABIAAAAIgCABIgBACIAAAGIgBAFIgCACIgEABIgDgBg");
	this.shape_201.setTransform(168.5,394.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E31F26").s().p("AgFAGQgCgDAAgDQAAgBABgDQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAIADgCIAEABIABABIAAgBIABgBIABAAIAAAHQgBgDgCgBQgBgBAAAAQAAAAgBAAQAAgBgBAAQgBAAAAAAIgCABIgCADIgBAEIABAEIADADIABABIAEAAIADgEIAAABIgDADQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAQgDAAgCgEg");
	this.shape_202.setTransform(166.4,394.3);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E31F26").s().p("AACAKIAAgBIACAAIAAgBIgBgCIgBgDIgFAAIgBADIgBABIABACIABAAIAAABIgGAAIAAgBIACAAIACgEIAFgOIAAAAIAGAPIACADIACAAIAAABgAgDACIAFAAIgCgGg");
	this.shape_203.setTransform(164.4,394.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#E31F26").s().p("AgGAJIAAAAIABAAIACgBIAAgCIAAgLIAAgCIgBAAIgBgBIgBAAIAAAAIANAAIAAAEIgBAAIAAgCIgCgBIgCAAIgCAAIAAAHIABAAIACAAIABgCIAAAAIAAAEIAAAAIAAgBIgBgBIgCAAIgBAAIAAAGIAAACIAAAAIAAABIABAAIAAAAg");
	this.shape_204.setTransform(162.8,394.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#E31F26").ss(0.3).p("AiAAAIEAAA");
	this.shape_205.setTransform(178.4,392);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E31F26").s().p("Ag3ALIgCgCIAAgCIAAgEIADAAIAAADQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAAgDIgFgDIgBgEIAAgBIABgEQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIADABIACACIAAAEIgEAAIAAgCIgBgBQAAABgBAAQAAAAAAAAQAAAAAAAAQgBABAAAAIABACIACACIADABIABADIAAABIAAAFQgBAAAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgDABgAh9ALIgCgCIAAgDIAAgQIADAAIAAAQQAAAAABABQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAAgQIADAAIAAAPIAAAEIgCACIgCABgAB8ALIgDgLIABALIgFAAIAAgVIAFAAIADALIgBgLIAFAAIAAAVgABvALIAAgVIAEAAIAAAVgABkALIAAgVIAFAAIAAARIAEAAIAAAEgABaALIAAgVIAFAAIAAARIAEAAIAAAEgABOALIAAgVIAKAAIAAAEIgGAAIAAAFIAGAAIAAACIgGAAIAAAGIAGAAIAAAEgABCALIAAgVIAFAAIADAAIACACIABACIAAAMQgBAFgFAAgABGAIIABAAIABgBIAAgMIgBgBIgBAAgAA1ALIAAgVIAKAAIAAAEIgFAAIAAAFIAFAAIAAACIgFAAIAAAGIAFAAIAAAEgAAwALIAAgQIgDAQIgDAAIgDgQIABAQIgFAAIAAgVIAHAAIABAMIACgMIAGAAIAAAVgAASALIAAgVIAJAAIAAAEIgFAAIAAAFIAFAAIAAACIgFAAIAAAGIAFAAIAAAEgAAFALIAAgVIAFAAIAEAAIABACIAAACIAAAMQABAFgGAAgAAIAIIACAAIABgBIABgCIAAgKIgCgBIgCAAgAgMALIAAgVIAFAAIAEAAIABACIABACIAAAMQAAAFgGAAgAgIAIIABAAIABgBIAAgCIAAgIIAAgCIgBgBIgBAAgAgSALIAAgEIgDAAIgBAEIgFAAIAFgVIAEAAIAFAVgAgVACIACAAIgBgIgAgmALIAAgVIAFAAIADAAIACACIAAACIAAAMQABAFgGAAgAgjAIIACAAIABgBIABgCIAAgIIgBgCIgBgBIgCAAgAgtALIAAgVIAEAAIAAAVgAg/ALIAAgFIAAgDIgBgBIgCAAIAAAJIgEAAIAAgVIAGAAIADAAIABACIABADIAAAEIgBABIgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIABACIABAIgAhCAAIACAAIABgBIAAgDIAAgCIgBAAIgCAAgAhSALIAAgVIAKAAIAAAEIgGAAIAAAFIAFAAIAAACIgFAAIAAAGIAGAAIAAAEgAhcALIgEgVIAFAAIABAOIABAAIACgOIAEAAIgEAVgAhlALIAAgVIAEAAIAAAVgAhsALIgDgLIABALIgFAAIAAgVIAFAAIADALIgBgLIAFAAIAAAVg");
	this.shape_206.setTransform(178.4,389.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FABAC0").s().p("AAAAAIAAAAIAAAAIAAAAIAAABIAAgBg");
	this.shape_207.setTransform(177.1,379.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FDE8EA").s().p("AAAADQAAgFAAAAQABAAAAAFg");
	this.shape_208.setTransform(177,381);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_209.setTransform(177.5,381.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_210.setTransform(177.6,381.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_211.setTransform(176.8,381.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_212.setTransform(177.3,381.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_213.setTransform(177.5,381.1);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_214.setTransform(176.6,381.1);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_215.setTransform(176.7,380.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_216.setTransform(177.3,380.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_217.setTransform(177.4,380.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_218.setTransform(177.5,380.9);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_219.setTransform(176.6,380.9);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_220.setTransform(176.8,380.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_221.setTransform(177.3,380.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_222.setTransform(177.4,380.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_223.setTransform(176.6,380.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_224.setTransform(177.3,380.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_225.setTransform(177.5,380.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_226.setTransform(177,380.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_227.setTransform(177.2,380.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_228.setTransform(176.6,380.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_229.setTransform(177.3,380.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_230.setTransform(177.4,380.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_231.setTransform(176.7,380.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_232.setTransform(177.4,380.3);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_233.setTransform(176.7,380.3);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIABAAIAAAAg");
	this.shape_234.setTransform(177.4,379.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_235.setTransform(176.7,379.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAIAAAAg");
	this.shape_236.setTransform(177.4,379.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_237.setTransform(176.7,379.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#ED1B2D").s().p("AgDAIIAAAAIgBgBIAAgBIAAAAIAAgCIABgBIAAgEIgBAAIAAgCIABAAIAAgEIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIABAAIAAABIgBAAIAAADIABAAIAAgBIAAAAIAAABIAAAAIAAgBIABAAIAAABIABAAIAAgDIgBAAIAAgBIABAAIAAAAIAAAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAABIAAAAIAAADIABAAIAAABIAAABIAAAAIgBABIABAAIAAAGIAAAAIAAABIAAABIgBAAIAAAAgAAAAAIABAAIAAAAIgBAAg");
	this.shape_238.setTransform(177,380.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FABAC0").s().p("AAAAAIAAAAIAAABQAAAAAAAAg");
	this.shape_239.setTransform(177.2,379.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FABAC0").s().p("AAAABIAAAAIAAgBIAAgBIAAABIAAAAIAAAAIABABIgBAAIAAgBIAAAAIAAABIAAAAIAAAAIAAABIAAgBg");
	this.shape_240.setTransform(177,379.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#ED1B2D").s().p("AAAACIAAAAIgBgBIABgBIAAgBIAAAAIAAgBIAAAAIAAABIABAAIAAABIAAAAIAAAAIAAABQABAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAIAAAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_241.setTransform(177,379.6);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#ED1B2D").s().p("AACADIgHgBIAAgCIAIABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAIgBAAIgHAAIAAgCIAHABQAEAAgBABQAAABAAABQgBAAAAAAQAAABgBAAQAAAAAAAAIgCAAg");
	this.shape_242.setTransform(173.7,380.5);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#ED1B2D").s().p("AAAAGIABgFIgCAEIAAAAIAAgFIgCAEIgCgBIAFgJIABABIgBAFIAEgEIACABIgFAKg");
	this.shape_243.setTransform(180.3,376.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#ED1B2D").s().p("AgCgEIACgBIADAJIgBABIgCgCIAAAAIAAAAIAAABIAAACIgBAAgAAAACIAAgBIAAAAIAAgBIAAAAg");
	this.shape_244.setTransform(177.2,376.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#ED1B2D").s().p("AAAAFIABgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAgCIgCgBQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBIACAAIAAACQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIAAABIAEAAIABACIgBADIgBAAIgCAAg");
	this.shape_245.setTransform(175.5,377.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#ED1B2D").s().p("AgBADIABgGIAAAAQACACAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIAAABgAAAACIAAAAIABgCIgBgBIAAAAg");
	this.shape_246.setTransform(178.8,376.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#ED1B2D").s().p("AgDAEIgBgBIAGgHIACABQACADgDACIgDACIAAABIgDgBgAgBACQAAABAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIADgCQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_247.setTransform(181.5,377.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#ED1B2D").s().p("AgCgEIACAAQACAAABAEQABAFgEAAIgBABgAAAADIAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIAAAAg");
	this.shape_248.setTransform(177.9,376.3);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#ED1B2D").s().p("AAAAFIgDgJIACAAIABAAIADADQADAEgEABIgCABgAABACQAAAAAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAIgBgBg");
	this.shape_249.setTransform(176.4,376.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#ED1B2D").s().p("AgFgBIACgCIADgBIAAABQABABAAAAQABABAAABQAAAAAAAAQAAAAAAAAIAEACIgBABIgDgCIgBABIACACIgBABgAgCgBIACABIAAAAQAAAAABAAQAAAAAAAAQgBgBAAAAQAAgBAAAAIgBAAIgBABg");
	this.shape_250.setTransform(175,377.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#ED1B2D").s().p("AgBADIABgGIACABIAAACIgCgBIAAABIABAAIAAABIgBgBIAAACIAAAAIAAACg");
	this.shape_251.setTransform(179.4,376.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#ED1B2D").s().p("AgEACIAHgGIACADIAAABIgCgBIgCABIABAAIgBABIgBgBIgCACIABACIgBABg");
	this.shape_252.setTransform(182.1,378);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#ED1B2D").s().p("AgEAEIAFgJIAEADIgBABIgCgBIgBACIABAAIgBAAIgBAAIgBAEIABABIAAABg");
	this.shape_253.setTransform(181.1,377.1);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#ED1B2D").s().p("AgEgBIACgDIABABIgBACIACABIAAgBIABABIgBAAIAEACIAAgCIABABIgCAEg");
	this.shape_254.setTransform(174.6,378.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#ED1B2D").s().p("AgEAAIAAAAIAEAAIgDgCIABgBIAHAGIgBABg");
	this.shape_255.setTransform(174.2,378.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#ED1B2D").s().p("AgEAAIAJgDIAAACIgHACIABACIgCABg");
	this.shape_256.setTransform(182.7,379.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#ED1B2D").s().p("AgEAAIAIgDIABABIgGAEIABACIgCABg");
	this.shape_257.setTransform(182.4,378.7);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#ED1B2D").s().p("AgFAAIAKgBIAAABIgJACg");
	this.shape_258.setTransform(183,379.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#ED1B2D").s().p("AgDgDIACgBIAFAIIgCABg");
	this.shape_259.setTransform(175.9,376.9);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#ED1B2D").s().p("AgFAAIABgCIAKADIgCACg");
	this.shape_260.setTransform(174.1,379.1);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#ED1B2D").s().p("AgEACIAEgCIgFAAIAAgBIAKgCIABACIgFACIAFgBIAAACIgKABg");
	this.shape_261.setTransform(183.1,380.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#ED1B2D").s().p("AgFABIAAgBIAFAAIgEgBIABgCIAJADIAAABIgGAAIAFABIgBACg");
	this.shape_262.setTransform(173.8,379.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FABAC0").s().p("AgCAAIAEAAIAAAAg");
	this.shape_263.setTransform(179.3,382.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FABAC0").s().p("AgCAAIAAAAIAEAAIAAAAQgCAAgCAAg");
	this.shape_264.setTransform(179.3,382.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FABAC0").s().p("AgCAAIAAAAIAEAAIAAAAg");
	this.shape_265.setTransform(179.3,382.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FABAC0").s().p("AAAAGIAAgFIAAgBIAAAAIAAAAIAAAAIAAgBIAAgCQAAAAgBAAQAAAAAAgBQAAAAAAAAQgBgBAAAAIAEAAIAAACIgBABIgBAIIAAAAIAAABg");
	this.shape_266.setTransform(179.3,383);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AAAAAQAAAAAAAAQgBAAAAAAQAAAAABAAQAAAAAAAAIABAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAg");
	this.shape_267.setTransform(179,383);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AAAAAIgBAAIAAgCIABAAIAAAEIAAAAIAAgBIABgIIAAAAIABAAIAAADIAAADIAAADIgDAHIABgJg");
	this.shape_268.setTransform(179.2,383.5);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],0,0,0.3,0).s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBAAIABAAIgBABg");
	this.shape_269.setTransform(179.5,381.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.1,0).s().p("AAAABQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIgBAAIABAAIgBABg");
	this.shape_270.setTransform(179.5,381.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.1,0).s().p("AgBABIACgBIgBAAIACAAIgCABg");
	this.shape_271.setTransform(179.5,381.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.2,0).s().p("AgBABIACgBIgBAAIACAAIgCABg");
	this.shape_272.setTransform(179.5,381.9);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.2,0).s().p("AgBAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAABAAIgBAAIACAAIgCABg");
	this.shape_273.setTransform(179.5,381.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgBABIABgBIABAAIgBAAIACAAIgCAAIAAABg");
	this.shape_274.setTransform(179.5,381.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgBABIABgBIACAAIgCAAIACAAIgCAAIAAABg");
	this.shape_275.setTransform(179.5,381.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.2,0,0.3,0).s().p("AgBABIABgBIACAAIgCAAIACAAIgCAAIAAABg");
	this.shape_276.setTransform(179.5,381.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_277.setTransform(179.5,381.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABQABgBADAAIgCAAIADAAIgDABIAAAAg");
	this.shape_278.setTransform(179.5,381.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.3,0).s().p("AgCABIACgBIACAAIgCAAIADAAIgDABIAAAAgAACAAIAAAAg");
	this.shape_279.setTransform(179.5,381.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_280.setTransform(179.5,381.9);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_281.setTransform(179.5,381.9);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgCABIACgBIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIADAAIgDABIAAAAg");
	this.shape_282.setTransform(179.5,381.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQACgBADAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAEAAIgDABIgBAAg");
	this.shape_283.setTransform(179.5,381.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQACgBADgBIgCABIAEAAIgDABIgBABg");
	this.shape_284.setTransform(179.5,381.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.lf(["#ED1B2D","#FFFFFF"],[0,1],-0.3,0,0.4,0).s().p("AgDABQABgBAFgBIgDABIAEAAIgDABIgBABg");
	this.shape_285.setTransform(179.5,381.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AAAACIAAAAIgEgBQgBAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQACgBADAAIAAABIAEgBQAAABgBAAQAAAAAAAAQAAAAgBAAQAAAAAAABIABABIgCAAIgDAAg");
	this.shape_286.setTransform(179.6,381.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#ED1B2D").s().p("AgEAEIgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgBQAAAAAAAAQgBAAAAAAQAAAAABgBQAAAAAAAAIAAgBQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAIgBgCIAAgBIAAgBIABgBQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAIAEgBIAAABIADgBQABABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIABABQgBACgFgCIAAABIAAABIAAADIAAADIAAAAIAAACIAAAFIgFAHg");
	this.shape_287.setTransform(179.6,383);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#ED1B2D").s().p("AAAACIgBgCIABgBIAAAAQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAAAIAAAAIAAABIgCACgAAAAAIAAAAIAAABIABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAAAAg");
	this.shape_288.setTransform(181.7,384.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#ED1B2D").s().p("AAAAAIgBAAIAAAAIABgCIABACIgBAAIACACIgBABg");
	this.shape_289.setTransform(180.9,385.5);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#ED1B2D").s().p("AAAADIgBgEIABgBIAAAAQAAAAAAAAQAAAAAAAAQAAAAABABQAAAAAAAAIgBABIACABIgBABIgBgCIAAAAIAAACIAAABgAAAAAIAAAAIAAAAIAAAAIAAAAg");
	this.shape_290.setTransform(180.5,385.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#ED1B2D").s().p("AgBgBIABgBIAAAAQABAAAAAAQAAABABAAQAAAAAAABQgBAAAAAAIABABIgBABIgBAAIAAABgAAAABIAAAAIAAgBIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAIAAgBIAAABg");
	this.shape_291.setTransform(179.5,386);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#ED1B2D").s().p("AAAADIAAgDIgBgCIABAAIAAACIAAgCIACABIgCABIAAADg");
	this.shape_292.setTransform(177.9,386.1);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#ED1B2D").s().p("AgCgBIABgBIABABIADABIgBABIgBAAIgBABIAAAAIAAABg");
	this.shape_293.setTransform(181.4,385.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#ED1B2D").s().p("AABADIAAgBIgBAAIAAgBIAAABIgBgBIABgCIABgBIABABIAAAEg");
	this.shape_294.setTransform(176.9,386);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#ED1B2D").s().p("AAAADIAAgDIAAACIgCgBIACgDIAAAAIAAACIABgBIABABIgCADg");
	this.shape_295.setTransform(175.8,385.4);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#ED1B2D").s().p("AgBgBIABgBIAAABIAAABIAAAAIABAAIAAAAIgBAAIAAABIABAAIABABIgCABg");
	this.shape_296.setTransform(180,385.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#ED1B2D").s().p("AgCABIACgDIADACIgBAAIgCAAIAAAAIABAAIgBABIAAgBIAAABIAAABIAAABg");
	this.shape_297.setTransform(175.4,385.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#ED1B2D").s().p("AAAADIAAgFIAAAAIAAADIABAAIAAACg");
	this.shape_298.setTransform(178.7,386.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#ED1B2D").s().p("AAAACIAAgDIAAAAIAAADg");
	this.shape_299.setTransform(179,386.1);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#ED1B2D").s().p("AAAACIAAgEIABABIgBAEg");
	this.shape_300.setTransform(176.6,385.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#ED1B2D").s().p("AgBABIACgCIABABIgCACg");
	this.shape_301.setTransform(175.1,384.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#ED1B2D").s().p("AgBABQgBgBAAAAQAAAAABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQABAAAAAAQABABAAAAQAAAAABABIgCAAIgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABIABACIgBAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_302.setTransform(176.2,385.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#ED1B2D").s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAAAIgCAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAABQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_303.setTransform(174.8,384.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgHgBIABAAIAEAHIADgCIgEACgAABAEIABgBIAAAAIAEgCIAAgBIABAAIgEgFIAAAAIAFAGIgGACIAAABIgBAAg");
	this.shape_304.setTransform(177.5,382.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgDgCIADgBIAEAFQgDABgBACg");
	this.shape_305.setTransform(177.7,382.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgDgCIADgCIAEAHIgEACg");
	this.shape_306.setTransform(177.2,382.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#ED1B2D").s().p("AgHgBIABAAIAAgBIAAAAIAAAAQABAAAEgCIADgCIAAABIABAAIAFAGIgGACIAAABIgFADg");
	this.shape_307.setTransform(177.5,382.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#ED1B2D").s().p("AAAABIgBgBIAAAAIABAAIAAAAIABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCAAIAAABIAAAAg");
	this.shape_308.setTransform(179.6,380.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#ED1B2D").s().p("AAAgFIAAAAIAAALg");
	this.shape_309.setTransform(178.9,380.2);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#ED1B2D").s().p("AgBAAIABAAIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_310.setTransform(180.3,380.9);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#ED1B2D").s().p("AgBAAIABAAIACAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_311.setTransform(178.9,380.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#ED1B2D").s().p("AAAAFIABgKIgBAKIABgBIAAACg");
	this.shape_312.setTransform(180.2,380.2);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#ED1B2D").s().p("AAAAFIAAgKIAAAKIABgBIAAACg");
	this.shape_313.setTransform(178.8,380.3);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#ED1B2D").ss(0.2).p("AgIABIADgBIACAAQABAAAAAAIABAAIABAAIgBAAIgBAAIgGAAIAAgCQAAgCgBAAIgBACIAAACIgFAAIgBAAIgBAAQAAAAABAAIABAAIACAAIADABIAAALIABABIABAAIAAgBg");
	this.shape_314.setTransform(180.6,379.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AAAAJIAAgBIAAgJIgDgBIgCAAIgBAAIgBgBIABABIABgBIAFAAIAAgDIAAgCQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAADIAGAAIABABIABgBIgBABIgBAAIgBAAIgCAAIgDABIAAAJIAAABg");
	this.shape_315.setTransform(179.6,380);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F5828C").s().p("AgLAOIAAgIIAQgRIAHgCIAAAHIgTAUg");
	this.shape_316.setTransform(179.6,380.1);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#ED1B2D").ss(0.5).p("AgLgNQALAIAMgFQACANgEAOIgVAAg");
	this.shape_317.setTransform(179.6,380,1,1,0,0,0,0,0.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgLAPIAAgdQALAHAMgFQACANgEAOg");
	this.shape_318.setTransform(179.6,380);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#ED1B2D").ss(0.5).p("AgLAOQAPgLAGgUIgVAAg");
	this.shape_319.setTransform(179.6,383.2,1,1,0,0,0,0,-0.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgKgPIAVAAQgGAUgPALg");
	this.shape_320.setTransform(179.5,383.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#ED1B2D").ss(0.5).p("AAMAOQgOgKgHgVIAVAAg");
	this.shape_321.setTransform(177.1,383.2,1,1,0,0,0,0,-0.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgKgPIAVAAIAAAfQgNgKgIgVg");
	this.shape_322.setTransform(177.2,383.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#ED1B2D").s().p("AgMAQIAAgfQAMAHAMgFQADAPgEAOg");
	this.shape_323.setTransform(179.7,379.9);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#ED1B2D").s().p("AgLgQIAXAAIAAAhQgQgMgHgVg");
	this.shape_324.setTransform(177.1,383.3);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#ED1B2D").s().p("AgBAAIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAABQAAAAAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAg");
	this.shape_325.setTransform(176.3,379.1);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#ED1B2D").s().p("AgLgQIAXAAQgHAVgQAMg");
	this.shape_326.setTransform(179.6,383.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FBD1D5").s().p("AgKABIgBgBIAXAAIAAABg");
	this.shape_327.setTransform(177.2,381.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FCDDE0").s().p("AgEACIAEgGQAFACAAACIgFAFIgEgDg");
	this.shape_328.setTransform(182.6,382.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#F2606C").s().p("AgDAAIADgDQACACABABIgDAEg");
	this.shape_329.setTransform(182.1,383.1);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#F5828C").s().p("AgCABIACgDIADACIgDADQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAg");
	this.shape_330.setTransform(181.6,383.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#F2606C").s().p("AAAAAIAAAAIAAABg");
	this.shape_331.setTransform(181.3,383.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#F5828C").s().p("AgEgCIACgEIACAFIAFACIgCADIAAABIABABIABAAIAAABQgFAAgEgJg");
	this.shape_332.setTransform(180.9,383.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#F2606C").s().p("AAAACIgEgDIACgFIACAGQACACAEABIgDAEQgDgBAAgEg");
	this.shape_333.setTransform(181.1,382.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FCDDE0").s().p("AgCAGIgFgGIAEgKQADACACAGQADAEADABIgGAIQgCgBgCgEg");
	this.shape_334.setTransform(181.5,381.8);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#ED1B2D").s().p("AgBAIIABgDQgCgBgDgEIgEgDIADgHIAFAGIADAEIAGgGIABABIgDAEIAEACIgKAKQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAgBABAAg");
	this.shape_335.setTransform(181.5,382.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#F5828C").s().p("AgEAGIABAAIABgBIAAgBIgCgDQAEgBADgGIADAEQgGAJgFAAg");
	this.shape_336.setTransform(175.9,383.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#ED1B2D").s().p("AAAABIAAgBIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAABg");
	this.shape_337.setTransform(176.9,379.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AAAADIgBgBIgBgBIAAgBIABgBIABAAIAAAAIAAAAIAAgBIAAABIABAAIAAAAIABAAIAAABIAAAAIAAAAIABAAIgBABIAAAAIgBABIAAABg");
	this.shape_338.setTransform(177,379.2);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#F8A4AB").s().p("AgDAEIgBgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBAAAAIAGgBQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAABgBAAQAAAAAAAAQAAAAABAAQAAAAAAAAIAAACIgBACQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAABAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAg");
	this.shape_339.setTransform(177,379.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FDE8EA").s().p("AAEAEIgEABIgFgBQgDADgDgCIAAgHQALADAMgGIAAAJQgDACgCAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_340.setTransform(177.1,379);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#ED1B2D").ss(0.5).p("AAMgNQgMAIgLgFQgBAPADAMIAVAAg");
	this.shape_341.setTransform(177.1,380,1,1,0,0,0,0,0.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgJAPQgDgLABgQQALAFAMgHIAAAdg");
	this.shape_342.setTransform(177.1,380);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#ED1B2D").s().p("AgJAQQgFgMADgRQALAFANgHIAAAfg");
	this.shape_343.setTransform(177,379.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FCDDE0").s().p("AgEAAQABgCADgCIAFAGQgDABgBACg");
	this.shape_344.setTransform(174.1,382.5);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#F2606C").s().p("AgDAAIADgDIAEADIgEAEg");
	this.shape_345.setTransform(174.7,383.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#F5828C").s().p("AgCAAIACgCIADADQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_346.setTransform(175.1,383.6);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#F2606C").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_347.setTransform(175.4,383.8);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#F2606C").s().p("AgFADQAEgBABgCIAEgGIACAFQgFAGgCACg");
	this.shape_348.setTransform(175.6,382.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FCDDE0").s().p("AgHADQADgBAEgEQABgGAEgCQAAADADAHIgEAGQgDAEgCABIgGgIg");
	this.shape_349.setTransform(175.2,381.8);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#ED1B2D").s().p("AgJABIAFgCIgEgEIABgBIAGAGQAEgBAEgJIADAHQgEAGgFACIACADQAAAAAAABQAAAAgBABQAAAAAAAAQgBABgBAAg");
	this.shape_350.setTransform(175.2,382.9);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgnAoQgQgRAAgXQAAgWAQgRQARgRAWAAQAXAAARARQAQARABAWQgBAXgQARQgRARgXAAQgWAAgRgRg");
	this.shape_351.setTransform(178.4,381);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#ED1B2D").s().p("AgpAqQgRgSAAgYQAAgYARgRQASgSAXAAQAYAAASASQASARAAAYQAAAYgSASQgSASgYAAQgXAAgSgSg");
	this.shape_352.setTransform(178.4,381);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("A4MCmIAAlLMAwYAAAIAAFLg");
	this.shape_353.setTransform(155,388.7);

	this.instance_6 = new lib.Interpolación7("synched",0);
	this.instance_6.setTransform(155,388.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_6}]},44).to({state:[{t:this.instance_6}]},3).to({state:[]},76).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(44).to({_off:false},0).to({y:352.7},3).to({_off:true},76).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(50.1,159.3,309.8,396.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;