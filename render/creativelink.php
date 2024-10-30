<?php $some_id = rand(5, 500); ?>
<?php if ($style == 'cl-effect-1' || $style == 'cl-effect-13') { ?>
	<div class="<?php echo $style; ?> mega-creative-btn <?php echo $className; ?> mega-creative-btn-<?php echo $some_id; ?>" style="text-align: <?php echo $align; ?>;">
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" style="color: <?php echo $clr; ?>; font-size: <?php echo $size; ?>px; font-weight: <?php echo $weight; ?>;">
			<?php echo $text; ?>
		</a>
	</div>
<?php } ?>

<?php if ($style == 'cl-effect-2') { ?>
	<div class="<?php echo $style; ?> mega-creative-btn <?php echo $className; ?>" style="text-align: <?php echo $align; ?>;">
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" style="color: <?php echo $clr; ?>; font-size: <?php echo $size; ?>px; font-weight: <?php echo $weight; ?>;">
			<span class="creativelink" data-hover="<?php echo $text; ?>" style="background: <?php echo $bgclr; ?>;">
				<span class="creativelink-" style="background: <?php echo $hoverbg; ?>;"><?php echo $text; ?></span>
				<?php echo $text; ?>
			</span>
		</a>
	</div>
<?php } ?>

<?php if ($style == 'cl-effect-5') { ?>
	<div class="<?php echo $style; ?> mega-creative-btn <?php echo $className; ?>" style="text-align: <?php echo $align; ?>;">
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" style="color: <?php echo $clr; ?>; font-size: <?php echo $size; ?>px; font-weight: <?php echo $weight; ?>;">
			<span class="creativelink">
				<span class="creativelink-" style="font-weight: 500;"><?php echo $text; ?></span>
				<?php echo $text; ?>
			</span>
		</a>
	</div>
<?php } ?>

<?php if ($style == 'cl-effect-3' || $style == 'cl-effect-4') { ?>
	<div class="<?php echo $style; ?> mega-creative-btn <?php echo $className; ?>" style="text-align: <?php echo $align; ?>;">
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" style="color: <?php echo $clr; ?>; font-size: <?php echo $size; ?>px; font-weight: <?php echo $weight; ?>;">
			<?php echo $text; ?>
			<span class="creativelink" style="background: <?php echo $hoverbg; ?>;"></span>
		</a>
	</div>
<?php } ?>

<?php if ($style == 'cl-effect-6' || $style == 'cl-effect-7' || $style == 'cl-effect-14' || $style == 'cl-effect-18' || $style == 'cl-effect-21') { ?>
	<div class="<?php echo $style; ?> mega-creative-btn <?php echo $className; ?>" style="text-align: <?php echo $align; ?>;">
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" data-hover="Umbrella" style="color: <?php echo $clr; ?>; font-size: <?php echo $size; ?>px; font-weight: <?php echo $weight; ?>;">
			<span class="creativelink" style="background: <?php echo $bgclr; ?>;"></span>
				<?php echo $text; ?>
			<span class="creativelink-" style="background: <?php echo $bgclr; ?>;"></span>
		</a>
	</div>
<?php } ?>

<?php if ($style == 'cl-effect-8') { ?>
	<div class="<?php echo $style; ?> mega-creative-btn <?php echo $className; ?>" style="text-align: <?php echo $align; ?>;">
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" style="color: <?php echo $clr; ?>; font-size: <?php echo $size; ?>px; font-weight: <?php echo $weight; ?>;">
			<span class="creativelink" style="border: 3px solid <?php echo $bgclr; ?>;"></span>
				<?php echo $text; ?>
			<span class="creativelink-" style="border-color: <?php echo $hoverbg; ?>;"></span>
		</a>
	</div>
<?php } ?>

<?php if ($style == 'cl-effect-10') { ?>
	<div class="<?php echo $style; ?> mega-creative-btn <?php echo $className; ?>" style="text-align: <?php echo $align; ?>;">
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" data-hover="<?php echo $text; ?>" style="color: <?php echo $clr; ?>; font-size: <?php echo $size; ?>px; font-weight: <?php echo $weight; ?>;">
			<span class="creativelink" style="background: <?php echo $hoverbg; ?>;color: <?php echo $hoverclr; ?>;"><?php echo $text; ?></span>
			<span class="creativelink-" style="background: <?php echo $bgclr; ?>;"><?php echo $text; ?></span>
		</a>
	</div>
<?php } ?>

<?php if ($style == 'cl-effect-11') { ?>
	<div class="<?php echo $style; ?> mega-creative-btn <?php echo $className; ?>" style="text-align: <?php echo $align; ?>;">
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" data-hover="<?php echo $text; ?>" style="color: <?php echo $clr; ?>; border-top: 2px solid transparent; font-size: <?php echo $size; ?>px; font-weight: <?php echo $weight; ?>;">
			<span class="creativelink" style="border-bottom: 2px solid <?php echo $hoverclr; ?>;color: <?php echo $hoverclr; ?>;"><?php echo $text; ?></span>
			<?php echo $text; ?>
		</a>
	</div>
<?php } ?>

<style>
		.mega-creative-btn-<?php echo $some_id; ?>.cl-effect-13 a:hover::before, .mega-creative-btn-<?php echo $some_id; ?>.cl-effect-13 a:focus::before {
		color: <?php echo $clr; ?> !important;
    	text-shadow: 10px 0 <?php echo $clr; ?>, -10px 0 <?php echo $clr; ?> !important;
	}	
</style>