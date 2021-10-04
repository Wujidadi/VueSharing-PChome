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
            background-color: #c2ffc0;
            color: #019601;
            font-size: 0.85em;
        }
    </style>
</head>
<body>
    <div id="app">
        <div v-cloak>
            <!--
                以下 2 行等價
                注意第 2 行以 "." 定義 act 屬性的寫法，為 Vue 自訂元素限定
            -->
            <!-- <non-vue-el v-bind:act.prop="{ code: 'Just kill' }">這是一個非 Vue 的自訂元素</non-vue-el> -->
            <non-vue-el .act="{ code: 'Just kill' }">這是一個非 Vue 的自訂元素</non-vue-el>

            <p class="note">
                <strong>注意：</strong><br>
                &emsp;<code>attribute</code> 和 <code>property</code> 中文雖然通常都說成「屬性」，<br>
                &emsp;但若一定要加以區別時，<code>attribute</code> 一般會翻成「特性」，<code>property</code> 才是「屬性」。
            </p>
        </div>
    </div>
    <script src="/js/example/custom-element/with-property.js"></script>
</body>
</html>