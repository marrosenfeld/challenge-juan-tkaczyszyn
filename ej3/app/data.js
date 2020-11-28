import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { orange600, cyan600, purple600, yellow200, red200} from 'material-ui/styles/colors';

const data = {
  menus: [
    { id: 'dashboard', text: 'DashBoard', icon: <FontIcon className="material-icons">assessment</FontIcon>, url: '/', index: 2 },
    { id: 'descartes', text: 'Candidatos', icon: <FontIcon className="material-icons">work</FontIcon>, url: '/descartes', index: 111 },
  ],
};

export default data;
