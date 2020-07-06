import styled from "styled-components";
import Container from "../../../../components/container";
import { windowQueries } from "../../../../configurations/window";

const HomeTileContainer = styled(Container)`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  width: 100%;
  margin-right: 50px;
  margin-bottom: 50px;

  ${windowQueries.extra_large`
    width: 44%;
  `}
`;

export default HomeTileContainer;
