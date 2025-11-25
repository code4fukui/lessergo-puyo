export class GameSound {
  constructor() {
    const sounds = [];
    for (let i = 1; i <= 2; i++) {
      sounds[i] = document.getElementById("sound_" + i);
    }
    this.sounds = sounds;
  }
  playSound(combo) {
    let n = combo < 3 ? 1 : 2;
    if (n) {
      this.sounds[n].currentTime = 0
      this.sounds[n].play();
    }
  }
}
