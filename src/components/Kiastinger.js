import React, { useEffect } from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

let acb = 0;

const Kiastinger = () => {
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
      <h1 className='p-2'>Kia Stinger</h1>
      <Carousel data-bs-theme="light">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../components/imgtitle/ks1.png")}
                      alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/ks2.png')}
                      alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/ks3.png')}
                      alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../components/imgtitle/ks4.png')}
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
            <div className='col-md-8'>Stinger</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Двигатель</div>
            <div className='col-md-8'>бензин, 2.0, 3.3 л</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Мощность</div>
            <div className='col-md-8'>197, 247, 370 л.с</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Коробка передач</div>
            <div className='col-md-8'>АКПП</div>
          </div>
          <div className='row'>
            <div className='col-md-4 fw-bold  fs-5'>Привод</div>
            <div className='col-md-8'>4WD, задний</div>
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
                <h5 class="mt-1">Крукшенко</h5> 
                <div id="commentContent">
                У меня есть полностью комплектуемая версия GT2 RWD. Этот автомобиль фантастический. Я не уверен, что можно сказать такого, чего еще не было сказано, но я постараюсь изложить свои идеи. Этот автомобиль - это сумма всего, что он есть, а также сумма всего, чем он не является, и, понимая это, он по-прежнему остается непревзойденным мастером своего дела.  Он спортивный? Да, но это не спортивный автомобиль, и он не претендует на это. Когда появляется настроение, можно попробовать, но он создан не для того, чтобы устанавливать новые рекорды круга. Он трогается с места (0-60 миль / ч за 4,7 с) и достаточно быстро трогается с места, обеспечивая плавную линейную передачу мощности, что позволит любому настоящему спортивному / мускул-кару быть честным в том, что они должны серьезно относиться к тому, чтобы Stinger не отставал от них, но это не чемпион по дрэг-стрипу. Он будет проходить повороты лучше, чем практически любой семейный седан, который вы можете назвать, но он не предназначен для вырезания углов спортивным автомобилем, как скальпель. У него нет механической коробки передач, но вы можете сказать, что хотите управлять переключениями самостоятельно, и он позволит вам это делать. Подвеска, даже в спортивном режиме, больше ориентирована на комфортную сторону sport. Поездка почти никогда не вызывает резких ощущений. Это очень мощный спортивный автомобиль, который преодолевает километры, и если мы признаем, что это так на самом деле, то можем согласиться с тем, что гоночная трасса и дрэг-стрип - это не то, для чего он был разработан. Это роскошный седан? Да, но это не роскошь высшего класса, и он не претендует на нее. В нем вы почувствуете вкус качественной кожаной отделки, приятных на ощупь материалов, вставок из матового алюминия, средств контроля качества, 3-зонного автоматического климат-контроля, мягкого качественного потолка, много места спереди и сзади, прошитых панелей, сидений средней прочности, но чрезвычайно удобных с вентиляцией / подогревом, что делает пребывание в нем приятным часами напролет, но при высоте ниже колен оно обходится дешевле, и это нормально, если только вы не проводите все время в нишах для ног. т.е. Это роскошь там, где это имеет значение, и если вы не ожидаете большего, тогда все хорошо. Обладает ли он функциями, обеспечивающими качество жизни? Да, в этой комплектации. Крыша с откидывающейся крышей sun / moon, задний люк с электроприводом, звуковая система с четким воспроизведением звука, которая способна заставить ваше лицо вибрировать без искажений. Система помощи при парковке, мониторинг слепых зон, четкая камера заднего вида, система предупреждения о сохранении полосы движения, система предупреждения о лобовом столкновении / система автоматического торможения, камера с разделенным экраном на 360 градусов, порты питания спереди и сзади, внутреннее освещение повсюду, навигация и полнофункциональная информационно-развлекательная система. Все это здесь. Возможно, в нем отсутствуют некоторые из самых последних дополнительных опций whizzbang (например. нет встроенной камеры наблюдения в слепой зоне при смене полосы движения, физические циферблаты вместо полностью цифрового настраиваемого экрана приборной панели), но даже если у него нет абсолютно последней версии какой-либо функции, он все равно будет предлагать базовую форму указанной функции. Практичный ли это повседневный водитель? Да, удивительно. Благодаря 4 дверям вы можете переключать автомобиль в режим комфортной езды, и вы привыкли к отклику дроссельной заслонки, он будет выполнять семейные обязанности весь день с максимальным комфортом. Мы обменяли нашу старую Camry LE на эту модель, и Stinger так же способен выполнять повседневные семейные дела на малолитражке, как и Camry, только с большим комфортом. Сможет ли он вместить много вещей? Можно или как ?! Сложите задние сиденья, и он станет почти таким же вместительным, как небольшой пикап с закрытой задней частью. Я использовал раскладную простыню для защиты обивки, но припарковался рядом с парнем в пикапе в Лоузе, и так получилось, что мы оба покупали материалы для напольных покрытий. Я смог подогнать подкладку, доски, инструменты, отделку - все работы для проекта площадью 200 кв. футов за одну поездку. Парень, загружавшийся рядом со мной, был почти таким же, и кузов его пикапа выглядел почти таким же заполненным, как мой Stinger.
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
                Kia Stinger GT с 3,3-литровым двигателем развивает мощность 376 фунт-фут. Везде, где я бываю, на меня смотрят с восхищением! Удобные сиденья, большая мощность, просторное заднее отделение и в тысячи раз дешевле, чем Audi S5 и BMW. Он превосходит этих конкурентов не только по мощности, но и по стоимости. Предлагая отличное предложение. Получите свой сегодня! Вы будете поражены тем, насколько крут этот автомобиль!
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
                <h5 class="mt-1">Fill</h5> 
                <div id="commentContent">
                Я многое учел, когда решил купить Stinger, но в итоге он обошел другие новые модели Kia, а также более дорогие седаны класса люкс (например, Mercedes, audi, Lexus и т.д.). Stinger занимает довольно нишевый класс на автомобильном рынке (высокопроизводительные седаны от брендов, не относящихся к люксовым) и фактически разделяет этот класс с такими автомобилями, как Dodge Charger. Несмотря на то, что Stinger принадлежит к "не люксовому" бренду, по качеству он легко соперничает с типичными люксовыми брендами. В целом, я люблю свою машину. Управлять автомобилем потрясающе, езда невероятно плавная, и он обладает отличными характеристиками по всем параметрам. Я отказался от типичных брендов класса "люкс" из-за возросшей стоимости и потому, что я не заинтересован в том, чтобы меня ассоциировали с репутацией Uber-bougie, с которой ассоциируются эти бренды.  Что касается того, что я думаю о автомобиле, я бы согласился с "минусами", описанными профессиональными обозревателями Edmunds, в том, что у него довольно плохая видимость сзади из-за конструкции fastback. К тому же, автомобиль расположен довольно низко, а из-за наклонной линии крыши в него может быть трудно садиться и выезжать. Временами ощущается небольшое беспокойство, но я чувствую, что оно минимально и меня не беспокоит.  Помимо вышеупомянутых проблем со стилем и т.д., мне очень нравится внешний вид автомобиля. Качество интерьера и экстерьера выдающееся для того класса автомобилей, к которому относится Stinger. Интерьер невероятно удобный. Хотя я пропустил более крупный 10-дюймовый информационно-развлекательный экран 2022 года выпуска, я считаю, что 8-дюймовый экран 2021 года выпуска достаточно велик. К пользовательскому интерфейсу пришлось немного привыкнуть, поскольку в автомобиле много доступных технологий, но им стало легко пользоваться, когда я провел с ним некоторое время.  Моя единственная [небольшая] жалоба - это расход бензина. Хотя это несколько относительно, поскольку в зависимости от выбранного автомобиля экономия топлива может быть лучше или хуже. Для меня снижение до 17/25/20 было корректировкой. Тем не менее, я хотел бы отметить, что при езде в режиме Eco и при умеренной езде мой показатель миль на галлон неизменно превышал приведенные выше рейтинги EPA. При движении по шоссе со скоростью 60-70 миль в час инерции автомобиля достаточно, чтобы легко преодолевать холмы, и я смог развить скорость 29 миль на галлон. Обычно моя суммарная скорость составляет 21-23. Несмотря на то, что я езжу на Eco, я чувствую сильную потерю производительности. В целом, мне нравится моя новая машина, и я определенно не жалею о своей покупке. Мне нравится водить свой Stinger, и мне нравится видеть другие Stingers на дороге. Я чувствую себя частью недооцененного автомобильного клуба, особенно учитывая, что на дорогах в моем районе преобладают Lexus, Mercedes, Audi и BMW. Когда я вижу кого-то за рулем одного из типичных автомобилей "люксовой" марки, я не могу отделаться от мысли, что их обманули, заставив заплатить за insignia намного больше, чем фактическая стоимость. 
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

export default Kiastinger