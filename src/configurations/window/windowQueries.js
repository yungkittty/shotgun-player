import _ from "lodash";
import { css } from "styled-components";
import windowBreakpoints from "./windowBreakpoints";

const windowQueries = _.reduce(
  windowBreakpoints,
  (windowQueriesOthers, windowBreakpoint, windowType) => {
    return _.assign({}, windowQueriesOthers, {
      [windowType]: (...windowQuerieArgs) => css`
        @media (min-width: ${windowBreakpoint}px) {
          ${css(...windowQuerieArgs)};
        }
      `,
    });
  },
  {}
);

export default windowQueries;
