const vueApp = Vue.createApp({
    data() {
        return {
            message: '黒死牟（継国巌勝）の弟'
        };
    }
});

vueApp.component('my-el', {
    template: 
        `<h3>継国縁壱：<slot>鬼舞辻無惨を 1,500 枚に切った男</slot></h3>`,
    data() {
        return {
            message: '鬼舞辻無惨が最も恐れる男'
        };
    }
});

vueApp.component('my-el-2', {
    template: 
        `<h3>竈門炭治郎
            <div><slot name="first">鬼舞辻無惨を倒した男</slot></div>
            <div><slot name="second">竈門禰豆子の兄</slot></div>
            <div><slot name="third" v-bind:message="message"></slot></div>
            <div><slot name="fourth" v-bind:message="message"></slot></div>
        </h3>`,
    data() {
        return {
            message: '1901-1926'
        };
    }
});

const vueModel = vueApp.mount('#app');
