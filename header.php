<?php

 ?>
<header class="top_header">
	<div class="header_topline">
		<div class="container">	
				<!--Логотип-->
				<div class="row">	
				<div class="col-md-12">								
					<a href="http://kamnef/"></div><img src="../images/bg1.png" alt="Интернет-магазин камня и плитки"></a>	
						
					<!--Контакты-->	
						<button class="button_contacts hidden-lg hidden-md hidden-sm"><i class="fa fa-mobile"></i></button>
						<div>
						<div class="top_contacts">
							<a href="#callback" class="callback fancybox">Заказать обратный звонок</a>
							<p>8 (953) 999-99-99</p>

						</div>
						<button class="button_cart" alt="Ваша корзина"><i class="fa fa-shopping-cart"><span class="count up_count">0</span></i></button>
						
						<!-- begin show_price -->
						<div class="show_price">
							<p>Товаров: <span class="count">0</span></p>
							<p>На сумму: <span price="0" class="price">0 руб.</span></p>
							<a href="../cart.php?action=oneclick" class="button">В корзину</a>	
						</div>
						<!-- end show_price -->

							<!--<div class="col-md-12">
								<button class="button_menu hidden-lg hidden-md hidden-sm"><i class="fa fa-bars"></i></button>
								<nav class="menu_main clearfix">
									<ul>
										<li><a href="http://kamnef/" class="active list">Главная</a></li>
										<li><a href="#" class="list">Продукция</a></li>
										<li><a href="#"  class="list">Схема работы</a></li>
										<li><a href="#" class="button">Сделать заказ</a></li>
									</ul>
									
								</nav>
								<button class="button_menu"><i class="fa fa-shopping-cart"></i></button>
							</div>-->
						</div>	
					</div>
				</div>			
		</div>			
	</div>
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
</header>