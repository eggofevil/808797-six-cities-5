import {combineReducers} from 'redux';
import appData from './app-data/app-data';
import appLogic from './app-logic/app-logic';

export const NameSpace = {
  DATA: `DATA`,
  LOGIC: `LOGIC`,
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.LOGIC]: appLogic
});
