import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated } from './util/wrappers.js'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import Inspect from './layouts/inspect/Inspect'
import scrapDealersList from './layouts/scrapDealersList/ScrapDealersList'
import addTrashPickup from './layouts/addTrashPickup/AddTrashPickup'
import Dashboard from './layouts/dashboard/Dashboard'
import Profile from './user/layouts/profile/Profile'
import ChooseCategory from './layouts/choosecategory/ChooseCategory'

// Redux Store
import store from './store'

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="inspect/:code" component={Inspect} />
          <Route path="scrapDealersList/:categories" component={scrapDealersList} />
          <Route path="addTrashPickup" component={addTrashPickup} />
          <Route path="dashboard" component={UserIsAuthenticated(Dashboard)} />
          <Route path="profile" component={UserIsAuthenticated(Profile)} />
          <Route path="ChooseCategory" component={ChooseCategory} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
