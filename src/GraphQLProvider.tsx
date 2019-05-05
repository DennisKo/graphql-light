import React, { createContext, ReactChild } from 'react';
import GraphQLClient from './Client';

const defaultClient = new GraphQLClient({
  uri: '/graphql',
});

export const GraphQLContext = createContext(defaultClient);

type Props = {
  children: ReactChild;
  client: GraphQLClient;
};

export const GraphQLProvider = ({ children, client }: Props) => (
  <GraphQLContext.Provider value={client}>{children}</GraphQLContext.Provider>
);
