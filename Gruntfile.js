module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    shell: {
      launchExpress: {
        options: {
          stdout: true
        },
        command: 'npm start'
      }
    },
    open : {
      dev : {
        path: 'http://localhost:3000'
      }
    }
  });

  grunt.loadNpmTasks('grunt-express-server');

  grunt.loadNpmTasks('grunt-shell');

  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['shell', 'open']);

};