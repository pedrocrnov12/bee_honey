import VideoBackground from "../../components/videobg/video";
import React from 'react'

export default function index() {
  return (
    
    <>
    
      <div><VideoBackground /></div>
      <section className="seccion" style={{marginTop:'40vh'}}>
        <img className="img" src="https://images.unsplash.com/photo-1568526381923-caf3fd520382?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80" />
        <img className="img" src="https://www.agroconsultar.com/images/cursoapicultura.jpg" />
        <img className="img" src="https://www.consumer.es/app/uploads/2019/07/img_colmena-3.jpg" />
        <img className="img" src="https://cloudfront-us-east-1.images.arcpublishing.com/elfinanciero/4IFQ6C4CDRWLTMYDU66WSYIYSM.jpg" />
        <img className="img" src="https://informefracto.com/wp-content/uploads/2019/11/1092_kaab_cuatro_cuatro_museo_vivo.jpg" />
        <img className="img" src="https://p4.wallpaperbetter.com/wallpaper/274/846/487/bees-animals-macro-insect-wallpaper-preview.jpg" />
        <img className="img" src="https://thumbs.dreamstime.com/b/apicultor-que-comprueba-la-miel-producida-por-las-abejas-apicultura-o-es-el-mantenimiento-de-colonias-abeja-com%C3%BAnmente-en-152170066.jpg" />
        <img className="img" src="https://i0.wp.com/goula.lat/wp-content/uploads/2021/05/miel.jpg?resize=800%2C535&ssl=1" />
      </section>
      
      <style jsx>{`
          .seccion {
            
            display: flex;
            width: 1550px;
            height:450px;
            margin: 0 auto;
            background-color: transparent; /* Establecí el fondo del contenedor a transparent */
          }
          
          .img {
            width: 0;
            flex-grow: 2;
            object-fit: cover;
            opacity: .9;
            transition: 0.9s ease;
          }
          
          
          .img:hover{
            width: 250px;
            opacity: 1;
            filter: contrast(120%);
          }
      `}</style>
      
    </>
  );
}
