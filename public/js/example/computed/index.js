let weWantWritable = true;
weWantWritable = !weWantWritable;

let weWantDebug = true;
weWantDebug = !weWantDebug;

let weWantDebugger = true;
weWantDebugger = !weWantDebugger;

if (!weWantWritable)
{
    const count = Vue.ref(1);
    const plusOne = Vue.computed(() => count.value + 1);

    console.log(plusOne.value);    // 2

    plusOne.value++;    // computed 不可直接由外部變動，此處會報錯
}
else
{
    const count = Vue.ref(1);

    if (!weWantDebug)
    {
        const plusOne = Vue.computed({
            get: () => count.value + 1,
            set: val => {
                count.value = val - 1
            }
        });

        plusOne.value = 1;

        console.log(count.value);    // 0
    }
    else
    {
        const plusOne = Vue.computed(() => count.value + 1, {
            // 當 count.value 作为依賴被追蹤時觸發
            onTrack(e) {
                if (weWantDebugger) debugger;
                else console.log('%cplusOne is on track', 'color: gold; font-size: 12pt;');
            },
            // 當 count.value 被修改時觸發
            onTrigger(e) {
                if (weWantDebugger) debugger;
                else console.log('%cplusOne is on trigger', 'color: gold; font-size: 12pt;');
            }
        });

        // 存取 plusOne，應觸發 onTrack
        console.log('%c' + plusOne.value, 'color: lime; font-size: 12pt;');

        // 修改 count.value，應觸發 onTrigger
        count.value++;
    }
}
