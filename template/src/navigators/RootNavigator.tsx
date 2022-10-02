import React from 'react';
import type {PropsWithChildren, ReactElement, FC} from 'react';
import nameof from 'ts-nameof.macro';
import {HelloWorldScreen} from 'src/screens';
import * as Screens from 'src/screens';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

const RootNavigator: FC<
  PropsWithChildren<RootNavigatorProps>
> = (): ReactElement => {
  return (
    <Navigator
      initialRouteName={HelloWorldScreen.displayName!}
      screenOptions={{headerShown: false}}>
      {Object.values(Screens).map((ScreenComponent) => (
        <Screen
          key={ScreenComponent.displayName!}
          name={ScreenComponent.displayName!}
          component={ScreenComponent}
          initialParams={{}}
          options={{}}
        />
      ))}
    </Navigator>
  );
};

export type RootNavigatorProps = Record<string, unknown>;

RootNavigator.defaultProps = {
  //
};

RootNavigator.displayName = nameof(RootNavigator);

export default RootNavigator;
