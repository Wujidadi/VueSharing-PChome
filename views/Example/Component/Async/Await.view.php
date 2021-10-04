<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <script src="/libraries/Vue.js/vue.global.prod.js"></script>
    <script src="/libraries/axios/axios.min.js"></script>
    <link rel="stylesheet" href="/css/common.css">
</head>
<body>
    <div id="app">
        <async-example v-cloak></async-example>
    </div>
    <script src="/js/example/component/async/await.js"></script>
</body>
</html>