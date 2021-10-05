<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <script src="/libraries/Vue.js/vue.global.js"></script>
    <link rel="stylesheet" href="/css/common.css">
</head>
<body>
    <div id="app">
        <div>在 console 輸入 <code>vueModel.count = xx</code> 試試！</div>
        <br>
        <div>{{ count }}</div>
    </div>
    <script src="/js/example/watchEffect/effect-flush-timing.js"></script>
</body>
</html>