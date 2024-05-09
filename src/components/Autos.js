import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'

const Autos = () => {
  return (
    <Container className='my-3'>
    <div className='d-inline-flex flex-wrap justify-content-center'>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/toyotacamry.png")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">Toyota Camry</h3>
                  <p class="card-text mb-3">Toyota Camry — автомобиль компании Toyota. Производится на заводах в Японии, США, Австралии, России и Китае, Таиланде.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/toyota-camry'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/lexusls500.jpg")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">Lexus LS500</h3>
                  <p class="card-text mb-3">Lexus LS — полноразмерный седан представительского класса, выпускаемый с 1989 года в качестве флагманской модели Lexus, подразделения компании Toyota.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/lexus-ls500'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/skodaoctavia.jpg")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">Skoda Octavia</h3>
                  <p class="card-text mb-3">Škoda Octavia — автомобиль размерного класса C, производимый чешской компанией Škoda. Выпускается с кузовами лифтбек и универсал, с передним поперечным расположением бензиновых или дизельных двигателей.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/skoda-octavia'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/kiastinger.jpg")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">KIA Stinger</h3>
                  <p class="card-text mb-3">Kia Stinger — спортивный лифтбек класса Gran Turismo, выпускаемый автомобильной компанией Kia Motors.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/kia-stinger'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/ladavesta.jpg")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">LADA Vesta</h3>
                  <p class="card-text mb-3">LADA Vesta — семейство российских автомобилей среднего класса, выпускаемых АвтоВАЗом с 25 сентября 2015 года в кузове седан, и с 2017 года в кузове универсал.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/lada-vesta'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/havaljolion.png")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">HAVAL Jolion</h3>
                  <p class="card-text mb-3">Haval Jolion — компактный кроссовер, выпускаемый с 2020 года компанией Haval — внедорожным подразделением Great Wall Motors.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/haval-jolion'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/volkswagenpolo.jpg")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">Volkswagen Polo</h3>
                  <p class="card-text mb-3">Volkswagen Polo — компактный автомобиль немецкого автоконцерна Volkswagen, находящийся в производстве с 1975 года. Выпускается с кузовами типа хетчбэк, седан, универсал.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/volkswagen-polo'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/geelymanjaro.webp")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">Geely Manjaro</h3>
                  <p class="card-text mb-1">Geely Monjaro — среднеразмерный кроссовер, выпускаемый компанией Geely с 2022 года. Автомобиль представляет собой локализованную версию автомобиля Geely Xingyue L, адаптированную для эксплуатации в российских условиях</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/geely-manjaro'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/ladaniva.jpg")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">LADA Niva</h3>
                  <p class="card-text mb-3">«Нива» — советский и российский автомобиль повышенной проходимости — внедорожник малого класса с несущим кузовом и постоянным полным приводом. Серийно производится с 5 апреля 1977 года.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/lada-niva'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/kiario.jpeg")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">KIA Rio</h3>
                  <p class="card-text mb-3">Kia Rio (Киа Рио) является одним из самых компактных автомобилей класса B, но при этом имеет довольно просторный салон.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/kia-rio'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/audirs6.png")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">Audi RS6 Quattro</h3>
                  <p class="card-text mb-3">Audi RS 6 — спортивный автомобиль выпускаемый подразделением Audi Sport GmbH (ранее quattro GmbH) на платформе Audi A6. Автомобиль выпускается в кузове универсал (Avant).</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/audi-rs6-quattro'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div class="col-12 col-md-10 my-2">
        <div class="card shadow">
          <div class="row g-0 align-items-center">
              <div class="col-md-4">
                <Image src={require("../img/mercedescls.jpg")} width={200} class="card-img rounded-start" alt="Artist desk"/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h3 class="h5 card-title">Mercedes-Benz CLS</h3>
                  <p class="card-text mb-3">Mercedes-Benz CLS-класс — серия люксовых среднеразмерных четырёхдверных купе и универсалов, выпускающихся германской маркой Mercedes-Benz с 2004 года.</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="card-text small"><a href='/autos/mercedes-benz-cls'><Button className='btn btn-secondary'>Перейти</Button></a></span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      


    </div>
    </Container>
  )
}

export default Autos;