<?php
/**
 * Plugin Name: IJP TRAs Map
 * Description: Interactive map for TRAs
 * Version:     1.0.0
 * Author:      IJP
 * Author URI:  https://internationaljudgeprogram.org/
 * Text Domain: ijp-tras-map
 *
 * Requires Plugins: elementor
 * Elementor tested up to: 3.21.0
 * Elementor Pro tested up to: 3.21.0
 */

function register_ijp_tras_widget( $widgets_manager ) {

	require_once( __DIR__ . '/widgets/tras_map.php' );
	// require_once( __DIR__ . '/widgets/hello-world-widget-2.php' );

	$widgets_manager->register( new \Elementor_Ijp_Tras_Map_Widget() );
	// $widgets_manager->register( new \Elementor_Hello_World_Widget_2() );

}
add_action( 'elementor/widgets/register', 'register_ijp_tras_widget' );

function ijp_tras_map_dependencies() {

	/* Scripts */
	wp_register_script( 'ijp-tras-map-script', plugins_url( 'assets/script.js', __FILE__ ) );
	// wp_register_script( 'widget-script-2', plugins_url( 'assets/js/widget-script-2.js', __FILE__ ), [ 'external-library' ] );
	// wp_register_script( 'external-library', plugins_url( 'assets/js/libs/external-library.js', __FILE__ ) );

	/* Styles */
	wp_register_style( 'ijp-tras-map-styles', plugins_url( 'assets/styles.css', __FILE__ ) );
	// wp_register_style( 'widget-style-2', plugins_url( 'assets/css/widget-style-2.css', __FILE__ ), [ 'external-framework' ] );
	// wp_register_style( 'external-framework', plugins_url( 'assets/css/libs/external-framework.css', __FILE__ ) );

}
add_action( 'wp_enqueue_scripts', 'ijp_tras_map_dependencies' );