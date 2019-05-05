import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Client from '../src/Client';
import { GraphQLProvider } from '../src/GraphQLProvider';
import { useQuery } from '../src/useQuery';

const GET_USERS = `
  {
    users {
      id
    }
  }
`;

const App = () => {
  const { data, isLoading } = useQuery(GET_USERS);
  return (
    <div>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        data.users.map(user => <div key={user.id}>{user.id}</div>)
      )}
    </div>
  );
};

const client = new Client({
  uri: 'http://localhost:4466/',
});

const Main = () => {
  return (
    <GraphQLProvider client={client}>
      <App />
    </GraphQLProvider>
  );
};

ReactDOM.render(<Main />, document.getElementById('root'));
