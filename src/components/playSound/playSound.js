
  export function playSound(sound) {
    // Check if the browser supports web audio. Safari wants a prefix.
    if ('AudioContext' in window || 'webkitAudioContext' in window) {

      //////////////////////////////////////////////////
      // Here's the part for just playing an audio file.
      //////////////////////////////////////////////////
      
      var play = function play(audioBuffer) {
        var source = context.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(context.destination);
        source.start();
      };

      var AudioContext = window.AudioContext || window.webkitAudioContext;
      var context = new AudioContext(); // Make it crossbrowser
      var gainNode = context.createGain();
      gainNode.gain.value = 1; // set volume to 100%
      var yodelBuffer = void 0;

      const soundEffect = () => {
        let url = ""

        switch (sound) {
          case "navbar_menu": url = "https://potionquiz.com/sounds/pageturn.mp3"; break;
          case "splash": url = "https://potionquiz.com/sounds/splash.mp3"; break;
          case "coinGain": url = "https://potionquiz.com/sounds/CoinGain.mp3"; break;
          case "nope": url = "https://potionquiz.com/sounds/click_01.mp3"; break;
          case "blop": url = "https://potionquiz.com/sounds/blop.mp3"; break;
          case "blessing": url = "https://potionquiz.com/sounds/UseBlessing.mp3"; break;
          case "curse": url = "https://potionquiz.com/sounds/UseCurse.mp3"; break;
          case "coindrop": url = "https://potionquiz.com/sounds/coindrop.mp3"; break;
          case "jukebox00": url = "https://potionquiz.com/sounds/jukebox00.mp3"; break;
          case "jukebox01": url = "https://potionquiz.com/sounds/jukebox01.mp3"; break;
          case "jukebox02": url = "https://potionquiz.com/sounds/jukebox02.mp3"; break;
          case "jukebox03": url = "https://potionquiz.com/sounds/jukebox03.mp3"; break;
          case "jukebox04": url = "https://potionquiz.com/sounds/jukebox04.mp3"; break;
          case "jukebox05": url = "https://potionquiz.com/sounds/jukebox05.mp3"; break;
          case "Ingdrop1": url = "https://potionquiz.com/sounds/Ingdrop1.mp3"; break;
          case "Ingdrop2": url = "https://potionquiz.com/sounds/Ingdrop2.mp3"; break;
          case "Ingdrop3": url = "https://potionquiz.com/sounds/Ingdrop3.mp3"; break;
          case "Ingdrop4": url = "https://potionquiz.com/sounds/Ingdrop4.mp3"; break;
          case "Ingdrop5": url = "https://potionquiz.com/sounds/Ingdrop5.mp3"; break;
          case "craftPotionSound": url = "https://potionquiz.com/sounds/CraftPotion.mp3"; break;
          case "CoinSpend": url = "https://potionquiz.com/sounds/CoinSpend.mp3"; break;
          default:
            break;
            
        }
        return url
      }
      

      // The Promise-based syntax for BaseAudioContext.decodeAudioData() is not supported in Safari(Webkit).
      window.fetch(soundEffect())
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer,
           audioBuffer => {
              yodelBuffer = audioBuffer;
            },
            error =>
              console.error(error)
          ))
       
  
     
      // Play the file every 2 seconds. You won't hear it in iOS until the audio context is unlocked.
      window.setTimeout(function(){
        play(yodelBuffer);
      }, 100);
      
      

      
   

      //////////////////////////////////////////////////
      // Here's the part for unlocking the audio context, probably for iOS only
      //////////////////////////////////////////////////

      // From https://paulbakaus.com/tutorials/html5/web-audio-on-ios/
      // "The only way to unmute the Web Audio context is to call noteOn() right after a user interaction. This can be a click or any of the touch events (AFAIK – I only tested click and touchstart)."
      
      var unmute = document.getElementById('unmute');
      unmute.addEventListener('click', unlock);

      function unlock() {
        console.log("unlocking")

        // create empty buffer and play it
        var buffer = context.createBuffer(1, 1, 22050);
        var source = context.createBufferSource();
        source.buffer = buffer;
        source.connect(context.destination);

        // play the file. noteOn is the older version of start()
        source.start ? source.start(0) : source.noteOn(0);

        // by checking the play state after some time, we know if we're really unlocked
        setTimeout(function() {
          if((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
            // Hide the unmute button if the context is unlocked.
        //    unmute.style.display = "none";
          }
        }, 0);
      }

      // Try to unlock, so the unmute is hidden when not necessary (in most browsers).
      unlock();
    }
  }

  

