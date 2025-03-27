let clicks = 0;
let multiplicador = 1;
let bossMode = false;
let bossTimer;

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
        
        if (imagem === 'pou_666.avif') {
            iniciarBossMode();
        }
    } else {
        alert("Você não tem clicks suficientes!");
    }
}

function iniciarBossMode() {
    if (bossMode) return;
    bossMode = true;
    alert("Você tem 10 segundos para alcançar 5000 clicks ou perderá!");
    bossTimer = setTimeout(() => {
        if (clicks < 5000) {
            alert("Você perdeu! Pou666 dominou!");
            bossMode = false;
        } else {
            alert("Parabéns! Você derrotou Pou666 e se tornou um Deus!");
            document.getElementById("pou").src = 'pou_god.PNG';
            clicks += 100000;
            document.getElementById("contador").innerText = clicks;
            bossMode = false;
        }
    }, 10000);
}
