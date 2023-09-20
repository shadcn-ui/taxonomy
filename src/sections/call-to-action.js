import React from 'react';
import { Box, Container, Flex, Text, Heading, Image } from 'theme-ui';
import { Link } from 'components/link';

import callImage from 'assets/call-image.png';
import BlockTitle from 'components/block-title';

const CallToAction = () => {
  return (
    <Box as="section" sx={styles.callToAction}>
      <Container>
        <Flex sx={styles.flex}>
          {/* <Box sx={styles.content}>
            <Text as="span">Behind the design</Text>
            <Heading as="h3">
              Code that we used to built the website with integrating apps
            </Heading>
            <Text as="p">
              Get your tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever. Get your tests delivered at let home collect
              sample.
            </Text>
            <Link path="#" sx={styles.button}>
              Explore More
            </Link>
          </Box> */}
          {/* <Heading as="h3" style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            fontSize: 30,
            fontWeight: 700,
            marginBottom: 50,
          }}>
            Driven by passion
          </Heading> */}
          <Box         style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: -100
          }}>
            <BlockTitle
              title="Driven By Passion"
              text="Our intrensic drive to propegate STEAM is what makes a truly MEGA team."
            />
            <Box sx={styles.images}>
              <Image src={callImage} alt="call image" />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  callToAction: {
    mt: ['-90px', null, null, null, '0'],
    py: ['50px', null, null, null, '110px', null, '140px'],
  },
  flex: {
    flexWrap: 'wrap',
  },
  content: {
    flex: ['0 0 100%', null, null, null, null, '0 0 37.5%'],
  },
  heading: {
    mb: '30px',
    pt: '60px',
    textAlign: ['center', null, null, null, null, 'left'],
    pl: ['0', null, null, '30px'],
    maxWidth: ['80%', null, null, '100%'],
    mx: ['auto', null, null, '0'],
    span: {
      display: 'block',
      fontSize: '18px',
      color: 'primary',
      fontWeight: 700,
      lineHeight: 1,
      mb: '20px',
    },
    h3: {
      color: '#0F2137',
      fontSize: ['23px', null, null, null, '30px', '36px', '44px'],
      maxWidth: ['100%', null, null, null, null, '90%', '100%'],
      fontWeight: 700,
      letterSpacing: '-1.5px',
      lineHeight: 1.36,
    },
  },
  button: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  images: {
    flex: ['0 0 100%', null, null, null, '0 0 100%'],
  },
};
