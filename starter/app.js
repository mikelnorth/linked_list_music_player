/* ============================================================================
   app.js  (STARTER)
   Wires the DoublyLinkedList to the page. This is the only file that touches
   the DOM. Pattern for every button: change state, then call render().
   ============================================================================ */

// ---- Step 4a. Build the playlist -------------------------------------------
const SONGS = [
  'Thinking Out Loud',
  'Blinding Lights',
  'Levitating',
  'Bohemian Rhapsody',
  'Hey Jude',
];

// TODO: const playlist = new DoublyLinkedList();
// TODO: append every title in SONGS to the playlist

// Player state that is NOT part of the list: are we playing or paused?
let isPlaying = false;

// ---- Step 4a. Grab the elements we need ------------------------------------
const nowPlayingEl = document.getElementById('nowPlaying');
const playlistEl = document.getElementById('playlist');
const prevBtn = document.getElementById('prevBtn');
const playBtn = document.getElementById('playBtn');
const nextBtn = document.getElementById('nextBtn');

// ---- Step 4b. One function redraws everything from the current state -------
function render() {
  // TODO: const title = playlist.getCurrent();
  // TODO: if title is null, show 'Playlist is empty' and return
  // TODO: nowPlayingEl.textContent = `${isPlaying ? 'Playing' : 'Paused'}: ${title}`
  // TODO: playBtn.textContent = isPlaying ? 'Pause' : 'Play'
  // TODO: renderPlaylist();
}

/* Bonus: draw the whole list as pills and highlight the cursor.
   Walk node by node from playlist.head and compare each node to
   playlist.current (compare the NODES, not the titles). */
function renderPlaylist() {
  playlistEl.innerHTML = '';
  // TODO
}

// ---- Step 4c. Buttons change state, then call render() ---------------------
// TODO: prevBtn click  -> playlist.movePrev(); render();
// TODO: nextBtn click  -> playlist.moveNext(); render();
// TODO: playBtn click  -> flip isPlaying;      render();

// ---- On load: the cursor is already on the first song, so just draw --------
// TODO: render();

// Expose the list so you can poke at it in the DevTools console:
//   playlist.moveNext(); playlist.getCurrent(); playlist.toArray()
// TODO: window.playlist = playlist;
