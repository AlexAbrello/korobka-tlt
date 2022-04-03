import styled from 'styled-components'

import { Info } from '../components/Info'


export const Title = styled.h2`
   margin-bottom: 20px;
   font-size: 22px;
   letter-spacing: 1px;
   text-align: center;
`
export const Text = styled.p`
   margin-bottom: 30px;
   line-height: 120%;
   font-size: 18px;
`

export const About = () => {
   return (
      <Info>
         <Title>О нас:</Title>
         <Text>
            Занимаемся сборкой и ремонтом КПП для отечественных авто уже более 10 лет. Всё это время были далеки от интернет-продаж и реализовывали свою продукцию через оптовую точку на крупнейшем рынке автозапчастей "Ставр", куда приезжают владельцы автомагазинов и автосервисов со всех регионов РФ. Оптовая точка и по сей день работает. Вы можете найти нас по адресу ул.Новозаводская, 2Б, место 47 "б".
         </Text>
         <Text>
            В последнее время всё больше интернет-магазинов обращается к нам за продукцией, что привело нас на мысль о создании своего онлайн-магазина. Здесь Вы можете приобрести товар напрямую от производителя, минуя посредников. Опытные мастера благодаря качественным комплектующим собирают агрегаты, которые ничем не уступают оригинальным.
            Готовые КПП проходят стендовые испытания. Гарантия на нашу продукцию пол года!
         </Text>
         <Text>
            Рамиль Хасанович Камалетдинов : <br />
            Директор организации и руководитель отдела оптовых продаж
         </Text>
         <Text>
            Сергей Владимирович Краснов : <br />
            Начальник склада, ответственный за онлайн-продажи
         </Text>
         <Text>
            Александр Владимирович Краснов : <br />
            Менеджер по продажам
         </Text>
      </Info>
   )
}