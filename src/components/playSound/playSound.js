import SoundPlayer from "./SoundPlayer";
import {sound_page, sound_CoinSpend, sound_blop, sound_coinGain, ingredDrop01, ingredDrop02, ingredDrop03, ingredDrop04, craftPotion, splash, sound_useBlessing, sound_useCurse, jukebox00, jukebox01, jukebox02 ,jukebox03, jukebox04, jukebox05, freeze} from "./sounds/soundCollection"

const soundPlayer = new SoundPlayer();

soundPlayer.setVolume(100);

// Encode audio as Bas64 here: https://base64.guru/converter/encode/audio

soundPlayer.addSound('coinSpend', sound_CoinSpend());
soundPlayer.addSound('page', sound_page())
soundPlayer.addSound('blop', sound_blop())
soundPlayer.addSound('coinGain', sound_coinGain())

soundPlayer.addSound('ingredDrop01', ingredDrop01())
soundPlayer.addSound('ingredDrop02', ingredDrop02())
soundPlayer.addSound('ingredDrop03', ingredDrop03())
soundPlayer.addSound('ingredDrop04', ingredDrop04())

soundPlayer.addSound('craftPotion', craftPotion())
soundPlayer.addSound('splash', splash())
soundPlayer.addSound('blessing', sound_useBlessing())
soundPlayer.addSound('curse', sound_useCurse())
soundPlayer.addSound('freeze', freeze())

soundPlayer.addSound('jukebox00', jukebox00())
soundPlayer.addSound('jukebox01', jukebox01())
soundPlayer.addSound('jukebox02', jukebox02())
soundPlayer.addSound('jukebox03', jukebox03())
soundPlayer.addSound('jukebox04', jukebox04())
soundPlayer.addSound('jukebox05', jukebox05())


export function playSound(name) {
  soundPlayer.play(name);
}