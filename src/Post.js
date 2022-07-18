import React from "react";

export default function Post() {
  const [curtir, setCurtir] = React.useState("curtidaOFF");
  const [icone, setIcone] = React.useState("heart-outline");

  function curtindo() {
    if (curtir === "curtidaOFF") {
      setCurtir("curtidaON");
      setIcone("heart");
    } else {
      setCurtir("curtidaOFF");
      setIcone("heart-outline");
    }
  }

  const posts = [
    {
      imgpost: "img/gato-telefone.svg",
      nome: "meowed",
      imgusuario: "img/meowed.svg",
      imgcurtida: "img/respondeai.svg",
      nomecurtida: "respondeai",
      numero: "101.523"
    },
    {
      imgpost: "img/dog.svg",
      nome: "barked",
      imgusuario: "img/barked.svg",
      imgcurtida: "img/adorable_animals.svg",
      nomecurtida: "adorable_animals",
      numero: "99.159"
    }
  ];

  return (
    <div class="post">
      {posts.map((post) => (
        <div>
          <div class="topo">
            <div class="usuario">
              <img src={post.imgusuario} onClick={curtindo} />
              {post.nome}
            </div>
            <div class="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div class="conteudo">
            <img src={post.imgpost} />
          </div>

          <div class="fundo">
            <div class="acoes">
              <div>
                <ion-icon
                  name={icone}
                  class={curtir}
                  onClick={curtindo}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div class="curtidas">
              <img src={post.imgcurtida} />
              <div class="texto">
                Curtido por <strong>{post.nomecurtida}</strong> e
                <strong>outras {post.numero} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
