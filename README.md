# Linked List Music Player

A tiny music player UI driven by a hand-written **doubly linked list**. The
playlist is the list, the three buttons move a `current` cursor along it, and
the text at the top always shows the song under the cursor.

Plain HTML, CSS and JavaScript. No frameworks, no build step, no dependencies.

```
starter/    follow along in class: HTML and CSS done, JavaScript has numbered TODOs
solution/   the finished version
```

## Students: how to follow along

1. Download this repo (green **Code** button, **Download ZIP**) or `git clone` it.
2. Open `starter/index.html` in your browser (double-click it, or use the VS Code
   *Live Server* extension so the page refreshes on save).
3. Open `starter/linked-list.js` and follow the numbered steps in the comments.
   After each step: save, refresh, and test in the DevTools console.
4. Then open `starter/app.js` and wire the buttons.
5. Run `node --test` inside the `starter` folder any time. The tests fail until
   the data structure is finished, then turn green.

When it works, copy your `starter` folder into a new repo named
`linked_list_music_player`, push it to GitHub, and submit the URL.

## Buttons

| Button | What it does |
| --- | --- |
| Previous | Moves the cursor to `current.prev`. At the first song it wraps to the last. |
| Play / Pause | Toggles the playing state and relabels the display (`Playing: ...` vs `Paused: ...`). |
| Next | Moves the cursor to `current.next`. At the last song it wraps to the first. |

Open the DevTools console and try `playlist.moveNext()`, `playlist.getCurrent()`
and `playlist.toArray()`. The list is exposed as `window.playlist`.

## Files (same in both folders)

```
index.html           the page: a text display, three buttons, a playlist strip
style.css            layout and look only
linked-list.js       Node + DoublyLinkedList (append, moveNext, movePrev, getCurrent, toArray)
app.js               wires the list to the buttons and the display
linked-list.test.js  tests for the data structure, run with `node --test`
```

## How the data structure works

```
         prev ◄──────── prev ◄──────── prev
 null ◄── [ A ] ◄──────► [ B ] ◄──────► [ C ] ──► null
 head      next ────────► next ────────► next      tail
             ▲
          current
```

- `Node { value, prev, next }` holds one song and two pointers.
- `DoublyLinkedList` keeps `head`, `tail`, `current` and `size`.
- `append(value)` adds to the end in O(1) because `tail` is tracked.
- `moveNext()` and `movePrev()` move the cursor one pointer hop: O(1). When the
  pointer is `null` (the end of the list) they wrap to `head` or `tail`.
- `getCurrent()` returns the value under the cursor, or `null` for an empty list.

## Tests

```
cd solution   # or starter
node --test
```

Uses Node's built-in test runner (Node 18+). Nothing to install.

## Stretch goals

- `addSong(title)` input that appends and re-renders the playlist strip.
- `removeCurrent()` that unlinks the current node and moves the cursor to a neighbour.
- Keyboard shortcuts: left/right arrows for Previous/Next, space for Play/Pause.
- Show the artist too: store `{ title, artist }` objects instead of strings.
