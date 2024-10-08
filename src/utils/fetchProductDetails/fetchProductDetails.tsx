import { gql } from "graphql-request";
import { client } from "../lib/client";

export type ProductDetails = {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail: {
    url: string;
  };
  images: {
    url: string;
  }[];
};

const ProductDetailsQuery = gql`
  query Product($id: ID!) {
    product(where: { id: $id }) {
      id
      title
      description
      price
      thumbnail {
        url
      }
      images {
        url
      }
    }
  }
`;

export async function fetchProductDetails(id: string) {
  try {
    const { product } = await client.request(ProductDetailsQuery, { id });
    return product;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
}
