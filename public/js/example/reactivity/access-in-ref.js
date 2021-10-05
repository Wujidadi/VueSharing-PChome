const count = Vue.ref(0);
const state = Vue.reactive({
    count
});

/*
 *===========================================================
 * ref 作為響應式物件的屬性被存取或更改時，會自動展開內部值
 *===========================================================
 */

console.log(state.count);    // 0

state.count = 1;
console.log(count.value);    // 1

console.log('');


/*
 *===========================================================
 * 如果將新的 ref 賦值給現有 ref 的屬性，舊的 ref 會被替換
 *===========================================================
 */

const otherCount = Vue.ref(2);

state.count = otherCount;
console.log(state.count);    // 2
console.log(count.value);    // 1

console.log('');


/*
 *===========================================================
 * 以陣列或 Map() 存取 ref 時，不會自動展開
 *===========================================================
 */

const books = Vue.reactive([ Vue.ref('Vue 3 Guide') ]);
console.log(books[0].value);            // 必須以 .value 呼叫

const map = Vue.reactive(new Map([[ 'count', Vue.ref(4) ]]))
console.log(map.get('count').value);    // 必須以 .value 呼叫
