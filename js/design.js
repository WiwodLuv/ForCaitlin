
  


  function pm(){
      date = new Date();
      h = date.getHours();
      waktu = "AM";
      if(h > 12){
        h = h - 12;
        waktu = "PM";
    }
    var naon = waktu;

    document.getElementById('pm').innerText = naon;
    document.getElementById('pm').textContent = naon;
  }
 




  var c = 0;
  function clik(){
    if(c == 0){
    document.getElementById('bok').style.display = "block"
    document.getElementById('themeSwitch').style.display =  "block"
    c = 1
    }
    else{
      document.getElementById('bok').style.display = "none"
      document.getElementById('themeSwitch').style.display = "none"
      c = 0
    }
  }
  function musik(){
    if(c == 0){
    document.getElementById('musik').style.display = "block"
    c = 1
    }
    else{
      document.getElementById('musik').style.display = "none"
      c = 0
    }
  }
  function gantitema(){
    if(c == 0){
    document.getElementById('tema').style.display =  "block"
    c = 1
    }
    else{
      document.getElementById('tema').style.display = "none"
      c = 0
    }
  }


  
  

  function saran(){
    var search = document.getElementById("saran").value;
    var url = "https://api.whatsapp.com/send?phone=6281574999858&text="+search
    if(search==""){
        alert("isi dulu tong")
        document.getElementById('link')
    }
    else{
        window.location.href = url;
    }
}
function sarantutup(){
  if(c == 0){
  document.getElementById('saranbox').style.display = "block"
  c = 1
  }
  else{
    document.getElementById('saranbox').style.display = "none"
    c = 0
  }
}
function makelink(){
  var search = document.getElementById("cari").value;
  var suc = document.getElementById("cari").value;
  var url = "https://www.google.com/search?q="+search
  var youtube = "https://youtube.com"
  var facebook = "https://facebook.com"
  var instagram = "https://instagram.com"
  var nekopoi = "https://nekopoi.care"
  var github = "https://github.com"
  var terjemah = "https://translate.google.com/"
  var home = "index.html"
  if(search==""){
      alert("isi dulu tong")
      document.getElementById('link')
  }
  else if(search=="youtube" && suc=="ucup"){
      window.location.href = youtube;
  }
  else if(search=="Youtube"){
    window.location.href = youtube;
  }
  else if(search=="Terjemah"){
    window.location.href = terjemah;
  }
  else if(search=="Translate"){
    window.location.href = terjemah;
  }
  else if(search=="terjemah"){
    window.location.href = terjemah;
  }
  else if(search=="translate"){
    window.location.href = terjemah;
  }
  else if(search=="Nekopoi"){
    alert('sebaiknya anda memakai VPN')
    window.location.href = nekopoi
  }
  else if(search=="nekopoi"){
    alert('sebaiknya anda memakai VPN')
    window.location.href = nekopoi
  }
  else if(search=="musik"){
    document.getElementById('musik').style.display = "block"
  }
    else if(search=="Musik"){
    document.getElementById('musik').style.display = "block"
  }
  else if(search=="facebook"){
      window.location.href = facebook;
  }
  else if(search=="Facebook"){
    window.location.href = facebook;
  }
  else if(search=="dafa"){
      window.location.href = "https://www.facebook.com/dafa.prasetya.31?ref=bookmarks";
  }
  else if(search=="Instagram"){
      window.location.href = instagram;
  }
  else if(search=="Github"){
    window.location.href = github;
  }
  else if(search=="particle effect"){
    window.location.href = "https://github.com/VincentGarreau/particles.js/";
  }
  else if(search=="Kontol"){
    alert("kasar lu, KELUAR!")
    window.location.href = home;
  }
  else if(search=="Ganti"){
    document.getElementById('tema').style.display =  "none"
  }
  else if(search=="Ganti "){
    document.getElementById('tema').style.display =  "block"
  }
  else if(search=="Fitur"){
    document.getElementById('bok').style.display =  "block"
  }
  else if(search=="Saran"){
    document.getElementById('saranbox').style.display =  "block"
  }
  else{
      window.location.href = url;
  }
}

document.addEventListener("click", function(kkk){
  const body = document.getElementById('luv')
  body.addEventListener('click', function(kkk){
    let x = kkk.offsetX
    let y = kkk.offsetY

    let ripples = document.createElement('span')
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples)
    setTimeout(() => {
      ripples.remove()
    },2000)
  })
})
ingat();
  function inget(){
    date = new Date();
    jam = date.getHours()
    waktu = "malam cintaqu"
    

 
    if(jam == 0){
      waktu = "Tidur"
    }

    if(jam >= 1){
      waktu = "Tiduur!!"
    }
    if(jam == 6){
      waktu = "Sleep"
    }
    if(jam >= 5){
      waktu = "Pagiii"
    }
    if(jam >= 8){
      waktu = "Mabar yuk"
    }
    if(jam >= 10){
      waktu = "Selamat pagi menjelang siang^^"
    }
    if(jam >= 12){
      waktu = "panas"
    }
    if(jam >= 13){
      waktu = "ayo kita ratakan pochinki"
    }
    if(jam == 15){
      waktu = "Mambar  Skuy santuy"
    }
    if(jam >= 16){
      waktu = "hayyuk mambar cuk"
    }
    if(jam >= 18){
      waktu = "Mabar lah tapi jangan lupakan belajar"
    }
    if(jam == 19){
      waktu = "Luvyuuuu"

    }
    if(jam >= 20){
      waktu = "Yo mambar"
    }
    if(jam >= 22){
      waktu = "Mambar"
    }
    if(jam == 23){
      waktu = "1 Match lagi yok"
    }


    var oon = waktu
    var jjam = jam
    document.getElementById("test").innerText = jjam;
    document.getElementById("test").textContent = jjam;
    document.getElementById("inget").innerText = oon;
    ///document.getElementById("inget").textContent = oon;
}
inget();


