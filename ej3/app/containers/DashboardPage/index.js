import React from 'react';
import { cyan500, cyan600, pink500, pink600, purple500, purple600, orange500, orange600 } from 'material-ui/styles/colors';
import InfoBox from '../../components/dashboard/InfoBox';
import NewOrders from '../../components/dashboard/NewOrders';
import MonthlySales from '../../components/dashboard/MonthlySales';
import BrowserUsage from '../../components/dashboard/BrowserUsage';
import RecentlyProducts from '../../components/dashboard/RecentlyProducts';
import Data from '../../data';
import PageBase from '../../components/PageBase';

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentWillMount() {
    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <PageBase
        navigation="Application / Dashboard"
        noWrapContent
        loading={this.state.loading}
      >
        <h1>Consigna</h1>
        <p>Como a esta altura sabrás, Emi hace entrevistas a los candidatos. Ellos se postulan en alguna bolsa de trabajo, ej ZonaJobs, Bumeran, CompuTrabajo, etc. y cuando aplican reciben un SMS y un Email invitándolos a una entrevista con Emi.</p>
        <p>Cuando llegan a Emi, les hace una entrevista. Esa entrevista es procesada por un servidor que nosotros llamamos Descartes <a href="https://en.wikipedia.org/wiki/Ren%C3%A9_Descartes" target="_blank">(¿quién era Descartes?)</a> y los candidatos se van clasificando en pre-seleccionados o rechazados.</p>
        <h2>Tus tareas:</h2>
        <ul>
          <li>Pedirle al servidor de Descartes los candidatos.</li>
          <li>Pedirle al back-end qué columnas mostrar (no siempre el selector quiere ver toda la data).</li>
          <li>Visualizar los datos.</li>
        </ul>
        <p>NOTA: ¿cómo saber si Descartes pre-seleccionó a un candidato o lo rechazó? vas a ver en la data que recibas, hay un campo para cada candidato que se llama 'reason'. Si este campo está vacío, quiere decir que el candidato fue pre-seleccionado. Si tiene algo, quiere decir que fue rechazado y ahí está la razón de rechazo (puede tener una o múltiples razones de rechazo, ejemplo 'no cumple edad requerida' y 'salario pretendido fuera de rango').</p>
        <br></br>
        <h2>Segunda parte</h2>
        <p>Una vez visualizada la data, hay una tarea más.</p>
        <p>Si bien Descartes clasifica bien, hay que ir constantemente entrenando y mejorándolo ya que es parte del loop de realimentación de AI.</p>
        <p>Para eso, hay veces que hay que re-clasificar a un candidato. Ese es un proceso manual que hacen los selectores. En base a los resultados que les mostramos en el paso anterior, eligen descartar a mano a un candidato.</p>
        <h1>Tus tareas:</h1>
        <ul>
          <li>En la tabla del paso anterior, va a haber que agregar una columna más, con un botón. Si tocan ese botón, va a haber que reclasificar. Reclasificar puede ser: pasar un rechazado a pre-seleccionado o un pre-seleccionado a rechazado. Pasar un rechazado a pre-seleccionado es fácil, vas a tener que pegarle a un endpoint de la API (simulado, tal cual se simula la traída de candidatos), donde básicamente el campo 'reason' se vacía. <br></br>En cambio, para pasar de un pre-seleccionado a rechazado, vas a tener que 1) pegarle al server y pedirle para cada columna el string que hay que ponerle en el 'reason' 2) dejarle al seleccionador asignarle una o más razones de rechazo (acordate que puede ser rechazado por más de una cosa) 3) y nuevamente pegarle a un endpoint de la API para impactar los cambios (nuevamente, simularlo) y reflejar los cambios en la tabla.</li>
        </ul>
      </PageBase>
    );
  }
}

export default DashboardPage;
