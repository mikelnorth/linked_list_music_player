/* ============================================================================
   linked-list.js  (STARTER)
   The data structure. No DOM code lives here.
   Follow the numbered steps. After each one: save, refresh, test in the console.
   ============================================================================ */


/* ---- Step 2: Node ----------------------------------------------------------
   A Node holds one value and knows its two neighbours.
   Both pointers start as null: a brand new node has no neighbours yet.
---------------------------------------------------------------------------- */
class Node {
  constructor(value) {
    // TODO: store `value`
    // TODO: this.prev = null   (the node before this one)
    // TODO: this.next = null   (the node after this one)
  }
}


/* ---- Step 3: DoublyLinkedList --------------------------------------------- */
class DoublyLinkedList {

  /* 3a. The list remembers three places plus a count. */
  constructor() {
    // TODO: this.head    = null   (first node)
    // TODO: this.tail    = null   (last node)
    // TODO: this.current = null   (the cursor: the song that is "playing")
    // TODO: this.size    = 0
  }

  /* 3b. Add a value to the END of the list. O(1) because we keep `tail`.
     Empty list:  the new node is the head, the tail AND the cursor.
     Otherwise:   1. new node looks back at the old tail
                  2. old tail looks forward at the new node
                  3. the new node becomes the tail
     Order matters! Do step 2 before step 3. */
  append(value) {
    // TODO
  }

  /* 3c. Return the value under the cursor, or null if the list is empty. */
  getCurrent() {
    // TODO
  }

  /* 3d. Move the cursor one step forward.
     If current.next is null we are on the tail: wrap to the head.
     Return the new current value. */
  moveNext() {
    // TODO
  }

  /* 3d. Move the cursor one step back.
     If current.prev is null we are on the head: wrap to the tail.
     Return the new current value. */
  movePrev() {
    // TODO
  }

  /* Bonus. Visit every value from head to tail and return them as an array.
     Start at head, follow .next until you hit null. */
  toArray() {
    // TODO
  }
}


/* Leave this alone. It lets `node --test` import the classes.
   In the browser `module` does not exist, so the line is skipped. */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Node, DoublyLinkedList };
}
