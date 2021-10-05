const original = Vue.reactive({
    count: 0
});

const copy = Vue.readonly(original);

// 可由 original 修改 count，此時會觸發依賴 copy 的監聽器
original.count += 2;
console.log(original.count);
console.log(copy.count);

// 直接由 copy 修改 count，將導致失敗並提示警告（須使用開發模式）
copy.count += 3;
console.log(original.count);
console.log(copy.count);
