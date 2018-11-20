import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

class Parlboll extends Component {
  state = {};
  render() {
    return (
      <div className="parlboll">
        <Zoom cascade>
          <h2>Pärlbollar</h2>
          <div className="grid">
            <div className="ingredients">
              <h5 className="titel">Ingredienser:</h5>
              <ul>
                <li>100 g smör</li>
                <li>1 dl socker</li>
                <li>1 msk vaniljsocker</li>
                <li>3 msk kakao</li>
                <li>3 dl havregryn</li>
                <li>3 msk kallt starkt kaffe</li>
                <li>pärlsocker till garnering</li>
              </ul>
            </div>
            <div className="image">
              <img
                className="rounded mx-auto d-block "
                src={require("../../images/matlada.JPG")}
                alt="bild"
                width="100%"
              />
            </div>
            <div className="instructions">
              <h5 className="titel">Gör så här:</h5>
              <ul>
                <li>Smält smöret och låt puttra en kort stund.</li>
                <li>
                  Rör ihop socker, vaniljsocker, kakao, havregryn, kaffe och
                  smöret.
                </li>
                <li>
                  Forma bollar i valfri storlek. Rulla i pärlsocker och servera
                  till fredagsfikat.
                </li>
              </ul>
            </div>
          </div>
        </Zoom>
      </div>
    );
  }
}

export default Parlboll;
