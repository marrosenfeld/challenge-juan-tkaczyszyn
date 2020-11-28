import { createSelector } from 'reselect';

/**
 * Direct selector to the apidemoPage state domain
 */
const selectDescartesPageDomain = () => (state) => state.get('descartes');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DescartesPage
 */

const makeSelectDescartesPage = () => createSelector(
  selectDescartesPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectDescartesPage;
export {
  selectDescartesPageDomain,
};
