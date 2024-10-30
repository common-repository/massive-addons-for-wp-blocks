<?php $some_id = rand(5, 500); ?>
<!-- Style1 & 2 info banner -->
<?php if ($style_visibility == 'left' || $style_visibility == 'right') { ?>
	<div id="mega_info_bar" class="mega-info-bar-<?php echo $some_id; ?> <?php echo $className; ?>" style="margin: <?php echo $body_margin; ?>; padding: <?php echo $body_padding; ?>; border-width: <?php echo $body_borderWidth; ?>; border-style: <?php echo $body_border_style; ?>; border-radius: <?php echo $body_borderRadius; ?>px; border-color: <?php echo $body_border_clr; ?>; background-color: <?php echo $body_bg; ?>; background-image: url('<?php echo $image_id2; ?>'); background-size: 100% 100%;">		   
		<?php if ($featured == true) { ?>
			<div class="ribbon">
				<span style="color: <?php echo $ribbon_clr; ?>; background-color: <?php echo $ribbon_bg; ?>">
					<?php echo $ribbon_text; ?>
				</span>
			</div>
		<?php } ?>
		<div class="mega_wrap" style="width: <?php echo $pic_width-2; ?>%; float: <?php echo $style_visibility; ?>; padding: <?php echo $img_padding; ?>;">
			<img src="<?php echo $image_id; ?>" alt="<?php echo $alt; ?>" style="display: block; max-width: 100%; width: <?php echo $pic_size; ?>; height: <?php echo $pic_height; ?>px;">
		</div>

		<div class="mega_content" style="width: <?php echo $content_width-3; ?>%; padding: <?php echo $text_padding; ?>;">
			<h4 style="color: <?php echo $title_color; ?>; font-size: <?php echo $title_size; ?>px;">
				<?php echo $info_title; ?>
			</h4>
			<div style="font-size: <?php echo $content_size; ?>px; color: <?php echo $desc_color; ?>; line-height: <?php echo $lineheight; ?>;">
				<?php echo $content; ?><br>
			</div>
			<?php if (!empty($btn_text)) { ?>
				<a href="<?php echo $url; ?>" class="mega_hvr_btn" style="font-size: <?php echo $btn_size; ?>px; color: <?php echo $btn_clr; ?>; background: <?php echo $btn_bg; ?>; border: <?php echo $border_style; ?>; border-radius: <?php echo $btn_radius; ?>px; padding: <?php echo $btn_ptop; ?>px <?php echo $btn_pleft; ?>px;">
					<?php echo $btn_text; ?>
				</a>
			<?php } ?>
		</div>
		<div class="clearfix"></div>
	</div>
<?php } ?>


<!-- Style3 info banner -->
<?php if ($style_visibility == 'top_to_bottom') { ?>
	<div id="mega_info_bar_2" class="mega-info-bar-<?php echo $some_id; ?> <?php echo $className; ?>" style="margin: <?php echo $body_margin; ?>; padding: <?php echo $body_padding; ?>; border-width: <?php echo $body_borderWidth; ?>; border-style: <?php echo $body_border_style; ?>; border-radius: <?php echo $body_borderRadius; ?>px; border-color: <?php echo $body_border_clr; ?>; background-color: <?php echo $body_bg; ?>; background-image: url('<?php echo $image_id2; ?>'); background-size: 100% 100%;">			   
		<?php if ($featured == true) { ?>
			<div class="ribbon">
				<span style="color: <?php echo $ribbon_clr; ?>; background-color: <?php echo $ribbon_bg; ?>">
					<?php echo $ribbon_text; ?>
				</span>
			</div>
		<?php } ?>
		<div class="mega_wrap" style="padding: <?php echo $img_padding; ?>;">
		<?php if (!empty($image_id)) { ?>
			<img src="<?php echo $image_id; ?>" alt="<?php echo $alt; ?>" style="display: block; max-width: 100%; width: <?php echo $pic_size; ?>; height: <?php echo $pic_height; ?>px;">					
		<?php } ?>
		</div>

		<div class="mega_content" style="padding: <?php echo $text_padding; ?>;">
			<h4 style="color: <?php echo $title_color; ?>; font-size: <?php echo $title_size; ?>px;">
				<?php echo $info_title; ?>
			</h4>
			<div style="font-size: <?php echo $content_size; ?>px; color: <?php echo $desc_color; ?>; line-height: <?php echo $lineheight; ?>;">
				<?php echo $content; ?><br>
			</div>
			<?php if (!empty($btn_text)) { ?>
				<a href="<?php echo $url; ?>" class="mega_hvr_btn" style="font-size: <?php echo $btn_size; ?>px; color: <?php echo $btn_clr; ?>; background: <?php echo $btn_bg; ?>; border: <?php echo $border_style; ?>; padding: <?php echo $btn_ptop; ?>px <?php echo $btn_pleft; ?>px; border-radius: <?php echo $btn_radius; ?>px;">
					<?php echo $btn_text; ?>
				</a>
			<?php } ?>
			<br>
		</div>
		<div class="clearfix"></div>
	</div>
<?php } ?>

<style>
	.mega-info-bar-<?php echo $some_id; ?> .mega_hvr_btn:hover{
		color: <?php echo $btn_hvrclr; ?> !important;
		background-color: <?php echo $btn_hvrbg; ?> !important;
	}
</style>