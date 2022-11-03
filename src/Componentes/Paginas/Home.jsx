import React from "react";
import homeImage from "../../assets/img/abogados-contrato.jpg";
import scrollImagen from "../../assets/img/image 4.png"
function Home() {
  return (
    <div className="App">
      <div>
        <img src={homeImage} width="100%" height="auto" />
        <h1 className="contenedor centrado eslogan">El mundo de las leyes, reiventado</h1>
      </div>
      <div className="cuadrado contenedor">
        <h1>¿Quienes somos?</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
          quisquam, neque necessitatibus architecto maxime voluptate, qui
          nostrum voluptatum reprehenderit mollitia quod quo eveniet fugit quos
          cum error cumque eum porro?
        </p>
      </div>
      <div className="cuadrado contenedor ">
      <h1>¿Que hacemos?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum at
          consequatur voluptatem id? Excepturi, quam error consequatur dolorem
          deleniti ea repellat, ad amet earum dolor odio corrupti sed aliquam
          voluptas!
        </p>
      </div>
      <div className="cuadrado contenedor ">
        <h1>¿Porque legalVerse?</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
          cum doloremque, non placeat fugit distinctio nostrum corrupti nemo hic
          et quaerat minus? Deserunt, consectetur asperiores laboriosam animi
          provident ad officiis.
        </p>
      </div>
      <div className="rectangulo contenedor">
        <h1>Soluciones de LegalVerse</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus accusamus distinctio corporis assumenda veniam voluptatum minus, cumque molestias, dolores nostrum placeat quam. Consequatur reprehenderit laboriosam aliquam alias incidunt quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia incidunt earum maiores hic, pariatur aspernatur minima vitae perferendis nemo illo officia aperiam accusantium veniam esse debitis corrupti magnam sit velit?</p>
        <img src={scrollImagen} width="20%" height="auto" align="right" />
      </div>
    </div>
  );
}

export default Home;
