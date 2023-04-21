import { App } from 'vue';
import chooseArea from './ecc-chooseArea';
import notification from './ecc-notification';
import list from './ecc-list';
import menu from './ecc-menu';
import chooseTime from './ecc-chooseTime';
import chooseDate from './ecc-chooseDate';
import progress from './ecc-progress';
import chooseCity from './ecc-chooseCity';
import form from './ecc-form';
import modalForm from './ecc-modalForm';
import table from './ecc-table';
import './styles/base.scss';
import './styles/ui.scss';
import container from './ecc-container';
import step from './ecc-step';

const components = [
  chooseArea,
  notification,
  list,
  menu,
  chooseTime,
  chooseDate,
  chooseCity,
  progress,
  form,
  modalForm,
  container,
  table,
  step,
];

export default {
  install(app: App) {
    components.map(item => {
      app.use(item);
    });
  },
};
