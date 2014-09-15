$(".//div[@id='Container']"){
	$("./div[@id='AjaxLoading']"){
		remove()
	}
}

$(".//div[@id='Header']"){
	attribute("data-ur-set", "toggler")

	$("./div[@id='Logo']"){
		move_here("../../../div[@id='TopMenu']","bottom"){
			remove(".//li[not(contains(@class,'CartLink') or contains(@class, 'First'))]")
		}

		$("./div[@id='TopMenu']"){
			$(".//li[contains(@class,'First')]"){
				$("./a"){
					inner("")
				}
				add_class('sprites-user')
			}
			$(".//li[contains(@class,'CartLink')]"){
				$("./a"){
					inner("")
				}
				add_class('sprites-cart')
			}
		}
	}

	insert("div", class: "mw_header_bottom") {
	  insert("div", class: "mw_search")
	  insert("div", class: "mw_menu_btn sprites-menu", data-ur-toggler-component: "button")
	}

	# Fill search HTML
	$("..//div[@class='mw_search']") {
	  # Move search form into container element
	  move_here("//div[@id='SearchForm']", "bottom") {
	    remove("./p")

	    $("./form") {

	      remove("./label")
	      # Change search button background image
	      $("./input[@type='image']") {
	        wrap("div", class: "mw_search_btn sprites-search")
	      }
	      $("./input[@type='text']") {
	        attribute("placeholder", "Search...")
	      }
	    }
	  }
	}

	move_here("../div[@id='Menu']", "bottom") {
	  attribute("data-ur-toggler-component", "content")
	  # Move "Category List" element on bottom of #Menu element
	  move_here("../../div[@id='Wrapper']/div[@class='Left']/div[@id='SideCategoryList']", "bottom")

	  $("./ul"){
	  	add_class("menuLista")
	  }

	  $(".//div[@id='SideCategoryList']"){
	  	$(".//h2"){
	  		add_class("menuCategoria")
	  	}
	  }

	  $$("li") {
	    add_class("mw_bar2")
	  }
	}
}

$("//div[@id='SearchForm']/form//input[@type='image']") {
  wrap("div", class: "mw_search_btn sprites-search")
  attribute("style", "opacity:0;")
}
