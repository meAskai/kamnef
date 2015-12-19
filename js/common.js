$(document).ready(function() {

	$(".button_contacts").click(function(){
		$(".top_contacts").slideToggle();
	});

	$(".button_menu").click(function(){
		$(".menu_main").slideToggle();
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

/*СТЕЛА - НАЧАЛО*/	
	
			
	/*Когда меняется selected в списке стел*/
	$(".stela_size").change(function(){
		var stela_size = $(".stela_size").val();
		var stela_cost;
		
		/*При изменении количество считается цена*/
		$("#stela_number").click(function(){			
			var number = $("#stela_number").val();

			/*Подсчет суммы за стелы*/
			var stela = stela_cost * number;
			$("#stela_sum").val(stela);
			
		});

			/*В зависимости от выбранного селекта в другие критерии выставляется определенные размеры*/		
			switch (stela_size) {
				case "600*400*50":
					$(".podstavka_size option[value='500*120*120']").prop("selected", true);
					$(".cvetnik_size option[value='600*50*80']").prop("selected", true);
					$(".priklad_size option[value='500*50*80']").prop("selected", true);
					
					/*Как только меняем размер, сразу считываем выставленную степень полировки*/
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 1370;
					} else if (pre == "2") {
						stela_cost = 1665;
					} else if (pre == "5") {
						stela_cost = 2060;
					};

					/*Отслеживаем, меняет ли пользователь степень полировки уже после
					выставления размера*/	
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 1370;
						} else if (pol == "2") {
							stela_cost = 1665;
						} else if (pol == "5" ) {
							stela_cost = 2060;
						};
					});
					break;	
				

				case "600*400*60":
					$(".podstavka_size option[value='500*150*120']").prop("selected", true);
					$(".cvetnik_size option[value='600*50*80']").prop("selected", true);
					$(".priklad_size option[value='500*50*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 1440;
					} else if (pre == "2") {
						stela_cost = 1735;
					} else if (pre == "5") {
						stela_cost = 2160;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 1440;
						} else if (pol == "2") {
							stela_cost = 1735;
						} else if (pol == "5" ) {
							stela_cost = 2160;
						};
					});
					break;

				case "800*400*60":
					$(".podstavka_size option[value='500*150*150']").prop("selected", true);
					$(".cvetnik_size option[value='800*60*80']").prop("selected", true);
					$(".priklad_size option[value='500*60*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 1900;
					} else if (pre == "2") {
						stela_cost = 2130;
					} else if (pre == "5") {
						stela_cost = 2850;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 1900;
						} else if (pol == "2") {
							stela_cost = 2130;
						} else if (pol == "5" ) {
							stela_cost = 2850;
						};
					});
					break;

				case "800*400*80":
					$(".podstavka_size option[value='500*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='800*60*80']").prop("selected", true);
					$(".priklad_size option[value='500*60*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 2040;
					} else if (pre == "2") {
						stela_cost = 2435;
					} else if (pre == "5") {
						stela_cost = 3065;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 2040;
						} else if (pol == "2") {
							stela_cost = 2435;
						} else if (pol == "5" ) {
							stela_cost = 3065;
						};
					});
					break;

				case "900*400*60":
					$(".podstavka_size option[value='500*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='900*60*80']").prop("selected", true);
					$(".priklad_size option[value='600*60*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 2140;
					} else if (pre == "2") {
						stela_cost = 2585;
					} else if (pre == "5") {
						stela_cost = 3215;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 2140;
						} else if (pol == "2") {
							stela_cost = 2585;
						} else if (pol == "5" ) {
							stela_cost = 3215;
						};
					});
					break;

				case "900*450*60":
					$(".podstavka_size option[value='550*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='900*80*80']").prop("selected", true);
					$(".priklad_size option[value='600*80*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 2405;
					} else if (pre == "2") {
						stela_cost = 2900;
					} else if (pre == "5") {
						stela_cost = 3615;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 2405;
						} else if (pol == "2") {
							stela_cost = 2900;
						} else if (pol == "5" ) {
							stela_cost = 3615;
						};
					});
					break;

				case "900*450*80":
					$(".podstavka_size option[value='600*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='900*80*80']").prop("selected", true);
					$(".priklad_size option[value='600*80*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 2580;
					} else if (pre == "2") {
						stela_cost = 3075;
					} else if (pre == "5") {
						stela_cost = 3865;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 2580;
						} else if (pol == "2") {
							stela_cost = 3075;
						} else if (pol == "5" ) {
							stela_cost = 3865;
						};
					});
					break;

				case "1000*450*80":
					$(".podstavka_size option[value='600*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='1000*80*80']").prop("selected", true);
					$(".priklad_size option[value='600*80*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 2860;
					} else if (pre == "2") {
						stela_cost = 3410;
					} else if (pre == "5") {
						stela_cost = 4295;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 2860;
						} else if (pol == "2") {
							stela_cost = 3410;
						} else if (pol == "5" ) {
							stela_cost = 4295;
						};
					});
					break;

				case "1000*500*80":
					$(".podstavka_size option[value='600*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='1000*80*80']").prop("selected", true);
					$(".priklad_size option[value='600*80*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 3185;
					} else if (pre == "2") {
						stela_cost = 3795;
					} else if (pre == "5") {
						stela_cost = 4780;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 3185;
						} else if (pol == "2") {
							stela_cost = 3795;
						} else if (pol == "5" ) {
							stela_cost = 4780;
						};
					});
					break;

				case "1100*500*80":
					$(".podstavka_size option[value='600*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='1100*80*80']").prop("selected", true);
					$(".priklad_size option[value='600*80*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 3675;
					} else if (pre == "2") {
						stela_cost = 4345;
					} else if (pre == "5") {
						stela_cost = 5510;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 3675;
						} else if (pol == "2") {
							stela_cost = 4345;
						} else if (pol == "5" ) {
							stela_cost = 5510;
						};
					});
					break;

				case "1100*600*80":
					$(".podstavka_size option[value='700*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='1100*80*80']").prop("selected", true);
					$(".priklad_size option[value='700*80*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 4400;
					} else if (pre == "2") {
						stela_cost = 5215;
					} else if (pre == "5") {
						stela_cost = 6610;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 4400;
						} else if (pol == "2") {
							stela_cost = 5215;
						} else if (pol == "5" ) {
							stela_cost = 6610;
						};
					});
					break;

				case "1200*600*80":
					$(".podstavka_size option[value='700*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='1200*80*80']").prop("selected", true);
					$(".priklad_size option[value='700*80*80']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 4810;
					} else if (pre == "2") {
						stela_cost = 5695;
					} else if (pre == "5") {
						stela_cost = 7215;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 4810;
						} else if (pol == "2") {
							stela_cost = 5695;
						} else if (pol == "5" ) {
							stela_cost = 7215;
						};
					});
					break;

				case "1200*700*100":
					$(".podstavka_size option[value='800*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='1200*80*100']").prop("selected", true);
					$(".priklad_size option[value='800*80*100']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 6150;
					} else if (pre == "2") {
						stela_cost = 7165;
					} else if (pre == "5") {
						stela_cost = 9225;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 6150;
						} else if (pol == "2") {
							stela_cost = 7165;
						} else if (pol == "5" ) {
							stela_cost = 9225;
						};
					});
					break;

				case "1300*600*80":
					$(".podstavka_size option[value='700*200*150']").prop("selected", true);
					$(".cvetnik_size option[value='1300*80*100']").prop("selected", true);
					$(".priklad_size option[value='700*80*100']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 5210;
					} else if (pre == "2") {
						stela_cost = 6385;
					} else if (pre == "5") {
						stela_cost = 7815;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 5210;
						} else if (pol == "2") {
							stela_cost = 6385;
						} else if (pol == "5" ) {
							stela_cost = 7815;
						};
					});
					break;

				case "1300*700*100":
					$(".podstavka_size option[value='800*200*200']").prop("selected", true);
					$(".cvetnik_size option[value='1300*80*100']").prop("selected", true);
					$(".priklad_size option[value='700*80*100']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 6660;
					} else if (pre == "2") {
						stela_cost = 7775;
					} else if (pre == "5") {
						stela_cost = 9985;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 6660;
						} else if (pol == "2") {
							stela_cost = 7775;
						} else if (pol == "5" ) {
							stela_cost = 9985;
						};
					});
					break;

				case "1400*700*120":
					$(".podstavka_size option[value='800*200*200']").prop("selected", true);
					$(".cvetnik_size option[value='1400*100*100']").prop("selected", true);
					$(".priklad_size option[value='800*100*100']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 7570;
					} else if (pre == "2") {
						stela_cost = 8600;
					} else if (pre == "5") {
						stela_cost = 11355;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 7570;
						} else if (pol == "2") {
							stela_cost = 8600;
						} else if (pol == "5" ) {
							stela_cost = 11355;
						};
					});
					break;

				case "1500*750*120":
					$(".podstavka_size option[value='900*250*200']").prop("selected", true);
					$(".cvetnik_size option[value='1500*100*100']").prop("selected", true);
					$(".priklad_size option[value='900*100*100']").prop("selected", true);
					var pre = $(".polirovka").val();
					if (pre == "1") {
						stela_cost = 12310;
					} else if (pre == "2") {
						stela_cost = 13590;
					} else if (pre == "5") {
						stela_cost = 18475;
					};
					$(".polirovka").change(function(){
						var pol = $(".polirovka").val();
						if (pol == "1") {
							stela_cost = 12310;
						} else if (pol == "2") {
							stela_cost = 13590;
						} else if (pol == "5" ) {
							stela_cost = 18475;
						};
					});
					break;
			}
		$(".polirovka").change(function(){
			$(".memorial_number").prop("value", "0");
			$("#stela_sum").prop("value", "0");
		});	


	});
