import { Nav } from '@fluentui/react/lib/Nav';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PortfolioNav extends Component {

  handleLinkClick = (ev, item) => {
    ev.preventDefault();
    this.props.history.push(item.url); // navigate using history
  };

  render() {
    const { location } = this.props;

    const links = [
      {
        links: [
          { name: 'Home', key: 'home', url: '/', icon: 'Home' },
          { name: 'Projects', key: 'projects', url: '/projects', icon: 'Product' },
          { name: 'About', key: 'about', url: '/about', icon: 'Contact' },
          { name: 'Experience', key: 'experience', url: '/experience', icon: 'Mail' },
        ],
      },
    ];

    return (
      <Nav
        groups={links}
        selectedKey={location.pathname.replace('/', '') || 'home'}
        onLinkClick={this.handleLinkClick}
        styles={{
          root: {
            width: 220,
            height: '100vh',
            boxSizing: 'border-box',
            borderRight: '1px solid #eee',
          },
        }}
      />
    );
  }
}

export default withRouter(PortfolioNav);
