import audios from "./data.js";
import { path } from "./utils.js";
import elements from "./playerElements.js";
// export default {
//     audioData: audios,}
export default {
    // title: document.querySelector(".songTitle NomeMusica"),
    
    //     audioData: audios,
    //     currentAudio: {
    //         title: "7-Pharaon - Guitar",
    //         file: "Audio/violoes/7-Pharaon - Guitar.mp3"
    //     }

    //     start() {
    //         this.currentAudio = this.audioData[0];

    //         this.cover.style = `url ('${path(this.currentAudio.cover)}') no-repeat center`
    //         this.title.innerText = this.data.title;
    //         this.audio.src = path(this.currentAudio.file);

    //         this.audio.addEventListener("ended", () => {
    //             this.audio.src = path(this.audioData[0].file)
    //             this.audio.play();
    //         });
    //     }
    // };
    audioData: audios,
    currentAudio: {},
    currentPlaying: 0,
    // currentAudio: {
    // title: "1-Los Caujaritos",
    //     file: "Violoes/0-Los Caujaritos.mp3"
    isPlaying: false,
    // },

    start() {
        // this.audio.src = path(this.audioData[this.currentAudio.file].file);
        // this.audio.play();
        elements.get.call(this);
        elements.actions.call(this);
        // this.volumeControl.value = 100;
        this.update();
        this.volumeControl.value = 100;
        this.audio.onended = () => this.next();
    },

    play() {
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerText = "pause";
    },

    pause() {
        this.isPlaying = false;
        this.audio.pause();
        this.playPause.innerText = "play";
    },
  
    togglePlayPause() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },

    next() {
        this.currentPlaying++;
        if (this.currentPlaying === this.audioData.length) this.restart();
        this.update();
        this.play();

    },

    back() {
        this.currentPlaying;

        if (this.currentPlaying === -1) {
            this.currentPlaying = this.audioData.length - 1;
        }

        this.pause();
        this.update();
        this.play();
    },

    toggleMute() {
        this.audio.muted = !this.audio.muted;
        if (this.audio.mutes) {
        this.volume.innerText = "volume_low"
        // this.volume.innerHTML = this.audio.muted ? "volume_mute" : "volume_up";
        } else {
            this.volume.innerText = "volume_hight"
        }
    },

    setVolume(value) {
        this.audio.volume = value / 100;
    },
    // setSeekbar(value) {
    //     this.audio.currentTime = value;
    // },
    // timeUpdate() {
    //     this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime);
    //     this.seekbar.value = this.audio.currentTime;
    // },

    update() {
        this.currentAudio = this.audioData[this.currentPlaying];
        this.title.innerText = this.currentAudio.title;
        // this.cover.style.background = `url('${path(
        //     this.currentAudio.cover
        // )}') no-repeat center center / cover`;
        // this.artist.innerText = this.currentAudio.artist;
        elements.createAudioElement.call(this, path(this.currentAudio.file))
        this.seekbar.max = this.audio.duration;
    },

    restart() {
        this.currentPlaying = 0;
        this.update();
        // this.audio.onloadeddata = () => {
        //     elements.actions.call(this);
        // };
    }
};


    // var audio = document.getElementById('audio');
    // var playPauseButton = document.getElementById('playPauseButton');
    // var count = 0;

    // function playPause(){
    //     if(count == 0){
    //         count = 1;
    //         audio.play();
    //         playPauseButton.innerHTML = "Pause &#9208;";
    //     } else{
    //         count = 0
    //         audio.pause();
    //         playPauseButton.innerHTML = "Pause &#9208;";
    //     }
    // }

    // function stop(){
    //     playPause()
    //     audio.pause();
    //     audio.currentTime = 0;
    // }
