        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "青" && number === 0) {
                result = "小吉";
            } else if (colour === "青" && number === 1) {
                result = "中吉";
            } else if (colour === "青" && number === 2) {
                result = "凶";
            } else if (colour === "赤" && number === 0) {
                result = "中吉";
            } else if (colour === "赤" && number === 1) {
                result = "中吉";
            } else if (colour === "赤" && number === 2) {
                result = "大凶";
            } else if (colour === "黄色" && number === 0) {
                result = "凶";
            } else if (colour === "黄色" && number === 1) {
                result = "大吉";
            } else if (colour === "黄色" && number === 2) {
                result = "中吉";
            }

            document.getElementById('result-output').innerText = "あなたの今週の運勢は【" + result + "】です";
        }
