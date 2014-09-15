$("./body"){
	$("./div[@id='Container']/div[@id='Outer']/div[@id='Wrapper']"){
		attribute("data-ur-set","toggler")
		add_class("ajustewrap")

		$(".//div[@id='SideNewsletterBox']"){
			remove()
		}

		$(".//div[@class='Left']"){
			remove()
			/*$(".//h2"){
				add_class("menuCategoria")
				attribute("data-ur-toggler-component", "button")
				insert("div", class: "mw_indicator")
			}

			$(".//div[@class='BlockContent']"){
				attribute("data-ur-toggler-component","content")
				$(".//li/a"){
					insert("div", class: "mw_arrow")
				}
			}*/
		}

		$("./div[@class='Content']"){



			$(".//div[contains(@class,'Panel')]"){
				$(".//h2"){
					add_class("produtoTitulo")

					$(".//span[contains(@class,'FeedLink')]"){
						remove()
					}
				}
			}

			$(".//div[@class='BlockContent']"){
				attribute("data-ur-set","carousel")
				attribute("data-ur-carousel-component","view_container")
				attribute("data-ur-fill","1")
				attribute("data-ur-infinite","enabled")
				insert_at("top","div",data-ur-carousel-button-type:"next","")
				insert_at("top","div",data-ur-carousel-component:"dots")
				insert_at("top","div",data-ur-carousel-button-type:"prev","")
				

				$(".//div[@data-ur-carousel-button-type='prev']"){
					attribute("data-ur-carousel-component","button")
					add_class("sprites-btn_back")
					add_class("pointer")
				}

				$(".//div[@data-ur-carousel-button-type='next']"){
					attribute("data-ur-carousel-component","button")
					add_class("sprites-menu_go")
					add_class("pointer")	
				}

				$(".//ul[@class='ProductList']"){
					attribute("data-ur-carousel-component","scroll_container")

					$(".//li"){
						add_class("produtoItem")
						attribute("data-ur-carousel-component","item")

						$(".//div[contains(@class,'ProductImage')]"){
							$(".//div[contains(@class,'QuickViewBtn')]"){
								remove()
							}
						}
					}

					//wrap("div",class: "produtoCar")
				}

				$("./div[@class='produtoCar']"){

				}
			}
		}

		$("./div[@class='Right']"){
			remove()
		}
	}
}