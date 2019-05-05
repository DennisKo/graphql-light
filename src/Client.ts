// type GraphQLResponse = {
//   data: any;
//   error: Error;
// };

type ClientOptions = {
  uri: RequestInfo;
  headers?: any;
};

type QueryInput = {
  query?: string;
  variables?: any;
};

type MutationInput = {
  mutation: string;
  variables?: any;
};

type Query = ({ query, variables }: QueryInput) => Promise<Response>;
type Mutation = ({ mutation, variables }: MutationInput) => Promise<Response>;

export interface IGraphQLClient {
  query: Query;
  mutation: Mutation;
}

class GraphQLClient implements IGraphQLClient {
  uri: RequestInfo;
  headers: any;

  constructor({ uri, headers }: ClientOptions) {
    this.uri = uri;
    this.headers = headers;
  }

  public query({ query, variables }: QueryInput) {
    return fetch(this.uri, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  }

  public mutation({ mutation, variables }: MutationInput) {
    return fetch('', {
      method: 'post',
      body: JSON.stringify({
        mutation,
        variables,
      }),
    });
  }
}

export default GraphQLClient;
