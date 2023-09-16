import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats }) => {
  return (
    <section className={`${css.statistics}`}>
      <h2 className={`${css.title}`}>Upload stats</h2>

      <ul className={`${css.statList} ${css.list}`}>
        {stats.map(item => (
          <li className={`${css.item}`} key={item.id}>
            <span className={`${css.label}`}>{item.label}</span>
            <span className={`${css.percentage}`}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
