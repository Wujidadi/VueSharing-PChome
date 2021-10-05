<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <script src="/libraries/Vue.js/vue.global.prod.js"></script>
    <link rel="stylesheet" href="/css/common.css">
    <style>
        p.note {
            width: 60vw;
            padding: .75em;
            background-color: #c0e0ff;
            color: #013d96;
            font-size: 0.85em;
        }
    </style>
</head>
<body>
    <div id="app">
        <div v-cloak>
            <my-vue-el id="my-el" el-name="custom" domain="vue-sharing" counter="1024"></my-vue-el>

            <p class="note">
                <strong>附記：</strong><br>
                &emsp;這裡以原生 JavaScript 的 createElement 註冊自訂元素，<br>
                &emsp;渲染完畢的元素內容和樣式位於原生 HTML 的 Shadow DOM root（隱式根）當中；<br>
                &emsp;宣告元素內容的語法和 Vue 自己定義組件的方式十分相近，<br>
                &emsp;預先寫在 HTML 中的元素內容經 JS 渲染後會被吃掉不顯示（只 show JS 定義的內容）；<br>
                &emsp;個人覺得實用性不如前幾頁非 Vue 建構的自訂元素來得高，甚至也比不上直接使用 Vue 的自訂組件；<br>
                &emsp;如果考量到跨框架乃至無框架的情境，可能還是直接自訂元素比較好用。
            </p>
        </div>
    </div>
    <script src="/js/example/custom-element/built-with-vue.js"></script>
</body>
</html>