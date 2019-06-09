// jQuery function to toggle different sections opened and closed
// .menu is the class of the divs always shown
// #tab is the id of the divs to show when toggled

function main() {
		$(".menu").click(function() {
			$(this).children("#tab").toggle();
		});
	}
	
  $(document).ready(main);