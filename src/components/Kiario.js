import React, {useEffect} from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'
import './commstyle.css'

let acb = 0;

const Kiario = () => {
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
      <h1 className='p-2'>Kia Rio</h1>
      <Carousel data-bs-theme="light">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../components/imgtitle/kr1.png")}
                      alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/kr2.png')}
                      alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/kr3.png')}
                      alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/kr4.png')}
                      alt="Third slide" />
              </Carousel.Item>
          </Carousel>
          
          <h5 className='my-4 fs-2'>Характеристики</h5>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Марка</div>
            <div className='col-md-8'>KIA</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Модель</div>
            <div className='col-md-8'>Rio</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Двигатель</div>
            <div className='col-md-8'>бензин, 1.4, 1.6 л</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Мощность</div>
            <div className='col-md-8'>107, 123 л.с</div>
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
            <div className='col-md-8'>хетчбэк, седан</div>
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
                Штош.... Не знаю, может кому поможет отзыв а может и нет. <br/>

Итак: Пересел с Рио Хэтч 2012 Престиж в октябре 2020 года. Можно сказать сразу после того как вышел рест. Изначально целился на Престиж, но Премиум подвернулся в наличии. На тот момент отдал с допами (Антикор, сингалка, ковры, защита картера) 1 157 000 рублей. <br/>

Сравнивать Хетч 2012 года и Седан 2020 особо смысла нет, разве что салон конечно стал богаче выглядеть. Расскажу о впечатлениях за год эксплуатации. На одометре без малого 26 000. <br/>

Что нравится: <br/>
Коробка 6 ст. Мне очень нравится. На трассе 120-130, обороты около 3000 есть запас на обгон. <br/>
Свет фар: LED - сказка. Не динамический конечно, но все видно отлично. Подсветка поворотов тоже хорошая штука. Очень не хватает омывателей фар. <br/>
Салон: Подогрев всех сидений, лобового, руля - работает великолепно. Поддержка поясницы тоже отлично. Про удобство сидушек не скажу, но на старой рио было можно сказать так же.  <br/>
Автозапуск, багажник с кнопки, датчики давления, круиз - работают четко и без глюков. <br/>
Штатная нави хоть выглядит коряво - но куда надо приводит. <br/>
Внешний вид мне нравится. Глазки новые выглядят весьма привлекательно.<br/>
<br/>
Летом салон из кожзама греется как адовый котел. Затонировал полусферу чтоб дети не готовились в собственном соку - немного полегчало.<br/>
Музыка - выглядит красиво, звучит на трояк. Задние динамики возомнили себя сабами и кроме БУБУБУ ничего не воспроизводят. <br/>
Андроид авто - у меня тупит. Возможно тут претензии к телефону конечно. Ну и отсутствие АА по воздуху - тоже считаю косяк, ибо в младшей комплектации он присутствует.<br/>
<br/>
На 25000 начало что погромыхивать в переднем левом колесе, возможно приходят колодки, узнаю после ТО. <br/>
Начали появляться мелкие но противные сверчки, пока не критично.<br/>
<br/><br/>
ШУМКА - ее как не было на Рио так и нет. Думаю сделать отдельно (Цена вопроса около 35-40 тыр полностью)<br/>
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
                <h5 class="mt-1">Blackwill</h5> 
                <div id="commentContent">
                т.к предмаксималка есть все,кроме кнопки запуска<br/>
фары не лед,но света вполне хватает<br/>
музыку можно по блютуз слушать и звук вполне норм<br/>
динамика для 1,6 вполне себе<br/>
печка хорошо греет<br/>
стоил бы 700 был бы лютейший авто,но за 1,2 (с допами) это за гранью....<br/>
клиренс<br/>
подсветки замка зажигания нет,дико бесит<br/>
ходовка жеская<br/>
в мороз первые минуты сзади звук будто сиденье не застегнуто,возможно полка между багажником и сиденьем либо крышка багажника<br/>
крышка багажника замерзает из-за тающей воды на стекле<br/>
жабо трудно чистить от снега,слишком далеко капот вынесен<br/>
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
                <h5 class="mt-1">Blackwill</h5> 
                <div id="commentContent">
                Плюс это только акпп  и новая машина и 5 лет гарантии. Везет попу из точки а в точку б без проблем, думаю лет 7 провозит. <br/>
Минусов больше чем плюсов. Минус это жесткая подвеска чувствуешь каждый стык. Сиденья жесткие как на газели. Шумоизоляции нет вообще как на тележке едишь не вверьте что ее улучшили в рейсталенге. Только в ней стали мерзнуть ноги, если включаешь стльней печку становиться жарко вверху. Ноги так же мерзнут. Короче машина стоит милион рублей и чувство после покуппки что тебя просто развели на деньги. Конечно сборка лучше лады, но чувствуется что она собрана в России. До этого ездил на правом руле. 
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

export default Kiario