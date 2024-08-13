<?php
class Elementor_Ijp_Tras_Map_Widget extends \Elementor\Widget_Base {

	public function get_name() {
		return 'ijp_tras_map_widget';
	}

	public function get_title() {
		return esc_html__( 'TRAs Map', 'ijp-tras-map-addon' );
	}

	public function get_icon() {
		return 'eicon-globe';
	}

	public function get_categories() {
		return [ 'general' ];
	}

	public function get_keywords() {
		return [ 'ijp', 'tras', 'map' ];
	}

	public function get_script_depends() {
		return [ 'ijp-tras-map-script' ];
	}

	public function get_style_depends() {
		return [ 'ijp-tras-map-styles' ];
	}

	protected function render() {
		$svg_path = dirname(__DIR__) . "/assets/map.svg";
		$svg_content = file_get_contents($svg_path);
		?>
		<div class="ijp-tras-map">
			<?php echo $svg_content; ?>
		</div>
		<?php
	}

	protected function content_template() {
		$svg_path = dirname(__DIR__) . "/assets/map.svg";
		$svg_content = file_get_contents($svg_path);
		?>
		<div class="ijp-tras-map">
			<?php echo $svg_content; ?>
		</div>
		<?php
	}
}