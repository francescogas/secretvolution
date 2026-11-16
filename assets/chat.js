(function(){
var WA="https://wa.me/393714556057?text=";
var R=[
{k:/preventiv|offert|listino|prezzi|ordin/i,t:"Preventivi e offerte",u:"/problemi/preventivi-e-offerte/",a:["Un agente AI prepara la bozza dell'offerta da richiesta, listino e offerte passate.","Tu controlli e invii: niente più preventivi la sera e nel weekend.","Si parte da una famiglia di prodotti e da 5-10 offerte recenti."]},
{k:/mail|posta|email|risposte|inbox|riepilog/i,t:"Mail e posta",u:"/problemi/email-e-posta/",a:["L'AI riassume le mail, prepara le risposte ripetitive nel tuo stile e ordina le priorità.","Si parte da 2-3 tipi di mail che ripeti più spesso.","Tu controlli sempre prima dell'invio."]},
{k:/dati|privacy|gdpr|riservat|chatgpt|sicur|cliente/i,t:"Dati e privacy",u:"/problemi/dati-aziendali-e-privacy/",a:["Serve una regola semplice per il team: il Semaforo AI (verde, giallo, rosso).","Si decide cosa si può dare all'AI e con quali strumenti.","È il primo passo prima di qualsiasi automazione."]},
{k:/formaz|team|dipendent|collaborator|corso|impar|competenz/i,t:"Formazione del team",u:"/problemi/formazione-del-team/",a:["Formazione su casi reali del vostro lavoro, non un corso generico.","Si parte da 3 attività che il team ripete ogni settimana.","Online o in presenza, con materiali riutilizzabili."]},
{k:/automat|process|tesorer|scort|magazzin|ripetit|manual|agente|excel/i,t:"Automazione dei processi",u:"/problemi/automatizzare-processi/",a:["Un agente AI svolge un compito completo: legge i dati, applica le regole, prepara il risultato e segnala le eccezioni.","Si parte dal compito ripetitivo con regole più chiare.","Quando serve può lavorare in locale, anche offline."]},
{k:/ai act|normativ|legge|conform|compliance|obblig|dpo/i,t:"AI Act e GDPR",u:"/problemi/ai-act-e-gdpr/",a:["Si parte dall'elenco degli strumenti AI davvero usati in azienda e dai dati che toccano.","Poi regole interne semplici e verifica con il tuo consulente legale.","Non sostituisco un avvocato: metto ordine e preparo il lavoro."]}
];
var G={t:"Parliamone",u:"/#problemi",a:["Dal testo non riesco a capire il tipo di problema, ed è meglio non indovinare.","Scrivimi su WhatsApp in due righe: cosa fai, cosa ti porta via più tempo, con quali strumenti."]};
var msgs=document.getElementById('msgs'),ta=document.getElementById('q'),send=document.getElementById('send');
function esc(s){var d=document.createElement('div');d.textContent=s;return d.innerHTML}
function run(txt){
 txt=(txt||'').trim();if(!txt)return;
 var r=null;for(var i=0;i<R.length;i++){if(R[i].k.test(txt)){r=R[i];break}}
 r=r||G;
 var w=document.getElementById('welcome');if(w)w.style.display='none';var u=document.createElement('div');u.className='b u';u.textContent=txt;msgs.appendChild(u);
 var a=document.createElement('div');a.className='b a';
 var wa=WA+encodeURIComponent("Ciao Francesco, il mio problema: "+txt.slice(0,400));
 a.innerHTML='<h4>'+esc(r.t)+'</h4><ul>'+r.a.map(function(x){return '<li>'+esc(x)+'</li>'}).join('')+'</ul><div class="cta">'+(r===G?'':'<a class="btn sm ghost" href="'+r.u+'">Leggi come si fa</a>')+'<a class="btn sm" target="_blank" rel="noopener" href="'+wa+'">Parlane con Francesco</a></div>';
 msgs.appendChild(a);msgs.scrollTop=msgs.scrollHeight;ta.value='';
}
send.addEventListener('click',function(){run(ta.value)});
ta.addEventListener('keydown',function(e){if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();run(ta.value)}});
document.querySelectorAll('.chip').forEach(function(c){c.addEventListener('click',function(){run(c.dataset.q)})});
})();
