const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = async function(eleventyConfig) {
    // Output directory: _site
    // Copy `img/` to `_site/img/`
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("models");
    eleventyConfig.addPassthroughCopy("img");

    // HtmlBasePlugin    
    const { HtmlBasePlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(HtmlBasePlugin);

    // EleventyNavigation plugin
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
};


module.exports.config = {
    // Set path prefix
    pathPrefix: "/livetaste/",
};
