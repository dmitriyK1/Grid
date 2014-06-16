module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/*
		 * Automatically prefix vendor CSS properties
		 */
		autoprefixer: {
			options: {
				// Task-specific options go here.
			},
			grid: {
				src: 'grid.css',
				dest: 'grid-prefixed.css'
			},
		},
		/*
		 * Minify the css files
		 */
		cssmin: {
			grid: {
				files: {
					'grid.min.css': ['grid.css']
				}
			},
			prefixed: {
				files: {
					'grid-prefixed.min.css': ['grid-prefixed.css']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', 'Prefix and Minify', ['autoprefixer', 'cssmin']);
};