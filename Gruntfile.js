/**
 * 京东活动打包系统
 * @param  {[type]} grunt [description]
 * @return {[type]}       [description]
 *
 */
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {

                src: ['src/js/jQuery.js','src/js/fastclick.js','src/js/jquery.bpopup.min.js','src/js/activities.js','src/js/control.js','src/js/url.js','src/js/openapp.js','src/js/app.js'],
                dest: 'dist/js/app.min.js'
            },
            css: {
                src: ['src/css/reset.css','src/css/common.css','src/css/index.css','src/css/activities.css'],
                dest:'dist/css/common.css'
            }
        },
        //拷贝不在define范围内的文件
        uglify: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'dist/js/',
                        src: 'app.min.js',
                        dest: 'dist/js/'
                    }
                ]
            }
        },
        /**
         * HTML CSS IMG拷走
         * @type {Object}
         */
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: "*.html",
                        dest: "dist/"
                    },
                    {
                        expand: true,
                        cwd: 'src/css/',
                        src: "Submitpricing.css",
                        dest: "dist/css/"
                    }
                ],
                options: {
                    process: function(content, srcpath) {
                        //var version = Date.parse(new Date());
                        //替换版本号
                        //content = content.replace(/@@version/g, version);
                        //替换文件引入
                        content = content.replace(/\<!--(.*)build:js(.*(\r\n|\n))+.*\<!--(.*)endbuild(.*)--\>/mg, '<script type="text/javascript" src="js/app.min.js"></script>');
                        content = content.replace(/\<!--(.*)build:css(.*(\r\n|\n))+.*\<!--(.*)endbuild(.*)--\>/mg, '<link rel="stylesheet" href="css/common.css">');
                        return content;
                    }
                }
            },
            img: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/img/',
                        src: "*",
                        dest: "dist/img/"

                    },
                    {
                        expand: true,
                        cwd: 'src/img/',
                        src: "**",
                        dest: "dist/img/"

                    }
                ]
            }
        }
    });
    grunt.registerTask('default', ['concat','uglify', 'copy']); //, 'replace'

};