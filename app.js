let vid_player = document.querySelector('.video')
let playBtn = document.querySelector('#play')
let stopBtn = document.querySelector('#stop')

playBtn.addEventListener('click', () => {
    vid_player.play()
})

stopBtn.addEventListener('click', () => {
    vid_player.pause()
})