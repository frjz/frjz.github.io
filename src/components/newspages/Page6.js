import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Page6 = () => {
  return (
    <Container className='my-2'>
        <h1 className='fw-bold' style={{fontSize:'40px'}}>
        BMW выпустил трековый M4 с полным приводом
        </h1>
        <div className='col-lg-6 my-2'>
        <Image src={require('../newsimg/pab1.jpg')} className='img-fluid'/>
        По количеству предлагаемых модификаций и специальных серий одной модели ничто не сравнится с Porsche с его 911. В BMW решили перенять опыт коллег из Штутгарта в отношении своего спортивного купе M4 и представили его очередную специальную модификацию, которая имеет в наименовании приставку CS.
        <br></br><br></br>
Кому адресован BMW M4 CS? В системе координат M4 новая версия находится между трековым заднеприводным CSI и дорожным полноприводным Competition xDrive. BMW M4 CS имеет полноприводную трансмиссию xDrive и в целом гражданский интерьер с четырьмя посадочными местами. Вместе с тем машина укомплектована силовой установкой, как у M4 CSI. От него же имеет набор облегченных деталей.
<br></br><br></br>
Внешне M4 SC — это симбиоз M4 и M4 CSI. От заднего бампера и до передних крыльев его аэродинамический обвес аналогичен M4, а вся передняя группа: бампер, капот, крылья, сплиттер, панель крыши и корпуса зеркал — от M4 CSI. Панели крыши, капота и ряд других наружных элементов отформованы из углепластика. Глушитель с титановым корпусом взят от M4 CSI. Полноприводный четырехместный M4 CS легче полноприводного M4 Competition xDrive лишь на 20 кг.
<br></br><br></br>
Машина оснащена 3,0-литровой рядной «шестеркой» с двойным турбонаддувом на 550 л.с. и 650 Нм, 8-ступенчатой автоматической КП с гидротрансформатором.
<br></br><br></br>
С места до 100 км/ч новая модификация разгоняется лишь за 3,4 секунды.
<br></br><br></br>
BMW M4 CSI был выпущен тиражом 1000 экземпляров, сколько будет построено M4 CS, производитель пока не сообщил. Прием заказов на BMW M4 CS начнется в конце мая, производство — в июле.




        </div>
        







    </Container>
  )
}

export default Page6