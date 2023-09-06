import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Like last year, MEGA Hackathon hosted another Hackathon event in 2023 themed on real-world problems.',
    heading: 'MEGA Hackathon 2023',
    path: 'https://hack2023.megahack.tech/',
  },
  {
    image: serviceImage2,
    text:
      'In 2023, MEGA hosted a hackathon event in China which was a key creation of a hackathon overseas spreading similar themes and the beginning of our international journey.',
    heading: 'MEGA China - 2023 Hackathon',
    path: 'https://china.megahack.tech/',
  },
  {
    image: serviceImage3,
    text:
      'MEGA Partnered with RPS&D to host "WorldWide Debate" which had various competitive debaters compete for the top prize.',
    heading: 'MEGA World Wide Debate - July',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'MEGA Hackathon ran the first ever World-Wide Debate Event, which debated over the UNSG.',
    heading: 'MEGA World Wide Debate - May',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'MEGA teamed up with Columbia PHD students and Professors at Love and Future to educate the youth on the importance of Digital Storytelling through this transfomative course on AI and its impact in climate.',
    heading: 'MEGA X Columbia University - Digital Storytelling Class with AI',
    path: 'https://megahack.tech/digital-storytelling-class-2023',
  },
  {
    image: serviceImage6,
    text:
      'Our first annual MEGA Hackathon. It was a blast! Winners took home internships and $50k+ of prizes.',
    heading: 'MEGA Hackathon 2022',
    path: 'https://hack2022.megahack.tech/',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Events"
          text="It is our mission to create an complete and diverse education in STEAM topics."
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
