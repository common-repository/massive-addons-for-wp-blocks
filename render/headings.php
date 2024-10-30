<div id="mega-line-container" class="<?php echo $className; ?>">
<?php if ($style == 'theme1') { ?>
	<div class="mega-line-top" style="text-align: <?php echo $align; ?>;">  
        <span style="width: <?php echo $linewidth; ?>px; border-top: <?php echo $borderwidth; ?>px <?php echo $border_style; ?> <?php echo $borderclr; ?>;"></span>
        <h2 style="font-size: <?php echo $titlesize; ?>px; color: <?php echo $titleclr; ?>; line-height: <?php echo $lineheight; ?>;">
        	<?php echo $title; ?>
        </h2>
        <div style="color: <?php echo $desclr; ?>;">
        	<?php echo $content ?>
        </div>
  </div>
<?php } ?>

<?php if ($style == 'theme2') { ?>
    <div class="mega-line-center" style="text-align: <?php echo $align; ?>;">  
    	<h2 style="font-size: <?php echo $titlesize; ?>px; color: <?php echo $titleclr; ?>; line-height: 1;">
        	<?php echo $title; ?>
        </h2>
        <div style="line-height: <?php echo $lineheight; ?>;">
    		<span style="width: <?php echo $linewidth; ?>px; border-top: <?php echo $borderwidth; ?>px <?php echo $border_style; ?> <?php echo $borderclr; ?>;"></span>
    	</div>
    	<div style="color: <?php echo $desclr; ?>;">
        	<?php echo $content ?>
        </div>
  	</div>
<?php } ?>

<?php if ($style == 'theme3') { ?>
    <div class="mega-line-bottom" style="text-align: <?php echo $align; ?>;">  
        <h2 style="font-size: <?php echo $titlesize; ?>px; color: <?php echo $titleclr; ?>;">
        	<?php echo $title; ?>
        </h2>
        <div style="line-height: <?php echo $lineheight; ?>; color: <?php echo $desclr; ?>;">
        	<?php echo $content ?>
        </div>
        <span style="width: <?php echo $linewidth; ?>px; border-top: <?php echo $borderwidth; ?>px <?php echo $border_style; ?> <?php echo $borderclr; ?>;"></span>
    </div>
<?php } ?>

<?php if ($style == 'theme4') { ?>
    
    <div id="mega-line-icon" style="text-align: <?php echo $align; ?>;">  
        <div class="line-icon" style="text-align: <?php echo $iconalign; ?>; width: <?php echo $linewidth; ?>px; border-top: <?php echo $borderwidth; ?>px <?php echo $border_style; ?> <?php echo $borderclr; ?>;">
    		<?php if ($style2 == 'icon') { ?>
    			<i class="<?php echo $icon_class; ?>" aria-hidden="true" style="color: <?php echo $iconclr; ?>"></i>
    		<?php } ?>
    		<?php if ($style2 == 'image') { ?>
    		<img src="<?php echo $image_id; ?>" style="display: inline-block;">
    	<?php } ?>
    	</div>
        <h2 style="font-size: <?php echo $titlesize; ?>px; color: <?php echo $titleclr; ?>; line-height: <?php echo $lineheight; ?>;">
        	<?php echo $title; ?>
        </h2>
        <div style="color: <?php echo $desclr; ?>;">
        	<?php echo $content ?>
        </div>
    </div>
<?php } ?>

<?php if ($style == 'theme5') { ?>
    <div id="mega-line-icon" style="text-align: <?php echo $align; ?>;">  
        <h2 style="font-size: <?php echo $titlesize; ?>px; color: <?php echo $titleclr; ?>; line-height: 1;">
        	<?php echo $title; ?>
        </h2>
        <div style="line-height: <?php echo $lineheight; ?>;">
	        <div class="line-icon" style="text-align: <?php echo $iconalign; ?>; width: <?php echo $linewidth; ?>px; border-top: <?php echo $borderwidth; ?>px <?php echo $border_style; ?> <?php echo $borderclr; ?>;">
	        	<?php if ($style2 == 'icon') { ?>
	        		<i class="<?php echo $icon_class; ?>" aria-hidden="true" style="color: <?php echo $iconclr; ?>"></i>
	        	<?php } ?>
	        	<?php if ($style2 == 'image') { ?>
	        		<img src="<?php echo $image_id; ?>" style="display: inline-block;">
	        	<?php } ?>
	        </div>
        </div>
        <div style="color: <?php echo $desclr; ?>;">
        	<?php echo $content ?>
        </div>
    </div>
<?php } ?>

<?php if ($style == 'theme6') { ?>
	<div id="mega-line-icon" style="text-align: <?php echo $align; ?>;">  
        <h2 style="font-size: <?php echo $titlesize; ?>px; color: <?php echo $titleclr; ?>; line-height: 1;">
        	<?php echo $title; ?>
        </h2>
        <div style="line-height: <?php echo $lineheight; ?>; color: <?php echo $desclr; ?>;">
        	<?php echo $content ?>
        </div>
        <div class="line-icon" style="text-align: <?php echo $iconalign; ?>; width: <?php echo $linewidth; ?>px; border-top: <?php echo $borderwidth; ?>px <?php echo $border_style; ?> <?php echo $borderclr; ?>;">
        	<?php if ($style2 == 'icon') { ?>
        		<i class="<?php echo $icon_class; ?>" aria-hidden="true" style="color: <?php echo $iconclr; ?>"></i>
        	<?php } ?>
        	<?php if ($style2 == 'image') { ?>
        		<img src="<?php echo $image_id; ?>" style="display: inline-block;">
        	<?php } ?>
        </div>
    </div>
<?php } ?>
</div>