import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import metas from "lume/plugins/metas.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume();

site.use(favicon())
  .use(metas())
  .use(lightningcss())
  .use(svgo())
  .data("cache", Date.now())
  .copy("js")
  .copy([".png", ".jpg"])
  .copy("deck")
  .copy("fonts")
  .remoteFile(
    "_includes/styles/normalize.css",
    "https://unpkg.com/ui-normalize@0.3.0/ui-normalize.css",
  )
  .remoteFile(
    "js/deps/carousel.js",
    "https://unpkg.com/@oom/carousel@4.2.0/src/carousel.js",
  )
  .remoteFile(
    "js/deps/navigation.js",
    "https://unpkg.com/@oom/carousel@4.2.0/src/navigation.js",
  );

export default site;
