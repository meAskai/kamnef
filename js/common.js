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

	$(".podstavka_size").change(function(){
			
		});	


	//Счетчик товаров и цен для корзины
	$(".memorial_add").on("click", function(){
		up_count = parseInt($(".up_count").text());
		
		
		price = parseInt($(".price").text());

		//Если в корзине 1 и более товаров, то иконка с количеством товара загорается
		/*if (up_count > 0) {
			$(".up_count").show();
		} else {
			$(".up_count").hide();
		}*/

		$(".order_number").each(function(){

			stela_numberA = parseInt($("#stela_number").val());
			//проверяем, если никакой размер детали не выбран,
			//то колчество будет равно нулю
			var stela_size = $(".stela_size").val();
			if (stela_size != 0) {
				stela_number = stela_numberA;
			}else{
				stela_number = 0;
			}

			podstavka_numberA = parseInt($("#podstavka_number").val());
			var podstavka_size = $(".podstavka_size").val();
			if (podstavka_size != 0) {
				podstavka_number = podstavka_numberA;
			}else{
				podstavka_number = 0;
			}

			cvetnik_numberA = parseInt($("#cvetnik_number").val());
			var	cvetnik_size = $(".cvetnik_size").val();
			if (cvetnik_size != 0) {
				cvetnik_number = cvetnik_numberA;
			}else{
				cvetnik_number = 0;
			}

			priklad_numberA = parseInt($("#priklad_number").val());
			var priklad_size = $(".priklad_size").val();
			if (priklad_size != 0) {
				priklad_number = priklad_numberA;
			}else{
				priklad_number = 0;
			}

			count_number = stela_number+podstavka_number+cvetnik_number+priklad_number;
			
		});

		newprice = price + order_summ;
		newnumber = up_count + count_number;
		$(".count").text(newnumber);
		$(".price").text(newprice + " руб.");
		$("#memorial_order").trigger("reset");
		co = parseInt($(".count").text());
		if (co != 0) {
			$(".up_count").show();
		}else{
			$(".up_count").hide();
		}
	}); 



	// Плавающая шапка
  	$h = $(".header_topline").offset().top;
	$(window).scroll(function(){
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию
		if ( $(window).scrollTop() > $h) {
        	$(".header_topline").css({"position":"fixed"});
        }else{
            //Иначе возвращаем всё назад. Тут вы вносите свои данные
        	$(".header_topline").css({"position":"relative"});
        }
  	});
		
});