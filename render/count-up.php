<?php if ($counter_style == 'style') { ?>
	<div id="mega_count_bar" class="messive-wrapper-counter mag-icon-wrap <?php echo $className; ?>" data-delay="<?php echo $delay; ?>" data-time="<?php echo $time; ?>" style="border-radius: <?php echo $box_border_radius; ?>px; background: <?php echo $box_bg; ?>; border: <?php echo $box_border_width; ?>px <?php echo $border_style; ?> <?php echo $box_border_clr; ?>; padding: <?php echo $count_box_height; ?>px <?php echo $count_box_height; ?>px;">
		<div class="mega_count_img">
			<?php if ($sec_style == 'image') { ?>		   
				<img src="<?php echo $image_id; ?>" style="width: <?php echo $image_width; ?>px; border-radius: <?php echo $image_radius; ?>px;">
			<?php } ?>
			<?php if ($sec_style == 'icon') { ?>
				<i class="<?php echo $icon_class; ?>" style="font-size: <?php echo $icon_size; ?>px; color: <?php echo $icon_clr; ?>;"></i>
			<?php } ?>
		</div>
		<div class="mega_count_content" style="text-align: center;">
			<span class="main-counter" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px; line-height: <?php echo $lineheight; ?>;"><?php echo $counter_content; ?></span>
			<span class="counter-after" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $text_after; ?></span>
			<h3 style="font-size: <?php echo $title_size; ?>px; color: <?php echo $text_color; ?>; margin: 0; font-family: <?php echo $font_family; ?>;">
				<?php echo $count_title; ?>
			</h3>
		</div>
	</div>
<?php } ?>

<?php if ($counter_style == 'style2') { ?>
	<div id="mega_count_bar" class="messive-wrapper-counter mag-icon-wrap <?php echo $className; ?>" data-delay="<?php echo $delay; ?>" data-time="<?php echo $time; ?>" style="border-radius: <?php echo $box_border_radius; ?>px; background: <?php echo $box_bg; ?>; border: <?php echo $box_border_width; ?>px <?php echo $border_style; ?> <?php echo $box_border_clr; ?>; padding: <?php echo $count_box_height; ?>px <?php echo $count_box_height; ?>px;">
		<div class="mega_count_img">
			<?php if ($sec_style == 'image') { ?>		   
				<img src="<?php echo $image_id; ?>" style="width: <?php echo $image_width; ?>px; border-radius: <?php echo $image_radius; ?>px;">
			<?php } ?>
			<?php if ($sec_style == 'icon') { ?>
				<i class="<?php echo $icon_class; ?>" style="font-size: <?php echo $icon_size; ?>px; color: <?php echo $icon_clr; ?>;"></i>
			<?php } ?>
		</div>
		<div class="mega_count_content" style="text-align: center;">
			<h3 style="font-size: <?php echo $title_size; ?>px; color: <?php echo $text_color; ?>; margin: 0; font-family: <?php echo $font_family; ?>;">
				<?php echo $count_title; ?>
			</h3>
			<hr style="line-height: <?php echo $lineheight; ?>; margin: <?php echo $lineheight+3; ?>px auto;">
			<span class="main-counter" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $counter_content; ?></span>
			<span class="counter-after" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $text_after; ?></span>
		</div>
	</div>
<?php } ?>

<!-- Counter style three -->
<?php if ($counter_style == 'style3') { ?>
	<div id="mega_count_bar_2" class="messive-wrapper-counter mag-icon-wrap <?php echo $className; ?>" data-delay="<?php echo $delay; ?>" data-time="<?php echo $time; ?>" style="border-radius: <?php echo $box_border_radius; ?>px; background: <?php echo $box_bg; ?>; border: <?php echo $box_border_width; ?>px <?php echo $border_style; ?> <?php echo $box_border_clr; ?>; padding: <?php echo $count_box_height; ?>px <?php echo $count_box_height; ?>px;">
		<div class="mega_count_img">		   
			<?php if ($sec_style == 'image') { ?>		   
				<img src="<?php echo $image_id; ?>" style="width: <?php echo $image_width; ?>px; border-radius: <?php echo $image_radius; ?>px;">
			<?php } ?>
			<?php if ($sec_style == 'icon') { ?>
				<i class="<?php echo $icon_class; ?>" style="font-size: <?php echo $icon_size; ?>px; color: <?php echo $icon_clr; ?>;"></i>
			<?php } ?>
		</div>
		<div class="mega_count_content" style="text-align: center;">
			<h3 style="line-height: <?php echo $lineheight; ?>; font-size: <?php echo $title_size; ?>px; color: <?php echo $text_color; ?>; margin: 0; font-family: <?php echo $font_family; ?>;">
				<?php echo $count_title; ?>
			</h3>
			<span class="main-counter" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $counter_content; ?></span>
			<span class="counter-after" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $text_after; ?></span>		
		</div>
	</div>
<?php } ?>

