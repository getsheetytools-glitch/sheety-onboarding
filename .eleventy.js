module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("**/*.js");
  eleventyConfig.addPassthroughCopy("**/*.png");
  eleventyConfig.addPassthroughCopy("**/*.svg");
  eleventyConfig.addPassthroughCopy("**/*.webmanifest");
  eleventyConfig.addPassthroughCopy("**/*.csv");
  eleventyConfig.addWatchTarget("css/");

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dir: {
      input:    ".",
      output:   "_site",
      includes: "_includes",
      layouts:  "_layouts",
      data:     "_data",
    },
    pathPrefix: "/",
  };
};
