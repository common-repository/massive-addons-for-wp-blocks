<?php $some_id = rand(5, 500); ?>
<div class="grid vc-interactive-banner <?php echo $className; ?>" id="vc-interactive-banner-<?php echo $some_id; ?>">
	<figure class="<?php echo $effects; ?>" style="background: <?php echo $bgclr; ?>; width: 100%;">
		<img src="<?php echo $image_id; ?>" alt="<?php echo $alt; ?>" style="height: <?php echo $height; ?>px; width: 100%;" />
		<figcaption>
			<div>
				<h2 style="font-size: <?php echo $titlesize; ?>px; color: <?php echo $clr; ?>; font-weight: 500;">
					<?php echo $title; ?>
				</h2>
				<p style="font-size: <?php echo $descsize; ?>px; color: <?php echo $clr; ?>;">
					<?php echo $desc; ?>
				</p>
			</div>
			<?php if (isset($url) && $url != '') { ?>
				<a href="<?php echo $url; ?>" target="<?php echo $link_target; ?>"></a>
			<?php } ?>
		</figcaption>			
	</figure>
</div>
<style>
	@media only screen and (max-width: 480px) {
		#vc-interactive-banner-<?php echo $some_id; ?> h2 {
			font-size: <?php echo $titlesizembl; ?>px !important;
		}
		#vc-interactive-banner-<?php echo $some_id; ?> p {
			font-size: <?php echo $descsizmbl; ?>px !important;
		}
		#vc-interactive-banner-<?php echo $some_id; ?> img {
			height: <?php echo $imgsizmbl; ?>px !important;
		}
	}
</style>