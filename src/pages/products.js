// src/pages/products.js
import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    allContentfulProduct {
      edges {
        node {
          id
          commonName
        }
      }
    }
  }
`;

const ProductsPage = ({ data }) => {
  const products = data.allContentfulProduct.edges;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(({ node }) => (
          <li key={node.id}>{node.commonName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
