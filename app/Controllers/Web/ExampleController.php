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
        echo '<div>I am async!!!!{{ vvv }}</div>';
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

    /**
     * 自訂元素示例頁
     *
     * @param  string|null  $option  Vue.js 編譯選項
     * @return void
     */
    public function CustomElement($option = null)
    {
        switch ($option)
        {
            case 'custom':
                view('Example.CustomElement.WithOption', [
                    'title' => '在 Vue 中使用自訂元素（跳過組件解析）' . WEBPAGE_TITLE_SUFFIX
                ]);
                break;

            case 'custom-and-properties':
                view('Example.CustomElement.WithProperty', [
                    'title' => '在 Vue 中使用自訂元素（傳遞 DOM 屬性）' . WEBPAGE_TITLE_SUFFIX
                ]);
                break;

            case 'custom-built-with-vue':
                view('Example.CustomElement.BuiltWithVue', [
                    'title' => '使用 Vue 建構自訂元素' . WEBPAGE_TITLE_SUFFIX
                ]);
                break;

            default:
                view('Example.CustomElement.Index', [
                    'title' => '在 Vue 中使用自訂元素（不跳過組件解析）' . WEBPAGE_TITLE_SUFFIX
                ]);
                break;
        }
    }

    /**
     * 響應式物件示例頁
     *
     * @return void
     */
    public function Ref()
    {
        view('Example.Reactivity.Ref', [
            'title' => '獨立的響應式值 - ref' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * 存取響應式物件示例頁
     *
     * @return void
     */
    public function AccessInRef()
    {
        view('Example.Reactivity.AccessInRef', [
            'title' => '存取響應式物件' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * 響應式狀態解構示例頁
     *
     * @return void
     */
    public function DestructuringReactiveState()
    {
        view('Example.Reactivity.DestructuringReactiveState', [
            'title' => '響應式狀態解構' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * 防止更改響應式物件示例頁
     *
     * @return void
     */
    public function PreventMutatingReactiveObjects()
    {
        view('Example.Reactivity.PreventMutatingReactiveObjects', [
            'title' => '防止更改響應式物件' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * 計算值示例頁
     *
     * @return void
     */
    public function Computed()
    {
        view('Example.Computed.Index', [
            'title' => '計算值' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * watchEffect 示例頁
     *
     * @return void
     */
    public function WatchEffect()
    {
        view('Example.WatchEffect.Index', [
            'title' => 'watchEffect' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * watchEffect 示例頁
     *
     * @return void
     */
    public function EffectFlushTiming()
    {
        view('Example.WatchEffect.EffectFlushTiming', [
            'title' => 'watchEffect - effect 的刷新時機' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * watch - 監聽單個資料來源示例頁
     *
     * @return void
     */
    public function WatchSingle()
    {
        view('Example.Watch.Single', [
            'title' => 'watch - 監聽單個資料來源' . WEBPAGE_TITLE_SUFFIX
        ]);
    }

    /**
     * watch - 監聽多個資料來源示例頁
     *
     * @return void
     */
    public function WatchMultiple()
    {
        view('Example.Watch.Multiple', [
            'title' => 'watch - 監聽多個資料來源' . WEBPAGE_TITLE_SUFFIX
        ]);
    }
}
