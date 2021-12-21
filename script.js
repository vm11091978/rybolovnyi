// Сообщение для корзины
	let icon = document.querySelector("#icon");
	icon.addEventListener("click", function() {
		if (i == 0) {
			alert("В вашей корзине нет товаров");
		} else {
			alert(message);
		}
	});

// Сообщение при добавлении товара в корзину
	let baskets = document.querySelectorAll("button");
	let i = 0;
	for (let basket of baskets) {
		basket.addEventListener('click', function(event) {
			event.preventDefault();
			i++;
			message = "В вашей корзине товаров: " + i + " шт."; // переменная message - глобальная
			document.querySelector('#basket-window').innerHTML = message;
			alert("Товар добавлен в корзину");
		});
	}

// Всплывающее окно каталога
	let topbar = document.querySelector("#topbar");
	let catalog = document.querySelector("#catalog");
	let tone = document.querySelector('#tone');
	let windov = document.querySelector('.window');
	catalog.addEventListener("click", function() {
		tone.style.visibility = "visible";
		windov.style.display = "flex";
	});

	tone.addEventListener("mouseover", function() {
		tone.style.visibility = "hidden";
		windov.style.display = "none";
	});

// Выпадающее меню
	let p = document.querySelector('.navbar-inner p');
	let del = document.querySelector('.navbar-inner p span');
	let navbar = document.querySelector('.navbar-inner');
	p.addEventListener("click", function() {
		navbar.classList.toggle('navbar-inner-new'); // добавляем абзацу класс;
		del.classList.toggle('delete-new'); // после "МЕНЮ" появляется "крестик"
	});

// Карусели
	let width = 300; // ширина картинки или шаг прокрутки
	let count = 2; // видимое количество изображений
	let element = document.querySelector('.gallery');
//  let style = getComputedStyle(element); // в style лежат все CSS свойства
//  let stroka = style.width;
//  let w = stroka.replace("px", "");
//  let digit = (Number (w) + 20) / width;

function slideshow(buttonPrev, buttonNext, list, listElems, position) {
	buttonPrev.onclick = function() {
	  position += width * count;
	  position = Math.min(position, 0);
	  list.style.marginLeft = position + 'px';
		/* Если лента оказывается в первоначальной позиции: */
		if (position == 0) {
			buttonPrev.style.display = "none";
		}
	  	buttonNext.style.display = "flex";
	};
	buttonNext.onclick = function() {
	  position -= width * count;
	  position = Math.max(position, -width * (listElems.length - (element.offsetWidth + 20) / width)); // последнее передвижение было (listElems2.length - 4)
	  list.style.marginLeft = position + 'px';
	  buttonPrev.style.display = "flex";
		/* Если вся ширина ленты минус начальная позиция её показа в окне оказывается равной ширине окна: */
		if (width * listElems.length + position == element.offsetWidth + 20) {
			buttonNext.style.display = "none";
		}
	};
}

	let button2prev = document.querySelector('.prev2');
	let button2next = document.querySelector('.next2');
	let list2 = document.querySelector('.lenta2');
	let listElems2 = document.querySelectorAll('.lenta2 .cat-img-block2');
	let position2 = 0; // исходное положение ленты прокрутки

slideshow(button2prev, button2next, list2, listElems2, position2);


	let button3prev = document.querySelector('.prev3');
	let button3next = document.querySelector('.next3');
	let list3 = document.querySelector('.lenta3');
	let listElems3 = document.querySelectorAll('.lenta3 .cat-img-block2');
	let position3 = 0; // исходное положение ленты прокрутки

slideshow(button3prev, button3next, list3, listElems3, position3);


	let button4prev = document.querySelector('.prev4');
	let button4next = document.querySelector('.next4');
	let list4 = document.querySelector('.lenta4');
	let listElems4 = document.querySelectorAll('.lenta4 .cat-img-block2');
	let position4 = 0; // исходное положение ленты прокрутки

slideshow(button4prev, button4next, list4, listElems4, position4);