import logo from './logo.svg';
import './App.css';
import { Button } from "antd"
import { useState } from 'react';
import { CheckOutlined, GooglePlusOutlined } from "@ant-design/icons"
// import LearnButton from './component/LearnButton';
// import LearnGrid from './component/LearnGrid';
import LayoutDefault from './Layout/LayoutDefault';
import AllRoutes from './component/AllRoutes';
function App() {

  return (
    <>
      {/* <LearnButton/> */}
      {/* <LearnGrid/> */}

      {/* <LayoutDefault /> */}
      <AllRoutes/>
    </>

  );
}

export default App;
