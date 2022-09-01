    //paso 1 hacer el array con los objetos
const inmuebles = [
    {
        nombre: 'Casa de campo',
        descripcion: 'Un lugar ideal para descansar de la ciudad.',
        src: 'https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg',
        cuartos: 2,
        metros: 170
    },

    {
        nombre: 'Casa de playa',
        descripcion: 'Despierta tus ideas oyendo el oceano.',
        src: 'https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg',
        cuartos: 2,
        metros: 130
    },

    {
        nombre: 'Casa en el centro',
        descripcion: 'Ten cerca de ti, todo lo que necesitas.',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        cuartos: 1,
        metros: 80
    },

    {
        nombre: 'Casa rodante',
        descripcion: 'Conviertete en nómada sin salir de tu casa.',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        cuartos: 1,
        metros: 6
    },

    {
        nombre: 'Departamento',
        descripcion: 'Desde las alturas todo se ve mejor.',
        src: 'https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg',
        cuartos: 3,
        metros: 200
    },

    {
        nombre: 'Mansión',
        descripcion: 'Vive en la mansión de tus sueños.',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        cuartos: 5,
        metros: 500
    },

]

//paso 2 crear función cargarGaleria con el parametro data y crear una variable llamada galeria para que al momento de recorrer el array se carge una sola ve.
const cargarGaleria = (data) => {
    let galeria = "";

//paso 3 recorrer el array con for y crer el template templateCard
    for (const propiedad of data) {
      const templateCard = 
      `<div class="contenedorTarjeta">
        <div class="propiedad tarjeta">
          <div class="img"
          style="
            background-image: url('${propiedad.src}');
          "
        ></div>
        <section class="card">
          <h4>${propiedad.nombre}</h4>
          
            <div class="cuartosMetros">
              <p>Cuartos: ${propiedad.cuartos}</p>
              <p>Metros: ${propiedad.metros}</p>
            </div>
          <p class="my-3">${propiedad.descripcion}</p>
          <button class="btn">Ver más</button>
        </section>
        </div>
      </div>`;
  
      galeria += templateCard;
    }
    
    //paso 4 crear variable galeriaPropiedades y llamar al selector id galeria-propiedades del html
    const galeriaPropiedades = document.getElementById("galeria-propiedades");
    galeriaPropiedades.innerHTML = galeria;
  };

  //Paso 5 crear función mostrarTotal con el parámetro total, crear la variable spanTotal y llamar al selector id total que está en el html
  const mostrarTotal = (total) => {
    const spanTotal = document.getElementById("total");
    spanTotal.innerHTML = total;
  };

  //paso 6 crear la función filtrar y crear 3 variables para llamar a los selectores id de los input cantidadCuartos, metrosDesde y metrosHasta.
  const filtrar = () => {
    const campoCuartos = document.getElementById("cantidadCuartos").value;
    const cantidadMinima = document.getElementById("metrosDesde").value;
    const cantidadMaxima = document.getElementById("metrosHasta").value;
  
  //paso 7 crear if llamando a las variables del paso 6
    if (!campoCuartos || !cantidadMinima || !cantidadMaxima) {
      alert("Todos los campos son requeridos");
      return;
    }
  
    //paso 8 crear variable filtrado con un array vacio para guardar los datos, si la condición se cumple través de tres criterios cantidad de cuartos, metros mínimos y metros máximos se guardan esos datos en el array filtrado. Además, convertir el tipo de dato string a number
    const filtrado = [];
    for (let inmueble of inmuebles) {
      if (
        inmueble.cuartos <= Number(campoCuartos) &&
        inmueble.metros >= Number(cantidadMinima) &&
        inmueble.metros <= Number(cantidadMaxima)
      ) {
        filtrado.push(inmueble);
      }
    }
    
    //devuelve datos filtrados 
    return filtrado;
  };
  

  // paso 9 crear función init
  const init = () => {
    // Carga elementos por defecto
    cargarGaleria(inmuebles);
    mostrarTotal(inmuebles.length);
  
    // Crear variable para luego llamar al selector id buscar del botón y crear evento
    const btnBuscar = document.getElementById("buscar");
    btnBuscar.addEventListener("click", () => {
      const filtrado = filtrar();
      if (filtrado) {
        cargarGaleria(filtrado);
        mostrarTotal(filtrado.length);
      }
    });
  };
  
  init();
  