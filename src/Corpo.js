import Sidebar from "./SideBar";
import Esquerda from "./Esquerda";

export default function Corpo() {
  return (
    <div class="corpo">
      <Esquerda />
      <Sidebar />
    </div>
  );
}
