import { secondsToMinutes } from "./utils.js";

export default {
  get() {
//  this.audio = document.querySelector("audio");
    this.title = document.querySelector(".song_title h6");
    this.playPause = document.querySelector("#play_pause");
    this.nextTrack = document.querySelector("#next");
    this.previousTrack = document.querySelector("#previous");
    this.seekbar = document.querySelector("#seekbar");
    // this.currentDuration = document.querySelector("#current-duration");
    // this.totalDuration = document.querySelector("#total-duration");
    this.vol = document.querySelector("#vol-icon");
    this.volumeControl = document.querySelector("#volume-control");
 },

 createAudioElement(audio) {
     this.audio = new Audio(audio);
 },

 actions() {
   this.playPause.onclick = () => this.togglePlayPause();
  //  this.audio.onended = () => this.next();

   this.vol.onclick = () => this.toggleMute();
   this.volumeControl.oninput = () => this.setVolume(this.volumeControl.value);
   this.volumeControl.onchange = () => 
   this.setVolume(this.volumeControl.value);

   this.seekbar.oninput = () => this.setSeekbar(this.seekbar.value);
   this.seekbar.onchange = () => this.setSeekbar(this.seekbar.value);

  //  this.seekbar.max = this.audio.duration;
  //  this.totalDuration.innerText = secondsToMinutes(this.audio.duration);

  //  this.audio.ontimeupdate = () => this.timeUpdate();

   this.nextTrack.onclick = () => this.next();
   this.previousTrack.onclick = () => this.back();
  },
};