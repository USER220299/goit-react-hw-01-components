import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
     {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(item => (
          <li className={css.item} key={item.id}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
