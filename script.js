// Сообщение для корзины
	let icon = document.querySelector("#icon");
	icon.addEventListener("click", function() {
			alert("В вашей корзине нет товаров");
		});

// Сообщение при добавлении товара в корзину
	let baskets = document.querySelectorAll("button");
	for (let basket of baskets) {
			basket.addEventListener('click', function(event) {
				event.preventDefault();
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

	let button2 = document.querySelector('.prev2');
	let list2 = document.querySelector('.lenta2');
	let listElems2 = document.querySelectorAll('.lenta2 .cat-img-block2');
	let position2 = 0; // положение ленты прокрутки
//  let element = document.querySelector('.gallery');
//  let style = getComputedStyle(element); // в style лежат все CSS свойства
//  let stroka = style.width;
//  let w = stroka.replace("px", "");
//  let digit = (Number (w) + 20) / width;
//  let wi = document.querySelector('.gallery').offsetWidth

	document.querySelector('.prev2').onclick = function() {
	  position2 += width * count;
	  position2 = Math.min(position2, 0);
	  list2.style.marginLeft = position2 + 'px';
	};
	document.querySelector('.next2').onclick = function() {
	  position2 -= width * count;
	  position2 = Math.max(position2, -width * (listElems2.length - (document.querySelector('.gallery').offsetWidth + 20) / width)); // последнее передвижение было (listElems2.length - 4)
	  list2.style.marginLeft = position2 + 'px';
	  button2.style.display = "flex";
	};

	let button3 = document.querySelector('.prev3');
	let list3 = document.querySelector('.lenta3');
	let listElems3 = document.querySelectorAll('.lenta3 .cat-img-block2');
	let position3 = 0; // положение ленты прокрутки

	document.querySelector('.prev3').onclick = function() {
	  position3 += width * count;
	  position3 = Math.min(position3, 0);
	  list3.style.marginLeft = position3 + 'px';
	};
	document.querySelector('.next3').onclick = function() {
	  position3 -= width * count;
	  position3 = Math.max(position3, -width * (listElems3.length - (document.querySelector('.gallery').offsetWidth + 20) / width)); // последнее передвижение
	  list3.style.marginLeft = position3 + 'px';
	  button3.style.display = "flex";
	};

	let button4 = document.querySelector('.prev4');
	let list4 = document.querySelector('.lenta4');
	let listElems4 = document.querySelectorAll('.lenta4 .cat-img-block2');
	let position4 = 0; // положение ленты прокрутки

	document.querySelector('.prev4').onclick = function() {
	  position4 += width * count;
	  position4 = Math.min(position4, 0);
	  list4.style.marginLeft = position4 + 'px';
	};
	document.querySelector('.next4').onclick = function() {
	  position4 -= width * count;
	  position4 = Math.max(position4, -width * (listElems4.length - (document.querySelector('.gallery').offsetWidth + 20) / width)); // последнее передвижение
	  list4.style.marginLeft = position4 + 'px';
	  button4.style.display = "flex";       
	};