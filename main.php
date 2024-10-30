<?php
/**
* Main Class
*/
class Nasir_Blocks_Gutenberg
{
	// Design made by Webcodingplace from https://wordpress.org/plugins/mega-blocks-for-gutenberg/
	function __construct()
	{
		add_action( 'init', array( $this, 'init_gutenberg_blocks' ) );
        add_action( 'enqueue_block_editor_assets', array($this, 'block_editor_assets') );
        add_filter( 'block_categories', array($this, 'block_category'), 10, 2 );
        add_action( 'enqueue_block_assets', array( $this, 'mag_enqueue_assets' ) );
        // add_action( 'admin_enqueue_scripts', array($this, 'load_admin_scripts') );
	}

    // function load_admin_scripts($slug) {
    //     wp_enqueue_style( 'mgb-admin-styles', NBG_URL .'/assets/css/admin.css');
    //     if ($slug == 'settings_page_mega_blocks') {
    //         wp_enqueue_script( 'sweet-alerts', NBG_URL .'/assets/js/sweetalert.min.js', array('jquery') );
    //         wp_enqueue_script( 'nbg-settings', NBG_URL .'/assets/js/settings.js', array('jquery') );
    //     }
    // }
    // Design made by Webcodingplace from https://wordpress.org/plugins/mega-blocks-for-gutenberg/
    function get_blocks(){
        $blocks = array();
        include NBG_PATH.'/inc/blocks.php';
        return apply_filters( 'nbg_blocks_list', $blocks );
    }

    // Design made by Webcodingplace from https://wordpress.org/plugins/mega-blocks-for-gutenberg/
	function init_gutenberg_blocks(){

        /**
         * Registering Blocks with Styles and Scripts
         */
        $blocks = $this->get_blocks();
        foreach ($blocks as $block) {
            $settings = array();
            if ($block['callback'] != '') {
                $settings['render_callback'] = array($this, $block['callback']);
            }
            
            // Styles
            if (isset($block['css']) && $block['css'] != '') {
                if ($block['css'] == true && file_exists(NBG_PATH.'/assets/css/'.$block['slug'].'.css')) {
                    wp_register_style('nbg-front-'.$block['slug'] , NBG_URL.'/assets/css/'.$block['slug'].'.css');   
                    $settings['style'] = 'nbg-front-'.$block['slug'];
                } elseif ($block['css'] == 'bootstrap') {
                    wp_register_style('nbg-bootstrap' , NBG_URL.'/assets/css/bootstrap.css');   
                    $settings['style'] = 'nbg-bootstrap';
                }
            }
            // Scripts
            if (isset($block['js']) && $block['js'] != '') {
                if ($block['js'] == true && file_exists(NBG_PATH.'/assets/js/'.$block['slug'].'.js')) {
                    wp_register_script('nbg-front-'.$block['slug'] , NBG_URL.'/assets/js/'.$block['slug'].'.js', $block['depends']);
                    $settings['script'] = 'nbg-front-'.$block['slug'];
                }
            }

            if (function_exists('register_block_type')) {

                register_block_type( 'nasir-blocks-gutenberg/'.$block['slug'], $settings );
            }
        }

    }

