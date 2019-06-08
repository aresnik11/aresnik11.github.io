// JavaScript Document

function main() {
		$(".menu").click(function() {
			$(this).children("#tab").toggle();
		});
	}
	
  $(document).ready(main);