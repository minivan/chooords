
const MIDI_NUMBER_TO_NAME = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"]
const ChordTypes = {
  minor: [0, 3, 7],
  major: [0, 4, 7]
}

export function midiToNote(noteMidiIndex: number): string {
  // takes a number (80), and converts that to a note using the dictionary above
  // 60 is middle C (C4)
  const octaves = Math.floor(noteMidiIndex / 12)
  const offset = noteMidiIndex % 12

  return MIDI_NUMBER_TO_NAME[offset] + octaves
}

export function noteToMidi(noteName: string): number {
  const name = noteName.split(/\d/)[0]
  const octave:number = parseInt(noteName.slice(-1))
  return octave * 12 + MIDI_NUMBER_TO_NAME.indexOf(name)
}

export function generateChordTones(rootNote: string, chordType: string):string[] {
  const offsets = ChordTypes[chordType]
  const rootIndex = noteToMidi(rootNote)
  return offsets.map((step) => midiToNote(rootIndex + step) )
} 
