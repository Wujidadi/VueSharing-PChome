<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <script src="/libraries/Vue.js/vue.global.prod.js"></script>
    <link rel="stylesheet" href="/css/home/index.css">
</head>
<body>
    <div id="main-page">
        <sub-page-group v-for="group in subPages" v-bind:group="group" v-cloak></sub-page-group>
    </div>
    <script src="/js/script.js"></script>
</body>
</html>