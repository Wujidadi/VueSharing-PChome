<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <script src="/libraries/Vue.js/vue.global.prod.js"></script>
    <link rel="stylesheet" href="/css/common.css">
</head>
<body>
    <div id="app">
        <kisatsutai-hashira
            v-for="hsr in hashira"
            v-bind:hashira="hsr"
            v-cloak
        ></kisatsutai-hashira>
    </div>
    <script src="/js/example/component/index.js"></script>
</body>
</html>