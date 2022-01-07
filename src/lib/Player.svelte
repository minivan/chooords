<script lang="ts">
import * as Tone from 'tone'
const synth = new Tone.Synth().toDestination();


function playmusic() {
  synth.triggerAttackRelease("C4", "8n");
}
</script>

<div class="player">
  hello
  <button on:click={playmusic}>playmusic</button>
</div>

<style>
  
</style>
