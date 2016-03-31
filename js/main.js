var formAnswer = {
	daDiv: function(daTag, idContainer, daClass ) {
		var div = document.createElement(daTag);
		div.id = idContainer;
		div.className = daClass;
		document.body.appendChild(div);
	},
	daH1: function(daTag, daText) {
		var h1 = document.createElement(daTag);
		h1.innerHTML = daText;
		container.insertBefore(h1, null);
	},
	daForm: function(daTag, idForm, daClass) {
		var form = document.createElement(daTag);
		form.id = idForm;
		form.className = daClass;
		form.method = 'post';
		form.action = '#';
	    container.insertBefore(form, null);
	},
	daP: function(daTag, idP, daText) {
		var daP = document.createElement(daTag);
		daP.id = idP;
		daP.innerHTML = daText;
		answerId.insertBefore(daP, null);
	},
	daLabel: function(daTag, daCheckbox) {
		var daLabel = document.createElement(daTag);
		daLabel.innerHTML = daCheckbox;
		answerId.insertBefore(daLabel, null);
	},
	daButton: function(daTag, daClass, daType, daValue) {
		var daButton = document.createElement(daTag);
		daButton.className = daClass;
		daButton.type = daType;
		daButton.value = daValue;
		answerId.insertBefore(daButton, null);
	},
};
formAnswer.daDiv('div', 'container', 'da-container');
formAnswer.daH1('h1', 'Тест по программированию');
formAnswer.daForm('form', 'answerId', 'da-form-answer');
// Вопросы
var num = 1, number = 1, answer = 1;
for (i = 0; i < 3; i++) {
	formAnswer.daP("p", 'answerIdP', number + '. Вопрос №' + number );
	number++;
	for (x = 0; x < 3; x++) {
		formAnswer.daLabel('label', '<input type="checkbox" name="answer-' + answer + '" value="answer-' + answer + '-' + num + '" >Вариант ответа №' + num + '</br>');
		num++;
	}
	num = 1;
	answer++;
};
formAnswer.daButton('input', 'da-button', 'submit', "Проверить мои результаты");











