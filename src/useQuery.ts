import * as React from 'react';
import { GraphQLContext } from './GraphQLProvider';

export const useQuery = (query: string) => {
  const client = React.useContext(GraphQLContext);
  const [data, setData] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const jsonRes = await client.query({ query });
        const res = await jsonRes.json();
        setData(res.data);
      } catch (error) {
        throw new Error(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [query]);
  return { data, isLoading };
};
