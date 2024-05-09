import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Page1 = () => {
  return (
    <Container className='my-2'>
        <h1 className='fw-bold' style={{fontSize:'40px'}}>
        Geely официально показала электрический кроссовер Galaxy E5. Фото
        </h1>
        <p className='text-secondary fs-4'>
        Geely впервые официально показала электрокар Galaxy E5
        </p>
        <Image src={require('../newsimg/pa2.webp')} className='img-fluid'/>
        <div className='col-lg-6 my-2'>
        Компания Geely опубликовала официальные изображения своего нового электрического кроссовера Galaxy E5. Автомобиль станет первым полностью электрическим кроссовером в серии Galaxy. Ожидается, что ценовой диапазон E5 составит около 150 000-200 000 юаней (1,89 млн — 2,53 млн руб.), а официальный запуск состоится во втором квартале, сообщает издание CarNewsChina.
        </div>
        <div className='col-lg-6 my-2'>
        <b>Что это за автомобиль?</b> Geely Galaxy E5 — электрический кроссовер китайского концерна. В его основе лежит электрическая архитектура Geely Electric Architecture (GEA), которая включает в себя гибридные силовые агрегаты, так и полностью электрические, а также на экологически чистом метаноле. Geely Galaxy E5 имеет габариты 4615/1901/1670 мм и колесную базу 2750 мм.
        </div>
        <Image src={require('../newsimg/pa3.webp')} className='img-fluid'/>
        <div className='col-lg-6 my-2'>
        <b>Как он выглядит?</b> Передняя часть выполнена в том же стиле, что и у седана Geely Galaxy E8, представленного в декабре 2023 года. Впереди аналогичная закрытая решетка, фары с острыми гранями и С-образные вентиляционные отверстия в нижней части.
        </div>
        <Image src={require('../newsimg/pa4.webp')} className='img-fluid'/>
        <div className='col-lg-6 my-2'>
        <b>Что в салоне?</b> Салон оснащен рулевым колесом с плоской верхней и нижней частью, ЖК-панелью приборов и большим центральным экраном управления, в который встроена операционная система Flyme Auto, работающая на чипе Dragon Eagle-1. Поддерживаются беспроводная зарядка мобильного телефона, обогрев/вентиляция передних сидений, 8-точечный массаж и аудиосистема с 16 динамиками.        
        </div>
        <Image src={require('../newsimg/pa5.webp')} className='img-fluid'/>
        <div className='col-lg-6 my-2'>
        <b>Что по технике?</b> Официальная информация о силовой установке на данный момент не разглашается, но Geely упомянула, что E5 будет использовать интеллектуальный электропривод и аккумулятор Shendun. Такая комбинация может обеспечить полный запас хода в 2000 км.        
        </div>
        <Image src={require('../newsimg/pa6.webp')} className='img-fluid'/>
        <Image src={require('../newsimg/pa7.webp')} className='img-fluid mt-2'/>
        <div className='col-lg-6 my-2'>
        Напомним, что Geely представила линейку автомобилей Galaxy в феврале 2023 года. Она ориентирована на рынки подключаемых гибридов и электромобилей. На данный момент в линейке присутствуют три автомобиля — кроссовер Galaxy L7 и седаны L6 и E8. Первые два оборудованы гибридной силовой установкой, а E8 — полностью электрический седан.
<br/><br/>
Четвертый автомобиль Geely показали на Пекинском автосалоне — это новый флагманский кроссовер Starship.
<br/><br/>
Пока модель дебютировала в статусе концепта, однако в следующем году прототип получит серийную версию, которая станет старшей моделью в линейке Galaxy. По предварительным данным, в продажу автомобиль поступит под индексом L9 по аналогии с флагманскими моделями других брендов, где в названии фигурирует цифра 9, например, Nio ET9 и Lixiang L9.


        </div>









    </Container>
  )
}

export default Page1