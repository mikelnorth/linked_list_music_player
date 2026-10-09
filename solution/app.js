/* ============================================================================
   app.js
   Wires the DoublyLinkedList to the page. This is the only file that touches
   the DOM.
   ============================================================================ */

// ---- 1. Build the playlist -------------------------------------------------
const SONGS = [
  'Thinking Out Loud',
  'Blinding Lights',
  'Levitating',
  'Bohemian Rhapsody',
  'Hey Jude',
];

const playlist = new DoublyLinkedList();
SONGS.forEach((title) => playlist.append(title));

// Player state that is NOT part of the list: are we playing or paused?
let isPlaying = false;

// ---- 2. Grab the elements we need ------------------------------------------
const nowPlayingEl = document.getElementById('nowPlaying');
const playlistEl = document.getElementById('playlist');
const prevBtn = document.getElementById('prevBtn');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');

// ---- 3. One function redraws everything from the current state -------------
function render() {
  const title = playlist.getCurrent();

  if (title === null) {
    nowPlayingEl.textContent = 'Playlist is empty';
    playBtn.disabled = true;
    return;
  }

  nowPlayingEl.textContent = `${isPlaying ? 'Playing' : 'Paused'}: ${title}`;
  playBtn.textContent = isPlaying ? 'Pause' : 'Play';

  renderPlaylist();
}

function renderPlaylist() {
  playlistEl.innerHTML = '';

  // Walk the list node by node so we can compare against the cursor itself.
  let node = playlist.head;
  while (node !== null) {
    const li = document.createElement('li');
    li.textContent = node.value;
    if (node === playlist.current) li.classList.add('is-current');
    playlistEl.appendChild(li);
    node = node.next;
  }
}

// ---- 4. Buttons change state, then call render() ---------------------------
prevBtn.addEventListener('click', () => {
  playlist.movePrev();
  render();
});

nextBtn.addEventListener('click', () => {
  playlist.moveNext();
  render();
});

playBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  render();
});

// ---- 5. On load: cursor is already on the first song, so just draw ---------
render();

// Expose the list so you can poke at it in the DevTools console:
//   playlist.moveNext(); playlist.getCurrent(); playlist.toArray()
window.playlist = playlist;
