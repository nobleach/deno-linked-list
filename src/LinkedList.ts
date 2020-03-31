class Node<T> {
  public data: T;
  public next: Node<T> | null;

  constructor(element: T) {
    this.data = element;
    this.next = null;
  }
}

export class LinkedList<T> {
  private size: number;
  private head: Node<T> | null;

  constructor() {
    this.size = 0;
    this.head = null;
  }

  getSize(): number {
    return this.size;
  }

  add(element: T) {
    // Create a new node of type T
    const node = new Node(element);

    // Create storage to store the node
    let current: Node<T> | null;

    // If we have an empty list, add
    // element and set head pointer
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      // iterate to end of list
      while (current.next) {
        current = current.next;
      }

      // add node to end
      current.next = node;
    }

    // Increment list size
    this.size++;
  }

  insertAt(element: T, index: number) {
    // Don't allow inserting at an index that
    // is off the end of the list
    if (index > 0 && index > this.size) {
      return;
    }

    // Create a new node to store data
    let node = new Node(element);
    let curr: Node<T> | null;

    // Set pointer to the head
    curr = this.head;

    // If we are trying to insert at the
    // beginning of the list
    if (index === 0) {
      // Move head pointer over to next
      node.next = this.head;
      // Set new head pointer to the node
      this.head = node;
    } else {
      let i = 0;
      let prev: Node<T> | null = null;

      while (i < index) {
        i++;
        prev = curr;
        if (curr !== null) {
          curr = curr.next;
        }
      }

      // Add element
      node.next = curr;
      if (prev !== null) {
        prev.next = node;
      }
    }

    // Increment list size
    this.size++;
  }

  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += `${curr.data} `;
      curr = curr.next;
    }

    return `{ ${str}}`;
  }

}
