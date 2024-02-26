/*test codenepal*/



const connexion = document.getElementById("connexion"),
		creation= document.getElementById("registration"),
		aide= document.getElementById("aide"),
		lienaide= document.querySelector(".aide"),
		lienconditions=document.querySelector(".conditions"),
		conditions= document.getElementById("Conditions"),
		mpf=document.querySelector(".mpf"),
		mp= document.getElementById("mot_de_passe_oublie"),
		pwShowHide = document.querySelectorAll(".showHidePw"),
		pwFields = document.querySelectorAll(".password"),
		login = document.querySelector(".login-link"),
	
		iconClose= document.querySelector(".icon-close"),
		iconCloser= document.querySelector(".icon-close-r"),
		iconClosemdp= document.querySelector(".icon-close-mdp"),
		iconCloseaide= document.querySelector(".icon-close-aide"),
		iconCloseconditions= document.querySelector(".icon-close-conditions"),
		
		signUp = document.querySelector(".signup-link");
		
		
		
		
		pwShowHide.forEach(eyeIcon =>{
			eyeIcon.addEventListener("click", ()=>{
				
				pwFields.forEach(pwField=>{
					
					if(pwField.type ==="password") {
						
					pwField.type="text";
					
					pwShowHide.forEach(icon=>{
						 icon.classList.replace("uil-eye","uil-eye-slash")
					})
					
					}else{
						
						pwField.type ="password";
						pwShowHide.forEach(icon=>{
						 icon.classList.replace("uil-eye-slash","uil-eye")
					})
					}
						
						
			})
		})
		})



login.addEventListener("click",()=>{
	connexion.style.display="block";
	navlinksContainer.classList.remove("open");
	hamburgertoggler.classList.remove("open");
	hamburgertoggler.setAttribute("aria-expanded",false)
});


signUp.addEventListener("click",()=>{
	registration.style.display="block";
	navlinksContainer.classList.remove("open");
	hamburgertoggler.classList.remove("open");
	hamburgertoggler.setAttribute("aria-expanded",false)
});

mpf.addEventListener("click",()=>{
	mp.style.display="block";
	navlinksContainer.classList.remove("open");
	hamburgertoggler.classList.remove("open");
	hamburgertoggler.setAttribute("aria-expanded",false)
});


lienaide.addEventListener("click",()=>{
	aide.style.display="block";
	navlinksContainer.classList.remove("open");
	hamburgertoggler.classList.remove("open");
	hamburgertoggler.setAttribute("aria-expanded",false)
});

lienconditions.addEventListener("click",()=>{
	conditions.style.display="block";
	navlinksContainer.classList.remove("open");
	hamburgertoggler.classList.remove("open");
	hamburgertoggler.setAttribute("aria-expanded",false)
});



iconCloseconditions.addEventListener("click",()=>{
conditions.style.display="none"});


iconCloseaide.addEventListener("click",()=>{
aide.style.display="none"});

iconClose.addEventListener("click",()=>{
connexion.style.display="none"});

iconCloser.addEventListener("click",()=>{
registration.style.display="none"});

iconClosemdp.addEventListener("click",()=>{
mp.style.display="none"});



/*liens pour faire apparaitre les div
let bouton_se_connecter =document.getElementById("togg_se_connecter");
let formulaire_de_connexion=document.getElementById("id_connexion");
bouton_se_connecter.addEventListener("click",()=>{if(getComputedStyle(formulaire_de_connexion).display !="none")
{formulaire_de_connexion.style.display="none";} else {formulaire_de_connexion.style.display="block";}})

let bouton_creer_un_compte =document.getElementById("togg_inscription");
let form_inscription=document.getElementById("formulaire_inscription");
bouton_creer_un_compte.addEventListener("click",()=>{if(getComputedStyle(form_inscription).display !="none")
{form_inscription.style.display="none";} else {form_inscription.style.display="block";}})


let bouton_reinitialisation =document.getElementById("togg_mot_de_passe");
let form_oublie=document.getElementById("oublie");
bouton_reinitialisation.addEventListener("click",()=>{if(getComputedStyle(form_oublie).display !="none")
{form_oublie.style.display="none";} else {form_oublie.style.display="block";}})*/


/*bouton fermer

let fermer_co =document.getElementById("fermer");
let formulaire_de_connexion1=document.getElementById("id_connexion");
fermer_co.addEventListener("click",()=>{if(getComputedStyle(formulaire_de_connexion1).display !="none")
{formulaire_de_connexion1.style.display="none";} else {formulaire_de_connexion1.style.display="block";}})




let bouton_fermer_creer_un_compte =document.getElementById("fermer_inscription");
let fermer_inscription=document.getElementById("formulaire_inscription");
bouton_fermer_creer_un_compte.addEventListener("click",()=>{if(getComputedStyle(fermer_inscription).display !="none")
{fermer_inscription.style.display="none";} else {fermer_inscription.style.display="block";}})


let close_reinitialisation =document.getElementById("fermer_reset");
let close_oublie=document.getElementById("oublie");
close_reinitialisation.addEventListener("click",()=>{if(getComputedStyle(form_oublie).display !="none")
{close_oublie.style.display="none";} else {close_oublie.style.display="block";}})*/







const hamburgertoggler = document.querySelector(".hamburger")
const navlinksContainer = document.querySelector (".navlinks-container");

const toggleNav = () => {hamburgertoggler.classList.toggle("open")

const ariatoggle= hamburgertoggler.getAttribute
("aria-expanded")==="true" ? "false" : "true";
hamburgertoggler.setAttribute("aria-expanded",ariatoggle)

navlinksContainer.classList.toggle("open")
}

hamburgertoggler.addEventListener("click",toggleNav);

new ResizeObserver(entries=>{
	if (entries[0].contentRect.width <= 555){
	navlinksContainer.style.transition="transform 0.3s ease-out"
} else{navlinksContainer.style.transition="none"}
}).observe(document.body)

/*caroussel*/
const items = document.querySelectorAll('img');
const nbSlide= items.length;
const suivant=document.querySelector('.right');
const precedant= document.querySelector('.left');
let count=1;

function slideSuivante(){
	
	items[count].classList.remove('active');
	
	
	/*puisque j'ai deux balises images qui me servent de boutons de navigation
	je rajoute donc 2 sur ma dernière image celle censé etre visible*/if(count< nbSlide - 1){
		count++;
	} else {count=1;}
	
	items[count].classList.add('active')
	console.log(count);
}

suivant.addEventListener('click', slideSuivante)/*jusqu'ici tout marche bien mais pour la fonction
précédante rien ne fontionne*/


function slidePrecedante(){
	items[count].classList.remove('active');
	if(count>1){
		count--;
	} else{
		count= nbSlide-1;
	}
	
	items[count].classList.add('active')
}
precedant.addEventListener('click', slidePrecedante)
console.log(count);


/*explication*/
