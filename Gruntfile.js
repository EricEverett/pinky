module.exports = function(grunt) {

	// grunt.loadNpmTasks("grunt-contrib-less");
	// grunt.loadNpmTasks("grunt-autoprefixer");
	// grunt.loadNpmTasks("grunt-combine-media-queries");
	// grunt.loadNpmTasks("grunt-contrib-cssmin");

	require("load-grunt-tasks")(grunt);

  grunt.initConfig({

  	// Files 
  	copy: {
  		build:{
  			files:[{
  				expand:true,
  				cwd: "src",
  				src: [
  					"img/**",
  					"css/**",
  					"js/**",
  					"index.html"
  				],
  				dest: "build"
  			}]
  		}
  	},

  	clean:{
  		build:["build"]
  	},

  	//CSS
  	csscomb:{
  		style:{
  			expand:true,
  			src:["src/less/components/*.less"]
  		}
  	},

  	less:{
  		style:{
  			files:{
  				"build/css/style.css": ["src/less/style.less"]
  			}
  		}
  	},

  	autoprefixer:{
  		options: {
  			browsers: ["last 2 version", "ie 10"]
  		},
  		style: {
  			src: "build/css/style.css"
  		}
  	},

  	cmq:{
  		style: {
  			files:{
  				"build/css/style.css": ["build/css/style.css"]
  			}
  		}
  	},

  	cssmin:{
  		style:{
  			options:{
  				keepSpecialComments: 0,
  				report:"gzip"
  			},
  			files:{
  				"build/css/style.min.css":["build/css/style.css"]
  			}
  		}
  	},

  	// JavaScript 
  	uglify:{
  		js:{
  			files:{
  				"build/js/script.min.js":["build/js/grunticon.loader.js","build/js/map.js"]
  			}
  		}
  	},

  	// IMAGE

  	imagemin:{
  		images:{
  			options: {
  				optimizationLevel:3
  			},
  			files:[{
  				expand:true,
  				src: ["build/img/**/*.{png,jpg,gif,svg}"]
  			}]
  		}
  	},
  	grunticon: {
	    myIcons: {
	        files: [{
	            expand: true,
	            cwd: 'src/_svg',
	            src: ['**/*.svg', '**/*.png'],
	            dest: "src/img"
	        }],
	        options: {
	          enhanceSVG: true, // style and animate with CSS or add interactivity with JS
	          datasvgcss : '../css/grunticon-icons.data.svg.css',
	          datapngcss : '../css/grunticon-icons.data.png.css',
	          urlpngcss : '../css/grunticon-icons.fallback.css',
	          previewhtml : '../_svg/_preview.html',
	         // loadersnippet: 'grunticon.loader.js',
	        // имя папки, в которую будут записаны PNG
	          pngfolder : 'png',
	            pngpath : 'png',
	          cssprefix: ".icon-",

	          template : 'src/_svg/custom-css.hbs',
	          defaultWidth : '20px',
	          defaultHeight: '20px'
        }
	    }
		},

  	//HTML 
  	includereplace:{
  		include:{
  			options:{

  			},
  			src: "src/*.html",
  			dest: "build/" //src copy to build !!!!
  		}
  	},

  	// for src slashes
  	replace:{
  		build:{
  			options:{
  				patterns:{
  					match: /[\"\']img\//g,
  					replacement: '"/img'
  				}
  			},
  			files:[{
  				expand:true,
  				src:[
  					"build/css/style*.css",
  					"build/index*.html"
  					]
  			}]
  		}
  	}
    // pkg: grunt.file.readJSON('package.json')

  });

  grunt.registerTask("build", [
  	"clean",
  	"copy",
  	"csscomb",
  	"less",
  	"autoprefixer",
  	"cmq",
  	"cssmin",
  	"uglify",
  	"includereplace"
  ]);
	
	// for image optimization  
  grunt.registerTask("image", [
  	"grunticon",
  	"imagemin"
  ]);


};