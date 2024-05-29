class Node {
  constructor(info) {
    this.info = info;
    this.succ = null;
  }
}

class LinkedList {
  constructor() {
    this.front = null;
  }

  append(info) {
    const newNode = new Node(info);
    if (this.front === null) {
      this.front = newNode;
    } else {
      let current = this.front;
      while (current.succ !== null) {
        current = current.succ;
      }
      current.succ = newNode;
    }
  }

  prepend(info) {
    const newNode = new Node(info);
    newNode.succ = this.front;
    this.front = newNode;
  }

  insertAtPosition(info, position) {
    if (position === 0) {
      this.prepend(info);
      return;
    }

    const newNode = new Node(info);
    let current = this.front;
    let previous = null;
    let index = 0;

    while (current !== null && index < position) {
      previous = current;
      current = current.succ;
      index++;
    }

    if (current === null && index < position) {
      alert("Position out of bounds");
      return;
    }

    newNode.succ = current;
    previous.succ = newNode;
  }

  remove(info) {
    if (this.front === null) return;

    if (this.front.info === info) {
      this.front = this.front.succ;
      return;
    }

    let current = this.front;
    while (current.succ !== null && current.succ.info !== info) {
      current = current.succ;
    }

    if (current.succ !== null) {
      current.succ = current.succ.succ;
    }
  }

  removeFirst() {
    if (this.front === null) {
      alert("The list is empty.");
      return;
    }

    this.front = this.front.succ;
  }

  removeLast() {
    if (this.front === null) {
      alert("The list is empty.");
      return;
    }

    if (this.front.succ === null) {
      this.front = null;
      return;
    }

    let current = this.front;
    while (current.succ.succ !== null) {
      current = current.succ;
    }

    current.succ = null;
  }

  display() {
    let current = this.front;
    let elements = [];
    while (current !== null) {
      elements.push(current.info);
      current = current.succ;
    }
    return elements;
  }
}

const list = new LinkedList();

function addElement() {
  const valueInput = document.getElementById("input-number");
  const value = parseInt(valueInput.value);
  if (!isNaN(value)) {
    list.append(value);
    valueInput.value = "";
    displayList();
  } else {
    alert("You need to introduce a number!");
  }
}

function prependElement() {
  const valueInput = document.getElementById("input-number");
  const value = parseInt(valueInput.value);
  if (!isNaN(value)) {
    list.prepend(value);
    valueInput.value = "";
    displayList();
  } else {
    alert("You need to introduce a number!");
  }
}

function addElementAtPosition() {
  const valueInput = document.getElementById("input-number");
  const positionInput = document.getElementById("input-position");
  const value = parseInt(valueInput.value);
  const position = parseInt(positionInput.value);
  if (!isNaN(value) && !isNaN(position)) {
    list.insertAtPosition(value, position);
    valueInput.value = "";
    positionInput.value = "";
    displayList();
  } else {
    alert("You need to introduce a number and a position!");
  }
}

function removeElement() {
  const valueInput = document.getElementById("input-number");
  const value = parseInt(valueInput.value);
  if (!isNaN(value)) {
    list.remove(value);
    valueInput.value = "";
    displayList();
  } else {
    alert("The list is empty!");
  }
}

function removeFirstElement() {
  list.removeFirst();
  displayList();
}

function removeLastElement() {
  list.removeLast();
  displayList();
}

function displayList() {
  const currentCalculation = document.getElementById("current-list");
  currentCalculation.innerHTML = "";

  const elements = list.display();
  currentCalculation.textContent = elements.join(", ");
}
