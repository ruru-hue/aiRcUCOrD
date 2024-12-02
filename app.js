        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "青" && number === 0) {
                result = "な";
            } else if (colour === "青" && number === 1) {
                result = "の";
            } else if (colour === "青" && number === 2) {
                result = "こ";
            } else if (colour === "赤" && number === 0) {
                result = "よ";
            } else if (colour === "赤" && number === 1) {
                result = "み";
            } else if (colour === "赤" && number === 2) {
                result = "れ";
            } else if (colour === "黄色" && number === 0) {
                result = "く";
            } else if (colour === "黄色" && number === 1) {
                result = "ど";
            } else if (colour === "黄色" && number === 2) {
                result = "ま";
            }

            document.getElementById('result-output').innerText = "あなたのためのひらがなは…【" + result + "】です";
        }
