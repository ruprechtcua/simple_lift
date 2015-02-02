'use strict';
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        clean: {
            files: ['dist']
        },
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['components/requirejs/require.js', '<%= concat.dist.dest %>'],
                dest: 'dist/require.js'
            },
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/require.min.js'
            },
        },
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            app: {
                options: {
                    jshintrc: 'app/.jshintrc'
                },
                src: ['app/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            src: {
                files: '<%= jshint.app.src %>',
                tasks: ['jshint:src']
            }
        },
        requirejs: {
            compile: {
                options: {
                    name: 'config',
                    mainConfigFile: 'app/config.js',
                    out: '<%= concat.dist.dest %>',
                    optimize: 'none'
                }
            }
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    keepalive: true,
                    open: true,
                    middleware: function(connect, options) {
                        return [connect.static(options.base), proxySnippet];
                    }
                },
                proxies: [{
                    context: '/status',
                    host: 'localhost',
                    port: 8080
                }, {
                    context: '/',
                    host: 'localhost',
                    port: 8000
                }]
            }
        }

    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-connect-proxy');
    grunt.loadNpmTasks('grunt-contrib-connect');


    // Default task.
    grunt.registerTask('default', ['jshint', 'clean', 'requirejs', 'concat', 'uglify']);
    grunt.registerTask('preview', ['configureProxies:server', 'connect']);

};