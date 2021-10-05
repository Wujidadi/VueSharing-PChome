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
        <div v-cloak>
            <div>
                <span>{{ count }}</span><br><br>
                <button @click="count++">Increment count</button><br><br>
                <button @click="nested.count.value++">Nested Increment count</button>
            </div>
        </div>
    </div>
    <script src="/js/example/reactivity/ref.js"></script>
</body>
</html>