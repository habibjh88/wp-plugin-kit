<?php

namespace WpPluginKit\Database\Migrations\Tables\Types;

use WpPluginKit\Abstracts\DBMigrator;

/**
 * Todos migration.
 *
 * @since 0.1.0
 */
class Todos extends DBMigrator {

    /**
     * Name of migration table.
     *
     * @var string
     *
     * @since 0.1.0
     */
    protected $table_name = 'todos';

    /**
     * Migrate the todos table.
     *
     * @since 0.1.0
     *
     * @return void
     */
    public static function migrate() {
        global $wpdb;

        $charset_collate = $wpdb->get_charset_collate();

        $schema_todos = "CREATE TABLE IF NOT EXISTS `{$wpdb->prefix}wp_plugin_kit_todos` (
            `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
            `title` varchar(255) NOT NULL,
            `slug` varchar(255) NOT NULL,
            `description` text DEFAULT NULL,
            `type_id` int(10) unsigned NULL,
            `is_active` tinyint(1) NOT NULL DEFAULT 1,
            `created_by` bigint(20) unsigned NOT NULL,
            `updated_by` bigint(20) unsigned NULL,
            `deleted_by` bigint(20) unsigned NULL,
            `created_at` datetime NOT NULL,
            `updated_at` datetime NULL,
            `deleted_at` datetime NULL,
            PRIMARY KEY (`id`),
            KEY `type_id` (`type_id`),
            KEY `created_by` (`created_by`),
            KEY `updated_by` (`updated_by`)
        ) $charset_collate";

        // Create the tables.
        dbDelta( $schema_todos );
    }
}
