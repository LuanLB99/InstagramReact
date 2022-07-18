import React from "react";

export default function Post(props) {
  const [curtir, setCurtir] = React.useState("curtidaOFF");
  const [icone, setIcone] = React.useState("heart-outline");
  const [salvar, setSalvar] = React.useState("bookmark-outline");
  const [marcar,setMarcar] = React.useState("salvoOFF");


  function curtindo() {
    if (curtir === "curtidaOFF") {
      setCurtir("curtidaON");
      setIcone("heart");
    } else {
      setCurtir("curtidaOFF");
      setIcone("heart-outline");
    }
  }

  function marcaPost() {
    if (marcar === "salvoOFF") {
      setMarcar("salvoON");
      setSalvar("bookmark");
    } else {
      setMarcar("salvoOFF");
      setSalvar("bookmark-outline");
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgusuario} />
          {props.nome}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgpost} onClick={curtindo} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={icone} class={curtir} onClick={curtindo}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={salvar} class={marcar} onClick={marcaPost}></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgcurtida} />
          <div class="texto">
            Curtido por <strong> {props.nomecurtida} </strong> e
            <strong> outras {props.numero} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
