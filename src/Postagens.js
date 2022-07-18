import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      imgpost: "assets/img/gato-telefone.svg",
      nome: "meowed",
      imgusuario: "assets/img/meowed.svg",
      imgcurtida: "assets/img/respondeai.svg",
      nomecurtida: "respondeai",
      numero: "101.523"
    },
    {
      imgpost: "assets/img/dog.svg",
      nome: "barked",
      imgusuario: "assets/img/barked.svg",
      imgcurtida: "assets/img/adorable_animals.svg",
      nomecurtida: "adorable_animals",
      numero: "99.159"
    },
    {
      imgpost: "assets/img/Flamengo-Campeao-2020.jpg",
      nome: "Flamengo",
      imgusuario: "assets/img/flamengo-escudo.jpg",
      imgcurtida: "assets/img/mbappe.jpg",
      nomecurtida: "Mbappe",
      numero: "1.947.638"
    }
  ];

  return posts.map((post) => (
    <div class="posts">
      <Post
        imgusuario={post.imgusuario}
        imgpost={post.imgpost}
        nome={post.nome}
        imgcurtida={post.imgcurtida}
        numero={post.numero}
        nomecurtida={post.nomecurtida}
      />
    </div>
  ));
}
