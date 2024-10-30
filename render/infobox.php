<?php $some_id = rand(5, 500); ?>
<?php if ($link == 'link_box') { ?>
	<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" style="text-decoration: none;color: #000;">
<?php } ?>
<?php if ($link != 'link_box') { ?>
	<a style="text-decoration: none;color: #000;">
<?php } ?>
	<div class="<?php echo $info_style; ?> mega-info-box-<?php echo $some_id; ?> <?php echo $shadow; ?> mag-icon-wrap <?php echo $className; ?>" style="border-radius: <?php echo $box_border_radius; ?>px; background: <?php echo $box_bg; ?>; border: <?php echo $box_border_width; ?>px <?php echo $border_style; ?> <?php echo $box_border_clr; ?>; padding: <?php echo $count_box_height; ?>px <?php echo $count_box_width; ?>px;">
		<div class="mega-info-header">
			<?php if ($sec_style == 'image') { ?>
				<img class="mega-info-img" src="<?php echo $image_id; ?>" alt="" style="width: <?php echo $image_width; ?>px; border-radius: <?php echo $image_radius; ?>;">			
			<?php } ?>
			<?php if ($sec_style == 'icon') { ?>
				<i class="<?php echo $icon_class; ?>" aria-hidden="true" style="border: <?php echo $icon_border_width; ?>px <?php echo $icon_border_style; ?> <?php echo $border_clr; ?>; border-radius: <?php echo $icon_border_radius; ?>px; background: <?php echo $icon_bg; ?>; width: <?php echo $icon_height; ?>px; height: <?php echo $icon_height; ?>px; line-height: <?php echo $icon_height-$icon_border_width*2; ?>px; font-size: <?php echo $icon_size; ?>px; color: <?php echo $icon_color; ?>;"></i>
			<?php } ?>
		</div>
		<div class="mega-info-footer">
			<?php if ($info_title != '') { ?>
				<h3 class="mega-info-title" style="color: <?php echo $title_color ?>; font-size: <?php echo $title_size; ?>px; line-height: <?php echo $line_height; ?>px;">
					<?php echo $info_title; ?>
				</h3>
			<?php } ?>
			<?php if ($content != '') { ?>
				<div class="mega-info-desc" style="font-size: <?php echo $desc_size; ?>px; color: <?php echo $desc_color; ?>;">
					<?php echo $content; ?>
				</div>
			<?php } ?>
			<?php if ($link == 'link_btn') { ?>
				<a class="mega-info-btn" href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" style="color: <?php echo $btn_clr; ?>">
					<?php echo $btn_text; ?>
				</a>
			<?php } ?>
		</div>
		<div class="clearfix"></div>
	</div>
</a>

<style>
	.mega-info-box-<?php echo $some_id; ?>:hover .mega-info-header i {
		color: <?php echo $hoverclr; ?> !important;
		background: <?php echo $hoverbg; ?> !important;
	}
</style>
