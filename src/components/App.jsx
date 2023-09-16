import { Profile } from './Profile/profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';

export const App = () => {
  // return (
  //   <div
  //     style={{
  //       height: '100vh',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //       fontSize: 40,
  //       color: '#010101'
  //     }}
  //   >
  //     React homework template
  //   </div>
  // );
  return (
    <div
      style={{
        width:'100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding:'24px',
        backgroundColor: 'rgba(222, 227, 230, 0.996)',
      }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics  stats={data} />
     <FriendList friends={friends} />
     <TransactionHistory items={transactions} />
    </div>
  );
};