function PaginaInicial() {
  return (
    <div className="container">
      <video autoPlay muted loop className="video-background">
        <source src="https://videos.pexels.com/video-files/4763786/4763786-uhd_4096_2160_24fps.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>
      <div className="content">
        <h1>Bem vindo ao Adventure Trails</h1>
        <div className="intern-content">
          <h2>Explore as melhores trilhas da região</h2>
          <p>Descubra paisagens incríveis e viva grandes aventuras no Adventure Trails. 
            Temos trilhas para todos os níveis de experiência, desde iniciantes até os mais experientes.</p>
        </div>

        </div>
    </div>
  );
}

export default PaginaInicial;
