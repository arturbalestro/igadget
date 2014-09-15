$("./body") {
  insert("footer", "Powered by Moovweb", class: "mw-footer") {
    # Move stuff here
  }

  $("./footer[@class='mw-footer']"){
  	move_to("../div[@id='Footer']","bottom")
  }

  $("./div[@id='Footer']"){
  	$("./p"){
  		inner(){
  			replace("All prices are in","<span class='allprices'>All prices are in</span>")
  		}
  	}

  	$(".//span[@class='allprices']"){
  		move_here("../span[@title='Default Currency']")
  	  insert("br")
    }

    $text = fetch(".//span[@class='allprices']/text()")
    log($text)

    $("./p"){
      inner("")
      text(){
        set($text+" USD")
      }
      insert("br")
      insert_at("bottom","span","Copyright 2014 iGadgetCommerce")
    }

  	$(".//a"){
  		remove()
  	}
  }
}