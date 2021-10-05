const book = Vue.reactive({
    author: 'Vue Team',
    year: '2020',
    title: 'Vue 3 Guide',
    description: 'You are reading this book right now ;)',
    price: 'free'
});

let weWantReactive = true;
// weWantReactive = !weWantReactive;

if (!weWantReactive)
{
    let { author, title } = book;
    let note = {
        text: '響應性沒了！',
        color: 'salmon'
    };

    author = 'Vue 開發團隊';
    title = 'Vue 3 指南'
    
    console.log('%c' + author +      ', ' + title,      'color: gold; font-size: 12pt');
    console.log('%c' + book.author + ', ' + book.title, 'color: lime; font-size: 12pt');
    console.log('%c' + note.text,                       `color: ${note.color}; font-size: 10.5pt`);
}
else
{
    let { author, title } = Vue.toRefs(book);
    let note = {
        text: '響應性還在～',
        color: 'lightskyblue'
    };

    author.value = 'Vue 開發團隊';
    title.value  = 'Vue 3 指南'
    
    console.log('%c' + author.value + ', ' + title.value, 'color: gold; font-size: 12pt');
    console.log('%c' + book.author +  ', ' + book.title,  'color: lime; font-size: 12pt');
    console.log('%c' + note.text,                         `color: ${note.color}; font-size: 10.5pt`);
}
