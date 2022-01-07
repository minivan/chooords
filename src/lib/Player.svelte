<script lang="ts">
import * as Tone from 'tone'
import { generateChordTones } from './NoteTools';

const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const now = Tone.now()

let currentlyPlayingNotes = []
function playmusic() {
  currentlyPlayingNotes = generateChordTones("A4", "minor")
  currentlyPlayingNotes.forEach(note => synth.triggerAttack(note, "8n"))
}

function stopmusic() {
  synth.triggerRelease(currentlyPlayingNotes, now)
}
</script>

<div class="player">
  hello
  <button on:click={playmusic}>playmusic</button>
  <button on:click={stopmusic}>stopmusic</button>
</div>

<style>
  
</style>
