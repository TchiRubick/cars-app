import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai';
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from 'react-icons/md';

import './Sidebar.scss';

import useClickAwayListner from '../../hooks/clickAwayListner/useClickAwayListner';

const Sidebar = (props) => {
  const { menus } = props;

  const location = useLocation();

  const { pathname } = location;

  const [openedSidebar, setOpenedSidebar] = useState(false);

  const refSidebar = useRef(null);

  const onClickAway = () => {
    setOpenedSidebar(false);
  };

  useClickAwayListner(refSidebar, onClickAway);

  const handleClickSidebarButton = () => {
    setOpenedSidebar(!openedSidebar);
  };

  const getClassName = () => {
    if (!openedSidebar) {
      return '';
    }

    return 'open';
  };

  const getIcons = () => {
    if (!openedSidebar) {
      return <AiOutlineMenuUnfold />;
    }

    return <AiOutlineMenuFold />;
  };

  const renderLinkClass = (url) => {
    if (pathname !== url) {
      return '';
    }

    return 'active';
  };

  const getIconLink = (url) => {
    if (pathname !== url) {
      return <MdOutlineRadioButtonUnchecked />;
    }

    return <MdOutlineRadioButtonChecked />;
  };

  const renderListMenu = () => menus.map((m) => (
    <Link to={m.url} key={m.url} className={`side-bar__content-link ${renderLinkClass(m.url)}`}>
      <div />
      <span>{m.title}</span>
      {getIconLink(m.url)}
    </Link>
  ));

  const renderLogo = () => {
    if (!openedSidebar) {
      return <div className="side-bar__logo" />;
    }

    return (
      <div className="side-bar__logo">
        <img src="/images/logo-ht.svg" alt="logo" />
      </div>
    );
  };

  return (
    <div className={`side-bar ${getClassName()}`} ref={refSidebar}>
      <div
        className="side-bar__opener"
        onClick={handleClickSidebarButton}
        onKeyPress={handleClickSidebarButton}
        tabIndex="0"
        role="button"
      >
        {getIcons()}
      </div>
      <div className="side-bar__content">
        {renderLogo()}
        {renderListMenu()}
      </div>
    </div>
  );
};

export default Sidebar;
