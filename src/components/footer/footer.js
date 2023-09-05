/** @jsx jsx */
import React from 'react';
import { jsx, Box, Text, Container } from 'theme-ui';
import { Link } from 'components/link';
import Logo from 'components/logo';
import logoLight from 'assets/logo-light.svg';
export default function Footer() {
  return (
    // <Box as="footer" sx={styles.footer}>
    //   <Container sx={styles.container}>
    //     <Box
    //       sx={{
    //         display: 'flex',
    //         alignItems: 'center',
    //         flexDirection: ['column', null, null, null, null, 'row'],
    //       }}
    //     >
    //       <Logo image={logoLight} />
    //       <Text
    //         as="p"
    //         sx={{
    //           color: '#ffffff',
    //           opacity: '0.7',
    //           fontSize: '14px',
    //           mt: ['10px', null, null, null, null, '0'],
    //         }}
    //       >
    //         &copy; MEGA Education League {new Date().getFullYear()}
    //       </Text>
    //     </Box>
    //     <Box sx={styles.linksWrap}>
    //       {/* <Link path="/">Home</Link> */}
    //       {/* <Link path="/">Attend</Link> */}
    //       <Link path="/">Work With Us</Link>
    //     </Box>
    //   </Container>
    // </Box>
    <></>
  );
}

const styles = {
  footer: {
    py: ['40px', null, null, null, null, '30px', '40px'],
    backgroundColor: '#000',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#ffffff',
      opacity: '0.05',
    },
  },
  container: {
    display: 'flex',
    flexDirection: ['column', null, null, null, null, 'row'],
    justifyContent: ['center', null, null, null, null, 'space-between'],
    alignItems: 'center',
    position: 'relative',
    flexWrap: 'wrap',
  },
  linksWrap: {
    mt: ['15px', null, null, null, null, '0'],
    display: 'flex',
    flexWrap: 'wrap',
    a: {
      fontSize: ['14px', null, null, null, '16px'],
      color: '#ffffff',
      transition: 'all 500ms ease',
      '&:hover': { opacity: 0.7 },
    },
    'a+a': { ml: ['15px', null, null, null, '35px'] },
  },
};
