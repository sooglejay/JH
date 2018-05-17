module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: [{
         expand:true,
                   cwd:'routes', //js目录下
                   src:['*.js'], //所有js文件
                   dest:'build/*.min.js'  //输出到此目录下
                 }]  

               }
             }});

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify']);

  // A very basic default task.
  grunt.registerTask('jw', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });
};