<?php

namespace Therakib7\WpPluginKit\Tests\Api;

use WP_REST_Request;
use WP_REST_Server;
use WP_UnitTestCase;

/**
 * API Settings Test.
 *
 * @since 0.1.0
 */
class SettingsTest extends WP_UnitTestCase {

    /**
	 * Test REST Server
	 *
	 * @var WP_REST_Server
	 */
	protected $server;

    /**
     * Namespace.
     *
     * @var string
     */
    protected $namespace = 'wp-plugin-kit/v1';

    /**
     * Route base.
     *
     * @var string
     */
    protected $base = 'settings';

    /**
     * Setup test environment.
     */
    protected function setUp() : void {
        // Initialize REST Server.
        global $wp_rest_server;

        parent::setUp();

		$this->server = $wp_rest_server = new WP_REST_Server;
		do_action( 'rest_api_init' );
    }

    /**
     * Settings request api exist
     *
     * Add prefix test_ before function name like  test_settings_endpoint_exists
     *
     * @since 0.1.0
     */
    public function settings_endpoint_exists() {
        $endpoint = '/' . $this->namespace . '/' . $this->base;

        $request  = new WP_REST_Request( 'GET', $endpoint );

        $response = $this->server->dispatch( $request );

        $this->assertEquals( 200, $response->get_status() );
	}

    /**
     * Test addition
     *
     * @since 0.1.0
     */
    public function test_addition() {
        $result = 2 + 2;
        $this->assertEquals(4, $result);
    }

}
