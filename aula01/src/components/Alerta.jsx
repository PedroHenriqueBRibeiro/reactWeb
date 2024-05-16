export default function AlertButton() {
const alerta = () => {
  alert("Alerta!");
}


return (
  <button onClick={alerta}>
    Clique para exibir o alerta
  </button>
);

}
