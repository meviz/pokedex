import React, {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './layout'
import ListLoader from './component/Loader/ListLoader';

const Pokemon = lazy(()=> import("./view/Pokemon"));
const Favorite = lazy(()=> import("./view/Favorite"));
const Detail = lazy(()=> import("./view/Detail"));

function App() {
  return (<>
  <Suspense fallback={<ListLoader/>}>
    <Layout>
      <Switch>
      <Route exact path="/" render={(props)=><Pokemon {...props}/>}></Route>
        <Route exact path="/pokemons" render={(props)=><Pokemon {...props}/>}></Route>
        <Route exact path="/favorite" render={(props)=><Favorite {...props}/>}></Route>
        <Route exact path="/pokemons/:id" render={(props)=><Detail {...props}/>}></Route>
      </Switch>
    </Layout>
  </Suspense>
  </>
  );
}

export default App;
