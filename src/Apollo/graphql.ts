import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  FileUpload: any;
  JSON: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  id: Scalars['ID'];
  email: Scalars['String'];
  token: Token;
};

export type Configuration = {
  __typename?: 'Configuration';
  isChallengeOver?: Maybe<Scalars['Boolean']>;
  bracket?: Maybe<Scalars['JSON']>;
  mainBanner?: Maybe<Scalars['String']>;
  mainBannerUrl?: Maybe<Scalars['String']>;
  mainBannerButtonText?: Maybe<Scalars['String']>;
  bonusBanner?: Maybe<Scalars['String']>;
  bonusBannerUrl?: Maybe<Scalars['String']>;
  bonusBannerButtonText?: Maybe<Scalars['String']>;
};

export type CurrentUserInput = {
  accessToken: Scalars['String'];
};




export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: AuthPayload;
  logout: Scalars['Boolean'];
  refreshToken: Token;
  fillBracketChallenge: Scalars['Boolean'];
  deleteFile: Scalars['Boolean'];
  setConfiguration?: Maybe<Scalars['Boolean']>;
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationFillBracketChallengeArgs = {
  token: Scalars['String'];
  bracket: Scalars['JSON'];
};


export type MutationDeleteFileArgs = {
  type: Scalars['String'];
};


export type MutationSetConfigurationArgs = {
  isChallengeOver?: Maybe<Scalars['Boolean']>;
  bracket?: Maybe<Scalars['JSON']>;
  mainBanner?: Maybe<Scalars['FileUpload']>;
  mainBannerButtonText?: Maybe<Scalars['String']>;
  mainBannerUrl?: Maybe<Scalars['String']>;
  bonusBanner?: Maybe<Scalars['FileUpload']>;
  bonusBannerButtonText?: Maybe<Scalars['String']>;
  bonusBannerUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  checkBracketChallengeParticipant: Scalars['Boolean'];
  getConfiguration: Configuration;
  getBracket?: Maybe<Scalars['JSON']>;
};


export type QueryCurrentUserArgs = {
  currentUserInput: CurrentUserInput;
};


export type QueryCheckBracketChallengeParticipantArgs = {
  token: Scalars['String'];
};


export type QueryGetBracketArgs = {
  token: Scalars['String'];
};

export type SignUpInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

/** refreshToken is provided as http-only cookie */
export type Token = {
  __typename?: 'Token';
  accessToken: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
};

export type FillBracketMutationVariables = Exact<{
  token: Scalars['String'];
  bracket: Scalars['JSON'];
}>;


export type FillBracketMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'fillBracketChallenge'>
);

export type ConfigurationQueryVariables = Exact<{ [key: string]: never; }>;


export type ConfigurationQuery = (
  { __typename?: 'Query' }
  & { configuration: (
    { __typename?: 'Configuration' }
    & Pick<Configuration, 'isChallengeOver' | 'bracket' | 'mainBanner' | 'mainBannerUrl' | 'mainBannerButtonText' | 'bonusBanner' | 'bonusBannerUrl' | 'bonusBannerButtonText'>
  ) }
);

export type BracketQueryVariables = Exact<{
  token: Scalars['String'];
}>;


export type BracketQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getBracket'>
  & { configuration: (
    { __typename?: 'Configuration' }
    & Pick<Configuration, 'isChallengeOver' | 'bracket'>
  ) }
);


export const FillBracketDocument = gql`
    mutation FillBracket($token: String!, $bracket: JSON!) {
  fillBracketChallenge(token: $token, bracket: $bracket)
}
    `;
export type FillBracketMutationFn = Apollo.MutationFunction<FillBracketMutation, FillBracketMutationVariables>;

/**
 * __useFillBracketMutation__
 *
 * To run a mutation, you first call `useFillBracketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFillBracketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fillBracketMutation, { data, loading, error }] = useFillBracketMutation({
 *   variables: {
 *      token: // value for 'token'
 *      bracket: // value for 'bracket'
 *   },
 * });
 */
export function useFillBracketMutation(baseOptions?: Apollo.MutationHookOptions<FillBracketMutation, FillBracketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FillBracketMutation, FillBracketMutationVariables>(FillBracketDocument, options);
      }
export type FillBracketMutationHookResult = ReturnType<typeof useFillBracketMutation>;
export type FillBracketMutationResult = Apollo.MutationResult<FillBracketMutation>;
export type FillBracketMutationOptions = Apollo.BaseMutationOptions<FillBracketMutation, FillBracketMutationVariables>;
export const ConfigurationDocument = gql`
    query Configuration {
  configuration: getConfiguration {
    isChallengeOver
    bracket
    mainBanner
    mainBannerUrl
    mainBannerButtonText
    bonusBanner
    bonusBannerUrl
    bonusBannerButtonText
  }
}
    `;

/**
 * __useConfigurationQuery__
 *
 * To run a query within a React component, call `useConfigurationQuery` and pass it any options that fit your needs.
 * When your component renders, `useConfigurationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConfigurationQuery({
 *   variables: {
 *   },
 * });
 */
export function useConfigurationQuery(baseOptions?: Apollo.QueryHookOptions<ConfigurationQuery, ConfigurationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ConfigurationQuery, ConfigurationQueryVariables>(ConfigurationDocument, options);
      }
export function useConfigurationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConfigurationQuery, ConfigurationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ConfigurationQuery, ConfigurationQueryVariables>(ConfigurationDocument, options);
        }
export type ConfigurationQueryHookResult = ReturnType<typeof useConfigurationQuery>;
export type ConfigurationLazyQueryHookResult = ReturnType<typeof useConfigurationLazyQuery>;
export type ConfigurationQueryResult = Apollo.QueryResult<ConfigurationQuery, ConfigurationQueryVariables>;
export const BracketDocument = gql`
    query Bracket($token: String!) {
  getBracket(token: $token)
  configuration: getConfiguration {
    isChallengeOver
    bracket
  }
}
    `;

/**
 * __useBracketQuery__
 *
 * To run a query within a React component, call `useBracketQuery` and pass it any options that fit your needs.
 * When your component renders, `useBracketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBracketQuery({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useBracketQuery(baseOptions: Apollo.QueryHookOptions<BracketQuery, BracketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BracketQuery, BracketQueryVariables>(BracketDocument, options);
      }
export function useBracketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BracketQuery, BracketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BracketQuery, BracketQueryVariables>(BracketDocument, options);
        }
export type BracketQueryHookResult = ReturnType<typeof useBracketQuery>;
export type BracketLazyQueryHookResult = ReturnType<typeof useBracketLazyQuery>;
export type BracketQueryResult = Apollo.QueryResult<BracketQuery, BracketQueryVariables>;