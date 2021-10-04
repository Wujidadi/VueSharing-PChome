<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <script src="/libraries/Vue.js/vue.global.js"></script>
    <link rel="stylesheet" href="/css/common.css">
    <style>
        non-vue-el {
            display: block;
            width: 60vw;
            padding: 1em;
            margin-top: 8px;
            background-color: brown;
            color: lemonchiffon;
            box-shadow: 3px 3px 5px 6px #555;
        }
        p.note {
            width: 60vw;
            padding: .75em;
            background-color: #fff6c0;
            color: #b39a05;
            font-size: 0.85em;
        }
    </style>
</head>
<body>
    <div id="app">
        <div v-cloak>
            <non-vue-el>這是一個非 Vue 的自訂元素</non-vue-el>
            <p class="note">未指定 <code>config.compilerOptions.isCustomElement</code> 選項，開發模式下會報 <code>Failed to resolve component</code> 警告</p>
        </div>
    </div>
    <script src="/js/example/custom-element/index.js"></script>
</body>
</html>