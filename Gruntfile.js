module.exports = function(grunt) {

	// grunt.loadNpmTasks("grunt-contrib-less");
	// grunt.loadNpmTasks("grunt-autoprefixer");
	// grunt.loadNpmTasks("grunt-combine-media-queries");
	// grunt.loadNpmTasks("grunt-contrib-cssmin");

	require("load-grunt-tasks")(grunt);

  grunt.initConfig({
  	csscomb:{
  		style:{
  			expand:true,
  			src:["src/less/**/*.less"]
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
  				"build/js/script.min.js":["src/js/file1.js", "src/js/file2.js"]
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
  				src: ["src/img/**/*.{png,jpg,gif,svg}"]
  			}]
  		}
  	}

    // pkg: grunt.file.readJSON('package.json')

  });

  grunt.registerTask("build", [
  	"csscomb",
  	"less",
  	"autoprefixer",
  	"cmq",
  	"cssmin"
  ]);


};