//Обновление теста
function Update() {
    //Проверяем, есть ли ещё задания
    if (quiz.current < quiz.questions.length) {
        //Если есть, меняем музыкальный файл
        audioSource.src = quiz.questions[quiz.current].text;
        headElem.innerHTML = "Play Question " + (quiz.current + 1);

        //Удаляем старые варианты ответов
        buttonsElem.innerHTML = "";

        //Создаём кнопки для новых вариантов ответов
        for (let i = 0; i < quiz.questions[quiz.current].answers.length; i++) {
            let btn = document.createElement("button");
            btn.className = "button";

            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

            btn.setAttribute("index", i);

            buttonsElem.appendChild(btn);
        }

        //Выводим номер текущего задания
        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

        //Находим все кнопки
        let btns = document.getElementsByClassName("button");

        for (let i = 0; i < btns.length; i++) {
            //Прикрепляем событие для каждой отдельной кнопки
            //При нажатии на кнопку будет вызываться функция Click()
            btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
        }
    }
    else {
        //Если это конец, то выводим результат
        buttonsElem.innerHTML = "";

        audioSource.src = quiz.results[quiz.result].audio;
        console.log(audioSource.src);
        headElem.innerHTML = quiz.results[quiz.result].text;
        PlayAudio(null);

        pagesElem.innerHTML = "Score: " + quiz.score;
        
        buttonNextElem.style.display = (quiz_number + 1 < questions.length ? "block" : "none");
        quizEndElem.style.display = "block";
    }
}

function Init() {
    headElem = document.getElementById("head");
    buttonsElem = document.getElementById("buttons");
    pagesElem = document.getElementById("pages");
    audioSource = document.getElementById("audioSource");
    audioElem = document.getElementById("audioMp3");

    quizEndElem = document.getElementById("quizEnd");
    quizEndElem.style.display = "none";

    buttonRepeatElem = document.getElementById("buttonRepeat");
    buttonRepeatElem.addEventListener("click", function (e) { Repeat(); });
    buttonNextElem = document.getElementById("buttonNext");
    buttonNextElem.addEventListener("click", function (e) { Next(); });

    headElem.addEventListener("click", function (e) { PlayAudio(e); });

    // initialize global quiz class
    quiz_number = 0;
    quiz = new Quiz(1, questions[quiz_number], results);
}

function Repeat() {
    quiz = new Quiz(1, questions[quiz_number], results);
    quizEndElem.style.display = "none";
    Update();
}

function Next() {
    quiz_number++;
    Repeat();
}

function PlayAudio(e) {
    if (e !== null) e.preventDefault();
    audioElem.load();
    //audioElem.play();
    const playPromise = audioElem.play()

    if (playPromise !== null) {
        playPromise.catch(() => { /* discard runtime error */ })
    }
}

function Click(index) {
    //Получаем номер правильного ответа
    let correct = quiz.Click(index);

    //Находим все кнопки
    let btns = document.getElementsByClassName("button");

    //Делаем кнопки серыми
    for (let i = 0; i < btns.length; i++) {
        btns[i].className = "button button_passive";
    }

    //Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
    if (quiz.type == 1) {
        if (correct >= 0) {
            btns[correct].className = "button button_correct";
        }

        if (index != correct) {
            btns[index].className = "button button_wrong";
        }
    }
    else {
        //Иначе просто подсвечиваем зелёным ответ пользователя
        btns[index].className = "button button_correct";
    }

    //Ждём секунду и обновляем тест
    setTimeout(Update, 1000);
}