var Encore = require('@symfony/webpack-encore');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/assets')
    // the public path used by the web server to access the previous directory
    .setPublicPath('/assets')
    .enableSourceMaps(!Encore.isProduction())

    // uncomment to define the assets of the project
    .addEntry('js/app', './assets/js/app.js')
    .addEntry('js/countdownv2', './assets/js/countdownv2.js')
    .addEntry('js/countdown', './assets/js/countdown.js')
    .addEntry('js/inscription', './assets/js/inscription.js')

    .addStyleEntry('css/app', './assets/css/app.css')
    .addStyleEntry('css/countdown', './assets/css/countdown.css')
    .addStyleEntry('css/countdownv2', './assets/css/countdownv2.css')
    .addStyleEntry('css/inscription', './assets/css/inscription.css')

    .cleanupOutputBeforeBuild()
    // show OS notifications when builds finish/fail
    //.enableBuildNotifications()
    // uncomment if you use Sass/SCSS files
    // .enableSassLoader()
    // uncomment for legacy applications that require $/jQuery as a global variable
    .autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();
