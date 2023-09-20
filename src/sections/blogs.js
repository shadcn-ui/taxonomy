import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import blogImage1 from 'assets/blog-1-1.png';

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'FOX News',
    description: null,
    path: 'https://fox40.com/business/press-releases/ein-presswire/626887826/mega-hackathon-league-announces-registration-for-mega-hackathon-2023/',
    linkLabel: null,
  },
  {
    image: blogImage1,
    title:
      'Associated Press',
    description: null,
    path: 'https://apnews.com/press-release/ein-presswire-newsmatics/education-ein-presswire-newsmatics-58fe2b4c330abc443e0e592d5271c898',
    linkLabel: null,
  },
  {
    image: blogImage1,
    title:
      '100+ Others',
    description: null,
    path: 'https://www.einpresswire.com/press-releases/report/FuLauKABLKwQHZvK?n=2',
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Come See Us Live"
          text="Mom we're on the news!"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
