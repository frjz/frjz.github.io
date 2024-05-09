import React, { useEffect } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

let acb = 0;

const Geelymanjaro = () => {
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
      <h1 className='p-2'>Geely Manjaro</h1>
      <Carousel data-bs-theme="light">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../components/imgtitle/g1.png")}
                      alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/g2.png')}
                      alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/g3.png')}
                      alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/g4.png')}
                      alt="Third slide" />
              </Carousel.Item>
          </Carousel>
          
          <h5 className='my-4 fs-2'>Характеристики</h5>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Марка</div>
            <div className='col-md-8'>Geely</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Модель</div>
            <div className='col-md-8'>Monjaro</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Двигатель</div>
            <div className='col-md-8'>бензин, 2.0 л</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Мощность</div>
            <div className='col-md-8'>238 л.с</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Коробка передач</div>
            <div className='col-md-8'>АКПП</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Привод</div>
            <div className='col-md-8'>4WD</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Тип кузова</div>
            <div className='col-md-8'>кроссовер</div>
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
                <h5 class="mt-1">DOL Сервис</h5> 
                <div id="commentContent">
                <b>Преимущества</b> <br/>
Максимум опций, мощный двигатель, 8ст автомат, отличный полный привод. Чем больше эксплуатирую тем больше нравится.<br/>
<b>Недостатки</b> <br/>
Всё отлично. Без поломок, если знать где брать запчасти , цены вполне адекватные.<br></br>
<b>Дополнительно</b><br/>
После скучного Киа соренто , машина доставляет много эмоций. С непривычки по началу разбегаются глаза. ( органы управления различными опциями на планшетах). Но со временем привыкаешь и всё вполне удобно.
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
                <h5 class="mt-1">Сергей</h5> 
                <div id="commentContent">
                <b>Преимущества</b> <br></br>
Идеальное соотношение цена-качество. Рассматривая покупку нового авто в районе 4 млн - это лучшее предложение.<br></br>
<b>Недостатки</b><br></br>
Предрассудки относительно страны производителя. В остальном особых недостатков нет<br></br>
<b>Дополнительно</b><br></br>
Уверенно держит дорогу, управляется просто идеально. Получаешь огромное удовольствие от вождения.

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
                <h5 class="mt-1">Валерий</h5> 
                <div id="commentContent">
                <b>Преимущества</b><br></br>
Соотношение цена/качество очень привлекательное. Поэтому выбрал эту модель.<br></br>
<b>Недостатки</b><br></br>
Ничего пока не обнаружил, чем автомобиль мог бы удивить меня неприятно. Пока все нравится<br></br>
<b>Дополнительно</b><br></br>
Авто новое. После шумки комфорт заметно вырос. Советую всем, кто хотел бы паркетник по хорошей цене.
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

export default Geelymanjaro