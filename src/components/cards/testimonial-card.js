import React from 'react';
import { Box, Text, Heading, Image } from 'theme-ui';
const TestimonialsCard = ({ image, text, name, username }) => {
  return (
    <Box sx={styles.testimonialsCard}>
      <Text as="p">{text}</Text>
      <Box sx={styles.testimonialsInfo}>
        <Box sx={styles.testimonialsImage}>
          <Image src={image} alt={name} />
        </Box>
        <Box sx={styles.testimonialsContent}>
          <Heading as="h3">{name}</Heading>
          <Text as="p">{username}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsCard;

const styles = {
  testimonialsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    mb: '20px',
    px: ['20px', null, null, null, null, '25px', '35px'],
    py: ['20px', null, null, null, null, '20px', '25px'],
    pb: ['25px', null, null, null, null, '25px', '35px'],
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
    },
  },
  testimonialsInfo: {
    display: 'flex',
    alignItems: 'center',
    mt: '20px',
  },
  testimonialsImage: {
    img: {
      display: 'block',
      mr: '15px',
    },
  },
  testimonialsContent: {
    h3: {
      m: 0,
      color: '#343D48',
      fontSize: '17px',
      fontWeight: 500,
      lineHeight: 1,
    },
    p: {
      m: 0,
      lineHeight: 1,
      color: '#4F96FF',
      fontSize: '14px',
      fontWeight: 500,
      mt: '10px',
    },
  },
};