var p = 'prstya'
const quotes = [
  {
    "quote": "Lopyuu",
    "source": "WiwodOtsutsuki"
  },
  {
    "quote": "Selamat Ulang Tahun Beb",
    "source": "WiwodOtsutsuki"
    },
  {
    "quote": "Mabar Yuk",
    "source": "WiwodOtsutsuki"
  },
  {
    "quote": "Lopyuuuuuuu",
    "source": ">////<"
  },
]
  
function randomQuote(){
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `${random.quote}`;
  source.innerText = random.source;
}
  
setInterval(randomQuote, 2000);



function showTime(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }
  
  else if(h > 12){
      h = h - 12;
      session = "PM";
  }
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s; 
  
  var time = h + ":" + m + ":" + s ;

  

  

  document.getElementById("jam").innerText = time;
  document.getElementById("jam").textContent = time;
}
setInterval(showTime, 1000);
showTime();

function dafaprstya() {
  
  document.getElementById('dafaprasetya').innerHTML = 'Happy Birthday!!';
  if (window.performance) {
    console.info("Hiii");
  }
  console.info(performance.navigation.type);
  
}
dafaprstya();


function ingat(){
  date = new Date();
  jam = date.getHours()
  waktu = "malam cintaqu"

  if(jam == 0){
    waktu = "CaitlinAmalia"
  }
  if(jam == 22){
    waktu = "Caitlin"
  }
  else{
    waktu = "CSxCait"
  }


  var oon = waktu
  document.getElementById("pengingat").innerText = oon;
  document.getElementById("pengingat").textContent = oon;
}
function ppp(){
  function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  var prstya = document.getElementById("dafaprasetya")
  var penging = document.getElementById("pengingat")
  var pmdw = document.getElementById("pmdanwaktu")
  var dd = document.getElementById("tema")
  var jj = document.getElementById("inget")
  if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    document.getElementById('temah').disabled = true
    
    sleep(3000).then(() => {
      
      
      document.getElementById('temah').setAttribute('checked', 'checked')
      
      
      
      
      
    });
    sleep(3500).then(() => {
      document.getElementById('temah').disabled = true
      document.getElementById('aurora').style.animation = 'fadeout 2.5s'
      document.getElementById("jam").style.animation = 'fadeout 2.5s'
      document.getElementById("ea").style.animation = 'fadeout 2.5s'
      document.getElementById("judul").innerText = '?'
      prstya.style.animation = 'fadeout 2.5s'
      jj.style.animation = 'fadeout 2.5s'
      penging.style.animation = 'fadeout 2.5s'
      
      
      
      
    });
    sleep(6000).then(() => {
      document.getElementById('aurora').style.display = 'none'
      document.getElementById("jam").style.display = 'none'
      document.getElementById("ea").style.display = 'none'
      penging.style.animation = 'typing 5s steps(30, end), blink-caret 30s step-end infinite'
      penging.innerHTML = 'Hi, Caitlin'
      jj.style.display = 'none'
      prstya.style.display = 'none'
      penging.style.whiteSpace = 'nowrap'
      
      
      
    });
    sleep(11000).then(() => {
      prstya.style.display = 'block'
      prstya.innerHTML = 'Do You Want'
      prstya.onclick = function(event){
        window.location.href = "https://api.whatsapp.com/send?phone=6281574999858&text=Yes i want";
      }
      prstya.style.fontSize = '60px'
      penging.style.display = 'none'
      prstya.style.transition = '0s'
      jj.style.transition = '0s'
      jj.style.display = 'none'
      prstya.style.whiteSpace = 'nowrap'
      prstya.style.fontFamily = 'Crush'
      prstya.style.animation = 'typing 5s steps(30, end), blink-caret 30s step-end infinite'
      pmdw.style.position = 'absolute'
      pmdw.style.transform = 'translate(-50%, -50%)'
      pmdw.style.top = '70%'
      
      
      
    });
    sleep(15000).then(() => {
      penging.style.display = 'block'
      penging.innerHTML = 'To Be Mine'
      penging.style.whiteSpace = 'nowrap'
      penging.style.animation = 'typing 5s steps(30, end), blink-caret 30s step-end infinite'
    })
    sleep(20000).then(() => {
      jj.style.display = 'block'
      jj.style.fontSize = '30px'
      jj.innerHTML = '?'
      jj.style.animation = 'typing 5s steps(30, end), blink-caret 30s step-end infinite'
    })
    
    
  } else {
    document.getElementById('dafaprasetya').innerHTML = 'Happy Birthday!!';

  }
}  
ppp();