<!-- Counter style four -->
<?php if ($counter_style == 'style4') { ?>
	<div id="mega_count_bar_3" class="messive-wrapper-counter mag-icon-wrap <?php echo $className; ?>" data-delay="<?php echo $delay; ?>" data-time="<?php echo $time; ?>" style="border-radius: <?php echo $box_border_radius; ?>px; background: <?php echo $box_bg; ?>; border: <?php echo $box_border_width; ?>px <?php echo $border_style; ?> <?php echo $box_border_clr; ?>; padding: <?php echo $count_box_height; ?>px <?php echo $count_box_height; ?>px;">
		<div class="mega_count_content">
			<h3 style="font-size: <?php echo $title_size; ?>px; color: <?php echo $text_color; ?>; margin: 0; font-family: <?php echo $font_family; ?>;">
				<?php echo $count_title; ?>
			</h3>
			<span class="main-counter" style="line-height: <?php echo $lineheight; ?>; text-align: right: color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $counter_content; ?></span>
			<span class="counter-after" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $text_after; ?></span>		
		</div>
		<div class="mega_count_img">		   
			<?php if ($sec_style == 'image') { ?>		   
				<img src="<?php echo $image_id; ?>" style="width: <?php echo $image_width; ?>px; border-radius: <?php echo $image_radius; ?>px;">
			<?php } ?>
			<?php if ($sec_style == 'icon') { ?>
				<i class="<?php echo $icon_class; ?>" style="font-size: <?php echo $icon_size; ?>px; color: <?php echo $icon_clr; ?>;"></i>
			<?php } ?>
		</div>
	</div>
<?php } ?>

<!-- Counter style five -->
<?php if ($counter_style == 'style5') { ?>
	<div id="mega_count_bar_4" class="messive-wrapper-counter mag-icon-wrap <?php echo $className; ?>" data-delay="<?php echo $delay; ?>" data-time="<?php echo $time; ?>" style="border-radius: <?php echo $box_border_radius; ?>px; background: <?php echo $box_bg; ?>; border: <?php echo $box_border_width; ?>px <?php echo $border_style; ?> <?php echo $box_border_clr; ?>; padding: <?php echo $count_box_height; ?>px <?php echo $count_box_height; ?>px;">
		<div class="mega_count_content">
			<h3 style="font-size: <?php echo $title_size; ?>px; color: <?php echo $text_color; ?>; margin: 0; font-family: <?php echo $font_family; ?>;">
				<?php echo $count_title; ?>
			</h3>
		</div>
		<div class="mega_count_img" style="line-height: <?php echo $lineheight; ?>;">		   
			<?php if ($sec_style == 'image') { ?>		   
				<img src="<?php echo $image_id; ?>" style="width: <?php echo $image_width; ?>px; border-radius: <?php echo $image_radius; ?>px;">
			<?php } ?>
			<?php if ($sec_style == 'icon') { ?>
				<i class="<?php echo $icon_class; ?>" style="font-size: <?php echo $icon_size; ?>px; color: <?php echo $icon_clr; ?>;"></i>
			<?php } ?>
		</div>
		<div class="mega_count_content" style="text-align: center;">
			<span class="main-counter" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $counter_content; ?></span>
			<span class="counter-after" style="color: <?php echo $number_color; ?>; font-size: <?php echo $stat_size ?>px;"><?php echo $text_after; ?></span>
		</div>
	</div>
<?php } ?>