import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
export default function App() {
  return (
    <>
      <Provider store={store}>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
      </Provider>
    </>
    )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     color: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// const txt = StyleSheet.create({p: { color: '#ccc',},});
