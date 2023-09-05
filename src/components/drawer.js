import React, { Fragment } from 'react';
import { Box } from 'theme-ui';
import RcDrawer from 'rc-drawer';

const Drawer = ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}) => {
  return (
    <Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className ? className : ''}`.trim()}
        width={width}
        placement={placement}
        handler={false}
        level={null}
        duration="0.4s"
        {...props}
      >
        {closeButton && (
          <Box as="div" onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>{children}</Box>
      </RcDrawer>
      <Box
        className="drawer__handler"
        style={{ display: 'inline-block' }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </Box>
    </Fragment>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};

export default Drawer;
