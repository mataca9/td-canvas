class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue {
    queue = [];

    constructor() {
        this.queue = [];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    enqueue(element, priority) {
        const qElement = new QElement(element, priority);
        for (let i = 0; i < this.queue.length; i++) {
            if (this.queue[i].priority > qElement.priority) {
                this.queue.splice(i, 0, qElement);
                return;
            }
        }

        this.queue.push(qElement);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        return this.queue.shift();
    }
    
    front () {
        if (this.isEmpty()) {
            return null;
        }

        return this.queue[0];
    }

    rear() {
        if (this.isEmpty()) {
            return null;
        }

        return this.queue[this.queue.length - 1];
    }

    print() {
        console.log(this.queue);
    }
}