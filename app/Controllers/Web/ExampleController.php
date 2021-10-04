<?php

namespace App\Controllers\Web;

use Libraries\Logger;

/**
 * 分享範例子頁面控制器
 */
class ExampleController
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
     * 組件示例頁
     *
     * @return void
     */
    public function Component()
    {
        view('Example.Component.Index', [
            'title' => '組件' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * 插槽示例頁
     *
     * @return void
     */
    public function Slot()
    {
        view('Example.Slot.Index', [
            'title' => '插槽' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * 異步組件示例頁
     *
     * @param  string  $type  示例類型
     * @return void
     */
    public function AsyncComponent($type = 'Basic')
    {
        switch ($type)
        {
            case 'Basic':
                view('Example.Component.Async.Basic', [
                    'title' => '異步組件' . WEBPAGE_TITLE_SUFFIX
                ]);
                break;

            case 'Await':
                view('Example.Component.Async.Await', [
                    'title' => '異步組件 (等待)' . WEBPAGE_TITLE_SUFFIX
                ]);
                break;
        }
    }

    public function SampleTemplate()
    {
        header('Content-Type: text/html');
        echo '<div>I am async!!!!</div>';
    }

    /**
     * 組件間通信示例頁
     *
     * @return void
     */
    public function ComponentCommunication()
    {
        view('Example.Component.Communication', [
            'title' => '組件間通信' . WEBPAGE_TITLE_SUFFIX
        ]);
    }
}
