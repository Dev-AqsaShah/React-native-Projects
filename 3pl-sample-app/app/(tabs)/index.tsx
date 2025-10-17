

import { Text, View } from "react-native-reanimated/lib/typescript/Animated";

const Index = () => {
  return(
    <View
      style={{
        backgroundColor: "red",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    
    <Text style={{ fontSize: 30, fontWeight: "700", color: "white" }}>
      Hello with react native expo</Text>
    </View>
  );
};

export default Index;