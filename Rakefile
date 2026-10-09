require "jekyll"
require "rake"

desc "Build the production site"
task :build do
  sh "bundle exec jekyll build --trace"
end

desc "Build and validate the production site"
task test: :build do
  ruby "scripts/validate.rb"
end

task default: :test
