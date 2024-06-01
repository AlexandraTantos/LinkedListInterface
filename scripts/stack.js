const stack = [];

function push() {
  const inputValue = document.getElementById("input-number").value;
  if (inputValue !== "") {
    stack.push(inputValue);
    displayStack();
  }
}

function removeElement() {
  let removedElement;
  if (document.getElementById("current-stack")) {
    removedElement = pop();
  } else if (document.getElementById("current-queue")) {
    removedElement = dequeue();
  }

  if (removedElement !== null) {
    alert("Removed element: " + removedElement);
  }
}

function peek() {
  if (stack.length > 0) {
    const topElement = stack[stack.length - 1];
    alert("Top element of stack: " + topElement);
  } else {
    alert("Stack is empty");
  }
}

function pop() {
  if (stack.length > 0) {
    const poppedElement = stack.pop();
    displayStack();
    return poppedElement;
  } else {
    alert("Stack is empty");
    return null;
  }
}

function displayStack() {
  const stackDisplay = document.getElementById("current-stack");
  stackDisplay.innerHTML = stack.join(", ");
}

// Queue
const queue = [];

function enqueue() {
  const inputValue = document.getElementById("input-queue").value;
  if (inputValue !== "") {
    queue.push(inputValue);
    displayQueue();
  }
}

function dequeue() {
  if (queue.length > 0) {
    const dequeuedElement = queue.shift();
    displayQueue();
    return dequeuedElement;
  } else {
    alert("Queue is empty");
    return null;
  }
}

function peekQueue() {
  if (queue.length > 0) {
    const frontElement = queue[0];
    alert("Front element of queue: " + frontElement);
  } else {
    alert("Queue is empty");
  }
}

function displayQueue() {
  const queueDisplay = document.getElementById("current-queue");
  queueDisplay.innerHTML = queue.join(", ");
}
