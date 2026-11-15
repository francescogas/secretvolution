(function(){var f=document.getElementById('cf');if(!f)return;var m=document.getElementById('cfm');
f.addEventListener('submit',function(e){e.preventDefault();m.textContent='Invio in corso…';
fetch(f.action,{method:'POST',body:new FormData(f),headers:{'Accept':'application/json'}}).then(function(r){
if(r.ok){f.reset();m.style.color='#22c55e';m.textContent='Richiesta inviata. Ti rispondo entro 2 giorni lavorativi.'}
else{throw 0}}).catch(function(){m.style.color='#ef4444';m.textContent='Errore nell\'invio. Scrivimi su WhatsApp o a francesco@secretvolution.com.'})})})();
