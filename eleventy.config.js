module.exports = async function(eleventyConfig) {
    // Output directory: _site
    // Copy `img/` to `_site/img/`
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("models");

    // HtmlBasePlugin    
    const { HtmlBasePlugin } = await import("@11ty/eleventy");
    eleventyConfig.addPlugin(HtmlBasePlugin);

    
};


module.exports.config = {
    // Set path prefix
    pathPrefix: "/livetaste/",
};
