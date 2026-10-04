import markdownIt from "markdown-it";

export default function (eleventyConfig) {
  // About 内容由 Markdown 单独维护，这个过滤器负责将其安全地渲染为 HTML。
  const markdownLibrary = markdownIt({
    html: false,
    linkify: true,
    typographer: true,
  });

  eleventyConfig.addFilter("markdown", (content = "") =>
    markdownLibrary.render(content.trim()),
  );

  // 静态资源原样复制，避免引入额外的 CSS/JS 打包依赖。
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
