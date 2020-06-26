// Libraries
import React from "react"

// Components
import PageTitle from '../PageTitle';
import PageFooter from '../PageFooter';

import './index.css';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="Layout">
        <header>
          <PageTitle />  
        </header>
        <main>{children}</main>
        <footer>
          <PageFooter />
        </footer>
      </div>
    )
  }
}

export default Layout
