import { midiToNote, noteToMidi, generateChordTones } from "../lib/NoteTools";
import { expect, test } from 'vitest'

test('midiToNote', async() => {
  expect(midiToNote(57)).toBe("A4")
  expect(midiToNote(80)).toBe("Ab6")
})

test('noteToMidi', async() => {
  expect(noteToMidi("A4")).toEqual(57)
})

test('generateChordTones', async() => {
  const tones = generateChordTones("C4", "minor")
  expect(tones).toEqual(["C4", "Eb4", "G4"])
})