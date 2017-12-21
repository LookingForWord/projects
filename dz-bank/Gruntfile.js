/*************yangshao 2016-10-13 gruntfile.js****************/
"use strict";//使用严格模式
module.exports=function(grunt){
    //通过模块来加载grunt的执行任务
    require("load-grunt-tasks")(grunt);//npm install load-grunt-tasks --save-dev
    //加载grunt任务执行时间的模块
    require("time-grunt")(grunt);//npm install time-grunt --save-dev
    //配置项目路径
    var config={
        src:"src",
        dist:"dist",
        test:"test"
    };
    //初始化grunt的任务配置
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        //引入config的配置
        config:config,
        compass: {                  // Task npm install grunt-contrib-compass --save-dev
            dist: {
                options: {
                    config:"config.rb",
                    watch:false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    //初始化项目
    grunt.registerTask("default",[
        "compass",
    ]);//grunt
}
