import { Card } from 'antd'
import stylesCard from '../../styles/card.module.scss'
import RateScore from '../Rate/rate-score'

export default function CardListRateSimple({ data }){
    return (
        <Card
            className={ stylesCard.cardInfoInformation }>
                {
                    data.map(item => 
                        <RateScore 
                            key={ item.id }
                            id={ item.id }
                            text={ item.text }
                            score={ item.score }/>)
                }
        </Card>
    )
}