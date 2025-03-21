/* Сколько лет твоему питомцу?

Создай форму, в которой будет:
- 2 радиокнопки (инпут с одним выбором варианта ответа type="radio") - одна будет собака, вторая кошка
- 1 инпут, куда пользователь может вбить возраст своего питомца (type="text")
- кнопку Пуск (button или type="button"), на которой будет повешен onclick с вызовом функции

Пользователь должен заходить на сайт и заполнять форму - выбрать питомца, для которого хочет рассчитать возраст, указать возраст питомца и нажать кнопку пуск.
Кнопка пуск должна вызвать функцию для расчет возраста (реализуем с помощью onclick). В зависимости от того, какого питомца выбрал пользователь - рассчитай возраст, указанный в текстовом инпуте. 
Также предварительно создай на странице пустой див, куда ты будешь класть результат. 


Формула для расчета возраста собаки (где age - введенный возраст):
Math.log(age) * 16 + 31
Формула для расчета возраста кошки (где age - введенный возраст): 
24 + (age - 2) * 4


Для примера:
1. Пользователь выбрал собаку, в инпут ввел 8
В результат выводим "Вашей собаке 8. На человеческий возраст ей 64." 
2. Пользователь выбрал кошку, в инпут ввел 7
В результат выводим "Вашей кошке 7. На человеческий возраст ей 44"


Начнём программировать:
1. После нажатия кнопки рассчитать, если все данные введены правильно, рассчитай значения и удали ранее введенные данные в инпуты, чтобы пользователь мог быстро ввести новые.
*/





/* 2. Давай будем сохранять значения, которые вводит пользователь в массив, чтобы у нас была некая история, которую мы могли бы отослать в будущем на сервер.

Сделай массив в формате 
[["питомец", возрастПитомца, возрастНаЧеловеческий], ["питомец", возрастПитомца, возрастНаЧеловеческий]]

Для примера
[["dog", 8, 64], ["cat", 7, 44]]
*/





/* 3. Давай сделаем данную историю доступной для пользователя.
Создай новую кнопку, которая будет показывать историю, и новый div, куда данная история будет выводиться.
Когда пользователь нажимает на кнопку показать историю - перебирай массив и выводи ему историю в специально созданный для этого див в формате:
"Вашей кошке 7. На человеческий возраст ей 44"
"Вашей собаке 8. На человеческий возраст ей 64" 

При этом сортировка следующая - сверху недавно введенные данные, снизу более старые введенные данные.
*/





/* [ОПЦИОНАЛЬНО]
Доработай сайт так - как считаешь нужным сам. Ты можешь добавить еще много всяких плюшек, например выводить в историю только 10 последних записей, а после чего добавлять кнопку, по нажатию на которую будут выводиться еще 10 записей и т.д.

Можешь стилизовать сайт и сделать крутой дизайн для сайта, можешь вместо обычных кнопок сделать картинки собаки и кошки. 

Можешь добавить других питомцев - хомяков, кроликов, попугаев и т.д. Найти формулу в интернете для их возраста и добавить на сайт расчет их возрастов.

В общем сделай сайт максимально крутым, добавь различные плюшки и сделай бомбический дизайн. Я верю в тебя, ты сможешь!
*/





// Массив для хранения истории расчетов
let history = [];

function calculateAge() {
    // Получаем выбранное животное
    const petType = document.querySelector('input[name="pet"]:checked');
    const ageInput = document.getElementById('age');
    
    if (!petType || !ageInput.value) {
        alert('Пожалуйста, выберите питомца и введите его возраст');
        return;
    }

    const age = parseFloat(ageInput.value);
    if (isNaN(age) || age < 0) {
        alert('Пожалуйста, введите корректный возраст');
        return;
    }

    let humanAge;
    let petName;
    
    if (petType.value === 'dog') {
        humanAge = Math.log(age) * 16 + 31;
        petName = 'собаке';
    } else {
        humanAge = 24 + (age - 2) * 4;
        petName = 'кошке';
    }

    // Округляем результат до целого числа
    humanAge = Math.round(humanAge);

    // Формируем результат
    const result = `Вашей ${petName} ${age}. На человеческий возраст ей ${humanAge}.`;
    
    // Выводим результат
    document.getElementById('result').textContent = result;

    // Сохраняем в историю
    history.unshift([petType.value, age, humanAge]);

    // Очищаем форму
    ageInput.value = '';
    petType.checked = false;
}

function showHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';

    history.forEach(([petType, age, humanAge]) => {
        const petName = petType === 'dog' ? 'собаке' : 'кошке';
        const result = `Вашей ${petName} ${age}. На человеческий возраст ей ${humanAge}.`;
        
        const historyItem = document.createElement('div');
        historyItem.textContent = result;
        historyItem.style.padding = '0.5rem';
        historyItem.style.borderBottom = '1px solid #ddd';
        
        historyDiv.appendChild(historyItem);
    });
}




