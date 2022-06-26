import Time from '../time/Time';
import Wather from "../weather/wather";
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize';

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import './App.css';


function App() {
  return (
    <Row>
      <Col m={6} s={12}>
        <Card
          closeIcon={<Icon>Закрыть</Icon>}
          header={<CardTitle image="https://s0.rbk.ru/v6_top_pics/media/img/3/49/755662812689493.jpg" reveal waves="light" />}
          reveal={
            <>
              <p>Краснода́р (до 1920 года — Екатеринода́р) — город на юго-западе России, расположенный на правом берегу реки Кубани, на расстоянии 120 км от Чёрного моря (по автодороге от пос. Джубга), 140 км от Азовского моря (по автодороге от станицы Голубицкой) и 1300 км к югу от Москвы (по автодороге М-4 «Дон»).Перейти к разделу «География» Административный центр Краснодарского края. Вместе с прилегающими сельскими населёнными пунктами образует городской округ город Краснодар.</p>

              <p>Основан в 1792 году как крепость под названием Екатеринодар, присвоенным в честь императрицы Екатерины II, а вернее, по уже сложившейся ещё с Санкт-Петербурга традиции, в честь её тезоименитства, то есть в честь Святой Екатерины. Название крепости изначально употреблено в его прямом значении — «дар Екатерины»: город был заложен на земле, пожалованной Екатериной II Черноморскому казачьему войску. В 1920 году город переименован в Краснодар, где элемент красно- имеет символическое «революционное» значение.</p>

              <p>Крупный экономический и культурный центр Северного Кавказа и Южного федерального округа, центр историко-географической области Кубань. Неофициально именуется столицей Кубани, а также столицей Юга России.</p>

              <p>По предварительным итогам переписи населения по состоянию на 1 октября 2021 года в городе проживало 1 107 000 жителей, при этом по текущей оценке на начало 2022 года (без учёта итогов переписи) Росстат в городе насчитывал 974 319 жителей, в городском округе (с подчинёнными сельскими населёнными пунктами) — 1 062 557 жителей.</p>

              <p>
              Через город протекает Кубань — самая крупная река Северного Кавказа. Её длина — 870 км, а площадь бассейна составляет 57900 км². В районе города Кубань характеризуется извилистостью русла. В процессе своего естественного движения, река прорывала местами шейки петель, спрямляя своё русло. Прежнее колено образовывало пойменные озёра — старицы. Примером старицы является озеро Старая Кубань у Краснодара
              </p>
              
              <figure>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Coat_of_Arms_of_Krasnodar_%28Krasnodar_krai%29.png/150px-Coat_of_Arms_of_Krasnodar_%28Krasnodar_krai%29.png" alt="герб" />
                 <figcaption>Герб города</figcaption>
              </figure>
              <figure>
                 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_Krasnodar_%28Krasnodar_krai%29_%282006%29.png/150px-Flag_of_Krasnodar_%28Krasnodar_krai%29_%282006%29.png" alt="флаг" />
                <figcaption>Флаг города</figcaption>
              </figure>
            </>
          }
          revealIcon={<Icon>Подробнее</Icon>}
          title="Краснодар">
          <Time />
          <Wather/>
        </Card>
      </Col>
    </Row>
  );
}

export default App;
