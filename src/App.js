import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TabsMenu from "./components/tabsMenu/tabsMenu";

function App() {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    fetch("tabs.json",
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((res) => {return res.json()})
      .then((data) => {
        setTabs(data)});
  },[]);

  return (
    <BrowserRouter>
      <TabsMenu tabs={tabs}></TabsMenu>
      <Routes>
        {tabs.map((tab) => {
          const { id, path, order } = tab;
         
          return (
            <Route
              key={order}
              path={`/tabs/${id}`}
              element={<TabsComponent tabsPath={path} />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

const TabsComponent = ({ tabsPath }) => {
  const LoadedComponent = lazy(() => import(`./components/${tabsPath}`));
  console.log(tabsPath, LoadedComponent);
  return (
    <Suspense>
      <LoadedComponent></LoadedComponent>
    </Suspense>
  );
};

export default App;
