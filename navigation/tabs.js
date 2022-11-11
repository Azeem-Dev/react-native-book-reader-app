import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { COLORS, icons } from "../constants";
import { Home } from "../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const headerHide = {
        headerShown: false,
    }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const tintColor = focused ? COLORS.white : COLORS.gray;
          switch (route.name) {
            case "Home":
              return (
                <Image
                  source={icons.dashboard_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );

            case "Search":
              return (
                <Image
                  source={icons.search_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case "Notification":
              return (
                <Image
                  source={icons.notification_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
            case "Setting":
              return (
                <Image
                  source={icons.menu_icon}
                  resizeMode="contain"
                  style={{
                    tintColor: tintColor,
                    width: 25,
                    height: 25,
                  }}
                />
              );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: "10%",
          backgroundColor: COLORS.black,
        },
        showLabel: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={headerHide}
      />
      <Tab.Screen name="Search" component={Home} options={headerHide}/>
      <Tab.Screen name="Notification" component={Home} options={headerHide}/>
      <Tab.Screen name="Setting" component={Home} options={headerHide}/>
    </Tab.Navigator>
  );
};

export default Tabs;
