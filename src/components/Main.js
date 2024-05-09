import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { Container, Image } from 'react-bootstrap'
import './main.css'

const Main = () => {
  return (
    <><Container fluid className='mt-3'>
          <Carousel data-bs-theme="light">
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require("../img/car1.jpg")}
                      alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../img/car2.jpg')}
                      alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                  <img
                      className="d-block w-100"
                      src={require('../img/car3.jpg')}
                      alt="Third slide" />
              </Carousel.Item>
          </Carousel>
      </Container>
      <Container className=' my-3'>
      <h1 className='text-center py-4'>Почему важен наш сайт <b>CarComment</b></h1>
        <div className='row'>
            <div className='col-md-4 my-1'>
                <center><Image className='img-fluid float-center' src={require('../img/cargradient.png')} width={300} rounded/></center>
                <h4 className='text-center my-1'>Информационная ценность</h4>
                <p className='p-2'>Отзывы пользователей предоставляют ценную информацию о реальном опыте владельцев автомобилей, их проблемах, достоинствах и недостатках. Это помогает потенциальным покупателям сделать более обоснованный выбор.</p>
            </div>
            <div className='col-md-4 my-1'>
                <center><Image className='img-fluid float-center' src={require('../img/balancegradient.png')} width={300} rounded/></center>
                <h4 className='text-center my-2'>Сравнение мнений</h4>
                <p className='p-2'>Будущий автовладелец позволяют сравнить мнения различных владельцев одной модели автомобиля, что помогает выявить общие тенденции и проблемные аспекты.</p>
            </div>
            <div className='col-md-4 my-1'>
                <center><Image className='img-fluid float-center' src={require('../img/lightgradient.png')} width={300} rounded/></center>
                <h4 className='text-center my-2'>Подсказки и советы</h4>
                <p className='p-2'>Владельцы автомобилей могут делиться своим опытом и давать советы по эксплуатации, техническому обслуживанию и ремонту, что помогает другим пользователям.</p>
            </div>
        </div>
        <div className='row justify-content-around'>
            <div className='col-md-4 my-1'>
                <center><Image className='img-fluid float-center' src={require('../img/handshakegradient.png')} width={300} rounded/></center>
                <h4 className='text-center my-1'>Создание сообщества</h4>
                <p className='p-2'>Сайт об автомобилях способствуют формированию сообщества единомышленников, где пользователи могут обсуждать интересующие их вопросы и проблемы.</p>
            </div>
            <div className='col-md-4 my-1'>
                <center><Image className='img-fluid float-center' src={require('../img/feedbackgradient.png')} width={300} rounded/></center>
                <h4 className='text-center my-2'>Обратная связь производителям</h4>
                <p className='p-2'>Производители автомобилей также могут использовать отзывы, чтобы получить обратную связь о своей продукции, выявить слабые места и улучшить качество своих автомобилей</p>
            </div>
        </div>


      </Container>
    </>
  )
}

export default Main