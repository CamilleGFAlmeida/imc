import {useState} from 'react';
import './App.css';


export default function App() {
  const [peso, setPeso] = useState('Bom dia'); // aqui passamos 2 valores, o nome que vc vai chamar (peso) e o nome da função que vai trocar o valor e dentro do useState é o valor que você quer que inicie, no caso queremos ele com 0 

  const [altura, setAltura] = useState('');

  const [mensagem, setMensagem] = useState(''); // msg que aparece de acordo com o valor


  // condições 
  function calcularIMC(){
    const alt = altura / 100; 
    const imc = peso / (alt * alt); 

    if (imc < 18.6) {
      setMensagem('Você está abaixo do peso! Seu IMC: ' + imc.toFixed(2))
      }else if (imc >= 18.6 && imc < 24.9) {
      setMensagem('Peso ideal! Seu IMC: ' + imc.toFixed(2)) 
      }else if (imc >= 24.9 && imc < 34.9) {
      setMensagem('Você está levemente acima do peso! Seu IMC: ' + imc.toFixed(2)) 
      }else if (imc > 34.9) {
      setMensagem('Cuidado Obesidade! Seu IMC: ' + imc.toFixed(2)) 
      }
  }

  // estilo 
  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)} // permite a escrita de mais coisas dentro da box 
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
        Calcular
        </button>
      </div>

      <h2>{mensagem}</h2>
    </div>
  )
}