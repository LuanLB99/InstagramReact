import Post from "./Post";

export default function Posts() {
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
