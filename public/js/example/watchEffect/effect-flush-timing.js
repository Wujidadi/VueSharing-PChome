const vueApp = Vue.createApp({
    setup() {
        const count = Vue.ref(0);

        Vue.watchEffect(() => {
            // 初始時會 print 一次 count，count 更新時執行 effect，也會再 print
            console.log(count.value);
        }, {
            flush: 'post'    // 組件更新後需要重新監聽 effect，可設定此選項
        });

        return {
            count
        };
    }
});

const vueModel = vueApp.mount('#app');

// vueModel.count = ?;
