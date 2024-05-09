import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'

const News = () => {
  return (
    <Container>

    <div className='row'>
    <div class="col-12 col-md-6 mt-2">
        <div class="card shadow" style={{minHeight:'600px'}}>
            <Image src={require("./newsimg/pa1.webp")} class="card-img-top rounded-top" alt="Themesberg office"/>
            <div class="card-body">
                <h3 class="h5 card-title mt-3">Geely официально показала электрический кроссовер Galaxy E5. Фото</h3>
                <p class="card-text">Год назад марка заявила о запуске новой линейки автомобилей Galaxy. Данная серия включает в себя как гибридные модели (серия L), так и полностью электрические автомобили (серия E)</p>
                <a href="/news/page1" class="btn btn-primary btn-sm">Читать</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 mt-2">
        <div class="card shadow" style={{minHeight:'600px'}}>
            <Image src={require("./newsimg/pb1.webp")} class="card-img-top rounded-top" alt="Themesberg office"/>
            <div class="card-body">
                <h3 class="h5 card-title mt-3">Автокредиты</h3>
                <p class="card-text">Автокредит: чем отличается от потребительского и как его взять</p>
                <a href="/news/page2" class="btn btn-primary btn-sm">Читать</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 mt-2">
        <div class="card shadow" style={{minHeight:'600px'}}>
            <Image src={require("./newsimg/pd1.jpg")} class="card-img-top rounded-top" alt="Themesberg office"/>
            <div class="card-body">
                <h3 class="h5 card-title mt-3">BMW переосмыслил облик Rolls Royce Culinan</h3>
                <p class="card-text">BMW провел рестайлинг кроссовера Rolls Royce Cullinan. Обновленный внешний вид помпезного автомобиля стал более авангардным.</p>
                <a href="/news/page3" class="btn btn-primary btn-sm">Читать</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 mt-2">
        <div class="card shadow" style={{minHeight:'600px'}}>
            <Image src={require("./newsimg/pe1.jpg")} class="card-img-top rounded-top" alt="Themesberg office"/>
            <div class="card-body">
                <h3 class="h5 card-title mt-3">Aurus показал салон обновленного Сената</h3>
                <p class="card-text">Разработчик автомобилей Aurus — институт ФГУП «НАМИ» опубликовал изображения салона модели Senat в обновленной ипостаси.</p>
                <a href="/news/page4" class="btn btn-primary btn-sm">Читать</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 mt-2">
        <div class="card shadow" style={{minHeight:'600px'}}>
            <Image src={require("./newsimg/paa1.jpg")} class="card-img-top rounded-top" alt="Themesberg office"/>
            <div class="card-body">
                <h3 class="h5 card-title mt-3">Mercedes-Benz раскрыл статистику надежности по «Гелику»</h3>
                <p class="card-text">Ровно год назад Mercedes-Benz торжественно отмечал выпуск 500-тысячного внедорожника Mercedes-Benz G-Class всех гражданских модификаций, и если приведенные Михаэлем Шибе данные правдивы, значит, в мире не прекращена регистрация еще около 400 тысяч из них. Значительная их часть все еще на ходу, что, согласитесь, солидно.
                </p>
                <a href="/news/page5" class="btn btn-primary btn-sm">Читать</a>
            </div>
        </div>
    </div>
    <div class="col-12 col-md-6 mt-2">
        <div class="card shadow" style={{minHeight:'600px'}}>
            <Image src={require("./newsimg/pa1.webp")} class="card-img-top rounded-top" alt="Themesberg office"/>
            <div class="card-body">
                <h3 class="h5 card-title mt-3">We partnered up with Google</h3>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/news/page6" class="btn btn-primary btn-sm">Читать</a>
            </div>
        </div>
    </div>
    

    
    </div>
    
        
    </Container>
  )
}

export default News