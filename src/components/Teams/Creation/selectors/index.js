import { get } from 'lodash';

import { forms } from '../../../../common/constants';

export default state => ({
  values: get(state, `forms.data[${forms.TEAMS_CREATION}].values`, {}),
});
