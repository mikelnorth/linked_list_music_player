/* ============================================================================
   linked-list.js
   The data structure. No DOM code lives here, so this file can be tested in
   Node and reused anywhere.
   ============================================================================ */

/* A Node holds one value and knows its two neighbours. */
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null; // the node before this one
    this.next = null; // the node after this one
  }
}

/* A DoublyLinkedList keeps the two ends plus a cursor called `current`. */
class DoublyLinkedList {
  constructor() {
    this.head = null;    // first node
    this.tail = null;    // last node
    this.current = null; // the cursor: the song that is "playing"
    this.size = 0;
  }

  /* Add a value to the END of the list. O(1) because we keep `tail`. */
  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      // Empty list: the new node is the head, the tail and the cursor.
      this.head = node;
      this.tail = node;
      this.current = node;
    } else {
      node.prev = this.tail;  // 1. new node looks back at the old tail
      this.tail.next = node;  // 2. old tail looks forward at the new node
      this.tail = node;       // 3. the new node is now the tail
    }

    this.size++;
    return node;
  }

  /* Return the value under the cursor, or null if the list is empty. */
  getCurrent() {
    return this.current === null ? null : this.current.value;
  }

  /* Move the cursor one step forward. At the tail, wrap to the head. O(1). */
  moveNext() {
    if (this.current === null) return null;

    if (this.current.next !== null) {
      this.current = this.current.next;
    } else {
      this.current = this.head;
    }

    return this.getCurrent();
  }

  /* Move the cursor one step back. At the head, wrap to the tail. O(1). */
  movePrev() {
    if (this.current === null) return null;

    if (this.current.prev !== null) {
      this.current = this.current.prev;
    } else {
      this.current = this.tail;
    }

    return this.getCurrent();
  }

  /* Visit every value from head to tail. Handy for drawing the list. O(n). */
  toArray() {
    const values = [];
    let node = this.head;
    while (node !== null) {
      values.push(node.value);
      node = node.next;
    }
    return values;
  }
}

/* Let Node (for tests) import these. In the browser `module` does not exist,
   so this line is skipped and the classes are simply globals. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Node, DoublyLinkedList };
}
