module.exports = function(grunt) {


grunt.initConfig({
pkg: grunt.file.readJSON('package.json')
uglify: {
	
	build:{
		src:'js/script.js',
		dest:'js/script.min.js'
	}
}

});
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['uglify']);

};

