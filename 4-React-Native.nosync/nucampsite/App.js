import Main from "./screens/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Main/>
      </NavigationContainer>
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
