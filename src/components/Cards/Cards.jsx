import Card from '../Card/Card.jsx';
import style from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props;
   return(
      <div style={{ padding: '25px' }}>
      <div>
      <div className={style.container}>
         {
            characters.map((e)=>{
               return(
                  <Card
                     status={e.status}
                     key={e.id}
                     id={e.id}
                     name={e.name}
                     species={e.species}
                     gender={e.gender}
                     image={e.image}
                     onClose={() => props.onClose(e.id)}
                  />
               )
            })
         }
      </div>
      </div>
      </div>
   )
}
