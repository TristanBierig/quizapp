let questions = [
    {
        "question": "Wie viele Masten hat ein Schooner?",
        "image": "./img/question0.jpg",
        "answer_1": "3",
        "answer_2": "1",
        "answer_3": "2",
        "answer_4": "4",
        "right_answer": 3
    },
    {
        "question": "Mozart war ein begnadeter Musiker auf welchem Instrument?",
        "image": "./img/question1.jpg",
        "answer_1": "Klavier",
        "answer_2": "Theremin",
        "answer_3": "E-Gitarre",
        "answer_4": "Triangel",
        "right_answer": 1
    },
    {
        "question": "Welcher der folgenden Vögel kann nicht fliegen?",
        "image": "./img/question2.jpg",
        "answer_1": "Gartenbaumläufer",
        "answer_2": "Kleiber",
        "answer_3": "Ortolan",
        "answer_4": "Struthio",
        "right_answer": 4
    },
    {
        "question": "In dem Herrn der Ringe gehört Bilbo Beutlin zu welchem Volk?",
        "image": "./img/question3.jpg",
        "answer_1": "Orks",
        "answer_2": "Hobbits",
        "answer_3": "Zwerge",
        "answer_4": "Elben",
        "right_answer": 2
    },
    {
        "question": "In welchem Land befindet sich Europas größte Wanderdüne?",
        "image": "./img/question4.jpg",
        "answer_1": "Italien",
        "answer_2": "Frankreich",
        "answer_3": "Spanien",
        "answer_4": "Dänemark",
        "right_answer": 2
    }
];


let currentQuestion = 0;
let rightQuestions = 0;


function init() {
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('end-screen').style = '';
        document.getElementById('question-image').style = 'display: none;';
        document.getElementById('question-card').style = 'display: none;';
        document.getElementById('end-max-score').innerHTML = questions.length;
        document.getElementById('end-actual-score').innerHTML = rightQuestions;

    } else {
        let question = questions[currentQuestion];
        let max = document.getElementById('max-questions');
        let current = document.getElementById('current-question');
        let number = questions.length;
        let currentNumber = currentQuestion + 1;

        max.innerHTML = number;
        current.innerHTML = currentNumber;
        document.getElementById('question-image').src = question['image'];
        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let rightAnswer = question['right_answer'];
    let idOfRightAnswer = `answer_${rightAnswer}`;

    if (selectedQuestionNumber == rightAnswer) {
        rightQuestions++;
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerStyle();
    showQuestion();
}


function resetAnswerStyle() {
    for (let i = 1; i < 5; i++) {
        let answer = document.getElementById(`answer_${i}`).parentNode;

        if (answer.classList.contains('bg-success')) {
            answer.classList.remove('bg-success');
        } else {
            if (answer.classList.contains('bg-danger')) {
                answer.classList.remove('bg-danger')
            }
        }
    }
}