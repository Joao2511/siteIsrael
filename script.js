document.getElementById('volumeButton').addEventListener('click', function () {
    var video = document.getElementById('backgroundVideo');
    if (video.muted) {
        video.muted = false;
        this.textContent = '🔊';
    } else {
        video.muted = true;
        this.textContent = '🔇';
    }
});
