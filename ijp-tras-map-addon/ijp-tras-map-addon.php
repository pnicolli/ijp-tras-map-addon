<?php
/**
 * Plugin Name: IJP TRAs Map
 * Description: Interactive map for TRAs
 * Version:     1.0.0
 * Author:      Piero Nicolli
 * Author URI:  https://internationaljudgeprogram.org/
 * Text Domain: ijp-tras-map
 *
 * Requires Plugins: elementor
 * Elementor tested up to: 3.23.4
 * Elementor Pro tested up to: 3.23.4
 */

function register_ijp_tras_widget( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/tras_map.php' );

	$widgets_manager->register( new \Elementor_Ijp_Tras_Map_Widget() );

}
add_action( 'elementor/widgets/register', 'register_ijp_tras_widget' );

function ijp_tras_map_dependencies() {

	/* Scripts */
	wp_register_script( 'floatingui-core', plugins_url( 'assets/floatingui-core.min.js', __FILE__ ) );
	wp_register_script( 'floatingui-dom', plugins_url( 'assets/floatingui-dom.min.js', __FILE__ ), [ 'floatingui-core' ] );
	wp_register_script( 'ijp-tras-map-script', plugins_url( 'assets/script.js', __FILE__ ), [ 'jquery', 'floatingui-dom' ] );

	/* Styles */
	wp_register_style( 'ijp-tras-map-styles', plugins_url( 'assets/styles.css', __FILE__ ) );

}
add_action( 'wp_enqueue_scripts', 'ijp_tras_map_dependencies' );