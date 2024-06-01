import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import NewsListScreen from '../screens/NewsList';
import NewsDetailScreen from '../screens/NewsDetails';

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const Navigation = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="NewsList"
            component={NewsListScreen}
            options={{title: 'News List', headerTitleAlign: 'center'}}
          />
          <Stack.Screen name="Details" component={NewsDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default Navigation;
