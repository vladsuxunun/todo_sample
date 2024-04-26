import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './store/store';
import {PersistGate} from 'redux-persist/integration/react';
import TaskList from './src/screens/TaskList.tsx';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <TaskList />
      </PersistGate>
    </Provider>
  );
};

export default App;
