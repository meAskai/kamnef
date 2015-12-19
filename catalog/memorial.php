<?php
?>
<!DOCTYPE html>
<!-- Для совместимости Эксплорера разлычных версий-->
<!--[if lt IE 7]><html lang="ru" class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html lang="ru" class="lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html lang="ru" class="lt-ie9"><![endif]-->
<!--[if gt IE 8]><!-->
<html lang="ru">
<!--<![endif]-->
<head>
	<meta charset="utf-8" />
	<title>K A M N E F | Памятники</title>
	<meta name="description" content="" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<!-- Вьюпорт для адаптивности сайта -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- Подключение фавикона -->
	<link rel="shortcut icon" href="../favicon.png" />
	<!-- Подключен не весь бутстрап -->
	<link rel="stylesheet" href="../libs/bootstrap/bootstrap-grid-3.3.1.min.css" />
	<!-- Модуль с различными икноками -->
	<link rel="stylesheet" href="../libs/font-awesome-4.2.0/css/font-awesome.min.css" />
	<!-- Модуль всплывающих окон -->
	<link rel="stylesheet" href="../libs/fancybox/jquery.fancybox.css" />
	<!-- Модуль адаптивной "карусели" -->
	<link rel="stylesheet" href="../libs/owl-carousel/owl.carousel.css" />
	<!--Таймер обратного отсчета-->
	<link rel="stylesheet" href="../libs/countdown/jquery.countdown.css" />
	<!-- Подключение шрифтов -->
	<link rel="stylesheet" href="../css/fonts.css" />
	<link rel="stylesheet" href="../css/main.css" />
	<link rel="stylesheet" href="../css/media.css" />
	
</head>
<body>


	<header class="top_header">
	<div class="header_topline">
		<div class="container">	
			

				<!--Логотип-->
				<div class="col-md-12">
					
					<img src="../images/bg1.png" alt="logo">
					
						<div class="row">
					<!--Контакты-->	
							<button class="button_contacts hidden-lg hidden-md hidden-sm"><i class="fa fa-mobile"></i></button>
							<div>
								<div class="top_contacts">
									<a href="#callback" class="callback fancybox">Заказать обратный звонок</a>
									<p>8 (953) 999-99-99</p>
								</div>
							</div>
							<div class="col-md-7 col-md-offset-5">
								<button class="button_menu hidden-lg hidden-md hidden-sm"><i class="fa fa-bars"></i></button>
								<nav class="menu_main clearfix">
									<ul>
										<li><a href="http://kamnef/" class="active list">Главная</a></li>
										<li><a href="#" class="list">Продукция</a></li>
										<li><a href="#"  class="list">Схема работы</a></li>
										<li><a href="#" class="button">Сделать заказ</a></li>
									</ul>
								</nav>
							</div>	
						</div>
				</div>			
		</div>			
	</div>				
</header>

<div class="hidden">
	<!--Отправка почты настраивается по #callback, который мы добавляем в форму отправки в файле common.js-->
	<form id="callback" class="pop_form">
		<h3>Заказать обратный звонок</h3>
		<!--Обязательные поля атрибут required -->
		<input type="text" name="name" placeholder="Ваше имя..." required/>
		<input type="text" name="phone" placeholder="Ваш телефон..." required/>
		<button class="button" type="submit">Заказать</button>
	</form>
</div>

