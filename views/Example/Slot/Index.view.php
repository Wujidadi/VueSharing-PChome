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
        <main v-cloak>
            <div id="message">継国縁壱は{{ message }}です</div>
            <my-el><!-- {{ message }} --></my-el>
            <my-el-2>
                <template v-slot:first>鬼舞辻無惨が期待していた男</template>
                <template v-slot:second></template>
                <template v-slot:third="props">{{ props.message }}</template>
                <template v-slot:fourth="{ message }">{{ message }}</template>
            </my-el-2>
        </main>
    </div>
    <script src="/js/example/slot/index.js"></script>
</body>
</html>