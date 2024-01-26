/*let temps =  9
const timerElement = document.getElementById("message")
      
	  
	  function diminuerTemps() {
        document.getElementById("message").innerHTML =`vous serez redirigé vers la page des résultats dans ${temps} secondes `;
        temps--;
		if(temps === 0){window.location.replace("result_page.php");
		 }
    
    }

function diminuertemps2(){
  setInterval(diminuerTemps,1000)
}

/*-------------------------------------------------
function affichage_equipe(){
  const url2 = "affichage_equipe.php";
fetch(url2)
  .then(resp2 => resp2.text())
  .then(data2 =>{
	  document.getElementById('konami').innerHTML=data2
  })
  
 

  
}




function redirection(){
	
	setTimeout(()=>{let refresh;
let test = document.getElementById('demo')
function stoprefresh (){
  clearInterval(refresh)
}

refresh= setInterval(()=>{
  
  const url = "page_de_jeu.php";
fetch(url)
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    const resultat = data.situation;
if(resultat===1){stoprefresh();affichage_equipe();diminuertemps2()};}
  
  
	)},1000)},3000)

}
*/


/*hamburger*/

const hamburgerToggler = document.querySelector(".hamburger")

const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = e=> {
hamburgerToggler.classList.toggle("open")
navLinksContainer.classList.toggle("open")
}

hamburgerToggler.addEventListener("click",toggleNav)



window.onload = function () {

const text = document.querySelector('h3');
const valider = document.getElementById('envoyer');

function chronometre(){

    const temps_ecoule=Date.now()-1698327535137;
    const temps_ecoule_sec=Math.floor(temps_ecoule/1000);

    const quart_heure= Math.floor(temps_ecoule/(1000*60*15));
    const minutes= Math.floor((temps_ecoule%(1000*60*15))/(1000*60));
    const secondes=Math.floor ((temps_ecoule%(1000*60))/1000);

    document.querySelector(".la_montre").innerHTML =`${minutes}m :  ${secondes}s`;
	
if ((temps_ecoule_sec%(15*60))===0){valider.setAttribute('disabled','true');message.classList.toggle('visible'); /*redirection();*/
}

	
}
chronometre();
    const dure_ecoule= setInterval(()=>{chronometre()},1000);
	
	
	

}

