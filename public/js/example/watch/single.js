// 監聽單個 getter
const state = Vue.reactive({
    count: 0
});
Vue.watch(
    () => state.count,
    (count, prevCount) => {
        console.log('%c' + prevCount, 'color: gray; font-size: 12pt;');
        console.log('%c' + count,     'color: gold; font-size: 12pt;');
    }
)

// 直接監聽 ref
const count = Vue.ref(0);
Vue.watch(count, (count, prevCount) => {
    console.log('%c' + prevCount, 'color: dodgerblue; font-size: 12pt;');
    console.log('%c' + count,     'color: lime;       font-size: 12pt;');
});
