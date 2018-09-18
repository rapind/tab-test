import * as React from 'react'
import { Dimensions, View, Text, StyleSheet } from 'react-native'
import { TabBar, TabView } from 'react-native-tab-view'
import { Constants } from 'expo'

const PlaceholderView = (props) => {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.sceneTitle}>{props.route.title}</Text>
      <Text style={styles.sceneBody}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor.
      </Text>
      <Text style={styles.sceneBody}>
        Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Purus in massa tempor nec feugiat nisl pretium.
        Eget gravida cum sociis natoque penatibus et magnis. Cursus eget nunc scelerisque viverra mauris in aliquam.
      </Text>
    </View>
  )
}

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
}

let routes = []

for (let i = 1; i <= 20; i++) {
  routes.push({ key: i.toString(), title: `Tab ${i.toString()}` })
}

export default class TabViewExample extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      routes: routes,
    }
  }

  _handleIndexChange = index => this.setState({ index })

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled
      indicatorStyle={styles.indicator}
      style={styles.tabBar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
      useNativeDriver
    />
  )

  _renderScene = ({ route }) => {
    if (Math.abs(this.state.index - this.state.routes.indexOf(route)) > 2) {
      return <View />;
    }

    return <PlaceholderView route={route} />;
  }

  render() {
    return (
      <TabView
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
  },
  label: {
    color: "black"
  },
  indicator: {
    height: 0,
  },
  tab: {
    flex: 1,
    width: 100,
    alignItems: 'center',
  },
  placeholderContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: "#eee",
  },
  sceneTitle: {
    fontSize: 20,
  },
  sceneBody: {
    fontSize: 16,
    paddingTop: 20,
  },
})

