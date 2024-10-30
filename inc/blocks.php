<?php
	/**
	 * Registering Blocks here
	 * Design made by Webcodingplace from https://wordpress.org/plugins/mega-blocks-for-gutenberg/
	 */
	$blocks = array(
		array(
			'slug' => 'infobanner',
			'callback' => 'render_infobanner',
			'localize' => true,
			'css' => '',
			'js' => false,
			'depends' => array('jquery'),
		),
		array(
			'slug' => 'ihover',
			'callback' => 'render_ihover',
			'css' => '',
			'js' => false,
			'depends' => array('jquery'),
		),
		array(
			'slug' => 'price', // JS block folder files
			'callback' => 'render_price',
			'css' => '',
			'js' => false,
			'depends' => array('jquery'),
		),

		array(
			'slug' => 'button',
			'callback' => 'render_button',
			'css' => '',
			'js' => false,
			'depends' => array('jquery'),
		),

		array(
			'slug' => 'count-up',
			'callback' => 'render_count_up',
			'css' => '',
			'js' => true,
			'depends' => array('jquery'),
		),

		array(
			'slug' => 'infobox',
			'callback' => 'render_infobox',
			'css' => '',
			'js' => false,
			'depends' => array('jquery'),
		),

		array(
			'slug' => 'int-banner',
			'callback' => 'render_int_banner',
			'css' => '',
			'js' => false,
			'depends' => array('jquery'),
		),

		array(
			'slug' => 'creativelink',
			'callback' => 'render_creativelink',
			'css' => '',
			'js' => true,
			'depends' => array('jquery'),
		),

		array(
			'slug' => 'headings',
			'callback' => 'render_headings',
			'css' => '',
			'js' => false,
			'depends' => array('jquery'),
		),

		array(
			'slug' => 'accordion-slides',
			'callback' => 'render_accordion_slides',
			'css' => 'bootstrap',
			'js' => true,
			'depends' => array('jquery', 'jquery-ui-accordion'),
		),

		array(
			'slug' => 'accordion',
			'callback' => 'render_accordion',
			'css' => 'bootstrap',
			'js' => true,
			'depends' => array('jquery', 'jquery-ui-accordion'),
		),
	);
?>