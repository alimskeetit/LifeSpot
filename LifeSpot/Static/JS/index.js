/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */ 
let session = {};

/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession(logger, checker) {
    if (window.sessionStorage.getItem("startDate") == undefined) {
        // Сохраним время начала сессии
        window.sessionStorage.setItem("startDate", new Date().toLocaleString());
        // Сохраним UserAgent
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent);
        if (window.sessionStorage.getItem("userAge") == undefined) {
            window.sessionStorage.setItem("userAge", prompt("Пожалуйста, введите ваш возраст?"));
            checker(true);
        } else {
            checker(false)
        }

        logger();
    }
}

/*
* Проверка возраста пользователя
* 
* */
let checker = function (newVisit) {
    if(newVisit)
        if (window.sessionStorage.getItem("userAge") >= 18) {
            alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
        }
        else {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. ВыL будете перенаправлены");
            window.location.href = "http://www.google.com"
        }
}


/*
* Вывод данных сессии в консоль
* 
* */
let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate"))
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent"))
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
}

/*
* Функция для фильтраци контента
* Будет вызываться благодаря атрибуту oninput на index.html
* 
* */

function filterContent(){
    let elements = document.getElementsByClassName('translation-block');

    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if(!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




