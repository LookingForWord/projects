/*************yangshao 2016-10-13 gruntfile.js****************/
"use strict";//ʹ���ϸ�ģʽ
module.exports=function(grunt){
    //ͨ��ģ��������grunt��ִ������
    require("load-grunt-tasks")(grunt);//npm install load-grunt-tasks --save-dev
    //����grunt����ִ��ʱ���ģ��
    require("time-grunt")(grunt);//npm install time-grunt --save-dev
    //������Ŀ·��
    var config={
        src:"app",
        dist:"dist",
        test:"test"
    };
    //��ʼ��grunt����������
    grunt.initConfig({
        pkg:grunt.file.readJSON("package.json"),
        //����config������
        config:config,
        //������������
        copy:{//npm install grunt-contrib-copy --save-dev
            dist_build:{//������Ŀʱ���� grunt copy:dist_build
                files:[
                    {
                        expand:true,//trueʱ��̬�Ĵ���dest���ļ�ӳ��
                        cwd:"<%=config.src%>/",//�����src��ѯ�ʻ�·��
                        src:"**/*",
                        dest:"<%=config.dist%>/"//Ŀ���ļ�
                    }
                ]
            }
        },
        //�������
        clean:{//npm install grunt-contrib-clean --save-dev
            //dist_init:{//��ʼ��ʱ���� grunt clean:dist_init
            //    src:["<%=config.src%>/**/*","<%=config.test%>/**/*"],
            //    filter:"isFile"
            //},
            dist_init:{//��ʼ��ʱ���� grunt clean:dist_init
                src:["<%=config.src%>/**/*","<%=config.test%>/**/*"],
                filter:function(pathname){
                    if(grunt.file.isFile(pathname)){
                        return (!pathname.match(/common/));
                    }
                }
            },
            dist_dist:{//ɾ��dist grunt clean:dist_dist
                src:["<%=config.dist%>/**/*"],
                filter:function(pathname){//false���� trueɾ��
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
        //�ϲ��ļ�npm install grunt-contrib-concat --save-dev
        concat:{
            options: {
                separator: ';'
            },
            dist_js: {//grunt concat:dist_js
                src: ["<%=config.src%>/js/*js"],
                dest: '<%=config.dist%>/js/concat.js'
            }
        },
        //ѹ��js
        uglify:{//npm install grunt-contrib-uglify --save-dev
            options:{
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */',//�����ļ�banner
                sourceMap:false//��������ѹ��ʱ��ӳ���ļ�  ���ļ����Ի�ԭ��ѹ��ǰ���ļ�
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
        //cssmin ѹ��css
        cssmin: {//npm install grunt-contrib-cssmin --save-dev
            dist: {
                files: [{//ѹ�����css�ļ�
                    expand: true,
                    cwd: '<%=config.dist%>/css/',
                    src: '*.css',
                    dest: '<%=config.dist%>/css/',
                    ext: '.css'
                }]
            }
        },
        //htmlcss ѹ��html
        htmlmin: {//npm install grunt-contrib-htmlmin --save-dev
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{//ѹ�����html�ļ�
                    expand: true,
                    cwd: '<%=config.dist%>/',
                    src: '*.html',
                    dest: '<%=config.dist%>',
                    ext: '.html'
                }]
            }
        },
        //ͼƬѹ��
        imagemin: {//npm install grunt-contrib-imagemin --save-dev
            dist: {
                options: {
                    optimizationLevel: 7 //���� PNG ͼƬ�Ż�ˮƽ
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%=config.dist%>/images/',
                        src: ['**/*.{png,jpg,jpeg}'], // �Ż� img Ŀ¼������ png/jpg/jpeg ͼƬ
                        dest: '<%=config.dist%>/images/' // �Ż����ͼƬ����λ�ã����Ǿ�ͼƬ�����Ҳ�����ʾ
                    }
                ]
            }
        },
        //jshint ���js�﷨����
        jshint: {//npm install grunt-contrib-jshint --save-dev
            files: {
                src: ["<%=config.src%>/js/*.js","<%=config.dist%>/js/*.min.js"]
            },
            options:{
                //jshintrc:"rule.jshintrc",//���������
            }
        },
        //���css�﷨
        csslint: {//npm install grunt-contrib-csslint --save-dev
            files: {
                src: ["<%=config.src%>/css/*.css","<%=config.dist%>/css/*.min.css"]
            }
        },
        //�Զ����
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
        //grunt+bower���
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
        //��������ǰ׺  ���������
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
        //�ı�ѹ��֮����ļ�·��
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
        //�Զ�����bower���صĲ��
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
        //modernizr  �Զ����������Ƿ�֧��h5  css3
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
        //�Զ�����sass npm install grunt-contrib-sass --save-dev
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
    //������Ŀ
    grunt.registerTask("build",[
        "autoprefixer",
        "copy:dist_build",//����src
        "useminPrepare",
        "usemin",
        //ѹ��js css html image
        "uglify",
        "cssmin",
        "htmlmin",
        "imagemin",
        "clean:dist_dist"
    ]);//grunt build
    //��ʼ����Ŀ
    grunt.registerTask("default",[
        "compass",
        "watch"
    ]);//grunt
}