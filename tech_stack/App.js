import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./src/reducers";
import { Header } from "./src/components/common";
import LibraryList from "./src/components/LibraryList";

export default function App() {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibraryList />
      </View>
    </Provider>
  );
}
