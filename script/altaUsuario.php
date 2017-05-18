<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="utf8">
	<title>Ejercicio 10 - Validar Form</title>
	<meta name="description" content="Ejercicio de Javascript">
	<meta name="author" content="Juan Segura">
	<meta name="keywords" content="JavaScript, Ejercicio, HTML5, DAW">
</head>
<body>
	<header>
		<hgroup>
			<h1>Ejercicio 10 de Javascript</h1>
			<h2>Datos del formulario</h2>
		</hgroup>
	</header>
	<div>
	<p>El formulario contiene <?php echo count($_REQUEST); ?> campos, que son:</p>
	<table>
		<tr>
			<th>Nombre del campo</th>
			<th>Contenido</th>
		</tr>
		<?php foreach ($_REQUEST as $key => $value): ?>
			<tr>
				<td><?php echo $key; ?></td>
				<td>
					<?php 
						if (is_array($value))
							print_r($value);
						else
							echo $value;
					?>
				</td>
			</tr>
		<?php endforeach; ?> 
	</table>
	</div>
	<footer><small>Diseño Web en Entorno Clicente - Juan Segura</small></footer>
</body>
</html>