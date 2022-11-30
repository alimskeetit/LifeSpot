/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */

function Comment() {
    this.author = prompt("Как вас зовут ?")
    if (this.author == null) {
        this.empty = true
        return
    }
    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if (this.text == null) {
        this.empty = true
        return
    }

    this.date = new Date().toLocaleString()
}

function addComment() {
    // Создадим объект
    let comment = new Comment();

    if (comment.empty) {
        return;
    }
    

    if (confirm("Хотите, что ваш комментарий могли оценить другие пользователи?")) {
        let rateReview = Object.create(comment);
        rateReview["rate"] = 0;
        writeReview(rateReview);
        return;
    }
    
    // Добавим на страницу
    writeReview(comment)
}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = review => {

    let likeCounter = '';

    // Для проверки, является ли объект отзывом, используем свойство hasOwnProperty
    if (review.hasOwnProperty('rate')) {
        likeCounter += '<button id="' + Math.random() + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`

    }

    document.getElementsByClassName('reviews')[0].innerHTML += ' <div class="review-    text">\n' + `<p> <i> <b>${review['author']}</b> ${review['date']}${likeCounter}</i></p>` + `<p>${review['text']}</p>` + '</div>';
}

function addLike(id) {
    // Найдём нужный элемент по id
    let element = document.getElementById(id);

    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ')

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] = `${resultNum}`

    // Обновим текст элемента
    element.innerText = array.join(' ')
}

let numImage = 1

function slide(event) {
    switch (event.target.id) {
        case "slideLeft":
            if (1 <= numImage - 1)
                numImage--;
            break;
        case "slideRight":
            if (numImage + 1 <= 3)
                numImage++;
            break;
    }

    let image = document.getElementById('slideImage');

    switch (numImage) {
        case 1:
            image.src = "https://i03.fotocdn.net/s123/76511e5d20d6fc33/public_pin_l/2813715027.jpg"
            break;
        case 2:
            image.src = "https://pic.rutubelist.ru/video/17/b1/17b100a0bcbc6e5e8d11101cde21aca7.jpg";
            break;
        case 3:
            image.src = "https://trikky.ru/wp-content/blogs.dir/1/files/2021/12/30/chat-avatar-136.jpg";
            break;
    }
}