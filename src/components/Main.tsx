import * as React from 'react';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Counter = lazy(() => import('./Counter'));

export default function Main() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/counter" exact>
            <Counter />
          </Route>
        </Switch>
      </Suspense>
    </main>
  );
}
