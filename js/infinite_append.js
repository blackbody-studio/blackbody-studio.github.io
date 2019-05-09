	var js_list = [];
	var group_idx = 0;
	var group_size = 3;
	{% for project in site.projects reversed %}
		var item = document.createElement("div");
		item.className = 'portfolio-item portfolio-item-20';

		var item_a = document.createElement("a");
		item_a.setAttribute("class", "portfolio-item__link");
		item_a.setAttribute("href", "{{ project.url }}");
		item.appendChild(item_a);

		var item_image = document.createElement("div");
		item_image.setAttribute("class", "portfolio-item__image");
		item_a.appendChild(item_image);

		var item_img = document.createElement("img");
		item_img.setAttribute("src", "{{ project.featured_image }}");
		item_img.setAttribute("alt", "{{ project.title }}");
		item_image.appendChild(item_img);

		var item_content = document.createElement("div");
		item_content.setAttribute("class", "portfolio-item__content");
		item_a.appendChild(item_content);

		var item_info = document.createElement("div");
		item_info.setAttribute("class", "portfolio-item__info");
		item_content.appendChild(item_info);

		var item_title = document.createElement("h2");
		item_title.setAttribute("class", "portfolio-item__title");
		item_title.innerHTML = "{{ project.title }}";
		item_info.appendChild(item_title);

		var item_subtitle = document.createElement("p");
		item_subtitle.setAttribute("class", "portfolio-item__subtitle");
		item_subtitle.innerHTML = "{{ project.subtitle }}";
		item_info.appendChild(item_subtitle);
		
		js_list.push(item);

	{% endfor %}

(function ($) {
	'use strict';

	var $grid = $('.portfolio-wrap').masonry({
		itemSelector: '.portfolio-item',
		columnWidth: '.grid-sizer-20',
		transitionDuration: 0
	});

	var $elems = $( js_list.slice(0,group_size));
	$grid.append( $elems ).masonry( 'appended', $elems );
	group_idx++;


	$('.append-button').on( 'click', function() {
	  var $elems = $( js_list.slice(group_idx*group_size, (group_idx+1)*group_size));
	  $grid.append( $elems ).masonry( 'appended', $elems );
	  group_idx++;
	});

	}(jQuery));