/** @jsx jsx */
import { jsx } from 'theme-ui';
import { motion } from 'framer-motion';

export const AccordionButton = ({ children, ...rest }) => (
  <div
    css={{
      display: 'flex',
      alignItems: 'center',
      letterSpacing: '-0.2px',
      cursor: 'pointer',
      fontSize: '17px',
      lineHeight: 1.5,
      fontWeight: '500',
      border: 'none',
      paddingTop: '10px',
      paddingBottom: '10px',
      paddingLeft: '15px',
      paddingRight: '30px',
      position: 'relative',
      color: '#0F2137',
      '@media(min-width: 768px)': {
        paddingLeft: '30px',
        paddingRight: '30px',
        paddingTop: '20px',
        paddingBottom: '20px',
        fontSize: '15px',
      },

      ':focus': {
        outline: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
      },
      span: {
        position: 'absolute',
        top: '50%',
        right: '20px',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        color: '#fff',
        '@media(min-width: 768px)': {
          right: '30px',
        },
        img: {
          width: '7px',
          '@media(min-width: 768px)': {
            width: 'auto',
          },
        },
      },
    }}
    {...rest}
  >
    {children}
  </div>
);

const variants = {
  open: {
    // maxHeight: 200,
    height: 'auto',
    marginBottom: 10,
    '@media(min-width: 768px)': {
      marginBottom: 30,
    },
  },
  closed: { height: 0, marginTop: 0, marginBottom: 0 },
};
export function AccordionContents({ isOpen, ...props }) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      css={{
        overflowY: 'hidden',
        fontSize: 15,
        padding: '0 15px',
        paddingRight: '40px',
        lineHeight: '30px',
        color: '#343D48',
        '@media(min-width: 768px)': {
          padding: '0 30px',
        },
      }}
      {...props}
    />
  );
}

export const AccordionItem = ({ isOpen, children, ...rest }) => (
  <div
    css={{
      borderRadius: 5,
      marginBottom: 10,
      border: '1px solid #EDEFF2',
      padding: 0,
      overflow: 'hidden',
    }}
    {...rest}
  >
    {children}
  </div>
);

export const preventClose = (state, changes) =>
  changes.type === 'closing' && state.openIndexes.length < 2
    ? { ...changes, openIndexes: state.openIndexes }
    : changes;

export const single = (state, changes) =>
  changes.type === 'opening'
    ? { ...changes, openIndexes: changes.openIndexes.slice(-1) }
    : changes;

export const combineReducers = (...reducers) => (state, changes) =>
  reducers.reduce((acc, reducer) => reducer(state, acc), changes);
