export class Queue<T> {
    private elements: T[];

    constructor() {
        this.elements = [];
    }

    enqueue(element: T): void {
        this.elements.push(element);
    }

    dequeue(): T | undefined {
        return this.elements.shift();
    }

    peek(): T | undefined {
        return this.elements[0];
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    size(): number {
        return this.elements.length;
    }

    print(): void {
        console.log(this.elements);
    }
}
