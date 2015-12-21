$(document).ready(function(){
	/*При клике на энтер страница не уходит в перегруз, но включается
	функция "клик" для подсчета цен*/
	$("input[type='number']").keypress(function(e) {
          if (e.which == 13) {
              $(this).click();
              return false;
          }
     });
	$("#memorial_order").keypress(function(e) {
          if (e.which == 13) {
              $(this).click();
              return false;
          }
     });
	/*Если позицию полировки меняют, то другие позиции сбрасываются до нуля*/
	$(".polirovka").change(function(){
				$("#stela_number").prop("value", "0");
				$("#stela_sum").prop("value", "0");
				$("#sum").prop("value", "0");
				$("#podstavka_number").prop("value", "0");	
			});	

	/*СТЕЛА - НАЧАЛО*/		
				
		/*Когда меняется selected в списке стел*/
		$(".stela_size").change(function(){
			var stela_size = $(".stela_size").val();
			var stela_cost;

			/*Если размер стелы меняется, то все остальные настройки сбрасываются.
			Это чтобы предотвратить неверные итоговые суммы*/
			$("#stela_number").prop("value", "0");
			$("#stela_sum").prop("value", "0");
			$("#sum").prop("value", "0");
			$("#podstavka_number").prop("value", "0");
			$("#cvetnik_number").prop("value", "0");
			$("#cvetnik_sum").prop("value", "0");
			$("#priklad_sum").prop("value", "0");
			$("#priklad_number").prop("value", "0");

			/*При изменении количество считается цена*/
			$("#stela_number").click(function(){			
				var number = $("#stela_number").val();

				/*Подсчет суммы за стелы*/
				var stela = stela_cost * number;
				$("#stela_sum").val(stela);
				
			});

				/*В зависимости от выбранного селекта в другие критерии выставляется определенные размеры*/		
				switch (stela_size) {
					case "0":
											
						/*Как только меняем размер, сразу считываем выставленную степень полировки*/
						var pre = $(".polirovka").val();
						if (pre == "1") {
							stela_cost = 0;
						} else if (pre == "2") {
							stela_cost = 0;
						} else if (pre == "5") {
							stela_cost = 0;
						};

						/*Отслеживаем, меняет ли пользователь степень полировки уже после
						выставления размера*/	
						$(".polirovka").change(function(){
							var pol = $(".polirovka").val();
							if (pol == "1") {
								stela_cost = 0;
							} else if (pol == "2") {
								stela_cost = 0;
							} else if (pol == "5" ) {
								stela_cost = 0;
							};
						});
						break;
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

		});
	/*СТЕЛА - ОКОНЧАНИЕ*/

	/*ПОДСТАВКА - НАЧАЛО*/
		/*При изменении количества подставок считается цена*/
		$("#podstavka_number").click(function(){			
			var numberd = $("#podstavka_number").val();
			var podstavka_size = $(".podstavka_size").val();

			switch (podstavka_size) {

				case "0":
					var ppods = $(".polirovka").val();
						if (ppods == "1") {
							podstavka_cost = 0;
						} else if (ppods == "2") {
							podstavka_cost = 0;
						} else if (ppods == "5") {
							podstavka_cost = 0;
						};
						$(".polirovka").change(function(){
							var pods = $(".polirovka").val();
							if (pods == "1") {
								podstavka_cost = 0;
							} else if (pods == "2") {
								podstavka_cost = 0;
							} else if (pods == "5" ) {
								podstavka_cost = 0;
							};
						});
						break;
							
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
				/*Подсчет суммы за подставки*/
				var podstavka = podstavka_cost * numberd;
				$("#sum").val(podstavka);

		});

		$(".podstavka_size").change(function(){
			/*Если размер подставки изменен, то сумма и количество по позиции подставка 
			сбрасываются до 0*/
			$("#sum").prop("value", "0");
			$("#podstavka_number").prop("value", "0");		
		});	
	/*ПОДСТАВКА - ОКОНЧАНИЕ*/
		

	/*ЦВЕТНИК - НАЧАЛО*/

		/*Если менять полировку для цветника - меняется описание тега span*/
		$(".polirovka_cvet").change(function(){
			$("#cvetnik_number").prop("value", "0");
			$("#cvetnik_sum").prop("value", "0");
			$("#priklad_number").prop("value", "0");
			$("#priklad_sum").prop("value", "0");

			var pdescr = $(".polirovka_cvet").val();
			switch (pdescr) {
				case "once": $("#polir_descr").text(" *полируется только верхняя видимая сторона"); break;
				case "all": $("#polir_descr").text(" *полируются все видимые стороны"); break;
			}		
		});

		$(".cvetnik_size").change(function(){
			$("#cvetnik_number").prop("value", "0");
			$("#cvetnik_sum").prop("value", "0");
		});

		/*При изменении количества цветников считается цена*/
			$("#cvetnik_number").click(function(){			
				var numberс = $("#cvetnik_number").val();
				var cvetnik_size = $(".cvetnik_size").val();

				switch (cvetnik_size) {

					case "0":
						var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 0;
							} else if (pocv == "all") {
								cvetnik_cost = 0;
							};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 0;
							} else if (pocv == "all") {
								cvetnik_cost = 0;
							}; 
						});
						break;

					case "600*50*80":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 261;
						} else if (pocv == "all") {
							cvetnik_cost = 328;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 261;
							} else if (pocv == "all") {
								cvetnik_cost = 328;
							}; 
						});
						break;

					case "800*60*80":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 388;
						} else if (pocv == "all") {
							cvetnik_cost = 478;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 388;
							} else if (pocv == "all") {
								cvetnik_cost = 478;
							}; 
						});
						break;	

					case "900*60*80":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 437;
						} else if (pocv == "all") {
							cvetnik_cost = 538;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 437;
							} else if (pocv == "all") {
								cvetnik_cost = 538;
							}; 
						});
						break;	

					case "900*80*80":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 321;
						} else if (pocv == "all") {
							cvetnik_cost = 422;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 321;
							} else if (pocv == "all") {
								cvetnik_cost = 422;
							}; 
						});
						break;

					case "1000*80*80":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 400;
						} else if (pocv == "all") {
							cvetnik_cost = 512;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 400;
							} else if (pocv == "all") {
								cvetnik_cost = 512;
							}; 
						});
						break;

					case "1100*80*80":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 440;
						} else if (pocv == "all") {
							cvetnik_cost = 563;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 440;
							} else if (pocv == "all") {
								cvetnik_cost = 563;
							}; 
						});
						break;

					case "1200*80*80":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 480;
						} else if (pocv == "all") {
							cvetnik_cost = 614;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 480;
							} else if (pocv == "all") {
								cvetnik_cost = 614;
							}; 
						});
						break;

					case "1200*80*100":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 528;
						} else if (pocv == "all") {
							cvetnik_cost = 696;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 528;
							} else if (pocv == "all") {
								cvetnik_cost = 696;
							}; 
						});
						break;

					case "1300*80*100":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 572;
						} else if (pocv == "all") {
							cvetnik_cost = 754;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 572;
							} else if (pocv == "all") {
								cvetnik_cost = 754;
							}; 
						});
						break;	

					case "1400*100*100":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 709;
						} else if (pocv == "all") {
							cvetnik_cost = 905;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 709;
							} else if (pocv == "all") {
								cvetnik_cost = 905;
							}; 
						});
						break;

					case "1500*100*100":
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {					
							cvetnik_cost = 760;
						} else if (pocv == "all") {
							cvetnik_cost = 970;
						};
						$(".polirovka_cvet").change(function(){
							var pocv = $(".polirovka_cvet").val();
							if (pocv == "once") {
								cvetnik_cost = 760;
							} else if (pocv == "all") {
								cvetnik_cost = 970;
							}; 
						});
						break;					
				}		
			/*Подсчет суммы за цветники*/
			cve = cvetnik_cost * numberс;
			$("#cvetnik_sum").val(cve);
			ordCheck(cve);
		});	
	/*ЦВЕТНИК - ОКОНЧАНИЕ*/

	/*ПРИКЛАДНАЯ - НАЧАЛО*/
		/*Если меняем полировку, то значения прикладной сбрасываются*/
		$(".priklad_size").change(function(){
			$("#priklad_number").prop("value", "0");
			$("#priklad_sum").prop("value", "0");
		});
		
		/*При изменении количества подставок считается цена*/
		$("#priklad_number").click(function(){
			var numberpr = $("#priklad_number").val();
			var priklad_size = $(".priklad_size").val();

			switch (priklad_size) {

				case "0":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 0;
						} else if (pocv == "all") {
							priklad_cost = 0;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 0;
						} else if (pocv == "all") {
							priklad_cost = 0;
						}; 
					});
					break;

				case "500*50*80":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 218;
						} else if (pocv == "all") {
							priklad_cost = 280;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 218;
						} else if (pocv == "all") {
							priklad_cost = 280;
						}; 
					});
					break;

				case "500*60*80":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 243;
						} else if (pocv == "all") {
							priklad_cost = 306;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 243;
						} else if (pocv == "all") {
							priklad_cost = 306;
						}; 
					});
					break;

				case "600*60*80":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 291;
						} else if (pocv == "all") {
							priklad_cost = 365;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 291;
						} else if (pocv == "all") {
							priklad_cost = 365;
						}; 
					});
					break;

				case "600*80*80":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 321;
						} else if (pocv == "all") {
							priklad_cost = 397;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 321;
						} else if (pocv == "all") {
							priklad_cost = 397;
						}; 
					});
					break;

				case "700*80*80":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 375;
						} else if (pocv == "all") {
							priklad_cost = 462;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 375;
						} else if (pocv == "all") {
							priklad_cost = 462;
						}; 
					});
					break;

				case "700*80*100":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 441;
						} else if (pocv == "all") {
							priklad_cost = 550;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 441;
						} else if (pocv == "all") {
							priklad_cost = 550;
						}; 
					});
					break;

				case "800*80*100":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 504;
						} else if (pocv == "all") {
							priklad_cost = 627;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 504;
						} else if (pocv == "all") {
							priklad_cost = 627;
						}; 
					});
					break;

				case "800*100*100":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 592;
						} else if (pocv == "all") {
							priklad_cost = 718;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 592;
						} else if (pocv == "all") {
							priklad_cost = 718;
						}; 
					});
					break;

				case "900*100*100":
					var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 666;
						} else if (pocv == "all") {
							priklad_cost = 806;
						};
					$(".polirovka_cvet").change(function(){
						var pocv = $(".polirovka_cvet").val();
						if (pocv == "once") {
							priklad_cost = 666;
						} else if (pocv == "all") {
							priklad_cost = 806;
						}; 
					});
					break;		
			}
			/*Подсчет суммы за цветники*/
			prik = priklad_cost * numberpr;
			$("#priklad_sum").val(prik);
			ordCheck(prik);
		});
	/*ПРИКЛАДНАЯ - ОКОНЧАНИЕ*/

	/*CБОР ИТОГОВОЙ СУММЫ*/		
	$("#memorial_order").on("click", function(){				
		var order_sum = 0;		
		$(".order_presum").each(function(){				
			priklad_sum = parseInt($("#priklad_sum").val());
			cvetnik_sum = parseInt($("#cvetnik_sum").val());
			sum = parseInt($("#sum").val());
			stela_sum = parseInt($("#stela_sum").val()); 
			order_sum=priklad_sum+cvetnik_sum+sum+stela_sum;
			
		});
		$("#itog_memo").val(order_sum);
		});











		
});