    // Design made by Webcodingplace from https://wordpress.org/plugins/mega-blocks-for-gutenberg/
    function block_editor_assets(){
        $blocks = $this->get_blocks();

        foreach ($blocks as $block) {
            // Styles
                
            if (isset($block['css']) && $block['css'] != '') {
                if ($block['css'] == true && file_exists(NBG_PATH.'/assets/css/'.$block['slug'].'.css')) {
                    wp_enqueue_style('nbg-front-'.$block['slug'] , NBG_URL.'/assets/css/'.$block['slug'].'.css');
                } elseif ($block['css'] == 'bootstrap') {
                    wp_enqueue_style('nbg-bootstrap' , NBG_URL.'/assets/css/bootstrap.css');
                }
            }
            if (file_exists(NBG_PATH.'/blocks/'.$block['slug'].'.js')) {
                wp_enqueue_script( 'nbg-admin-'.$block['slug'], NBG_URL.'/blocks/'.$block['slug'].'.js', array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), NBG_PATH.'/blocks/'.$block['slug'].'.js');
                if (isset($block['localize']) && $block['localize'] == true) {
                    $localize_vars = array(
                        'nbg_assets_dir' => NBG_URL.'/assets',
                    );                
                    wp_localize_script( 'nbg-admin-'.$block['slug'], 'nbg_vars', $localize_vars );
                }
            }
        }

    }

    function mag_enqueue_assets(){
        wp_enqueue_style(
            'mba-blocks-css',
            NBG_URL . '/assets/css/massive_custom_styles.min.css',
            array(),
            filemtime( NBG_PATH . '/assets/css/massive_custom_styles.min.css' )
        );
        wp_enqueue_script( 'icon-js', plugins_url( '/assets/js/icon.js' , __FILE__ ), array('jquery'));
    }

    function block_category($categories){
        return array_merge(
            $categories,
            array(
                array(
                    'slug' => 'mega_addons',
                    'title' => __( 'Massive Addons', 'ns-b' ),
                ),
            )
        );
    }

    function render_infobanner($attrs, $content){
        extract( shortcode_atts( array(
            'style_visibility'      =>      'top_to_bottom',
            'pic_width'             =>      '50',
            'content_width'         =>      '50',
            'image_id'              =>      NBG_URL.'/assets/images/placeholder.gif',
            'image_id2'              =>      '',
            'alt'                   =>      '',
            'pic_size'              =>      '',
            'pic_height'            =>      '',
            'img_padding'           =>      '5px 5px 5px 5px',
            'text_padding'          =>      '5px 5px 5px 5px',
            'info_title'            =>      'Info Banner',
            'lineheight'            =>      '',
            'title_size'            =>      '17',
            'content_size'          =>      '15',
            'featured'              =>      '',
            'ribbon_text'           =>      'BEST',
            'ribbon_clr'            =>      '',
            'ribbon_bg'             =>      '#f78da7',
            'btn_text'              =>      '',
            'btn_ptop'              =>      '7',
            'btn_pleft'             =>      '20',
            'btn_size'              =>      '15',
            'url'                   =>      '#0',
            'border_style'          =>      '0px solid #000',
            'btn_radius'            =>      '5',
            'title_color'           =>      '#000',
            'desc_color'            =>      '#000',
            'btn_clr'               =>      '#fff',
            'btn_bg'                =>      '',
            'btn_hvrclr'            =>      '#fff',
            'btn_hvrbg'             =>      '',
            'body_margin'           =>      '0px 0px 0px 0px',
            'body_padding'          =>      '0px 0px 0px 0px',
            'body_borderWidth'      =>      '0px 0px 0px 0px',
            'body_border_style'     =>      'solid',
            'body_borderRadius'     =>      '1',
            'body_border_clr'       =>      '#ddd',
            'body_bg'               =>      '',
            'className'             =>      '',
            'content'               =>      'Info Banner Content is here, click to edit it.',
        ), $attrs ) );
        ob_start();
            include NBG_PATH.'/render/infobanner.php';
        return ob_get_clean();
    }


    function render_ihover($attrs, $content){
        extract( shortcode_atts( array(
            'image_id'   =>   NBG_URL.'/assets/images/placeholder.gif',
            'alt'    => '',
            'width' => '',
            'height' => '',
            'popup' => 'disable',
            'caption_bg' => '',
            'title_clr' => '',
            'desc_clr' => '',
            'url' => '',
            'link_target' => '_self',
            'modal_width' => '',
            'modal_height' => '',
            'effect'    => 'false',
            'border_width' => '',
            'border_style' => 'solid',
            'border_color' => '',
            'hover_effect' => 'circle effect2 left_to_right',
            'heading' => 'Title Here',
            'heading_size' => '',
            'description' => 'description goes here',
            'desc_size' => '',
            'alignment' => '',
            'text_color' => '',
            'bg_color' => '',
            'className'             =>      '',
        ), $attrs ) );
        ob_start();
            include NBG_PATH.'/render/ihover.php';
        return ob_get_clean();
    }
    function render_price($attrs, $content){
        extract( shortcode_atts( array(
            'offer_text'            => '',
            'offer_bg'              => '#1e89bf',
            'price_title'           => 'Price Title',
            'subtitle'              => '',
            'price_currency'        => '$',
            'price_amount'          => '299',
            'price_plan'            => 'per year',
            'btn_text'              => 'Purchase Now',
            'link_target'           => '_self',
            'btn_url'               => '',
            'price_bg'              => '#fff',
            'top_bg'                => '#cf2e2e',
            'title_clr'             => '#fff',
            'feature_clr'           => '#000',
            'amount_clr'            => '',
            'titlesize'             =>  '',
            'amountsize'            =>  '75',
            'planesize'             =>  '',
            'btnsize'               =>  '',
            'className'             =>      '',
        ), $attrs ) );
        ob_start();
            include NBG_PATH.'/render/price.php';
        return ob_get_clean();
    }

    function render_button($attrs, $content){
        extract( shortcode_atts( array(
            'btn_animation' =>      'hvr-fade',
            'btnalign'      =>      'left',
            'btntext'       =>      'Creative Button',
            'btntext2'      =>      'Go!',
            'btnsize'       =>      '18',
            'leftpadding'   =>      '20',
            'toppadding'    =>      '5',
            'url'           =>      '#0',
            'link_target'   =>      '_self',
            'btn_border'    =>      '#269CE9',
            'border_width'  =>      '0',
            'btnradius'     =>      '5',
            'btnclr'        =>      '#ddd',
            'hoverclr'      =>      '#ddd',
            'btnbg'         =>      '#269CE9',
            'btn_icon'      =>      '',
            'hoverbg'       =>      '#269CE9',
            'className'             =>      '',
        ), $attrs ) );
        ob_start();
            include NBG_PATH.'/render/button.php';
        return ob_get_clean();
    }

    function render_count_up($attrs, $content){
        extract( shortcode_atts( array(
            'counter_style' => 'style',
            'sec_style' => '',
            'count_box_height' => '',
            'count_box_width' => '',
            'box_border_clr' => '',
            'box_bg' => '',
            'image_id'      =>      NBG_URL.'/assets/images/7cntr.png',
            'image_width' => '90',
            'image_radius' => '',
            'icon_class' => 'fab fa-blogger',
            'icon_size' => '',
            'box_border_width' => '',
            'box_border_radius' => '',
            'border_style' => 'solid',
            'counter_content' => '1,734,195.10',
            'count_title' => 'Task',
            'title_size' => '',
            'lineheight' => '',
            'text_after' => '',
            'icon_clr' => '#000',
            'number_color' => '#000',
            'text_color' => '#000',
            'font_family' => '',
            'stat_size' => '',
            'delay' => '10',
            'time' => '1000',
            'className' => '',
        ), $attrs ) );
        ob_start();
        include NBG_PATH.'/render/count-up.php';
        return ob_get_clean();        
    }

    function render_infobox($attrs, $content){
        extract( shortcode_atts( array(
            'info_style'            =>      'mega_info_box',
            'count_box_height'      =>      '',
            'count_box_width'       =>      '0',
            'box_border_width'      =>      '',
            'border_style'          =>      'solid',
            'box_border_radius'     =>      '',
            'link'                  =>      '',
            'btn_text'              =>      '',
            'url'                   =>      '',
            'link_target'           =>      '_self',
            'btn_clr'               =>      '',
            'box_border_clr'        =>      '',
            'box_bg'                =>      '',
            'sec_style'             =>      'image',
            'image_id'              =>   NBG_URL.'/assets/images/user.jpg',
            'image_width'           =>      '',
            'image_radius'          =>      '',
            'icon_class'            =>      'fas fa-info-circle',
            'icon_size'             =>      '',
            'icon_height'           =>      '',
            'icon_border_width'     =>      '',
            'icon_border_style'     =>      'solid',
            'icon_border_radius'    =>      '',
            'border_clr'            =>      '',
            'icon_color'            =>      '',
            'hoverclr'              =>      '',
            'icon_bg'               =>      '',
            'hoverbg'               =>      '',
            'info_title'            =>      'Info Title',
            'title_size'            =>      '17',
            'desc_size'             =>      '15',
            'line_height'           =>      '20',
            'title_color'           =>      '#000',
            'desc_color'            =>      '#000',
            'shadow'                =>      '',
            'className'             =>      '',
            'content'               =>      'Write a short description for info box.',
        ), $attrs ) );
        ob_start();
        include NBG_PATH.'/render/infobox.php';
        return ob_get_clean();        
    }

    function render_int_banner($attrs, $content){
        extract( shortcode_atts( array(
            'effects'       =>      'effect-lily',
            'image_id'      =>      NBG_URL.'/assets/images/placeholder.gif',
            'alt'           =>      '',
            'height'        =>      '',
            'url'           =>      '',
            'link_target'   =>      '_self',
            'title'         =>      'title',
            'titlesize'     =>      '18',
            'desc'          =>      'We love to see what you design',
            'descsize'      =>      '15',
            'clr'           =>      '#fff',
            'bgclr'         =>      '',
            'titlesizembl'  =>      '',
            'descsizmbl'    =>      '',
            'imgsizmbl'     =>      '',
            'className'             =>      '',
        ), $attrs ) );
        ob_start();
        include NBG_PATH.'/render/int_banner.php';
        return ob_get_clean();        
    }

    function render_creativelink($attrs, $content){
        extract( shortcode_atts( array(
            'style'     =>      'cl-effect-1',
            'size'      =>      '18',
            'weight'    =>      '',
            'align'     =>      'left',
            'text'      =>      'CREATIVE',
            'url'       =>      '',
            'link_target'   =>      '_self',
            'clr'       =>      '',
            'bgclr'     =>      '',
            'hoverclr'  =>      '',
            'hoverbg'   =>      '',
            'className'             =>      '',
        ), $attrs ) );
        ob_start();
        include NBG_PATH.'/render/creativelink.php';
        return ob_get_clean();        
    }

    function render_headings($attrs, $content){
        extract( shortcode_atts( array(
            'style'         =>      'theme1',
            'style2'        =>      'icon',
            'border_style'  =>      'solid',
            'linewidth'     =>      '230',
            'borderwidth'   =>      '2',
            'borderclr'     =>      '#000',
            'lineheight'    =>      '2',
            'icon_class'    =>      'fas fa-info-circle',
            'iconalign'     =>      'center',
            'iconclr'       =>      '#000',
            'image_id'      =>      '',
            'align'         =>      'center',
            'title'         =>      'HEADING ELEMENT',
            'titlesize'     =>      '20',
            'titleclr'      =>      '#000',
            'desclr'        =>      '#535354',
            'className'             =>      '',
        ), $attrs ) );
        ob_start();
        include NBG_PATH.'/render/headings.php';
        return ob_get_clean();        
    }

    function render_accordion($attrs, $content = null){
        extract( shortcode_atts( array(
            'active'        =>      'false',
            'animation'     =>      '350',
            'event'         =>      'click',
            'className'             =>      '',
        ), $attrs ) );
        ob_start();
            include NBG_PATH.'/render/accordion.php';
        return ob_get_clean();
    }

    function render_accordion_slides($attrs, $content = null){
        extract( shortcode_atts( array(
            'titlemargin'       =>      '0',
            'title'             =>      'Accordion Title',
            'title_padding'     =>      '5',
            'size'              =>      '16',
            'clr'               =>      '#fff',
            'bodyclr'           =>      '#000',
            'bodybg'            =>      '#f8f8f8',
            'borderwidth'       =>      '1px 1px 1px 1px',
            'borderwidth2'      =>      '0px 0px 0px 0px',
            'borderclr'         =>      '',
            'borderclr2'        =>      '',
            'bgclr'             =>      '#FCB900',
            'gradientbg'        =>      '',
        ), $attrs ) );
        ob_start();
            include NBG_PATH.'/render/accordion_slides.php';
        return ob_get_clean();
    }

}
?>