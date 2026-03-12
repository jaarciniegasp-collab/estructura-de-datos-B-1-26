class MiCard extends HTMLElement{

constructor(){
super();

const shadow = this.attachShadow({mode:"open"});

shadow.innerHTML = `
<style>

.card{
border:1px solid #ccc;
border-radius:8px;
padding:15px;
width:200px;
background:white;
box-shadow:0 2px 5px rgba(0,0,0,0.1);
}

h3{
margin:0;
}

.precio{
color:green;
font-weight:bold;
margin-top:10px;
}

</style>

<div class="card">
<h3>${this.getAttribute("nombre")}</h3>
<p>${this.getAttribute("descripcion")}</p>
<p class="precio">${this.getAttribute("precio")}</p>
</div>

`;
}

}

customElements.define("mi-card", MiCard);