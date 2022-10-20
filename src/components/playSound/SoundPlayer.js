export default class SoundPlayer {
    constructor() {
      this.sounds = {};
      this.context = this.isSupportedByEnvironment() ?
        this.createContext() : null;
    }
    
    isSupportedByEnvironment() {
      return 'AudioContext' in window || 'webkitAudioContext' in window;
    }
    
    createContext() {
       const AudioContext = window.AudioContext || window.webkitAudioContext;
       return new AudioContext(); // Make it crossbrowser
    }
    
    setVolume(percentage) {
      if (!this.context) {
        return;
      }
      
       const gainNode = this.context.createGain();
       
      gainNode.gain.value = percentage / 100; // 1 = 100%
    }
    
    addSound(name, base64AudioBuffer) {
      this.sounds[name] = base64AudioBuffer;
    }
    
    base64ToArrayBuffer(base64) {
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes.buffer;
    }
    
    playSoundFromAudioBuffer(audioBuffer) {
      if (!this.context) {
        throw new Error('Cannot play audio buffer. Missing context.');
      }
      
      const source = this.context.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(this.context.destination);
      
      source.start();
    }
    
    playSoundFromBase64EncodedAudioBuffer(encodedAudio) {
      let yodelBuffer = void 0;
  
      return Promise.resolve(encodedAudio)
          .then(this.base64ToArrayBuffer)
          .then(arrayBuffer => {
            return this.context.decodeAudioData(
              arrayBuffer, audioBuffer => {
                yodelBuffer = audioBuffer;
              }, error =>
              console.error(error)
            )})
          .then(
            x => this.playSoundFromAudioBuffer(x),
          );
    }
    
    isIOSDevice(){
      return !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    }
    
    unlockSound() {
      if (!this.context) {
        return false;
      }
      
      if (this.isIOSDevice()) {
        const buffer = this.context.createBuffer(1, 1, 22050);
        const source = this.context.createBufferSource();
  
        source.buffer = buffer;
        source.connect(this.context.destination);
  
        source.start ? source.start(0) : source.noteOn(0);
      }
    }
    
    play(name) {
      if (!this.context) {
        return false;
      }
  
      const soundToPlay = this.sounds[name];
  
      if (!soundToPlay) {
        throw new Error('Could not find sound by name ' + name + '.');
      }
  
      this.playSoundFromBase64EncodedAudioBuffer(
        soundToPlay,
      ).finally(
        this.unlockSound
      );
    }
  }