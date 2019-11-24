var waktuDimintaEropa = new Date("June 12, 2020 00:00:00").getTime();
var x = setInterval(function waktuEropa() {
    var waktuSekarang = new Date().getTime();
    var jarak = waktuDimintaEropa - waktuSekarang

    var days = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var hours = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((jarak % (1000 * 60)) / 1000);

    document.getElementById("hitungeropa").innerHTML = days + " " + "day, " + hours + ":" + minutes + ":" + seconds; 
}, 1000)

var waktuDimintaPildun = new Date("Nov 12, 2022 00:00:00").getTime();
var x = setInterval(function waktuPildun() {
    var waktuSekarang = new Date().getTime();
    var jarak = waktuDimintaPildun - waktuSekarang

    var days = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var hours = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((jarak % (1000 * 60)) / 1000);

    document.getElementById("hitungpildun").innerHTML = days + " " + "day, " + hours + ":" + minutes + ":" + seconds;
}, 1000)





var x = setInterval(function waktu() {
    
    var tanggal = document.getElementById("tanggal").value;
    var bulan = document.getElementById("bulan").value;
    var tahun = document.getElementById("tahun").value;
    var jam = document.getElementById("jam").value;
    var menit = document.getElementById("menit").value;
    var detik = document.getElementById("detik").value;

    var waktuDiminta = new Date(bulan + tanggal + "," + ` ` + tahun + " " + jam + ":" + menit + ":" + detik).getTime();
    var waktuSekarang = new Date().getTime();
    var jarak = waktuDiminta - waktuSekarang

    var days = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var hours = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((jarak % (1000 * 60)) / 1000);

    document.getElementById("cek").innerHTML = days + " " + "day, " + hours + ":" + minutes + ":" + seconds;

    if (jarak < 0) {
        clearInterval(x);
        document.getElementById("cek").innerHTML = "EVENT WAS EXPIRED"
    }

}, 1000)