/*СТЕЛА - ОКОНЧАНИЕ*/

/*ПОДСТАВКА - НАЧАЛО*/
	$(".podstavka_size").change(function(){
		var podstavka_size = $(".podstavka_size").val();
		var podstavka_cost;

		/*При изменении количество считается цена*/
		$("#podstavka_number").click(function(){			
			var numberd = $("#podstavka_number").val();
			/*Подсчет суммы за подставки*/
			var podstavka = podstavka_cost * numberd;
			$("#sum").val(podstavka);

		});

		switch (podstavka_size) {
			case "500*120*120":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 510;
					} else if (ppods == "2") {
						podstavka_cost = 600;
					} else if (ppods == "5") {
						podstavka_cost = 760;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 510;
						} else if (pods == "2") {
							podstavka_cost = 600;
						} else if (pods == "5" ) {
							podstavka_cost = 760;
						};
					});
					break;

			case "500*150*120":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 630;
					} else if (ppods == "2") {
						podstavka_cost = 750;
					} else if (ppods == "5") {
						podstavka_cost = 945;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 630;
						} else if (pods == "2") {
							podstavka_cost = 750;
						} else if (pods == "5" ) {
							podstavka_cost = 945;
						};
					});
					break;

			case "500*150*150":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 730;
					} else if (ppods == "2") {
						podstavka_cost = 850;
					} else if (ppods == "5") {
						podstavka_cost = 1095;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 730;
						} else if (pods == "2") {
							podstavka_cost = 850;
						} else if (pods == "5" ) {
							podstavka_cost = 1095;
						};
					});
					break;					

			case "500*200*150":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 960;
					} else if (ppods == "2") {
						podstavka_cost = 1115;
					} else if (ppods == "5") {
						podstavka_cost = 1450;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 960;
						} else if (pods == "2") {
							podstavka_cost = 1115;
						} else if (pods == "5" ) {
							podstavka_cost = 1450;
						};
					});
				break;	

			case "550*200*150":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 1065;
					} else if (ppods == "2") {
						podstavka_cost = 1240;
					} else if (ppods == "5") {
						podstavka_cost = 1605;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 1065;
						} else if (pods == "2") {
							podstavka_cost = 1240;
						} else if (pods == "5" ) {
							podstavka_cost = 1605;
						};
					});
				break;	

			case "600*200*150":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 1160;
					} else if (ppods == "2") {
						podstavka_cost = 1340;
					} else if (ppods == "5") {
						podstavka_cost = 1735;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 1160;
						} else if (pods == "2") {
							podstavka_cost = 1340;
						} else if (pods == "5" ) {
							podstavka_cost = 1735;
						};
					});
				break;

			case "700*200*150":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 1360;
					} else if (ppods == "2") {
						podstavka_cost = 1575;
					} else if (ppods == "5") {
						podstavka_cost = 2040;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 1360;
						} else if (pods == "2") {
							podstavka_cost = 1575;
						} else if (pods == "5" ) {
							podstavka_cost = 2040;
						};
					});
				break;

			case "800*200*150":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 1540;
					} else if (ppods == "2") {
						podstavka_cost = 1785;
					} else if (ppods == "5") {
						podstavka_cost = 2315;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 1540;
						} else if (pods == "2") {
							podstavka_cost = 1785;
						} else if (pods == "5" ) {
							podstavka_cost = 2315;
						};
					});
				break;

			case "800*200*200":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 1880;
					} else if (ppods == "2") {
						podstavka_cost = 2120;
					} else if (ppods == "5") {
						podstavka_cost = 2820;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 1880;
						} else if (pods == "2") {
							podstavka_cost = 2120;
						} else if (pods == "5" ) {
							podstavka_cost = 2820;
						};
					});
				break;

			case "900*250*200":
				var ppods = $(".polirovka").val();
					if (ppods == "1") {
						podstavka_cost = 3300;
					} else if (ppods == "2") {
						podstavka_cost = 3685;
					} else if (ppods == "5") {
						podstavka_cost = 4955;
					};
					$(".polirovka").change(function(){
						var pods = $(".polirovka").val();
						if (pods == "1") {
							podstavka_cost = 3300;
						} else if (pods == "2") {
							podstavka_cost = 3685;
						} else if (pods == "5" ) {
							podstavka_cost = 4955;
						};
					});
				break;								
		}

	});

		
});