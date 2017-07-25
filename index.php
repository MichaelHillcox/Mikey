<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>MiKeY</title>

		<link href="https://fonts.googleapis.com/css?family=Lato:300,100" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="app/core.min.css">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="The nexus of MiKeY ( Also know as AoKMiKeY ). All of my contacts and work in one place">
		<meta name="keywords" content="aokmikey,AoKMiKeY,aokmikeyv2,mikey,se7ensins aokmikey,cod5,cod4,cod 5 modding,cod 4 modding,aokmikey youtube,aokmikey se7ensins,agreedbog,perfectionist mod menu,design,development,raid-gaming,raid gaming,raid-server,raid servers">
	</head>
	<body <?= isset( $_GET['p'] ) ? 'class="discord"' : '' ?> >
		<?php if( !isset( $_GET['p'] ) ): ?>
		<div id="content">
			<header>
				<h1>MiKeY</h1>
				<h2>Designer, Developer, Modder and Creator.</h2>
			</header>
			<footer>
				<?php
					$jsonFile = file_get_contents("app/social.json");
					$socialLinks = json_decode($jsonFile);

					foreach ($socialLinks as $link):
						foreach ($link as $data => $moreData ):

							echo "<a href='{$moreData->link}' title='".htmlentities($moreData->title)."'>";
							if( isset($moreData->icon) )
								echo "<i class='icon {$moreData->icon}'></i>";
							else
								echo "<div class='{$data} socialItem'></div>";
							echo "</a>";

						endforeach;
					endforeach;

				?>
			</footer>
		</div>

		<?php else: ?>
			
			<div class="d-container">
				<div class="d-box">
					<h2>Add me on Discord</h2>
					<p>For some reason Discord doesn't support direct linking to my profile so you'll have to do it manually. Sorry... I guess?</p>
					<div class="d-input">MiKeY#3704<a class="d-btn" href="/">Back</a></div>
				</div>
			</div>
		<?php endif; ?>
	</body>
</html>
