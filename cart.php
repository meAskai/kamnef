<?php
	include("handlers/db_connect.php");
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
	<title>K A M N E F | Корзина</title>
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
	
</head>
<body>

<?php 
	include "header.php";
?>

<!-- begin top_content -->
<div class="top_content">
	<div class="container">
		<div class="col-md-3">		
			<!--БОКОВОЕ МЕНЮ-->					
			<?php
				include "aside.php";
			?>
		</div>
	
	
	<div class="col-md-9">
	
			
		<h3>Корзина покупок</h3>
	<!-- begin cart_interface -->
	<div class="cart_interface">	
		<?php 
							
		$action = strip_tags($_GET["action"]);
			switch ($action) {
				case 'oneclick':
					echo '

					';

		//Запрос к БД для вывода товаров из таблицы "Корзина". 
		//Вытаскаваем значения
		//с конкретным ip адресом, который получаем у глобального сервера			
		$result = mysql_query("SELECT * FROM memorial, cart
						 WHERE cart.cart_ip = '{$_SERVER['REMOTE_ADDR']}' 
						 AND memorial.memo_id=cart.cart_id_product", $link);
		if (mysql_num_rows($result) >0)
		{
			$row = mysql_fetch_array($result);

			do
			{
				//int - пересчитываем цены * количество товара
				$int = $row["cart_price"] * $row["cart_count"];
				$all_price = $all_price + $int;
				//Подгоняем все картинки под определенный размер
				if  (strlen($row["image"]) > 0 && file_exists("./images/".$row["image"]))
				{
					$img_path = './images/'.$row["image"];
					$max_width = 100; 
					$max_height = 100; 
					 list($width, $height) = getimagesize($img_path); 
					$ratioh = $max_height/$height; 
					$ratiow = $max_width/$width; 
					$ratio = min($ratioh, $ratiow); 

					$width = intval($ratio*$width); 
					$height = intval($ratio*$height);    
					}else
					{
					$img_path = "./images/noimages.jpeg";
					$width = 120;
					$height = 105;
				}

				echo '
				<div class="tovar_line">
				<div class="row">
				<div class="container">

					<div class="col-md-1">
					<div class="cart_image">
						<img src="'.$img_path.'" width="'.$width.'" height="'.$height.'" />
					</div>
					</div>

					<div class="col-md-2">
					<div class="cart_title">
						<p><strong>'.$row["memo_name"].'</strong></p>
						<p class="cart_features">'.$row["memo_features"].'</p>
					</div>
					</div>

					<div class="col-md-2">
						<ul class="input_count_style">
							<li>
								<button class="count_minus">
								<i class="fa fa-minus"></i>
								</button>
							</li>
							<li>
								<input class="count_input" type="text" value="'.$row["cart_count"].'"/>
							</li>
							<li>
								<button class="count_plus">
								<i class="fa fa-plus"></i>
								</button>
							</li>
						</ul>	
					</div>

					<div class="col-md-2">
					<div class="price_product">
						<h5><span class="span_count">'.$row["cart_count"].'</span> x <span>'.$row["cart_price"].'</span>
						</h5>
						<p> '.$int.' руб.</p>
					</div>
					</div>

					<div class="col-md-1">
					<div class="delete_cart"><a href=""><i class="fa fa-ban"></i></a>
					</div>
					</div>						

				</div>
				</div>
				</div>
			';

			} while ($row = mysql_fetch_array($result));
		
		echo '
			
			<div class="row">
			<div class="col-md-9">
			 <p class="itog-price" align="left">Итого: <strong>'.$all_price.'</strong> руб.</p>
			 <a href="cart.php?action=confirm" class="button" >Оформить заказ</a> 
			 </div>
			 
			 </div>
			 ';
  
		} 
		else
		{
		    echo '<h3 id="clear-cart" align="center">Тут ещё пусто -(</h3>';
		}
			
			break;
		default:
			# code...
			break;
	}
?>
</div>
<!-- end cart_interface -->
</div>	
</div>
</div>

		

<?php 
	include "footer.php";
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
	<script src="libs/jquery.cookie.min.js"></script>
	<script src="js/common.js"></script>
	<!-- Yandex.Metrika counter --><!-- /Yandex.Metrika counter -->
	<!-- Google Analytics counter --><!-- /Google Analytics counter -->
</body>
</html>