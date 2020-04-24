import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
import HomeStack from './homeStack';
import sessionStack from './sessionStack';
import registerStack from './registerStack';
import ViewUserStack from './ViewUserStack'
// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
  },
  Coach: {
    screen: sessionStack,
  },
  Register:{
    screen: registerStack,
  },
  ViewUser:{
    screen: ViewUserStack,
  }
});

export default createAppContainer(RootDrawerNavigator);