<?php

namespace App\Controllers\Web;

use Libraries\Logger;

/**
 * 首頁與預設頁面控制器
 */
class HomeController
{
    protected static $_uniqueInstance = null;

    /** @return self */
    public static function getInstance()
    {
        if (self::$_uniqueInstance == null) self::$_uniqueInstance = new self();
        return self::$_uniqueInstance;
    }

    protected function __construct() {}

    /**
     * 首頁
     *
     * @return void
     */
    public function Home()
    {
        view('Home.Index', [
            'title' => '目錄' . WEBPAGE_TITLE_SUFFIX
        ]);
    }
}
