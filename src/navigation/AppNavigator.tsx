// AppNavigator.tsx
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProvinsiList from '../components/ProvinsiList';
import KabupatenList from '../components/KabupatenList';

const AppNavigator = createStackNavigator(
  {
    ProvinsiList: { screen: ProvinsiList },
    KabupatenList: { screen: KabupatenList },
  },
  {
    initialRouteName: 'ProvinsiList',
  }
);

export default createAppContainer(AppNavigator);
