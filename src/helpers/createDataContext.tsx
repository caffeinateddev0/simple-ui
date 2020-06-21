import React, { useReducer } from 'react';

export interface CreateDataContextActionProps {
  type: string;
  payload: any;
}

interface CreateDataContextProps {
  reducer: (state: any, action: CreateDataContextActionProps) => void;
  actions: {
    [key: string]: (
      dispatch: ({
        type,
        payload,
      }: CreateDataContextActionProps) => void,
    ) => (props: any) => void;
  };
  initalState: any;
}

interface ProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * @summary createDataContext: Uses react context to pass state using a redux style action / reducer
 * To use wrap the component with the provider, the use the useContext hook with the Context to access
 * the state and actions.
 * @param { reducer, actions, initialState }: Initial object containing the reducer, actions, and initialState
 * @param { state: any, action } reducer: Function that receives the current state as the first
 * prop and incoming action as the second
 * @param { object } actions = object containing avaliable actions
 * @param { any } initalState = inital state provided to the reducer
 * @returns {Context, Provider}
 */
export const createDataContext = ({
  reducer,
  actions,
  initalState,
}: CreateDataContextProps) => {
  const Context = React.createContext({});

  const Provider = ({ children }: ProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initalState);

    const boundActions: { [key: string]: (props: any) => void } = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
