<?php

use App\Controllers\Web\HomeController;
use App\Controllers\Web\ExampleController;

# 首頁
$Route->map('GET', '/', function() {
    HomeController::getInstance()->Home();
});

# 組件
$Route->map('GET', '/example/component', function() {
    ExampleController::getInstance()->Component();
});

# 插槽
$Route->map('GET', '/example/slot', function() {
    ExampleController::getInstance()->Slot();
});

# 異步組件（基本）
$Route->map('GET', '/example/async-component', function() {
    ExampleController::getInstance()->AsyncComponent('Basic');
});

# 異步組件（等待）
$Route->map('GET', '/example/async-component/await', function() {
    ExampleController::getInstance()->AsyncComponent('Await');
});

# 範例模板，用於異步組件（等待）展示
$Route->map('GET', '/sample/tpl', function() {
    ExampleController::getInstance()->SampleTemplate();
});

# 組件間通信
$Route->map('GET', '/example/component-communication', function() {
    ExampleController::getInstance()->ComponentCommunication();
});

# 在 Vue 中使用自訂元素（未跳過組件解析）
$Route->map('GET', '/example/custom-element', function() {
    ExampleController::getInstance()->CustomElement();
});

# 在 Vue 中使用自訂元素（跳過組件解析）
$Route->map('GET', '/example/custom-element-with-options', function() {
    ExampleController::getInstance()->CustomElement('custom');
});

# 在 Vue 中使用自訂元素（傳遞 DOM 屬性）
$Route->map('GET', '/example/custom-element-with-options-and-properties', function() {
    ExampleController::getInstance()->CustomElement('custom-and-properties');
});

# 使用 Vue 建構自訂元素
$Route->map('GET', '/example/custom-element-built-with-vue', function() {
    ExampleController::getInstance()->CustomElement('custom-built-with-vue');
});
