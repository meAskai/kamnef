<?php 

	$db_host = 'localhost';
	$db_user = 'kamnef';
	$db_pass = 'gtnhrfvyta';
	$db_database = 'kamnef';

	$link = mysql_connect($db_host, $db_user, $db_pass);

	mysql_select_db($db_database, $link) or die("Нет соединения с БД".mysql_error());
	mysql_query('SET names utf8');

?>