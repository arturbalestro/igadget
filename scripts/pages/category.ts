$("./body"){
	add_class("_category")

	$("./div[@id='Container']/div[@id='Outer']"){
		$("./div[@id='Wrapper']"){
			$("./div[@class='Left']"){
				$("./div[@id='SideCategoryShopByPrice' or @id='SideShopByBrand']"){
					attribute("data-ur-set","toggler")

					$("./h2"){
						add_class("menuCategoria")
						attribute("data-ur-toggler-component", "button")
						insert("div", class: "mw_indicator")
					}

					$("./div"){
						attribute("data-ur-toggler-component","content")
						$(".//li"){
							add_class("categoriaItem")

							$("./a"){
								insert("div", class: "mw_arrow")
								add_class("categoriaLink")
							}	
						}
					}
				}

				$(".//div[contains(@class,'NewsletterSubscription')]"){
					remove()
				}
			}

			$("./div[@class='Content ']") {
				$("./div[@id='CategoryBreadcrumb']"){
					remove()
				}				

		        $("./div[@id='CategoryHeading']") {
					$("./div[@class='BlockContent']") {
						# Move page title on top of the content area
						$("./h2") {
							move_to("../../../../div[@class='Left']", "top")
						}
						$("./div[@class='FloatRight SortBox']") {
							$("./form") {
						    	wrap_text_children("span")
							}
						}

						$("./div[@class='SubCategoryList']"){
							remove()
						}
					}
		    	}

		    	$("./div[@id='CategoryContent']"){
		    		$(".//div[@class='ProductCompareButton']"){
		    			remove()
		    		}

		    		$(".//div[@class='CompareButton']"){
		    			remove()
		    		}
				}
	      	}

	      	$("./div[@class='Right']"){
	      		remove()
	      	}
		}
	}
}