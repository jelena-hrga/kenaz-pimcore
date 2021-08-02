let mix = require("laravel-mix");
require("laravel-mix-purgecss");

mix.setPublicPath("./web");

mix.sass("web/static/styles/main.sass", "static/assets/css/style.css");
mix.js("web/static/js/main.js", "static/assets/js/app.js");

mix.version();

// browsersync watch for files included below and proxy setup
mix.browserSync({
  files: ["resources/"],
  injectChanges: true,
  proxy: "http://127.0.0.1:8080",
  port: 3000,
});
