$("./body"){
	add_class("_product")

	$("./div[@id='Container']/div[@id='Outer']"){
		$("./div[@id='Wrapper']"){
			$("./div[@class='Left']"){
				remove()
			}

			$("./div[@class='Content']") {
				$(".//div[@id='ProductBreadcrumb']"){
					remove()
				}
		        $("./div[@id='ProductDetails']") {
					$("./div[@class='BlockContent']") {
						$("div[contains(@class,'AddThisButtonBox')]"){
							remove()
						}

						$(".//div[@class='ProductMain']"){
							add_class("produtoDados")
							$(".//div[@class='productAttributeList']"){
								remove()
							}
						}

						# Move page title on top of the content area
						$("./h2") {
							move_to("../../../../div[@class='Left']", "top")
						}
						$("./div[@class='FloatRight SortBox']") {
							$("./form") {
						    	wrap_text_children("span")
							}
						}
					}
		    	}

		    	$(".//div[@id='ProductByCategory']"){
		    		remove()
		    	}
		    	$(".//div[@id='ProductReviews']"){
		    		$("./a[@class='FloatRight']"){
		    			remove()
		    		}

		    		$(".//ol[@class='ProductReviewList']"){
		    			$(".//hr"){
		    				remove()
		    			}
		    		}
		    	}
		    	$(".//div[@id='SimilarProductsByCustomerViews']"){
		    		remove()
		    	}
	      	}

	      	$("./div[@class='Right']"){
				remove()
			}
		}
	}
}