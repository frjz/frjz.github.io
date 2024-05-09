import React, { useEffect } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

let acb = 0;

const Audirs6quattro = () => {
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
      <h1 className='p-2'>Audi RS6 Quattro</h1>
      <Carousel data-bs-theme="light">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../components/imgtitle/a1.png")}
                      alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/a2.png')}
                      alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/a3.png')}
                      alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/a4.png')}
                      alt="Third slide" />
              </Carousel.Item>
          </Carousel>
          
          <h5 className='my-4 fs-2'>Характеристики</h5>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Марка</div>
            <div className='col-md-8'>Audi</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Модель</div>
            <div className='col-md-8'>RS6 Quattro</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Двигатель</div>
            <div className='col-md-8'>бензин, 4.0 л, гибрид</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Мощность</div>
            <div className='col-md-8'>600 л.с</div>
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
            <div className='col-md-8'>универсал</div>
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
                <h5 class="mt-1">Koresh 150</h5> 
                <div id="commentContent">
                Ну буду кратко, меня честно, удивило что, "рска" показала лучше чем я ожидал. Во владении была 1.5 года, за эти годы ТОЛЬКО краска слезла (ну и колодки того но сейчас не об этом) По сравнению с другими машинами, эта была самая незабываемая. Ну если сравнивать с моей нынешней машиной (BMW m5 f90) это небо и земля. Ну я думаю что мне именно не понравилось, так это шумоизоляция. Не знаю почему, но когда я ехал в деревню, то я слышал ветер у меня в салоне хотя окна закрыты. По поводу динамики всё хорошо. <br/>
По сравнению с прошлой машиной, разгон меня удивил. Прошлая машина была camry в сороковом кузове. Я особо не замерял,на ощущение было как будто очень быстро, но я особо не гоняюсь. <br/> <br/>
В общем все хорошо 

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
                <h5 class="mt-1">Sladky</h5> 
                <div id="commentContent">
                Прошел год владения владения RS-кой. <br/>
Буду краток: машина прекрасна. Красивая, быстрая, дарит массу эмоций! <br/>
Где-то услышал выражение: Если уходя от своей машины ты не оборачиваешься каждый раз, чтобы еще раз окинуть ее взглядом, значит ты купил не ту машину… <br/>
Одним словом, это не про RS6! <br/>
На ней можно ездить спокойно и плавно. Она нормально переносит пробки. Она может с места прыжком набрать 100кмч за 3с … <br/>
А звук выхлопа! Ооооо, это что-то!  <br/>
Из тюнинга: <br/>
Чип Stage2, безкат, даунпайпы. 750лс (сток 580). <br/>
Полный внешний ресталинг машины. Передние матричные фары, передний бампер, задние фары. Только оригинальные запчасти. <br/>
Поставил керамику новую по кругу (изначально стояла сталь). Стали капитально не хватало. Керамика божественна. <br/>
За год поменял 1 ступицу + ступичный. Возможно, это следствие отжига по треку. Нагрелось там всё очень хорошо… Аж все болты на передних колесах открутились. <br/> <br/>

Машиной доволен. Пока езжу каждый день, продавать не собираюсь. <br/>
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
                <h5 class="mt-1">Анатолий</h5> 
                <div id="commentContent">
                Рассматривал для покупки в принципе все легковые авто в 600+ сил . Думал в первую очередь о приобретении BMW M5 .
Но вспомнив опыт владения BMW X5 M competition повторять опыт не захотелось. В первую очередь из-за очень жёсткой подвески которая постоянно заставляет всю машину чуть прыгать или жестко трястись, например при движении по трассе .<br/> <br/>
Других вопросов к Bmw не было от слова совсем . Ну единственное еще тот момент что реально у огромного количества людей в стране именно BMW M, а хотелось чего-то немного менее распространенного на дорогах . <br/>
В общем совершенно случайно обратил внимание на RS Q8 и на RS6 , внимание обратили на себя просто космические, гигантские карбоно-керамические тормоза в 440 мм !!!!
Они безупречны, их всегда просто в избытке ! Единственный минус это их менее информативное ощущение в сравнении с тормозами BMW .<br/>
Но перегреть их нереально , и как только чуть разогреть их все становится на свои места !!! Они просто безупречны , всегда !!! <br/>
Ну в общем , подумав я купил RS6.
Машиной доволен на 100 процентов.<br/>
Она прекрасна ! 
Если хочешь комфорта он есть , она вообще не жесткая , она реально для повседневной езды .
И это при размере шин 285/30/R22 !!!
Подвеска этой машины - магия .
Звук прекрасен , салон очень просторный в сравнении с M5 или же скажем E63 АМГ .<br/>
В общем нареканий нет совсем никаких !!!
Единственное что не нравится - какой-то очень строгий салон.
Нет в нем какой-то изюминки или подчеркнутого стиля RS … не знаю , может уже приелся…
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

export default Audirs6quattro