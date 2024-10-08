import { gql } from "graphql-request";
import { client } from "../lib/client";

export type Work = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
  };
  category: {
    name: string;
    id: string;
  };
};

type WorksQueryResult = {
  works: Work[];
};

const WorksQuery = gql`
  query Work {
    works {
      id
      title
      description
      thumbnail {
        url
      }
      category {
        id
        name
      }
    }
  }
`;

export async function fetchWork() {
  try {
    const { works }: WorksQueryResult = await client.request(WorksQuery);
    return works;
  } catch (error) {
    throw error;
  }
}
