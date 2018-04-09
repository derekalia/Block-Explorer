import React from 'react';
import styled from 'styled-components';
import logo from '../media/logo.097d4fe0.svg';
import settingsIcon from '../media/img_52055.png';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {
  state = { blockScan: true, settings: false };

  render() {
    return (
      <SideBar>
        <LogoHolder>
          <Image src={logo} />
        </LogoHolder>
        <GridSideBar>
          <SidebarTitle>APPS</SidebarTitle>

          <SidebarIndicator selected={this.props.location.pathname !==  '/settings'}>
            <SettingsImg src={settingsIcon} />
            <LinkStyle to="/">
              <SidebarMenuItem>Block Scan</SidebarMenuItem>
            </LinkStyle>
          </SidebarIndicator>
          <SidebarIndicator selected={this.props.location.pathname === '/settings'}>
            <SettingsImg src={settingsIcon} />
            <LinkStyle to="/settings">
              <SidebarMenuItem>Settings</SidebarMenuItem>
            </LinkStyle>
          </SidebarIndicator>
        </GridSideBar>
      </SideBar>
    );
  }
}

export default withRouter(Sidebar);

const SideBar = styled.div`
  grid-row: 1 / 3;
  -webkit-box-shadow: 2px 0px 11px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 0px 11px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 0px 11px -5px rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

const LogoHolder = styled.div`
  border-bottom: 1px solid #eaeaea;
`;

const Image = styled.img`
  width: 37px;
  margin: 12px;
`;

const SettingsImg = styled.img`
  width: 15px;
  align-self: center;

  margin-left: 25px;
`;

const GridSideBar = styled.div`
  display: grid;

  grid-template-rows: auto repeat(3, 40px);
  font-size: 15px;
  margin-top: 30px;
`;

const SidebarTitle = styled.div`
  margin: 20px;
  margin-left: 30px;
  font-size: 13px;
  color: rgb(112, 112, 112);
`;

const SidebarIndicator = styled.div`
  font-size: 15px;
  border-left: ${props => (props.selected ? '4px rgb(0, 203, 230) solid' : '4px white solid')};
  background-color: ${props => (props.selected ? '#f5f9fa' : 'none')};
  font-weight: ${props => (props.selected ? 700 : 'none')};
  display: flex;
  &:hover {
    font-weight: 700;
  }
`;

const SidebarMenuItem = styled.div`
  padding-left: 10px;
  align-self: center;
`;

const LinkStyle = styled(Link)`
  color: black;
  cursor: pointer;
  align-self: center;
  text-decoration: none;
`;
