<?php
	include("../handlers/db_connect.php");
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

<?php 
	include "../header.php";
?>



<!-- begin top_content -->
<div class="top_content">
	<div class="container">
		<div class="col-md-3">		
			<!--БОКОВОЕ МЕНЮ-->					
			<?php
				include "../aside.php";
			?>
		</div>

		<div class="col-md-9">
			<!-- begin category_descr -->
			<div class="category_descr">			
				<h3>Памятники</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam id debitis aperiam, expedita magni, esse eaque soluta necessitatibus deleniti dolore, suscipit. Rerum hic aperiam quasi nostrum earum illum labore architecto.</p>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam id debitis aperiam, expedita magni, esse eaque soluta necessitatibus deleniti dolore, suscipit. Rerum hic aperiam quasi nostrum earum illum labore architecto.</p>
			</div>
			<!-- end category_descr -->
			
		</div>
	</div>
</div>
<!-- end top_content -->

<section class="content_calc">
	<div class="container">
		<div class="col-md-12">	
		<!-- begin category_order -->
	
		<div class="category_order">
				<form id="memorial_order">				
				
					<h3>Расчет стоимости</h3>
					
					<div class="block_order">

						<div class="polirovka_line">
						<div class="container">
							<div class="col-md-12">
								<span class="three">Полировка</span> 
								<select name="polirovka" class="polirovka polir_order">
										<option value="1" selected="">1-сторонняя</option>
										<option value="2">2-сторонняя</option>
										<option value="5">5-сторонняя</option>																				
								</select>	
							</div>	
						</div>
						</div>

						<div class="category_line">
						<div class="container">
						<div class="row">
							<div class="col-md-2">
								<span class="one">Стела</span>
							</div>
							<div class="col-md-3">	
								<span class="two">Размер:</span> 
								<select name="stela_size" class="stela_size select_order">
									<option value="0" selected></option>
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
							</div>
							<div class="col-md-3">
								<span class="two">Количество:</span> <input type="number" name="stela_number" id="stela_number" min="0" class="order_number" value="0">
							</div>
							<div class="col-md-4">
								<span class="two">Сумма: </span> <input type="text" name="stela_sum" id="stela_sum" class="order_presum" value="0" readonly> <i class="fa fa-rub"></i>
							</div>
						</div>
						</div>
						</div>
						
						<div class="category_line">
						<div class="container">
						<div class="row">
							<div class="col-md-2">
								<span class="one">Поставка</span>
							</div>
							<div class="col-md-3">
								<span class="two">Размер:</span> 
								<select name="podstavka_size" class="podstavka_size select_order">
									<option value="0" selected=""></option>
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
							</div>
							<div class="col-md-3">
								<span class="two">Количество:</span> <input type="number" name="podstavka_number" id="podstavka_number" min="0" class="order_number" value="0">
							</div>
							<div class="col-md-4">
								<span class="two">Сумма:</span> <input type="text" name="podstavka_sum" id="sum" class="order_presum" value="0" readonly> <i class="fa fa-rub"></i>
							</div>
						</div>
						</div>
						</div>					
			
						
					</div>					
					
					<div class="block_order">
					
						<div class="polirovka_line">
						<div class="container">
							<div class="col-md-12">
								<span class="three">Полировка</span>
								<select name="polirovka_cvet" class="polirovka_cvet polir_order">
										<option value="once" selected="">1-сторонняя</option>
										<option value="all">Полная</option>																			
								</select>
								<span id="polir_descr">*у цветника и прикладной полируется только одна видимая сторона</span>
							</div>					
						</div>
						</div>

						<div class="category_line">
						<div class="container">
						<div class="row">
							<div class="col-md-2">
								<span class="one">Цветник</span>
							</div>
							<div class="col-md-3">					
								<span class="two">Размер:</span>
								<select name="cvetnik_size" class="cvetnik_size select_order">
									<option value="0" selected></option>
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
							</div>
							<div class="col-md-3">
								<span class="two">Количество:</span> <input type="number" name="cvetnik_number" id="cvetnik_number" class="order_number" min="0"  step="2" value="0">
							</div>
							<div class="col-md-4">
								<span class="two">Сумма:</span> <input type="text" name="cvetnik_sum" id="cvetnik_sum" class="order_presum" value="0" readonly> <i class="fa fa-rub"></i>
							</div>
						</div>
						</div>
						</div>

						<div class="category_line">
						<div class="container">	
						<div class="row">
							<div class="col-md-2">
								<span class="one">Прикладная</span>
							</div>
							<div class="col-md-3">
								<span class="two">Размер:</span>
								<select name="priklad_size" class="priklad_size select_order">
									<option value="0" selected=""></option>
									<option value="500*50*80">500*50*80</option>
									<option value="500*60*80">500*60*80</option>
									<option value="600*60*80">600*60*80</option>
									<option value="600*80*80">600*80*80</option>
									<option value="700*80*80">700*80*80</option>
									<option value="700*80*100">700*80*100</option>
									<option value="800*80*100">800*80*100</option>
									<option value="800*100*100">800*100*100</option>
									<option value="900*100*100">900*100*100</option>													
								</select>
							</div>
							<div class="col-md-3">
								<span class="two">Количество:</span> <input type="number" name="priklad_number" id="priklad_number" class="order_number" min="0" value="0">
							</div>
							<div class="col-md-4">
								<span class="two">Сумма:</span> <input type="text" name="priklad_sum" id="priklad_sum" class="order_presum" value="0" readonly> <i class="fa fa-rub"></i>
							</div>	
						</div>
						</div>	
						</div>			
						
					</div>
					
					<div class="itog_line">
					<div class="container">
					<div class="row">
						<div class="col-md-5">					
							<span class="four">Итоговая сумма:</span> 
							<input type="text" name="order_sum" class="order_sum" id="itog_memo" value="0" readonly> <i class="fa fa-rub"></i>
						</div>
						<div class="col-md-5">
							<a class="button memorial_add">Сделать заказ</a>
						</div>
					</div>
					</div>
					</div>
			</form>				
		</div>
		<!-- end category_order -->
		</div>
	</div>
</section>

<?php 
	include "../footer.php";
?>
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
	<script src="../libs/jquery.cookie.min.js"></script>
	<script src="../js/common.js"></script>
	<script src="../js/stela_calculation.js"></script>
	<!-- Yandex.Metrika counter --><!-- /Yandex.Metrika counter -->
	<!-- Google Analytics counter --><!-- /Google Analytics counter -->
</body>
</html>