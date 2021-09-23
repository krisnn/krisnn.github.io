<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite6f77cdd2d2e59a95df60b4f42adb5fe
{
    public static $prefixLengthsPsr4 = array (
        'J' => 
        array (
            'Jaybizzle\\CrawlerDetect\\' => 24,
        ),
        'G' => 
        array (
            'Grav\\Plugin\\CrawlerDetect\\' => 26,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Jaybizzle\\CrawlerDetect\\' => 
        array (
            0 => __DIR__ . '/..' . '/jaybizzle/crawler-detect/src',
        ),
        'Grav\\Plugin\\CrawlerDetect\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite6f77cdd2d2e59a95df60b4f42adb5fe::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite6f77cdd2d2e59a95df60b4f42adb5fe::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
