import React, { useEffect } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

let acb = 0;

const Havaljolion = () => {
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
      <h1 className='p-2'>Haval Jolion</h1>
      <Carousel data-bs-theme="light">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../components/imgtitle/h1.png")}
                      alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/h2.png')}
                      alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/h3.png')}
                      alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/h4.png')}
                      alt="Third slide" />
              </Carousel.Item>
          </Carousel>
          
          <h5 className='my-4 fs-2'>Характеристики</h5>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Марка</div>
            <div className='col-md-8'>Haval</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold fs-5'>Модель</div>
            <div className='col-md-8'>Jolion</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Двигатель</div>
            <div className='col-md-8'>бензин, 1.5 л</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Мощность</div>
            <div className='col-md-8'>150 л.с</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Коробка передач</div>
            <div className='col-md-8'>робот</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Привод</div>
            <div className='col-md-8'>4WD, передний</div>
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
                <h5 class="mt-1">Алексей Павл</h5> 
                <div id="commentContent">
                HAVAL JOLION 2023 , передний привод, комплектация ЭЛИТ. 
Косяки начали вскрываться после 12 000 км, но в целом все решаемо, записался к официальному дилеру.
1) шумит ремень на холодном двигателе, видимо когда обороты не те, звук адский, появилось после зимы
2) непонятный бесячий звук снизу справа под компотом, как будто что то трется, уже 2000 км…. Думаю, что брызговик. 
Ставлю 8/10 по оценке   

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
                <h5 class="mt-1">Эдпитер</h5> 
                <div id="commentContent">
                Всем доброго времени суток) Не писал на драйве более полугода, но вот решил прервать молчание и рассказать вам о своём опыте езды на китайском Haval Jolion. Постараюсь рассказать все плюсы, а главное МИНУСЫ, которые я выявил при эксплуатации автомобиля.
