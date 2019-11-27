import React from 'react';
import './App.css';
import logo from './lyon pic (1).jpg';
import trump from './trump.jpg';
import soup from './food.jpg';
import bonnet from './bonnet.jpg';
import ReactPlayer from 'react-player'

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand">Channel 5</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <form class="form-inline">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link">Nouvelles du Monde<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link">Nouvelles Locale</a>
      </li>
      <li class="nav-item">
        <a class="nav-link">La Meteo Locale</a>
      </li>
    </ul>
    </form>
  </div>
  
</nav>

<div >
  <img src={logo} style={{width:"100%", height:"20em"}}/>
</div>
<div style={{width:"100%", marginLeft:"23em", marginBottom:"5em", marginTop:"4em"}}>
<ReactPlayer url='https://www.youtube.com/watch?v=qvVD2nzj5uw' playing />
</div>
<div class="card-deck">
  <div class="card">
    <img src={trump} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Nouvelles Politique</h5>
      <p class="card-text">Presidente Trump est dans l'eau chaud</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={soup} class="card-img-top" alt="..." style={{height:"57%"}}/>
    <div class="card-body">
      <h5 class="card-title">Section Recommandée</h5>
      <p class="card-text">Diner Idees pour ton famille ce soir</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={bonnet} class="card-img-top" alt="..." style={{height:"57%"}}/>
    <div class="card-body">
      <h5 class="card-title">Charlette Bonnet</h5>
      <p class="card-text">Olympique médaillé Charlotte bonnet, est dans le studio aujourd’hui</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
