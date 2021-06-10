// QUEES
var Qiz = document.querySelector('.Q-I-I');
var Qid = document.querySelector('.Q-I-D');

var Qpages = document.getElementsByClassName('quees-page');
var QpageActual = 0;


if (Qiz) {
    Qiz.classList.add('i-opaco');
    Qiz.addEventListener('click', () => {
        if (QpageActual == 0) {
            QpageActual = 0;
        } else {
            QpageActual -= 1;
        }
        opacarIconoQuees(QpageActual);
        for (let i = 0; i < Qpages.length; i++) {
            Qpages[i].style.display = 'none';
        }
        Qpages[QpageActual].style.display = 'flex';
    });
}
if (Qid) {
    Qid.addEventListener('click', () => {
        if (QpageActual == 2) {
            QpageActual = 2;
        } else {
            QpageActual += 1;
        }
        opacarIconoQuees(QpageActual);
        for (let i = 0; i < Qpages.length; i++) {
            Qpages[i].style.display = 'none';
        }
        Qpages[QpageActual].style.display = 'flex';
    });
}

const opacarIconoQuees = (a) => {
    Qiz.classList.remove('i-opaco');
    Qid.classList.remove('i-opaco');
    if(a == 0){
        Qiz.classList.add('i-opaco');
    }
    if(a == 2){
        Qid.classList.add('i-opaco');
    }
}

//DESARROLLO
var Diz = document.querySelector('.D-I-I');
var Did = document.querySelector('.D-I-D');

var Dpages = document.getElementsByClassName('desa-page');
var DpageActual = 0;


if (Diz) {
    Diz.classList.add('i-opaco');
    Diz.addEventListener('click', () => {
        if (DpageActual == 0) {
            DpageActual = 0;
        } else {
            DpageActual -= 1;
        }
        opacarIconoDesa(DpageActual);
        for (let i = 0; i < Dpages.length; i++) {
            Dpages[i].style.display = 'none';
        }
        Dpages[DpageActual].style.display = 'flex';
    });
}
if (Did) {
    Did.addEventListener('click', () => {
        if (DpageActual == 3) {
            DpageActual = 3;
        } else {
            DpageActual += 1;
        }
        opacarIconoDesa(DpageActual);
        for (let i = 0; i < Dpages.length; i++) {
            Dpages[i].style.display = 'none';
        }
        Dpages[DpageActual].style.display = 'flex';
    });
}

const opacarIconoDesa = (a) => {
    Diz.classList.remove('i-opaco');
    Did.classList.remove('i-opaco');
    if(a == 0){
        Diz.classList.add('i-opaco');
    }
    if(a == 3){
        Did.classList.add('i-opaco');
    }
}

//MARKETING
var Miz = document.querySelector('.M-I-I');
var Mid = document.querySelector('.M-I-D');

var Mpages = document.getElementsByClassName('mark-page');
var MpageActual = 0;


if (Miz) {
    Miz.classList.add('i-opaco');
    Miz.addEventListener('click', () => {
        if (MpageActual == 0) {
            MpageActual = 0;
        } else {
            MpageActual -= 1;
        }
        opacarIconoMark(MpageActual);
        for (let i = 0; i < Mpages.length; i++) {
            Mpages[i].style.display = 'none';
        }
        Mpages[MpageActual].style.display = 'flex';
    });
}
if (Mid) {
    Mid.addEventListener('click', () => {
        if (MpageActual == 3) {
            MpageActual = 3;
        } else {
            MpageActual += 1;
        }
        opacarIconoMark(MpageActual);
        for (let i = 0; i < Mpages.length; i++) {
            Mpages[i].style.display = 'none';
        }
        Mpages[MpageActual].style.display = 'flex';
    });
}

const opacarIconoMark = (a) => {
    Miz.classList.remove('i-opaco');
    Mid.classList.remove('i-opaco');
    if(a == 0){
        Miz.classList.add('i-opaco');
    }
    if(a == 3){
        Mid.classList.add('i-opaco');
    }
}

//APP
var Aiz = document.querySelector('.A-I-I');
var Aid = document.querySelector('.A-I-D');

var Apages = document.getElementsByClassName('app-page');
var ApageActual = 0;


if (Aiz) {
    Aiz.classList.add('i-opaco');
    Aiz.addEventListener('click', () => {
        if (ApageActual == 0) {
            ApageActual = 0;
        } else {
            ApageActual -= 1;
        }
        opacarIconoApp(ApageActual);
        for (let i = 0; i < Apages.length; i++) {
            Apages[i].style.display = 'none';
        }
        Apages[ApageActual].style.display = 'flex';
    });
}
if (Aid) {
    Aid.addEventListener('click', () => {
        if (ApageActual == 5) {
            ApageActual = 5;
        } else {
            ApageActual += 1;
        }
        opacarIconoApp(ApageActual);
        for (let i = 0; i < Apages.length; i++) {
            Apages[i].style.display = 'none';
        }
        Apages[ApageActual].style.display = 'flex';
    });
}

const opacarIconoApp = (a) => {
    Aiz.classList.remove('i-opaco');
    Aid.classList.remove('i-opaco');
    if(a == 0){
        Aiz.classList.add('i-opaco');
    }
    if(a == 5){
        Aid.classList.add('i-opaco');
    }
}