Отзыв пишу объективный, а не как тут 99% людей, которые либо пересели с бюджеток и для них это космос, либо они просто потратив более 2 миллионов на автомобиль не могут принять мысли о том, что в их новом авто есть недостатки.
Итак, начнём. Купили мы его в апреле месяце новым в максимальной комплектации — премиум. Первое впечатление действительно было хорошим. Оснащение у автомобиля сопоставимо с корейцами за 4+ или немцами за 6+ млн.
Обо всем по порядку:
1) Обогревы сидений (передних и задних), а также обогрев руля работают нормально, претензий нет 5/5.
2) Адаптивный круиз оценю на 4/5, пользоваться можно, ведёт себя достаточно предсказуемо, но есть один серьёзный недостаток — когда ехал по скоростной трассе M11, на скорости в 140-150 км/ч при плавном повороте резко начинает самостоятельно тормозить, что может привести в опасной ситуации.
3) Удержание в полосе отключил после первой поездки по трассе, пользовался этой функцией на других авто (Audi, Mazda), там было все ОК — здесь абсолютно не нравится логика работы 0/5.
4) Датчик дождя/света работает хорошо 5/5.
5) Контроль слепых зон живет своей жизнью, показывает машины через ряд от тебя, а может не показать велосипедиста, постоянно пищит. На всякий случай не отключаю, но работа не нравится — 2,5/5.
6) Музыка в максимальной комплектации (6 динамиков) — тихий ужас, боюсь представить что стоит в младших комплектациях — 2/5.
7)Круговой обзор — 10/5. Вот это реально сильная сторона. Качество картинки в разы лучше почти всех конкурентов — и китайцев, и корейцев, и немцев ! Видно и днём и ночью отлично, много раз помогала парковаться в очень компактные места. Здесь китайцы постарались.
8) Сама мультимедиа отличная — качество идеальное, тормозов нет, при желании можно при помощи нехитрых манипуляций сделать Ютуб и другие приложения прямо на заводском мониторе, без посторонних устройств. НО. Один балл я снимаю за максимально глупое решение не делать физическую кнопку увеличения/убавления громкости. 4/5.
9) Панель приборов — 2,5/5. Качество оставляет желать лучшего, размер тоже. Ещё минус бал за то, что на солнце вообще ничего не видно на любой яркости.
10) Проекция 5/5. Видно хорошо и днём и ночью, картинка чёткая, всю нужную информацию выводит.
11) Автопарковка — не знаю как оценить, не лучше и не хуже, чем у конкурентов. Машину запарковать может, но не идеально. Впрочем, пользовался этой функцией на Мерседесе- ничем не лучше. ?/5.
12) Оптика — вполне устраивает и спереди и сзади, светит эффективно, снаружи красиво. 5/5.
13) Качество отделки салона — 2,5/5.
2,5 ставлю за визуальную составляющую, приятную отделку торпедо и руля. Сидения сделаны из ДЕРЬМОнтина. Выглядят красиво, но на ощупь дёшево. Посмотрим, как будут выглядеть тысяч через 50. Материалы дверных карт- жесткий пластик (даже передних!). Спасибо хоть за мягкие вставки из дерьмонтина.
14) Надёжность — ?/5. Тут есть вопросы. На пробеге 1500 км замети легкое биение при торможении со 100 км/ч. На дилере отбалансировали колёса. После ездил по городу и не замечал. На пробеге 4000 поехал по трассе в Питер и @хуел)) Руль бьет как бешенный.
Сказали тормоза повело, меняйте за свой счёт. Оказалось, проблема возникает у многих, тут кому как повезет. Мне не повезло. -1 против китайцев в моем личном рейтинге.
На пробеге 500 км обнаружил, что руль криво стоит — дилер содрал 4к за сход-развал)))
Короче веселуха. Сейчас пробег 15 тыс, больше ничего тьфу-тьфу не беспокоило. Посмотрим, как будет дальше.
15) Робот — ?/5. Сама по себе коробка работает нормально, переключает без пинков и тд. Проблем не обнаружено. Но смотрел недавно обзоры Хавалов на ютубе, где говорили, что это чуть ли не клон DSG от VAG. Это не так, разница между переключениями на DSG и роботе Хавала колоссальная. На DSG быстрее гораздо. Но я и не ждал от неё молниеносных переключений. В целом коробка устраивает.
16) Общие ощущения. ?/5.
По уровню комфорта машину можно сравнить с какой-нибудь Кретой. Жестковата, но не чересчур. При этом рулится посредственно. До уровня немцев очень далеко.
По тяговитости мотора — комментировать нечего. Знали, что покупали. От кроссовера со 143 силами ждать чего-то — наивно.
Шумоизоляция — вполне себе (3,5/5). Если зашумить арки, можно будет ещё 0,5 балла поставить. В принципе довольно тихо. На уровне последних мазд или тигуана.

UPD: В комментариях добавили про климат, совсем про него забыл, когда делал эту запись. Согласен с комментатором, климат работает максимально странно, вечером, когда на улице +12-14 градусов дует холодным воздухом и повышение температуры не помогает. В жару может еле еле дуть. Если в настройках климата стоит режим «автоматически», может ни с того ни с сего включить на полную и переключать между ногами, лицом и лобашом без какой-либо логики. Улучшает ситуацию включения режима «мягкий». В общем, если на прошлой машине я мог выставить 22 градуса и год не прикасаться к климату, то тут приходится постоянно крутить больше-меньше, потому что держать нормально температуру он не может, либо жарко, либо холодно.

Выводы: если вы хотите пересесть за руль этого автомобиля с качественного немца — не советую, можете разочароваться. Если с корейца или японца среднестатистического — неплохой вариант.
Жене машина после Мазды очень сильно нравится. Ей не нужна динамика и управляемость, ей нужно в красивом салоне безопасной машины доехать от работы до дома, с чем машина справляется на ура.
В наших реалиях за 2,45 млн (цена машины на момент написания) купить немецкую или даже корейскую машину такого класса едва ли получится, покупать Б/У корейца идея неоднозначная, а Б/У немец будет уже старше 5-7 лет.

Общую оценку машине я поставлю 3,5/5. Китайцы старались и в чем то у них получилось, а в чем-то ещё нужно работать и работать.
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

export default Havaljolion