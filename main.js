const carApp = {
    data() {
        return {
            maxPrice: 300,
            isModalActive: false,
            ModalContent: "",
            isCkecking: false
        }
    },
    methods: {
        check() {
            this.isCkecking = true;
            const context = snapshot.getContext('2d');
            snapshotZone.width = player.videoWidth;
            snapshotZone.height = player.videoHeight;
            context.drawImage(player, 0, 0, snapshotZone.width, snapshotZone.height)
            Tesseract
                .recognize(snapshotZone, 'eng')
                .then(({ data: { text } }) => {
                    this.isCkecking = false;
                    var results = text.match(/[0-9]{8}/g);
                    if (results != null) {
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
        }
    },
    mounted() {
        // snapshot.style.display = "none";
        // snapshotZone.width = 1078;
        // snapshotZone.height = 1508;
    },
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