const calcButton = document.getElementById("calcular");

const convertirASegundos = () => {
  const horaPartida = Number(document.getElementById("hora").value);
  const minutosPartida = Number(document.getElementById("minutos").value);
  const segundosPartida = Number(document.getElementById("segundos").value);
  const tiempo = Number(document.getElementById("tiempo").value);

  const segundosTotales =
    horaPartida * 3600 + minutosPartida * 60 + segundosPartida + tiempo;
  const horasLlegada = Math.floor(segundosTotales / 3600);
  const minutosLlegada = Math.floor(segundosTotales / 60) - horasLlegada * 60;
  const segundosLlegada =
    segundosTotales - horasLlegada * 3600 - minutosLlegada * 60;

  console.log(horasLlegada, minutosLlegada, segundosLlegada);
  alert(`${horasLlegada} : ${minutosLlegada} : ${segundosLlegada}`);
};

calcButton.addEventListener("click", () => convertirASegundos());
