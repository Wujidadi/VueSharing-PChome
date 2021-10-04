<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <script src="/libraries/Vue.js/vue.global.prod.js"></script>
    <script src="/libraries/Mitt/mitt.umd.js"></script>
    <link rel="stylesheet" href="/css/common.css">
    <style>
        body {
            margin: 0;
        }
        h1.top {
            margin-top: 0;
        }
        .father-component {
            background-color: lemonchiffon;
        }
        .father-component-body {
            cursor: pointer;
        }
        .son-component {
            background-color: tan;
        }
        .daughter-component {
            background-color: lightpink;
        }
    </style>
</head>
<body>
    <div id="app">
        <div style="background-color: aqua; height: 50vh; width: 100vw" v-cloak>
            <h1 class="top">Vue 組件通信測試</h1>
            <father-component></father-component>
        </div>
    </div>
    <script type="module" src="/js/example/component/communication.js"></script>
</body>
</html>