# frozen_string_literal: true

# 该脚本仅使用 Ruby 标准库验证最终发布目录，避免为了测试再引入额外依赖。
# 它检查公开内容、隐私排除项、页面结构、分析脚本与关键 SEO 文件。

require "pathname"

root = Pathname.new(__dir__).parent
output = root.join("_site")
index_path = output.join("index.html")

abort("Validation failed: _site/index.html does not exist") unless index_path.file?

html = index_path.read(encoding: "UTF-8")

assertions = [
  [html.include?('<html lang="en"'), "Document language is English"],
  [html.include?('id="about-me"'), "About Me section exists"],
  [html.include?('id="educations"'), "Educations section exists"],
  [html.include?('id="experiences"'), "Experiences section exists"],
  [html.include?('id="publications"'), "Publications section exists"],
  [html.include?('id="projects"'), "Projects section exists"],
  [html.include?('id="honors-and-awards"'), "Honors and Awards section exists"],
  [html.scan('class="project-card"').length == 4, "Exactly four pinned projects are rendered"],
  [html.scan('class="publication-card"').length == 5,
   "Four journal or manuscript entries and one abstract are rendered"],
  [html.include?("Under review"), "Manuscript review status is explicit"],
  [html.include?("Published / Short Oral presentation"),
   "Published short oral status is explicit"],
  [html.include?("https://virtualcongress.easd.org/pag/presentation/269472"),
   "Official EASD presentation link is present"],
  [!html.include?("Systemic Reserve, Not Muscle Mass"),
   "Removed conference abstract is absent"],
  [html.include?("The above data is current as of October 2026."),
   "Publication status date is current"],
  [html.include?("Selected awards only"), "Honors are explicitly selective"],
  [html.include?("0009-0000-4677-8713"), "ORCID is present"],
  [html.include?("application/ld+json"), "Person structured data exists"],
  [html.include?('rel="canonical"'), "Canonical URL exists"],
  [html.include?('/assets/images/avatar.jpg'), "Local avatar is preferred"],
  [html.include?('data-avatar-fallback="https://github.com/GuLifan.png?size=480"'),
   "GitHub avatar fallback is configured"],
  [html.include?('onerror="this.onerror=null;this.src=this.dataset.avatarFallback"'),
   "Runtime avatar fallback is enabled"],
  [html.include?('data-goatcounter="https://gulifan.goatcounter.com/count"'), "GoatCounter endpoint is correct"],
  [!html.downcase.include?("googletagmanager"), "Google Analytics is absent"],
  [!html.downcase.include?("google scholar"), "Google Scholar UI is disabled"],
  [!html.downcase.include?(".pdf"), "No PDF is linked or referenced"],
  [!html.include?("IELTS"), "Excluded IELTS content is absent"],
  [!html.include?("Luo Minmin"), "PI names are absent"]
]

section_ids = %w[about-me educations experiences publications projects honors-and-awards]
section_positions = section_ids.map { |id| html.index(%(id="#{id}")) }
assertions << [section_positions.none?(&:nil?) && section_positions == section_positions.sort,
               "Sections use the approved order"]

assertions.each do |passed, label|
  abort("Validation failed: #{label}") unless passed

  puts "✓ #{label}"
end

required_files = %w[
  404.html
  robots.txt
  sitemap.xml
  assets/css/main.css
  assets/js/main.js
  assets/images/avatar.jpg
]
required_files.each do |relative_path|
  abort("Validation failed: missing #{relative_path}") unless output.join(relative_path).file?

  puts "✓ #{relative_path} exists"
end

# 递归检查发布目录，防止原始简历或其他 PDF 被意外复制到公开站点。
pdf_files = output.glob("**/*").select { |path| path.file? && path.extname.casecmp(".pdf").zero? }
abort("Validation failed: PDF found in output: #{pdf_files.join(', ')}") unless pdf_files.empty?

puts "✓ No PDF files exist in the publish directory"
puts "\nAll Jekyll site validation checks passed."
