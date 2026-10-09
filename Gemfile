source "https://rubygems.org"

# 使用当前 Jekyll 4 系列；不沿用上游模板 2023 年的旧 github-pages 锁文件。
gem "jekyll", "~> 4.4.1"
gem "jekyll-redirect-from", "~> 0.16"
gem "jekyll-sitemap", "~> 1.4"
gem "webrick", "~> 1.9"

# Windows 不自带 IANA 时区数据库，显式添加以保证本地构建一致。
platforms :mingw, :x64_mingw, :mswin do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
