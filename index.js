const questions = [
  {
    question: "Укажите свой пол:",
    answers: ["Женщина", "мужчина"],
  },
  {
    question: "В какое время суток Вы чувствуете себя наиболее комфортно?",
    answers: ["Утро", "Ночь", "Вечер", "День"],
  },
  {
    question: "Подскажите, мучает ли Вас бессонница последнее время?",
    answers: ["Да", "Нет", "Иногда"],
  },
  {
    question:
      "Чувствуете ли Вы в последнее время, что вам никак не удается осуществить ваши планы?",
    answers: ["Да", "Нет", "Иногда"],
  },
  {
    question: "Какой Вы видите свою жизнь через 5 лет?",
    answers: [
      "Брак, семья, дети, дом",
      "Путешествия по Миру",
      "Успешная карьера ",
      "Всё вместе",
    ],
  },
];

//знаходимо елементи
const headerContainer = document.querySelector("#header");
const mainContainer = document.querySelector("#main");
const listContainer = document.querySelector("#list");

const submitBtn = document.querySelector("#submit");

submitBtn.hidden = true; //ховаємо кнопку "Далее"

//змінні
let questionIndex = 0; //поточне питання

clearPage();
showQuestion();
listContainer.onclick = checkAnswer;
submitBtn.onclick = nextQuestion;

function clearPage() {
  headerContainer.innerHTML = "";
  listContainer.innerHTML = "";
}

function clearAll() {
  headerContainer.innerHTML = "";
  mainContainer.innerHTML = "";
}

function showQuestion() {
  // console.log(showQuestion);

  //питання
  //   console.log(questions[questionIndex]["question"]);

  const headerTemplate = `<p class="test-title">%title%</p>`;
  const title = headerTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  ); //метод replace міняє першу мітку, при заміні всіх міток - використовувати replaceAll

  //   console.log(headerTemplate);
  //   console.log(title);

  headerContainer.innerHTML = title;

  //варіанти відповідей
  for (answerText of questions[questionIndex]["answers"]) {
    // console.log(answerText);

    const questionTemplate = `<li>
        <label for="">
                    <input type="radio" class="answer" name="answer">
                    <span>%answer%</span>
        </label>
    </li>`;

    const answerHTML = questionTemplate.replace("%answer%", answerText);
    // console.log(answerHTML);

    listContainer.innerHTML += answerHTML;
  }
}

//перевіряємо чи вибрана радіокнопка
function checkAnswer() {
  //знаходимо вибрану радіокнопку
  const checkedRadio = listContainer.querySelector(
    'input[type="radio"]:checked'
  );

  //якщо відповідь вибрана, показуємо кнопку "Далее"
  if (checkedRadio) {
    submitBtn.hidden = false;
  } else {
    return;
  }
}

function nextQuestion() {
  submitBtn.hidden = true;
  if (questionIndex !== questions.length - 1) {
    console.log("Це не останнє питання");

    questionIndex++;

    clearAll();
    showQuestion();
  } else {
    console.log("Це останнє питання");
  }
}
