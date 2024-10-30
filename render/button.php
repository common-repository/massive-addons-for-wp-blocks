<?php $some_id = rand(5, 500); ?>
<div class="mag-icon-wrap <?php echo $className; ?>" style="justify-content: <?php echo $btnalign; ?>; display: flex;">
	<?php if ($btn_animation == 'hvr-fade' || $btn_animation == 'button--moema') { ?>
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" class="mega-uae-btn mega-uae-btn-<?php echo $some_id; ?> <?php echo $btn_animation; ?>" style="color: <?php echo $btnclr; ?>;background: <?php echo $btnbg; ?> ; 
			border: <?php echo $border_width; ?>px solid <?php echo $btn_border ?>; border-radius: <?php echo $btnradius; ?>px; font-size: <?php echo $btnsize; ?>px;
			padding: <?php echo $toppadding; ?>px <?php echo $leftpadding; ?>px;" data-text=""> 
			<span><i style="padding-right: 5px;" class="fa <?php echo $btn_icon; ?>"> </i> <?php echo $btntext; ?></span>
		</a>
		<div style="clear: both;"></div>
	<?php } ?>

	<?php if ($btn_animation == 'button--winona') { ?>
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" class="mega-uae-btn mega-uae-btn-<?php echo $some_id; ?> <?php echo $btn_animation; ?>" style="color: <?php echo $btnclr; ?>;background: <?php echo $btnbg; ?> ; 
			border: <?php echo $border_width; ?>px solid <?php echo $btn_border ?>; border-radius: <?php echo $btnradius; ?>px; font-size: <?php echo $btnsize; ?>px;
			padding: <?php echo $toppadding; ?>px <?php echo $leftpadding; ?>px;" data-text=""> 
			<span><i style="padding-right: 5px;" class="fa <?php echo $btn_icon; ?>"> </i> <?php echo $btntext; ?></span>			
			<span style="background: <?php echo $hoverbg; ?>; padding: <?php echo $toppadding; ?>px 0; color: <?php echo $hoverclr; ?>;" class="modal-popup-after"><?php echo $btntext2; ?></span>
		</a>
		<div style="clear: both;"></div>
	<?php } ?>

	<?php if ($btn_animation == 'button--rayen') { ?>
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" class="mega-uae-btn mega-uae-btn-<?php echo $some_id; ?> <?php echo $btn_animation; ?>" style="color: <?php echo $btnclr; ?>;background: <?php echo $btnbg; ?> ; 
			border: <?php echo $border_width; ?>px solid <?php echo $btn_border ?>; border-radius: <?php echo $btnradius; ?>px; font-size: <?php echo $btnsize; ?>px;
			padding: <?php echo $toppadding; ?>px <?php echo $leftpadding; ?>px;" data-text=""> 
			<span style="background: <?php echo $hoverbg; ?>; padding: <?php echo $toppadding; ?>px 0; color: <?php echo $hoverclr; ?>;" class="modal-popup-before"><?php echo $btntext2; ?></span>
			<span> <?php echo $btntext; ?></span>
		</a>
		<div style="clear: both;"></div>
	<?php } ?>

	<?php if ($btn_animation == 'button--ujarak') { ?>
		<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>" class="mega-uae-btn mega-uae-btn-<?php echo $some_id; ?> <?php echo $btn_animation; ?>" style="color: <?php echo $btnclr; ?>;background: <?php echo $btnbg; ?> ; 
			border: <?php echo $border_width; ?>px solid <?php echo $btn_border ?>; border-radius: <?php echo $btnradius; ?>px; font-size: <?php echo $btnsize; ?>px;
			padding: <?php echo $toppadding; ?>px <?php echo $leftpadding; ?>px;" data-text=""> 
			<span style="background: <?php echo $hoverbg; ?>; padding: <?php echo $toppadding; ?>px 0; color: <?php echo $hoverclr; ?>;" class="modal-popup-before"></span>
			<span> <?php echo $btntext; ?></span>
		</a>
		<div style="clear: both;"></div>
	<?php } ?>
</div>
<style>
	.mega-uae-btn-<?php echo $some_id; ?>.hvr-fade:hover, 
	.mega-uae-btn-<?php echo $some_id; ?>.button--moema:hover {
		background: <?php echo $hoverbg; ?> !important;
		color: <?php echo $hoverclr; ?> !important;
	}
	.mega-uae-btn-<?php echo $some_id; ?>.button--ujarak:hover {
		color: <?php echo $hoverclr; ?> !important;
	}
</style>