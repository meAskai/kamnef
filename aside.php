
<aside class="left_aside">
	<ul>
<?php

$result = mysql_query("SELECT * FROM categories", $link);

if (mysql_num_rows($result) > 0) 
{
	$row = mysql_fetch_array($result);

	do 
	{		
		echo '
		<li><a href="'.$row["category_address"].'">'.$row["category_title"].'</a></li>
		';
	} 
	while ($row = mysql_fetch_array($result));
}

?>
	</ul>
</aside>

		

<!--<aside class="left_aside">
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
</aside>-->