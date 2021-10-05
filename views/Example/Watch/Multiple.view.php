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
        .tip code {
            background-color: #efefef;
            color: #67abed;
            padding: 4px;
            border-radius: 6px;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="tip">在 console 輸入 <code>firstName.value = xx</code> 或 <code>lastName.value = xx</code> 試試！</div>
    </div>
    <script src="/js/example/watch/multiple.js"></script>
</body>
</html>