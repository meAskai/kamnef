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
	<title>K A M N E F</title>
	<meta name="description" content="" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<!-- Вьюпорт для адаптивности сайта -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<!-- Подключение фавикона -->
	<link rel="shortcut icon" href="favicon.png" />
	<!-- Подключен не весь бутстрап -->
	<link rel="stylesheet" href="libs/bootstrap/bootstrap-grid-3.3.1.min.css" />
	<!-- Модуль с различными икноками -->
	<link rel="stylesheet" href="libs/font-awesome-4.2.0/css/font-awesome.min.css" />
	<!-- Модуль всплывающих окон -->
	<link rel="stylesheet" href="libs/fancybox/jquery.fancybox.css" />
	<!-- Модуль адаптивной "карусели" -->
	<link rel="stylesheet" href="libs/owl-carousel/owl.carousel.css" />
	<!--Таймер обратного отсчета-->
	<link rel="stylesheet" href="libs/countdown/jquery.countdown.css" />
	<!-- Подключение шрифтов -->
	<link rel="stylesheet" href="css/fonts.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/media.css" />
	<link rel="shortcut icon" href="/favicon.png" type="image/x-icon">
	<link rel="icon" href="/favicon.png" type="image/x-icon">
</head>
<body>

<header class="top_header">
	<div class="header_topline">
		<div class="container">	
			

				<!--Логотип-->
				<div class="col-md-12">
					
					<img src="images/bg1.png" alt="logo">
					
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

<section class="slider">
	<div class="container">
			<div class="col-md-3">
							
			<aside class="left_aside">
				<ul>
					<li><a href="#">Гранитная плитка</a></li>
					<li><a href="#">Тротуарная плитка</a></li>
					<li><a href="#">Плитка для бани и сауны</a></li>
					<li><a href="#">Облицовка для банных печей</a></li>
					<li><a href="http://kamnef/catalog/memorial.php">Памятники</a></li>
					<li><a href="#">Бордюр</a></li>
					<li><a href="#">Брусчатка</a></li>
					<li><a href="#">Цокольный камень</a></li>
					<li><a href="#">Камни для бани и сауны</a></li>
					<li><a href="#">Слэбы / Корки</a></li>
				</ul>
			</aside>
			</div>
		<div class="col-md-9">
			<div class="slider_container">

				<div class="next_button"><i class="fa fa-angle-right"></i></div>
				<div class="prev_button"><i class="fa fa-angle-left"></i></div>
				
				<div class="carousel">
					<div class="slide_item"><img src="images/1.gif" alt="#"></div>
					<div class="slide_item"><img src="images/3.png" alt="#"></div>
					<div class="slide_item"><img src="images/1.png" alt="#"></div>
					<div class="slide_item"><img src="images/2.png" alt="#"></div>
					<div class="slide_item"><img src="images/2.gif" alt="#"></div>
					<div class="slide_item"><img src="images/1.jpg" alt="#"></div>
					<div class="slide_item"><img src="images/1.jpeg" alt="#"></div>
					
				</div>
				<div class="utp">
						<!--<h3>Преимущества:</h3>
						<p><i class="fa fa-check-square-o "></i>Отличные цены</p>
						<p><i class="fa fa-check-square-o"></i>Работаем напрямую с производителями</p>
						<p><i class="fa fa-check-square-o"></i>Тут надо ещё подумать, что написать</p> -->
						<a href="#" class="button">Сделать заказ</a>
					</div>
			</div>	
			
		</div>			
			
	</div>
</section>

<section class="icons">
	<div class="container">
	<h3>Cхема работы</h3>
		<div class="col-md-12">
			<ul>
				<li><i class="fa fa-hand-o-up"></i> 1. Выбираете продукт</li>
				<li><i class="fa fa-shopping-cart"></i> 2. Оформляете заказ</li>
				<li><i class="fa fa-check"></i> 3. Мы звоним для подтверждения</li>
				<li><i class="fa fa-truck  fa-flip-horizontal"></i>	 4. Товар уже в пути</li>
			</ul>
		</div>
		
	</div>
</section>

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
	<script src="libs/jquery/jquery-1.11.1.min.js"></script>
	<script src="libs/jquery-mousewheel/jquery.mousewheel.min.js"></script>
	<script src="libs/fancybox/jquery.fancybox.pack.js"></script>
	<script src="libs/waypoints/waypoints-1.6.2.min.js"></script>
	<script src="libs/scrollto/jquery.scrollTo.min.js"></script>
	<script src="libs/owl-carousel/owl.carousel.min.js"></script>
	<script src="libs/countdown/jquery.plugin.js"></script>
	<script src="libs/countdown/jquery.countdown.min.js"></script>
	<script src="libs/countdown/jquery.countdown-ru.js"></script>
	<!--Плагин для плавной прокрутки на лэндингах-->
	<script src="libs/landing-nav/navigation.js"></script>
	<script src="libs/bootstrap-toolkit/bootstrap-toolkit.min.js"></script>
	<script src="libs/maskedinput/jquery.maskedinput.min.js"></script>
	<script src="libs/equalheight/jquery.equalheight.js"></script>
	<script src="libs/stellar/jquery.stellar.min.js"></script>
	<script src="js/common.js"></script>
	<!-- Yandex.Metrika counter --><!-- /Yandex.Metrika counter -->
	<!-- Google Analytics counter --><!-- /Google Analytics counter -->
</body>
</html>