import css from './TransactionHistory.module.css'
export const TransactionHistory = ({ items }) => {
  return (
    <table className={`${css.transactionHistory}`}>
      <thead className={`${css.title}`}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={`${css.item}`}>
        {items.map(el => (
          <tr className={`${css.el}`}key={el.id}>
            <td >{el.type}</td>
            <td>{el.amount}</td>
            <td>{el.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
