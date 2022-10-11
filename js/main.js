function playSound(idAudioElement){
   
    document.querySelector(idAudioElement).play();
}

const listKeys = document.querySelectorAll('.key');

for (let index = 0; index < listKeys.length; index++) {
    
    const key = listKeys[index];
    const instrument = key.classList[1];
    let idAudio = `#sound_${instrument}`;

    key.onclick = function () {
        playSound(idAudio);
    };

    key.onkeydown = function (event){

        console.log('event: ' + event.key);
        console.log('value: ' + event.value);
        if (event.key > 0 &&  event.key < 10){

            switch (event.key){
                case '7':
                    idAudio = '#sound_key_pom';
                    break;
                case '8':
                    idAudio = '#sound_key_clap';
                    break;
                case '9':
                    idAudio = '#sound_key_tim';
                    break;
                case '4':
                    idAudio = '#sound_key_puff';
                    break;
                case '5':
                    idAudio = '#sound_key_splash';
                    break;
                case '6':
                    idAudio = '#sound_key_toin';   
                    break;
                case '1':
                    idAudio = '#sound_key_psh';
                    break;
                case '2':
                    idAudio = '#sound_key_tic';
                    break;
                case '3':
                    idAudio = '#sound_key_tom';
                    break;
            }

            console.log('idAudio: ' + idAudio);
            key.classList.add('active');
            playSound(idAudio);
            // idAudio = "";
          

        }

       key.onkeyup = function() {

        key.classList.remove('active');

    };
    }
}