document.getElementById('hitungButton').addEventListener('click', function() {
    const uangInput = document.getElementById('uangInput').value;
    if (uangInput % 25 === 0) {
        const pecahan1000 = Math.floor(uangInput / 1000);
        const sisa1000 = uangInput % 1000;
        const pecahan500 = Math.floor(sisa1000 / 500);
        const sisa500 = sisa1000 % 500;
        const pecahan100 = Math.floor(sisa500 / 100);
        const sisa100 = sisa500 % 100;
        const pecahan50 = Math.floor(sisa100 / 50);
        const sisa50 = sisa100 % 50;
        const pecahan25 = Math.floor(sisa50 / 25);

        const hasil = `Nilai tukaran pecahan uang: 
            Rp1000 x ${pecahan1000}
            Rp500 x ${pecahan500}
            Rp100 x ${pecahan100}
            Rp50 x ${pecahan50}
            Rp25 x ${pecahan25}`;

        document.getElementById('hasil').textContent = hasil;
    } else {
        document.getElementById('hasil').textContent = "Masukkan nilai uang dalam kelipatan 25.";
    }
});

function reset() {
    document.getElementById("uangInput").value = "0"
    document.getElementById("hasil").innerHTML = "0"
}