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
        //拷贝任务配置
        copy:{//npm install grunt-contrib-copy --save-dev
            dist_build:{//发布项目时调用 grunt copy:dist_build
                files:[
                    {
                        expand:true,//true时动态的处理dest的文件映射
                        cwd:"<%=config.src%>/",//相对于src的询问基路径
                        src:"**/*",
                        dest:"<%=config.dist%>/"//目标文件
                    }
                ]
            }
        },
        //清除任务
        clean:{//npm install grunt-contrib-clean --save-dev
            //dist_init:{//初始化时调用 grunt clean:dist_init
            //    src:["<%=config.src%>/**/*","<%=config.test%>/**/*"],
            //    filter:"isFile"
            //},
            dist_init:{//初始化时调用 grunt clean:dist_init
                src:["<%=config.src%>/**/*","<%=config.test%>/**/*"],
                filter:function(pathname){
                    if(grunt.file.isFile(pathname)){
                        return (!pathname.match(/common/));
                    }
                }
            },
            dist_dist:{//删除dist grunt clean:dist_dist
                src:["<%=config.dist%>/**/*"],
                filter:function(pathname){//false保留 true删除
                    if(grunt.file.isFile(pathname)){
                        return (!pathname.match(/min|images|.html|.css|.js/));
                    }else{
                       /* if(pathname.match(/sass/)){
                            return true;
                        }
                        return false;*/
                        return pathname.match(/sass/);
                    }

                }
            }
        },
        //合并文件npm install grunt-contrib-concat --save-dev
        concat:{
            options: {
                separator: ';'
            },
            dist_js: {//grunt concat:dist_js
                src: ["<%=config.src%>/js/*js"],
                dest: '<%=config.dist%>/js/concat.js'
            }
        },
        //压缩js
        uglify:{//npm install grunt-contrib-uglify --save-dev
            options:{
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',//生成文件banner
                sourceMap:false//用于生成压缩时的映射文件  该文件可以还原成压缩前的文件
            },
            dist:{
                files:[{
                    expand: true,
                    cwd: '<%=config.dist%>/js/',
                    src: ['**/*.js'],
                    dest: '<%=config.dist%>/js/',
                    ext: '.js'
                }]
            }
        },
        //cssmin 压缩css
        cssmin: {//npm install grunt-contrib-cssmin --save-dev
            dist: {
                files: [{//压缩多个css文件
                    expand: true,
                    cwd: '<%=config.dist%>/css/',
                    src: '*.css',
                    dest: '<%=config.dist%>/css/',
                    ext: '.css'
                }]
            }
        },
        //htmlcss 压缩html
        htmlmin: {//npm install grunt-contrib-htmlmin --save-dev
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{//压缩多个html文件
                    expand: true,
                    cwd: '<%=config.dist%>/',
                    src: '*.html',
                    dest: '<%=config.dist%>',
                    ext: '.html'
                }]
            }
        },
        //图片压缩
        imagemin: {//npm install grunt-contrib-imagemin --save-dev
            dist: {
                options: {
                    optimizationLevel: 7 //定义 PNG 图片优化水平
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%=config.dist%>/images/',
                        src: ['**/*.{png,jpg,jpeg}'], // 优化 img 目录下所有 png/jpg/jpeg 图片
                        dest: '<%=config.dist%>/images/' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
                    }
                ]
            }
        },
        //jshint 检查js语法错误
        jshint: {//npm install grunt-contrib-jshint --save-dev
            files: {
                src: ["<%=config.src%>/js/*.js","<%=config.dist%>/js/*.min.js"]
            },
            options:{
                //jshintrc:"rule.jshintrc",//定义检查规则
            }
        },
        //检查css语法
        csslint: {//npm install grunt-contrib-csslint --save-dev
            files: {
                src: ["<%=config.src%>/css/*.css","<%=config.dist%>/css/*.min.css"]
            }
        },
        //自动检查
        watch: {//npm install grunt-contrib-watch --save-dev
            js: {
                files: ['<%=config.src%>/js/*.js'],
                tasks: ['jshint'],
                options: {
                    interrupt: true,
                },
            },
            css: {
               files: ["<%=config.src%>/css/*.css"],
                //files:["<%=config.src%>/css/sass/contactUs.scss","<%=config.src%>/css/sass/common.scss"],
                tasks: ["csslint","autoprefixer"],
                options: {
                    interrupt: true,
                }
            },
            // bowerfile:{
            //     files:"bower.json",
            //     tasks:["wiredep"]
            // },
            sass:{
                files:"<%=config.src%>/css/sass/*.scss",
                //files:["<%=config.src%>/css/sass/contactUs.scss","<%=config.src%>/css/sass/common.scss"],
                tasks:["sass"]
            }
        },
        //grunt+bower组合
        // bower: {//npm install --save-dev main-bower-files
        //     dev: {
        //         base: 'bower_components', /* the path to the bower_components directory */
        //         dest: '<%=config.src%>/js/libs',
        //         options: {
        //             checkExistence: true,
        //             debugging: true,
        //             paths: {
        //                 bowerDirectory: 'bower_components',
        //                 bowerrc: '.bowerrc',
        //                 bowerJson: 'bower.json'
        //             }
        //         }
        //     }
        // },
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
                        cwd: '<%=config.src%>/css/',
                        src: ['*.css'],
                        dest: '<%=config.src%>/css/'
                    }
                ]
            }
        },
        //改变压缩之后的文件路径
        useminPrepare: {
               html: ['<%=config.dist%>/*.html']
           },
        usemin: {
              css:{
                  files:{
                      src:"<%=config.dist%>/css/*.css"
                  }
              },
              js:["<%=config.dist%>/js/**/*.js"],
              html:["<%=config.dist%>/*.html"],
              options:{
                 filePrefixer:function(url){
                   // console.log(url);
                 },
                 patterns:{

                 }
              }
        },
        //自动引入bower下载的插件
        // wiredep: {
        //     task: {
        //         src: [
        //             '<%=config.src%>/*.html'
        //         ],
        //         options: {
        //             //ignorePath: /^(\.\.\/)*\.\./
        //         }
        //     }
        // },
        //modernizr  自动检查浏览器是否支持h5  css3
        modernizr: {
            dist: {
                "dest" : "<%=config.src%>/js/libs/modernizr-custom.js",
                "parseFiles": true,
                "customTests": [],
                "devFile": "/PATH/TO/modernizr-dev.js",
                "outputFile": "/PATH/TO/modernizr-output.js",
                "tests": ["Modernizr.csstransforms3d"
                    // Tests
                ],
                "options": [
                    "setClasses"
                ],
                "uglify": true
            }
        },
        //自动编译sass npm install grunt-contrib-sass --save-dev
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%=config.src%>/',
                    src: ['css/sass/*.scss'],
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
        compass: {                  // Task
            dist: {
                options: {
                    config:"config.rb",
                    watch:true
                }
            }
        }
    });
   // grunt.loadNpmTasks('main-bower-files');
    grunt.loadNpmTasks('grunt-contrib-compass');
    //发布项目
    grunt.registerTask("build",[
        "autoprefixer",
        "copy:dist_build",//拷贝src
        "useminPrepare",
        "usemin",
        //压缩js css html image
        "uglify",
        "cssmin",
        "htmlmin",
        "imagemin",
        "clean:dist_dist"
    ]);//grunt build
    //初始化项目
    grunt.registerTask("default",[
        "compass",
        "watch"
    ]);//grunt
}