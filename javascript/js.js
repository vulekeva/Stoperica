window.onload = function () {

    var sekunde = 00;
    var desetinke = 00;
    var minuti = 00;
    var sati = 00;
    var captureNo =1;
    var splitNo =1;
    var lSplitH, lSplitM,lSplitS,lSplitD;
    lSplitD=0;lSplitS=0;lSplitM=0;lSplitH=0;
    var promeniDesetinke = document.getElementById("desetinke");
    var promeniSekunde = document.getElementById("sekunde");
    var promeniMinute = document.getElementById("minuti");
    var promeniSate = document.getElementById("sati");
    var buttonStart = document.getElementById('button-start');
    var buttonCapture = document.getElementById('button-capture');
    var buttonSplit = document.getElementById('button-split');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;

    buttonStart.onclick = function() {
        if (buttonStart.innerText=="Start"){
            buttonStart.innerText="Pause";
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        }else {
            clearInterval(Interval);
            buttonStart.innerText="Start";
        }


    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        desetinke = "00";
        sekunde = "00";
        minuti = "00";
        sati ="00";
        promeniDesetinke.innerHTML = desetinke;
        promeniSekunde.innerHTML = sekunde;
        promeniMinute.innerHTML=minuti;
        promeniSate.innerHTML=sati;
        buttonStart.innerText="Start";
    }

    buttonCapture.onclick = function(){
        addCapture(captureNo);
    }

    buttonSplit.onclick = function(){
        addSplit(splitNo);
    }

    function startTimer () {
        desetinke++;

        if(desetinke < 9){
            promeniDesetinke.innerHTML = "0" + desetinke;
        }

        if (desetinke > 9){
            promeniDesetinke.innerHTML = desetinke;

        }

        if (desetinke > 99) {
            console.log("sekunde");
            sekunde++;
            promeniSekunde.innerHTML = "0" + sekunde;
            desetinke = 0;
            promeniDesetinke.innerHTML = "0" + 0;
        }

        if (sekunde > 9){
            promeniSekunde.innerHTML = sekunde;
        }

        if (sekunde > 59){
            console.log("minuti");
            minuti++;
            promeniMinute.innerHTML = "0" + minuti;
            sekunde=0;
            promeniSekunde.innerHTML= "0" + 0;
        }

        if (minuti > 9){
            promeniMinute.innerHTML=minuti;
        }

        if (minuti > 59){
            console.log ("sati");
            sati++;
            promeniSate.innerHTML= "0" + sati;
            minuti=0;
            promeniMinute.innerHTML= "0" + 0;
        }

        if(sati>9)
        {
            promeniSate.innerHTML=sati;
        }

    }

    function addCapture(number) {
        var ul = document.getElementById("Capture");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode("Capture "+number+": "+promeniSate.innerHTML+":"+promeniMinute.innerHTML
            +":"+promeniSekunde.innerHTML+":"+promeniDesetinke.innerText));
        ul.appendChild(li);
        captureNo++;
    }

    function addSplit(number){
        var ul = document.getElementById("Split");
        var li = document.createElement("li");
        var d=lSplitD;
        var s=lSplitS;
        var m=lSplitM;
        var h=lSplitH;
        lSplitH=sati;lSplitM=minuti;lSplitS=sekunde;lSplitD=desetinke;
        if (d>lSplitD){
            d=(lSplitD+100) - d;
            s++;
        }
        else d=lSplitD-d;

        if (s>lSplitS){
            s=(lSplitS+60)-s;
            m++;
        }
        else s=lSplitS-s;

        if (m>lSplitM){
            m=(lSplitM+60)-m;
            h++;
        }else m=lSplitM-m;

        h=lSplitH-h;

        li.appendChild(document.createTextNode("Split "+number+": "+h+":"+m
            +":"+s+":"+d));
        ul.appendChild(li);
        splitNo++;
    }


}