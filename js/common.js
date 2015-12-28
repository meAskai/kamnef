$(document).ready(function() {

	$(".button_contacts").click(function(){
		$(".top_contacts").slideToggle();
	});

	$(".button_menu").click(function(){
		$(".menu_main").slideToggle();
	});

	$(".button_cart").click(function(){
		$(".show_price").slideToggle();
	});

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1, 
		slideSpeed : 300,
      	paginationSpeed : 400,
      	autoPlay: 3000,
		singleItem:true
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#callback").submit(function() {
		$.ajax({
			type: "GET",
			url: "../mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

	/*$(".podstavka_size").change(function(){
			$("#stela_number").val(23)
			$(".up_count").text(233);	
		});*/	
	

	//Счетчик товаров и цен для корзины
	$(".memorial_add").click(function(){

		up_count = parseInt($(".up_count").text());

		//Если в корзине 1 и более товаров, то иконка с количеством товара загорается
		/*if (up_count > 0) {
			$(".up_count").show();
		} else {
			$(".up_count").hide();
		}*/

		$(".order_number").each(function(){
			stela_number = parseInt($("#stela_number").val());
			podstavka_number = parseInt($("#podstavka_number").val());
			cvetnik_number = parseInt($("#cvetnik_number").val());
			priklad_number = parseInt($("#priklad_number").val());
			count_number = stela_number+podstavka_number+cvetnik_number+priklad_number;
			
		});
		newnumber = up_count + count_number;
		$(".count").text(newnumber);
		$("#memorial_order").trigger("reset");

	}); 

		
});