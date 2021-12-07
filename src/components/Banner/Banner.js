import styled from "styled-components";

const bannerImg = process.env.PUBLIC_URL + "img/banner.jpg";

export const Banner = styled.div`
  height: 200px;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
  filter: contrast(75%);
`;
