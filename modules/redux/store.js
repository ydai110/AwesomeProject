import {legacy_createStore as createStore} from 'redux';
// 引入 AsyncStorage 作为存储容器
import AsyncStorage from '@react-native-async-storage/async-storage';

// 引入 redux-persist
import {persistStore, persistCombineReducers} from 'redux-persist';

// 持久化存储配置
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
import reducers from './reducers';

const persistReducers = persistCombineReducers(persistConfig, {
  reducers,
});

const configureStore = () => {
  const store = createStore(persistReducers);
  const persistor = persistStore(store);

  return {persistor, store};
};

export default configureStore;
