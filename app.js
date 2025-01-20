        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "---"; // デフォルトの値

            if (colour === "青" && number === 0) {
                result = "ハンカチ";
            } else if (colour === "青" && number === 1) {
                result = "携帯電話";
            } else if (colour === "青" && number === 2) {
                result = "派手なストラップ";
            } else if (colour === "赤" && number === 0) {
                result = "シャープペンシル";
            } else if (colour === "赤" && number === 1) {
                result = "ポプリ";
            } else if (colour === "赤" && number === 2) {
                result = "マフラー";
            } else if (colour === "黄色" && number === 0) {
                result = "ペンケース";
            } else if (colour === "黄色" && number === 1) {
                result = "チャーム";
            } else if (colour === "黄色" && number === 2) {
                result = "バッジ";
            }

            document.getElementById('result-output').innerText = "あなたのラッキーアイテムは 【" + result + "】です";
        }
