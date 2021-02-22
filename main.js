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
            context.drawImage(player, 0, 0, snapshotZone.width, snapshotZone.height);
            Tesseract
                .recognize(snapshotZone, 'eng')
                .then(({ data: { text } }) => {
                    // console.log(text);
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
                });

            // const scheduler = Tesseract.createScheduler();
            // const worker1 = Tesseract.createWorker();
            // const worker2 = Tesseract.createWorker();
            // const worker3 = Tesseract.createWorker();
            // const worker4 = Tesseract.createWorker();

            // const rectangles = [{
            //         left: 0,
            //         top: 0,
            //         width: snapshotZone.width / 2,
            //         height: snapshotZone.height / 2,
            //     },
            //     {
            //         left: snapshotZone.width / 2,
            //         top: 0,
            //         width: snapshotZone.width / 2,
            //         height: snapshotZone.height / 2,
            //     },
            //     {
            //         left: 0,
            //         top: snapshotZone.height / 2,
            //         width: snapshotZone.width / 2,
            //         height: snapshotZone.height / 2,
            //     },
            //     {
            //         left: snapshotZone.width / 2,
            //         top: snapshotZone.height / 2,
            //         width: snapshotZone.width / 2,
            //         height: snapshotZone.height / 2,
            //     },
            // ];


            // (async() => {
            //     await worker1.load();
            //     await worker2.load();
            //     await worker3.load();
            //     await worker4.load();
            //     await worker1.loadLanguage('eng');
            //     await worker2.loadLanguage('eng');
            //     await worker3.loadLanguage('eng');
            //     await worker4.loadLanguage('eng');
            //     await worker1.initialize('eng');
            //     await worker2.initialize('eng');
            //     await worker3.initialize('eng');
            //     await worker4.initialize('eng');
            //     await worker1.setParameters({
            //         tessedit_char_whitelist: '0123456789',
            //     });
            //     await worker2.setParameters({
            //         tessedit_char_whitelist: '0123456789',
            //     });
            //     await worker3.setParameters({
            //         tessedit_char_whitelist: '0123456789',
            //     });
            //     await worker4.setParameters({
            //         tessedit_char_whitelist: '0123456789',
            //     });
            //     scheduler.addWorker(worker1);
            //     scheduler.addWorker(worker2);
            //     scheduler.addWorker(worker3);
            //     scheduler.addWorker(worker4);
            //     const results = await Promise.all(rectangles.map((rectangle) => (
            //         scheduler.addJob('recognize', snapshotZone, { rectangle })
            //     )));
            //     console.log(results.map(r => r.data.text));
            //     await scheduler.terminate();
            // })();

            // (async() => {
            //     await worker1.load();
            //     await worker2.load();
            //     await worker3.load();
            //     await worker4.load();
            //     await worker1.loadLanguage('eng');
            //     await worker2.loadLanguage('eng');
            //     await worker3.loadLanguage('eng');
            //     await worker4.loadLanguage('eng');
            //     await worker1.initialize('eng');
            //     await worker2.initialize('eng');
            //     await worker3.initialize('eng');
            //     await worker4.initialize('eng');
            //     await worker1.setParameters({
            //         tessedit_char_whitelist: '0123456789',
            //     });
            //     await worker2.setParameters({
            //         tessedit_char_whitelist: '0123456789',
            //     });
            //     await worker3.setParameters({
            //         tessedit_char_whitelist: '0123456789',
            //     });
            //     await worker4.setParameters({
            //         tessedit_char_whitelist: '0123456789',
            //     });
            //     scheduler.addWorker(worker1);
            //     scheduler.addWorker(worker2);
            //     scheduler.addWorker(worker3);
            //     scheduler.addWorker(worker4);
            //     /** Add 10 recognition jobs */
            //     const results = await Promise.all(Array(4).fill(0).map(() => (
            //         scheduler.addJob('recognize', snapshotZone)
            //     )))
            //     console.log(results);
            //     await scheduler.terminate(); // It also terminates all workers.
            // })();
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