<!-- begin top_content -->
<div class="top_content">
	<div class="container">
		<div class="col-md-3">		
			<!--БОКОВОЕ МЕНЮ-->					
			<aside class="left_aside">
				<ul>
					<li><a href="#">Гранитная плитка</a></li>
					<li><a href="#">Тротуарная плитка</a></li>
					<li><a href="#">Плитка для бани и сауны</a></li>
					<li><a href="#">Облицовка для банных печей</a></li>
					<li class="category_active"><a href="http://kamnef/catalog/memorial.php" type="hover">Памятники</a></li>
					<li><a href="#">Бордюр</a></li>
					<li><a href="#">Брусчатка</a></li>
					<li><a href="#">Цокольный камень</a></li>
					<li><a href="#">Камни для бани и сауны</a></li>
					<li><a href="#">Слэбы / Корки</a></li>
				</ul>
			</aside>
		</div>

		<div class="col-md-9">
			<!-- begin category_descr -->
			<div class="category_descr">			
				<h3>Памятники</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam id debitis aperiam, expedita magni, esse eaque soluta necessitatibus deleniti dolore, suscipit. Rerum hic aperiam quasi nostrum earum illum labore architecto.</p>
			</div>
			<!-- end category_descr -->
			<!-- begin category_order -->
			<div class="category_order">
				<form action="memorial_handler" method="POST">
					<h3>Расчет стоимости</h3>
					<h4>Стела:</h4>
					<p>
						Размер: <select name="stela_size" class="stela_size">
							<option value="" selected=""></option>
							<option value="600*400*50">600*400*50</option>
							<option value="600*400*60">600*400*60</option>
							<option value="800*400*60">800*400*60</option>
							<option value="800*400*80">800*400*80</option>
							<option value="900*400*60">900*400*60</option>
							<option value="900*450*60">900*450*60</option>
							<option value="900*450*80">900*450*80</option>
							<option value="1000*450*80">1000*450*80</option>
							<option value="1000*500*80">1000*500*80</option>
							<option value="1100*500*80">1100*500*80</option>
							<option value="1100*600*80">1100*600*80</option>
							<option value="1200*600*80">1200*600*80</option>
							<option value="1200*700*100">1200*700*100</option>
							<option value="1300*600*80">1300*600*80</option>
							<option value="1300*700*100">1300*700*100</option>
							<option value="1400*700*120">1400*700*120</option>
							<option value="1500*750*120">1500*750*120</option>
						</select>
						Количество: <input type="number" name="stela_number" id="stela_number" min="0" class="memorial_number" value="0">
						Сумма: <input type="text" name="stela_sum" id="stela_sum" readonly> <i class="fa fa-rub"></i>
						
					</p>
					<h4>Поставка:</h4>
					<p>
						Размер: <select name="podstavka_size" class="podstavka_size">
							<option value="" selected=""></option>
							<option value="500*120*120">500*120*120</option>
							<option value="500*150*120">500*150*120</option>
							<option value="500*150*150">500*150*150</option>
							<option value="500*200*150">500*200*150</option>
							<option value="550*200*150">550*200*150</option>
							<option value="600*200*150">600*200*150</option>
							<option value="700*200*150">700*200*150</option>
							<option value="800*200*150">800*200*150</option>
							<option value="800*200*200">800*200*200</option>
							<option value="900*250*200">900*250*200</option>
						</select>
						Количество: <input type="number" name="podstavka_number" id="podstavka_number" min="0" class="memorial_number" value="0">
						Сумма: <input type="text" name="podstavka_sum" id="sum" readonly> <i class="fa fa-rub"></i>
					</p>
					<h4>Цветник:</h4>
					<p>
						Размер: <select name="cvetnik_size" class="cvetnik_size">
							<option value="0" selected=""></option>
							<option value="600*50*80">600*50*80</option>
							<option value="800*60*80">800*60*80</option>
							<option value="900*60*80">900*60*80</option>
							<option value="900*80*80">900*80*80</option>
							<option value="1000*80*80">1000*80*80</option>
							<option value="1100*80*80">1100*80*80</option>
							<option value="1200*80*80">1200*80*80</option>
							<option value="1200*80*100">1200*80*100</option>
							<option value="1300*80*100">1300*80*100</option>
							<option value="1400*100*100">1400*100*100</option>
							<option value="1500*100*100">1500*100*100</option>							
						</select>
						Количество: <input type="number" name="cvetnik_number" placeholder="0" step="2">
						<!--Сумма: <input type="text" name="stela_sum" readonly> <i class="fa fa-rub"></i> -->
					</p>
					<h4>Прикладная:</h4>
					<p>
						Размер: <select name="priklad_size" class="priklad_size">
							<option value="0" selected=""></option>
							<option value="500*50*80">500*50*80</option>
							<option value="500*60*80">500*60*80</option>
							<option value="600*60*80">600*60*80</option>
							<option value="600*80*80">600*80*80</option>
							<option value="700*80*80">700*80*80</option>
							<option value="800*80*100">800*80*100</option>
							<option value="700*80*100">700*80*100</option>
							<option value="800*100*100">800*100*100</option>
							<option value="900*100*100">900*100*100</option>													
						</select>
						Количество: <input type="number" name="priklad_number" placeholder="0">
						<!--Сумма: <input type="text" name="stela_sum" readonly> <i class="fa fa-rub"></i> -->
					</p>
					<h4>Полировка:</h4>
					<p> <select name="polirovka" class="polirovka">
							<option value="1" selected="">1-сторонняя</option>
							<option value="2">2-сторонняя</option>
							<option value="5">5-сторонняя</option>																				
						</select>
						
					</p>
					<p>
						Итоговая сумма: <input type="text" name="itog_sum" readonly>
						<button type="submit" name="submit" class="button">Сделать заказ</button>
					</p>

				</form>
				
			</div>
			<!-- end category_order -->
		</div>
	</div>
</div>
<!-- end top_content -->
<section>
	
</section>
<footer>
	
</footer>

<div class="hidden"></div>
	<!-- Mandatory for Responsive Bootstrap Toolkit to operate -->
	<div class="device-xs visible-xs"></div>
	<div class="device-sm visible-sm"></div>
	<div class="device-md visible-md"></div>
	<div class="device-lg visible-lg"></div>
	<!-- end mandatory -->
    <!--Этот блок для того, чтобы старая версия эксплорера понимала теги html5-->
	<!--[if lt IE 9]>
	<script src="libs/html5shiv/es5-shim.min.js"></script>
	<script src="libs/html5shiv/html5shiv.min.js"></script>
	<script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
	<script src="libs/respond/respond.min.js"></script>
	<![endif]-->

	<!--Куча плагинов jquery для наведения красоты-->
	<script src="../libs/jquery/jquery-1.11.1.min.js"></script>
	<script src="../libs/jquery-mousewheel/jquery.mousewheel.min.js"></script>
	<script src="../libs/fancybox/jquery.fancybox.pack.js"></script>
	<script src="../libs/waypoints/waypoints-1.6.2.min.js"></script>
	<script src="../libs/scrollto/jquery.scrollTo.min.js"></script>
	<script src="../libs/owl-carousel/owl.carousel.min.js"></script>
	<script src="../libs/countdown/jquery.plugin.js"></script>
	<script src="../libs/countdown/jquery.countdown.min.js"></script>
	<script src="../libs/countdown/jquery.countdown-ru.js"></script>
	<!--Плагин для плавной прокрутки на лэндингах-->
	<script src="../libs/landing-nav/navigation.js"></script>
	<script src="../libs/bootstrap-toolkit/bootstrap-toolkit.min.js"></script>
	<script src="../libs/maskedinput/jquery.maskedinput.min.js"></script>
	<script src="../libs/equalheight/jquery.equalheight.js"></script>
	<script src="../libs/stellar/jquery.stellar.min.js"></script>
	<script src="../js/common.js"></script>
	<!-- Yandex.Metrika counter --><!-- /Yandex.Metrika counter -->
	<!-- Google Analytics counter --><!-- /Google Analytics counter -->
	</body>
</html>