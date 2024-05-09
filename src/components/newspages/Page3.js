import React from 'react'
import { Container, Image } from 'react-bootstrap'


const Page3 = () => {
  return (
    <Container className='my-2'>
        <h1 className='fw-bold' style={{fontSize:'40px'}}>
        BMW переосмыслил облик Rolls Royce Culinan
        </h1>
        <div className='col-lg-6 my-2'>
        <Image src={require('../newsimg/pc1.jpg')} className='img-fluid'/>
        BMW провел рестайлинг кроссовера Rolls Royce Cullinan. Обновленный внешний вид помпезного автомобиля стал более авангардным.
        <br></br><br></br>
В компании привычным антуражем модели желают видеть не уединенные поместья в десятки акров, а оживленные центры мегаполисов. Собственно, в BMW просто взглянули фактам в лицо. Как выяснилось, средний возраст владельца Rolls Royce Cullinan — 43 года, и развлекается он отнюдь не охотой на лис.
<br></br><br></br>
Если прежнее оформление передней части Cullinan можно сравнить с пантеоном на строго разлинованной римской площади, то новое — это стилизованный под античный храм музей современного искусства со световой иллюминацией в даунтауне в окружении неоновых вывесок и причудливых арт-объектов.
<br></br><br></br>
Новая радиаторная решетка впервые на Rolls Royce имеет подсветку, а ДХО размашисто очерчивают пределы верхних углов фасада. Форма воздухозаборников придает виду спереди что-то от яхты.
<br></br><br></br>
С обновлением на кроссовере Rolls Royce впервые появились колесные диски диаметром 23 дюйма. Прежде предельным размером были 22 дюйма.
<br></br><br></br>
Оформление интерьера тоже стало менее формальным. В приборном щитке вместо аналоговых шкал теперь дисплей.
<br></br><br></br>
К материалам отделки добавлены серый ясень и кожаная обивка с перфорацией в виде облаков на небе над Гудвудом — месте в Англии, где базируется компания Rolls Royce.
<br></br><br></br>
По технической части перемен нет. Под капотом — тот же 6,75-литровый 570-сильный (и 600-сильный в исполнении Cullinan Black Badge) V12 от BMW.
<iframe width="640" height="360" src="https://www.youtube.com/embed/UJlaxqT4mMo" title="Rolls-Royce Presents Cullinan Series II | A New Expression of Modern Exploration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



        </div>
        







    </Container>

  )
}

export default Page3