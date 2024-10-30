<div class="ih-item <?php echo $hover_effect; ?> <?php echo $className; ?>" style="height: <?php echo $height; ?>px; width: <?php echo $width; ?>px; border: <?php echo $border_width; ?>px solid <?php echo $border_color; ?>;">
	<?php if (isset($url) && $url != '') { ?>
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>">
	<?php } ?>
	<?php if (isset($url) && $url == NULL) { ?>
		<a>
	<?php } ?>
		<div class="img">
			<span style="box-shadow: inset 0 0 0 <?php echo $border_width; ?>px <?php echo $border_color; ?>, 0 1px 2px rgba(0, 0, 0, .3); opacity: 0.6;"></span>
				<img src="<?php echo $image_id; ?>" alt="<?php echo $alt; ?>" style="width: <?php echo $width; ?>px;max-width: 100%; height: <?php echo $height; ?>px;">
			</span>
		</div>
		<div class="info" style="background-color: <?php echo $caption_bg; ?>;">
			<div style="display:table;width:100%;height:100%;">
    			<div style="display: table-cell !important;vertical-align: middle !important;">
  					<h3 style="color: <?php echo $title_clr; ?>; font-size: <?php echo $heading_size; ?>px;">
  						<?php echo $heading; ?>
  					</h3>
  					<p style="color: <?php echo $desc_clr; ?>; font-size: <?php echo $desc_size; ?>px;">
  						<?php echo $description; ?>
  					</p>
				</div>
			</div>
		</div>
	</a>
</div>