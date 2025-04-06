let clicks = 0;
let multiplicador = 1;
let bossMode = false;
let bossTimer;
let timerInterval;

function clicar() {

        clicks += multiplicador;
        document.getElementById("contador").innerText = clicks;
        document.getElementById("pou").style.transform = "scale(1.1)";
        setTimeout(() => document.getElementById("pou").style.transform = "scale(1)", 100);
}

function comprarMultiplicador(fator, custo) {
    if (clicks >= custo) {
        clicks -= custo;
        multiplicador = fator;
        document.getElementById("contador").innerText = clicks;
    } else {
        alert("Você não tem clicks suficientes!");
    }
}

function comprarRoupa(custo, imagem) {
    if (clicks >= custo) {
        clicks -= custo;
        document.getElementById("contador").innerText = clicks;
        document.getElementById("pou").src = imagem;
        
        if (imagem === 'pou_boss.avif') {
            iniciarBossMode();
        }
    } else {
        alert("Você não tem clicks suficientes!");
    }
}

function iniciarBossMode() {
    if (bossMode) return;
    bossMode = true;
    document.getElementById("timer").style.display = "block";

    alert("A batalha contra o Pou666 começou! Você tem 10 segundos para derrotá-lo! Se você acumular mais de 5000 cliques, você vencerá!");

    document.body.classList.remove("normal-mode");
    document.body.classList.add("boss-mode");

    let tempoRestante = 10;
    document.getElementById("timer").innerText = tempoRestante;
    
    timerInterval = setInterval(() => {
        tempoRestante--;
        document.getElementById("timer").innerText = tempoRestante;
        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    
    bossTimer = setTimeout(() => {
        document.getElementById("timer").style.display = "none";
        if (clicks < 5000) {
            alert("Você perdeu! Pou666 dominou!");
            resetarJogo();
        } else {
            alert("Parabéns! Você derrotou Pou666 e se tornou um Deus!");
            document.getElementById("pou").src = 'pou_7.PNG';
            clicks += 100000;
            document.getElementById("contador").innerText = clicks;
        }
        bossMode = false;
        document.body.classList.remove("boss-mode");
        document.body.classList.add("normal-mode");
    }, 10000);
}

function resetarJogo() {
    document.getElementById("pou").src = 'pou_0.webp';
    clicks = 0;
    multiplicador = 1;
    document.getElementById("contador").innerText = clicks;
}
