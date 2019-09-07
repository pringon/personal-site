import React from 'react';
import { Link } from 'gatsby';
import Moment from 'react-moment';
import BlogListWrapper from '../../styles/index/BlogListingStyles';
import RightArrow from '../../images/svg/RightArrowSVG';

const BlogListing = ({ data }) => {
  const { frontmatter, excerpt } = data;

  const setSlug = type => {
    if (type === 'blogPost') {
      return `blog/${frontmatter.slug}`;
    } else if (type === 'tutorial') {
      return `tutorials/${frontmatter.slug}`;
    }
  };

  return (
    <BlogListWrapper>
      <Link to={setSlug(frontmatter.type)}>
        <h2>{frontmatter.title}</h2>
        <ul>
          {frontmatter.tags &&
            frontmatter.tags.map((tag, i) => (
              <li className="listingTag" key={i}>
                <h5>{tag}</h5>
              </li>
            ))}
        </ul>
        <h3>
          Published: <Moment date={frontmatter.date} format="MMMM DD, YYYY" />
        </h3>
        <p>{excerpt}</p>
        <div className="readMore">
          <p>Read More</p>
          <RightArrow />
        </div>
      </Link>
    </BlogListWrapper>
  );
};

export default BlogListing;
