const yaml = require("js-yaml");

module.exports = eleventyConfig => {

	eleventyConfig.addPassthroughCopy("assets/");

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
};