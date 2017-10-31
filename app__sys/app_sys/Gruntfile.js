/*************yangshao 2016-10-13 gruntfile.js****************/
"use strict";//使用严格模式
module.exports=function(grunt){
    //通过模块来加载grunt的执行任务
    require("load-grunt-tasks")(grunt);//npm install load-grunt-tasks --save-dev
    //加载grunt任务执行时间的模块
    require("time-grunt")(grunt);//npm install time-grunt --save-dev
    //配置项目路径
    var config={
        src:"app",
        dist:"dist",
        test:"test"
    };
    //初始化grunt的任务配置
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        //引入config的配置
        config:config,
        //自动检查
        watch: {//npm install grunt-contrib-watch --save-dev
            css: {
                files: ["<%=config.src%>/styles/*.css"],
                tasks: ["autoprefixer"],
                options: {
                    interrupt: true,
                }
            },
            sass:{
                files:"<%=config.src%>/styles/sass/*.scss",
                tasks:["sass"]
            }
        },
        imagemin: {//npm install grunt-contrib-imagemin --save-dev
            dist: {
                options: {
                    optimizationLevel: 7 //定义 PNG 图片优化水平
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%=config.src%>/images/',
                        src: ['*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                        dest: '<%=config.src%>/images1/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                ]
            }
        },
        //添加浏览器前缀  满足兼容性
        autoprefixer: {//npm install grunt-autoprefixer --save-dev
            options: {
                // Task-specific options go here.
                browsers: ['> 5%','ie 6','ie 7','ie 8','ie 9','ie 10','ie 11','Firefox <= 20','Opera <=20']
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%=config.src%>/styles/',
                        src: ['*.css'],
                        dest: '<%=config.src%>/styles/'
                    }
                ]
            }
        },
        //自动编译sass npm install grunt-contrib-sass --save-dev
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%=config.src%>/',
                    src: ['styles/sass/*.scss'],
                    filter:function(pathname){
                        if(grunt.file.isFile(pathname)){
                            return (!pathname.match(/common/));
                        }
                    },
                    dest: '<%=config.src%>/css/',
                    ext: '.css',
                    flatten:true
                }],
                options:{
                    //sourcemap:"none",
                    noCache:true
                }
            }
        },
        compass: {                  // Task npm install grunt-contrib-compass --save-dev
            dist: {
                options: {
                    config:"config.rb",
                    watch:true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    //发布项目
    grunt.registerTask("build",[
        "autoprefixer"
    ]);//grunt build
    //初始化项目
    grunt.registerTask("default",[
        "compass",
        //"watch"
    ]);//grunt
}