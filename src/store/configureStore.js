import {devTools, persistState} from 'redux-devtools';

import composeStore from './composeStore';

export default function configureStore() {

  const store = composeStore(
    devTools(),
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
  );

  return store;
}
