# HTML Transformations go here

$("/html") {
  add_canonical_tag()
  rewrite_links()
  remove_html_comments()
  absolutize()
  rewrite_aspnet_scripts()
  clean_mobile_meta_tags()
  remove_all_styles()

  add_assets()


  @import "sections/header.ts"
  @import "sections/footer.ts"

  @import "mappings.ts"

}
