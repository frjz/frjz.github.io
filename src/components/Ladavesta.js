import React, { useEffect } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

let acb = 0;

const Ladavesta = () => {
  useEffect(() => {
    
    // начало скрипта
    

document.getElementById("submit").addEventListener("click", function(event) {
  if(acb == 1){
    acb = 0
    
  }
  else{
    acb = 1
  
  
  event.preventDefault();
  
  let validate = false;

  
  let commentContent = document.getElementById("form-comment"),
      commentHeader = document.getElementById("form-username"),
      commentError = document.getElementById("error-comment"),
      headerError = document.getElementById("error-username");
  
  if(commentHeader.value.length == 0 || commentContent.value.length == 0){
    if(commentHeader.value.length == 0){
      commentHeader.classList.add("is-invalid");
      headerError.classList.remove("invisible");
      headerError.classList.add("visible");
      headerError.innerHTML = "Username field is required.";
    }else{
      commentHeader.classList.remove("is-invalid");
      headerError.classList.remove("visible");
      headerError.classList.add("invisible");
    }
    if(commentContent.value.length == 0){
      commentContent.classList.add("is-invalid");
      commentError.classList.remove("invisible");
      commentError.classList.add("visible");
      commentError.innerHTML = "Comment field is required.";
    }else{
      commentContent.classList.remove("is-invalid");
      commentError.classList.remove("visible");
      commentError.classList.add("invisible");
    }
  }else{
    commentHeader.classList.remove("is-invalid");
    commentContent.classList.remove("is-invalid");
    
    commentError.classList.remove("invisible");
    headerError.classList.remove("invisible");
    commentError.classList.remove("visible");
    headerError.classList.remove("visible");
    console.log('проверка')
    
    let comment = `<div id="comment" class="mt-2">
        <div class="card p-4">
          <!--<button type="button" class="btn btn-sm btn-dark">
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>-->
          <div class="media">
            <img src='https://sun6-20.userapi.com/s/v1/ig1/5m-fx30S9InZ_MED5NdKNRKJiziFYykuHQKsaV1HCgSu5a-Xv4hZXEcsrKg-LOtV23g8vwFY.jpg?size=980x980&quality=96&crop=0,0,980,980&ava=1' class="mr-3 rounded" style="height: 64px; width: 64px;">
              <div class="media-body">
                <h5 class="mt-1">${commentHeader.value}</h5>
                <div id="commentContent">${commentContent.value}</div>
              </div>
            </div>
          </div>
      </div>`;
  
  let comments = document.getElementById("comments");
  comments.innerHTML += comment;
  } } 
});


    //конец скрипта
    console.log('JavaScript код тут!');


  }, []);
  return (
    <Container className='my-3'>
      <h1 className='p-2'>Lada Vesta</h1>
      <Carousel data-bs-theme="light">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../components/imgtitle/lv1.png")}
                      alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/lv2.png')}
                      alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/lv3.png')}
                      alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/lv4.png')}
                      alt="Third slide" />
              </Carousel.Item>
          </Carousel>
          
          <h5 className='my-4 fs-2'>Характеристики</h5>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Марка</div>
            <div className='col-md-8'>LADA</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Модель</div>
            <div className='col-md-8'>Vesta</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Двигатель</div>
            <div className='col-md-8'>бензин, 1.6 л</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Мощность</div>
            <div className='col-md-8'>106 л.с</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Коробка передач</div>
            <div className='col-md-8'>АКПП, механика</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Привод</div>
            <div className='col-md-8'>передний</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Тип кузова</div>
            <div className='col-md-8'>седан, универсал</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Руль</div>
            <div className='col-md-8'>левый</div>
          </div>


          <div class='container card mt-4 p-4'>
  <h1>Comments</h1>
  <span>Bootstrap comment prototype + validation w/o regex</span>
  <hr/>
  <form>
    <div class="form-group">
      <div class="form-group">
        <input type="text" id="form-username" class="form-control mb-1" placeholder="Username"/>
        <span class="text-danger" id="error-username" style={{display: "none"}}></span>
        <textarea class="form-control mt-2" id="form-comment" rows="2" placeholder="Enter your comment here..."></textarea>
        <span class="text-danger" id="error-comment" style={{display: "none"}}></span>
      </div>
    </div>
    <button type="submit" id="submit" class="btn btn-primary float-end mt-3">Comment</button>
  </form>
  <hr/>
  <div id="comments">
  <div id="comment" class="mt-2">
        <div class="card p-4">
          <div class="media">
            <img src='https://sun6-20.userapi.com/s/v1/ig1/5m-fx30S9InZ_MED5NdKNRKJiziFYykuHQKsaV1HCgSu5a-Xv4hZXEcsrKg-LOtV23g8vwFY.jpg?size=980x980&quality=96&crop=0,0,980,980&ava=1' class="mr-3 rounded" style={{height: "64px", width: "64px;"}}/>
              <div class="media-body">
                <h5 class="mt-1">Сергей</h5> 
                <div id="commentContent">
                Отличный автомобиль за свои деньги. За 3 года эксплуатации никаких проблем, только расходники менял. Надёжный, вместительный, недорогой в обслуживании. Средний расход а городе ~11 литров, не мало конечно. Штатной шумоизоляции конечно не хватает, у конкурентов в салоне потише, но не криминал. Зато подвеска просто супер, ямы глотает на ура, за городом по нашим дорогам самое то) В общем если забыть о том что это автоваз, отличный универсал в В-классе. На версии с 1.8 нужно контролировать расход масла.  
                  </div>
              </div>
            </div>
          </div>
      </div>

      <div id="comment" class="mt-2">
        <div class="card p-4">
          <div class="media">
            <img src='https://sun6-20.userapi.com/s/v1/ig1/5m-fx30S9InZ_MED5NdKNRKJiziFYykuHQKsaV1HCgSu5a-Xv4hZXEcsrKg-LOtV23g8vwFY.jpg?size=980x980&quality=96&crop=0,0,980,980&ava=1' class="mr-3 rounded" style={{height: "64px", width: "64px;"}}/>
              <div class="media-body">
                <h5 class="mt-1">Алексей</h5> 
                <div id="commentContent">
                Хорошая машина, вместительный багажник, хорошо держит дорогу, на скорости 180-185 км/ч машина идёт ровно, управление при скорости без напряжения. Большой салон, я крупный человек, но чувствую себя комфортно. За почти год владения машиной из обслуживания только бензин, кроме обязательных 2-ух Т.О.  Ездил на ней межгород Астрахань, Краснодарский край и т.д. (2000-4500 км), проблем нет, усталость не чувствовал. Парктроник хорошо помогает при парковке. Дистанционный запуск ОЧЕНЬ хорош в прохладное и холодное время года + подогрев сидений, выходя из дома садишься в прогретую подготовленную к движению машину. Удобно управлять различными функциями машины используя мультируль (аудио, круиз-контроль, ограничитель скорости). Круиз-контроль помогает немного отдыхать в пути (не надо постоянно нажимать ногой на педаль), а также помогает не превышать скорость движения. В зимнее время хорошо помогает обогрев зеркал, зеркала становятся чистыми от снега и льда очень быстро. Летом в бардачке хорошо охлаждаются напитки (очень вместительный). Также хорошо помогает, при перевозке детей, блокировка дверей и открывания окон задних дверей. Благодаря дополнительным розеткам можно легко заряжать телефоны и т.д. на заднем сидении. Даже при включенном кондиционере не чувствуется потеря мощности, при обгоне в этот момент не надо его выключать. Расход при включенном кондиционере на скорости 140-160 км/ч примерно 6-6,5 литров. 

                  </div>
              </div>
            </div>
          </div>
      </div>

      <div id="comment" class="mt-2">
        <div class="card p-4">
          <div class="media">
            <img src='https://sun6-20.userapi.com/s/v1/ig1/5m-fx30S9InZ_MED5NdKNRKJiziFYykuHQKsaV1HCgSu5a-Xv4hZXEcsrKg-LOtV23g8vwFY.jpg?size=980x980&quality=96&crop=0,0,980,980&ava=1' class="mr-3 rounded" style={{height: "64px", width: "64px;"}}/>
              <div class="media-body">
                <h5 class="mt-1">Павлов Александр</h5> 
                <div id="commentContent">
                Не смотря на то что многие не любят Автоваз и не смотрят в сторону автомобилей Лада а смотрят на конкурентов, но на самом деле это очень достойный конкурентноспособный автомобиль тому же рио и солярису, поло. при том что Веста дешевле. в чем то по хуже а в чем то даже лучше ! Присутствуют конечно детские болячки, которые легко устранимы, конечно не хотелось бы на новом автомобиле уже что то устранять.. но это же для себя делаем, если не беспокоит можно и не трогать! За 60.000км вложений не было никаких вообще! В семье две машины и скажу что на дальняк Веста намного комфортнее чем Рио! Рулится и держится на скорости увереннее! Подвеска отрабатывает мягче чем на рио и поло. А главное дорожный просвет высокий! Там где корейцы чесали днищем, проехал ниразу не чиркнув! Много где проезжал и ниразу не цеплял днищем! 

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

export default Ladavesta