import React, { useEffect } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

let acb = 0;

const Toyotacamry = () => {
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
      <h1 className='p-2'>Toyota Camry</h1>
      <Carousel data-bs-theme="light">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../components/imgtitle/c1.jpg")}
                      alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/c2.jpg')}
                      alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/c3.png')}
                      alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/c4.jpeg')}
                      alt="Third slide" />
              </Carousel.Item>
          </Carousel>
          
          <h5 className='my-4 fs-2'>Характеристики</h5>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Марка</div>
            <div className='col-md-8'>Toyota</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Модель</div>
            <div className='col-md-8'>Camry</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Двигатель</div>
            <div className='col-md-8'>бензин 3.4 л</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Мощность</div>
            <div className='col-md-8'>181 л.с.</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Коробка передач</div>
            <div className='col-md-8'>АКПП</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Привод</div>
            <div className='col-md-8'>передний</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Тип кузова</div>
            <div className='col-md-8'>седан</div>
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
                <h5 class="mt-1">Светлана</h5> 
                <div id="commentContent">
                Я ездила на автомобилях разных марок, как премиальных, так и недорогих. Мой водительский опыт начался с ВАЗ 2106. Потом в гараже побывали разные автомобили престижных и не очень брендов. В итоге прижилась только Тойота, которой я не изменяю уже пять лет. Наверное, я не смогу назвать этот автомобиль идеальным, но при долгой эксплуатации для меня - это оптимальный вариант. Именно поэтому покупаю третью Камри подряд, теперь в свежем кузове.
Внешне новый автомобиль смотрится намного лучше. Угловатость предыдущего немного раздражала, а в варианте 2016 года сохранилась агрессивность, но добавилась плавность форм. Сравнивать с премиальными брендами не буду, просто поставлю плюсик за очевидные улучшения. Только, на мой вкус, хрома можно было бы сделать чуть меньше, учитывая, что на предыдущем кузове он был отвратительного качества - уже в первый год покрывался пятнами. Надеюсь, что сейчас стал более устойчив к реагентам. Кстати, коррозия на хромированных деталях - это гарантийный случай, требуйте замены в течение первых трёх лет.
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
                <h5 class="mt-1">Tvelo</h5> 
                <div id="commentContent">
                Здравствуйте читатели. Я хочу с Вами поделить своим мнением и оставить свой отзыв о автомобиле Toyota Camry 2006 года выпуска.<br></br><br></br>

Мой знакомый приобрел эту машину еще тогда в 2006 году, новенькая, красивая с большими габаритами, очень мощная.<br></br>
<br></br>
Конечно, сейчас уже не выпускают в данном кузове. Появилась новая Camry, более изящная, красивая и очень дорогая.<br></br><br></br>

Но эта модель Toyota Camry 2006 года тоже очень удачная. Единственный минус, что она понемногу устаревает, т. к. автопром всегда в движении и в обновлении.<br></br><br></br>

Мне как-то знакомый дал немного покататься на ней. Первые мои впечатления остались положительные. В сало все сделано удобно, ничего лишнего. Салон мне чем-то напомнил российскую Волгу, такой же большой и вместительный. Что не могу сказать тоже самое о багажном отделении, запросто поместятся два взрослых человека. Toyota Camry 2006 года очень мощная, легко набирает скорость, конечно и транспортный налог дороговат.<br></br>

Однажды, мой знакомый потерял ключи зажигания. Обратился в сервисный центр Toyota, ему сказали, что для восстановления ключа займет около месяца и что стоить будет около 30 тыс. руб. А установить новый замок могут сделать за один рабочий день, только стоить будет 40 тыс. руб. Пришлось ему устанавливать новый замок зажигания.<br></br>

Даже не в самом новом кузове Toyota Camry 2006 года в ремонте дорога. За его 4,5 года эксплуатации и пробегом около 200 тыс. км. машина не ломалась, служила как «золотая рыбка», только и ездил на техническое обслуживание.<br></br>

Японский производитель очень хороший, в производстве качественных и надежных автомобилей.<br></br>
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
                <h5 class="mt-1">Адрин</h5> 
                <div id="commentContent">
                Тойота Камри, вообще без сомнения, классный, данный автомобиль две тысячи <br></br>
одиннадцатого года выпуска.<br></br>
Небольшой отзыв об этой машинке.<br></br>
Купили Камрюху у друзей, несколько лет назад.<br></br>
Данный автомобильный дизайн мне очень нравится, хоть и не новинка, и цвет,
да и вообще нравится.<br></br>
Кстати, многие новинки получаются хуже на вид, чем их предшественники,
это не редкость (и это относится не только к данной марке автомобиля).<br></br>

Багажник достаточно большой, вместительныйй.<br></br>
<br></br>
Для данного автомобиля своего года выпуска в салоне всё стандартно.<br></br>
<br></br>
Я бы отметила, - в салоне довольно-таки уютно, ничего лишнего, зато когда
пассажир на переднем сиденье открывает зеркало в солнцезащитном козырьке,
там зажигается свет, удобненько.<br></br>

А главное - кожаный салон, - приятно.<br></br>
Правда, не редкость потертости на сиденьях ближе к двери, но это тоже не
редкость для кожаного салона, и это всегда при желании можно исправить.<br></br>

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

export default Toyotacamry