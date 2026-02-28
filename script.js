document.getElementById("formData").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let tanggal = document.getElementById("tanggal").value;
    let pesan = document.getElementById("pesan").value;
    let jk = document.querySelector('input[name="jk"]:checked');

    if (!nama || !tanggal || !pesan || !jk) {
        alert("Semua data harus diisi!");
        return;
    }

    let currentTime = new Date().toString();

    document.getElementById("resultBox").innerHTML =
        "Current time : " + currentTime + "<br><br>" +
        "Nama : " + nama + "<br>" +
        "Tanggal Lahir : " + tanggal + "<br>" +
        "Jenis Kelamin : " + jk.value + "<br>" +
        "Pesan : " + pesan;
});