import React, { Component } from "react";

class Statistics extends Component {
  render () {
      const { paquetesQueso, paquetesSencillos, masa} = this.props;
      let costoPaquetesQueso = paquetesQueso * 4500;
      let costoPaquetesSencillos = paquetesSencillos * 2500;
      let costoMasa = masa * 1500;
      let costoTotal = costoPaquetesQueso + costoPaquetesSencillos + costoMasa;

      return (
        <div className="card m-4 rounded-4">
          <div className="card-header text-center">
            <h4> Resultado </h4>
          </div>
          <div className="card-body">
            <table class="table table-hover">
              <thead> 
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Costo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Paquetes con queso</td>
                  <td>{paquetesQueso}</td>
                  <td>$ {costoPaquetesQueso}</td>
                </tr>
                <tr>
                  <td>Paquetes sencillos</td>
                  <td>{paquetesSencillos }</td>
                  <td>$ {costoPaquetesSencillos}</td>
                </tr>
                <tr>
                  <td>Masa</td>
                  <td>{masa}</td>
                  <td>$ {costoMasa}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-end m-5">
              <p className="h4 mb-4">Costo total: $ {costoTotal}</p>
              <p className="h5">Libras: {masa}lb</p>
              <p className="h5">Gramos: {masa*500}g</p>
            </div>
          </div>
        </div>
      );
  }
}

export default Statistics;

