const carApp = {
    data() {
        return {
            maxPrice: 300,
            timer: null,
            isModalActive: false,
            ModalContent: ""
        }
    },
    methods: {
        check() {
            const context = snapshot.getContext('2d')
            context.drawImage(player, 0, 0, snapshotZone.width, snapshotZone.height)
            Tesseract
                .recognize(snapshotZone, 'eng')
                .then(({ data: { text } }) => {
                    var results = text.match(/[0-9]{8}/g);
                    if (results != null) {
                        clearInterval(this.timer);
                        this.isModalActive = true;
                        this.ModalContent = results[0];
                        results.forEach(r => {
                            if (r.endsWith('011')) {

                            }
                        });
                    }
                })
        },
        closeModal() {
            this.isModalActive = false;
            this.timer = setInterval(this.check, 1000);
        }
    },
    mounted() {
        snapshot.style.display = "none";
        this.timer = setInterval(this.check, 1000);
    },
    beforeUnmount() {
        clearInterval(this.timer);
    }
};

Vue.createApp(carApp).mount("#app");

const snapshotZone = document.getElementById('snapshot');

const player = document.getElementById('player');
navigator.mediaDevices.getUserMedia({
    video: {
        facingMode: 'environment'
    }
}).then(stream => {
    player.srcObject = stream
})