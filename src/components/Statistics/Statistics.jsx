import css from './Statistics.module.css'
 
export const Statistics = ({ stats}) => {
    return (
    <section className={`${css.statistics}`}>
  <h2 className={`${css.title}`}>Upload stats</h2>

  <ul className={`${css.statList} ${css.list}`}>
    {stats.map(item=>
      <li className={`${css.item}`} key={item.id}>
      <span className={`${css.label}`}>{item.label}</span>
      <span className={`${css.percentage}`}>{item.percentage}%</span>
    </li>

    )}
    
  </ul>
</section>
    )
}