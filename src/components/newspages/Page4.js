import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Page4 = () => {
  return (
    <Container className='my-2'>
        <h1 className='fw-bold' style={{fontSize:'40px'}}>
        Aurus показал салон обновленного Сената
        </h1>
        <div className='col-lg-6 my-2'>
        <Image src={require('../newsimg/pd1.jpg')} className='img-fluid'/>
        Разработчик автомобилей Aurus — институт ФГУП «НАМИ» опубликовал изображения салона модели Senat в обновленной ипостаси. Напомним, 7 мая модернизированную машину в кузове бронированный лимузин использовали на инаугурации президента РФ — таким образом, прошла ее публичная премьера.
        <br></br><br></br>
Теперь Научный автомоторный институт распространил фирменные изображения обновленного автомобиля в гражданской ипостаси — с кузовом седан.
<br></br><br></br>
Для Сената разработали полностью новый интерьер, нетронутыми относительно машины уходящего образца остались только кресла. Передняя панель теперь имеет Т-образную архитектуру, прежде она была горизонтальной.
<br></br><br></br>
В отделках дверей уменьшена площадь вставок из натурального дерева. Другой сделали центральную консоль.
<br></br><br></br>
Гражданские версии обновленного Ауруса начнут производить в 2025 году.
<br></br><br></br>
<iframe src="https://vk.com/video_ext.php?oid=-168813977&id=456239234&hash=2a0a8cf04d0de505" width="640" height="360" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media; fullscreen; picture-in-picture"></iframe>


        </div>
        







    </Container>
  )
}

export default Page4