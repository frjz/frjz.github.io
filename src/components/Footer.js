import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="bg-dark text-light pt-5">
    <div class="container px-5">
        <div class="row">
            <div class="col-6 col-lg-4">
                <h3 class="fw-bold">CarComment</h3>
                <p class="pt-2">Адрес: <a href='https://yandex.ru/maps/11333/kyzyl/?ll=94.438516%2C51.721664&mode=poi&poi%5Bpoint%5D=94.439884%2C51.722063&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1274745989&utm_source=ntp_chrome&z=18.2'>Россия, г. Кызыл, ул. Щетинкина-Кравченко д.41</a></p>
                <p class="mb-2">Телефон: <a href='tel: +79123456789'>+7-912-345-67-89</a></p>

            </div>
            <div class="col">
                <h4>Menu</h4>
                <ul class="list-unstyled pt-2">
                    <li class="py-1"><Link to='/'>Главная</Link> </li>
                    <li class="py-1"><Link to='/'>Главная</Link> </li>
                    <li class="py-1"><Link to='/'>Главная</Link> </li>
                    <li class="py-1"><Link to='/'>Главная</Link> </li>
                </ul>
            </div>
            <div class="col">
                <h4>More</h4>
                <ul class="list-unstyled pt-2">
                    <li class="py-1">Landing Pages</li>
                    <li class="py-1">FAQs</li>
                </ul>
            </div>
            <div class="col">
                <h4>Categories</h4>
                <ul class="list-unstyled pt-2">
                    <li class="py-1">Navbars</li>
                    <li class="py-1">Cards</li>
                    <li class="py-1">Buttons</li>
                    <li class="py-1">Carousels</li>
                </ul>
            </div>
            <div class="col-6 col-lg-3 text-lg-end">

            </div>
        </div>
        <hr></hr>
        <div class="d-sm-flex justify-content-between py-1">
            <p>2024 © CarComment. All Rights Reserved. </p>
            <p>
                <a href="#" class="text-light text-decoration-none pe-4">Terms of use</a>
                <a href="#" class="text-light text-decoration-none"> Privacy policy</a>
            </p>
        </div>
    </div>
</footer>
  )
}

export default Footer