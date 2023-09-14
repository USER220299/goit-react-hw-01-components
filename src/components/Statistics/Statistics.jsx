
export const Statistics = ({ stats}) => {
    return (
    <section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    {stats.map(item=>
      <li class="item" key={item.id}>
      <span class="label">{item.label}</span>
      <span class="percentage">{item.percentage}</span>
    </li>

    )}
    
  </ul>
</section>
    )
}