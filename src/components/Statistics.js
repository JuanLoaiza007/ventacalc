import React, { Component } from "react";

class Statistics extends Component {
  render () {
      const { paquetesQueso, paquetesSencillos, masa, medidaMasa, costoPaqueteQueso, costoPaqueteSencillo, costoPorLibraDeMasa} = this.props;
      let costoTotalPaquetesQueso = paquetesQueso * costoPaqueteQueso;
      let costoTotalPaquetesSencillos = paquetesSencillos * costoPaqueteSencillo;
      let costoMasa = 0;
      let cantidadMasa = "";
      let masaLb = 0;
      let masaGr = 0;

      switch (medidaMasa) {
        case "Libras":
          cantidadMasa = masa + " lb"
          masaLb = masa;
          masaGr = masaLb*500;
          costoMasa = masaLb*costoPorLibraDeMasa;
          break;
        case "Kilos":
          cantidadMasa = masa + " kg"
          masaGr = masa*1000;
          masaLb = masaGr/500;          
          costoMasa = masaLb*1500;
          break;
        case "Dinero":
          cantidadMasa = "$" + masa
          costoMasa = masa;
          masaLb = masa/costoPorLibraDeMasa.toFixed(2);
          masaGr = masa*500/costoPorLibraDeMasa.toFixed(2);
          break;
      }

      let mostrarEstadisticasMasa = masaLb !== 0;
      let costoTotal = costoTotalPaquetesQueso + costoTotalPaquetesSencillos + costoMasa;

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
                  <td>${costoTotalPaquetesQueso}</td>
                </tr>
                <tr>
                  <td>Paquetes sencillos</td>
                  <td>{paquetesSencillos}</td>
                  <td>${costoTotalPaquetesSencillos}</td>
                </tr>
                <tr>
                  <td>Masa</td>
                  <td>{cantidadMasa}</td>
                  <td>${costoMasa}</td>
                </tr>
              </tbody>
            </table>
            <div className="text-end m-5">
              <p className="h4 mb-4">Costo total: $ {costoTotal}</p>
              <div id="estadisticasMasa" style={{ display: mostrarEstadisticasMasa ? 'block' : 'none' }}>
                <p className="h5">Libras: {masaLb.toFixed(2)}lb</p>
                <p className="h5">Gramos: {masaGr.toFixed(2)}g</p>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

export default Statistics;

