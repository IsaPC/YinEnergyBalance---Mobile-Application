import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import coachStack from './coachStack';
import registerStack from '../screens/register';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Coach: {
    screen: coachStack,
  },
  Register:{
    screen: registerStack,
  },
});

export default createAppContainer(RootDrawerNavigator);