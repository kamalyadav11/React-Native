import React from 'react';
import PageOne from './Pages/PageOne';
import PageTwo from './Pages/PageTwo';
import PageThree from './Pages/pageThree';
import {StackNavigator} from 'react-navigation';

export default Screensearch = StackNavigator({
  Home: { screen: PageOne },
  Dashboard: {screen: PageTwo},
  Profile: {screen: PageThree},
},
    {
        initialRouteName: 'Profile',
    }
)
