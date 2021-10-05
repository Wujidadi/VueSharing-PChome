const firstName = Vue.ref('');
const lastName = Vue.ref('');

Vue.watch([firstName, lastName], (newValues, prevValues) => {
    console.log(newValues, prevValues);
});

firstName.value = 'John';    // logs: ['John', ''] ['', '']
lastName.value = 'Smith';    // logs: ['John', 'Smith'] ['John', '']
