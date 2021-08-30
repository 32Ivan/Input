import {Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups.js';
import NewMeetupPage from './pages/NewMeetups.js';
import FavoritesPage from './pages/Favorites.js';
import Layout from './components/layout/Layout.js';

function App() {

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetupsPage />
        </Route>
        <Route path='/favorite'>
          <FavoritesPage />
        </Route>
        <Route patha='/new-meetup'>
          <NewMeetupPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
