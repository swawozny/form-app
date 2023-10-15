import React from "react";
import {Layout, theme} from "antd";

import MainForm from "./containers/MainForm";

const {Header, Content, Footer} = Layout;

const App = () => {
    const {token: {colorBgContainer, colorInfo}} = theme.useToken();

  return (
      <Layout>
          <Header style={{backgroundColor: colorInfo}}>
              <h1 style={{color: colorBgContainer}}>FormAPP</h1>
          </Header>
          <Content style={{padding: '0 50px'}}>
              <div style={{padding: 24, minHeight: 380, background: colorBgContainer}}>
                  <MainForm/>
              </div>
          </Content>
          <Footer/>
      </Layout>
  );
}

export default App;
