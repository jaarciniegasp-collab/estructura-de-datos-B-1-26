const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");

  const productos = [
    {titulo: "", desc: "", imagen: ""},
    {titulo: "", desc: "", imagen: ""},
    {titulo: "", desc: "", imagen: ""}
  ];

  productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    contenedor.appendChild(clon);
  });

