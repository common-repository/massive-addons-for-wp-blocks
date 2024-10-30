<?php
/**
 * Plugin Name: Massive Addons For Gutenberg & WordPress Editor
 * Plugin URI: http://blocks.topdigitaltrends.net/
 * Author: Nasir
 * Author URI: https://www.topdigitaltrends.net/
 * Description: Massive Addons gives you multi plugins all in one. It's very powerful for any theme.
 * Version: 1.3
 * License: GNU General Public License version 3.0
 * License URI: http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: ns-b
 */

// Design made by Webcodingplace from https://wordpress.org/plugins/mega-blocks-for-gutenberg/
define('NBG_PATH', untrailingslashit(plugin_dir_path( __FILE__ )) );
define('NBG_URL', untrailingslashit(plugin_dir_url( __FILE__ )) );
define('NBG_VERSION', '1.3' );

require_once('main.php');


if( class_exists('Nasir_Blocks_Gutenberg')){
	
	$nbg_init = new Nasir_Blocks_Gutenberg;
}

?>