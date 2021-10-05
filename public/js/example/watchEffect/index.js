const count = Vue.ref(0)

const stop = Vue.watchEffect(() => console.log(count.value));

const cleanSideEffect = Vue.watchEffect(onInvalidate => {
    onInvalidate(() => {
        console.log('Side effect invalidated');
    });
});

setInterval(() => {
    count.value++;
    if (count.value >= 5) {
        stop();    // 顯式呼叫返回值以停止監聽
        cleanSideEffect();
    }
}, 1000);
