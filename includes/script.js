"use script";

///1.Сделать два инпута: в один вводить параметр(число), во втором показывать объем шара при заданном параметре.

const input = document.getElementById("sphereRadius");
input.onchange = (event) => {
  const sphere = document.getElementById("sphereCapacity");
  sphere.value = (4 / 3) * 3.1415 * Math.pow(input.value, 3);
};

/* 
2.Дан элемент #elem. Реализуйте 4 функции:
- Добавьте ему класс www.
- Удалите у него класс www.
- Проверьте наличие у него класса www.
- Добавьте ему класс www, если его нет и удалите - если есть.
 */

function addWWWClassName() {
  document.getElementById("elem").classList.add("www");
}
function removeWWWClassName() {
  document.getElementById("elem").classList.remove("www");
}
function isWWWClassName() {
  return document.getElementById("elem").classList.contains("www");
}
function toggleWWWClassName() {
  document.getElementById("elem").classList.toggle("www");
}

/* 	3. Вставьте элементы массива объектов(id, title, description) в конец ul так, чтобы каждый на каждый объект был свой li. 
Сделайте так, чтобы по нажатию на li - он подсвечивался другим цветом.
Сделайте так, чтобы по нажатию на кнопку внтри li эта li удалялась из разметки.
 */

const arr = [
  {
    id: 1011001,
    title: "Title1",
    desctiption: "Title1qqwertyuiop[]sdfghjkl",
  },
  {
    id: 1011002,
    title: "Title2",
    desctiption: "Title2qqwertyuiop[]sdfghjkl",
  },
  {
    id: 1011003,
    title: "Title3",
    desctiption: "Title3qqwertyuiop[]sdfghjkl",
  },
  {
    id: 1011004,
    title: "Title4",
    desctiption: "Title4qqwertyuiop[]sdfghjkl",
  },
  {
    id: 1011005,
    title: "Title5",
    desctiption: "Title5qqwertyuiop[]sdfghjkl",
  },
  {
    id: 1011006,
    title: "Title6",
    desctiption: "Title6qqwertyuiop[]sdfghjkl",
  },
];

function createButton({ value, text, onClick = () => {} }) {
  const btn = document.createElement("button");
  btn.onclick = onClick;
  btn.textContent = text;
  btn.dataset.value = value;

  return btn;
}

function createListItem({ value, children, onClick = () => {} }) {
  const li = document.createElement("li");
  li.onclick = onClick;
  li.append(
    document.createTextNode(
      value.id + " " + value.title + " " + value.desctiption
    ),
    children
  );
  return li;
}

arr.map((item) => {
  document.getElementById("taskThreeUl").append(
    createListItem({
      value: item,
      children: createButton({
        value: "item.id",
        text: "x",
        onClick: (event) => event.target.parentNode.remove(),
      }),
      onClick: (event) => event.target.classList.add("flashed"),
    })
  );
});

/* 	4. Реализуйте класс Elem, который параметром принимает селектор одного HTML элемента и затем может выполнять с ним различные операции. Класс должен работать следующим образом:
const elem = new Elem('селектор');
elem.html('!'); //запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www
//Должны работать цепочки методов:
elem.html('hello').append('!').prepend('!').attr('class', 'www').attr('title', 'hello'); */

class Elem {
  constructor(selector) {
    this._selector = selector;
  }
  get selector() {
    return this._selector;
  }
  html(value) {
    document.querySelector(this.selector).textContent += value;
    return this;
  }
  append(value) {
    document.querySelector(this.selector).prepend(value);
    return this;
  }
  prepend(value) {
    document.querySelector(this.selector).append(value);
    return this;
  }
  attr(attribute, value) {
    document.querySelector(this.selector).setAttribute(attribute, value);
    return this;
  }
}
