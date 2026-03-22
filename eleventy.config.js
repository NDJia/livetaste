module.exports = async function(eleventyConfig) {
    // Output directory: _site
    // Copy `img/` to `_site/img/`
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("models");
    
    // Copy `css/fonts/` to `_site/css/fonts/`
    // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("css/fonts");
    // Copy any .jpg file to `_site`, via Glob pattern
    // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("**/*.jpg");	// Configure Eleventy

};
