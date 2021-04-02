import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20,
  },
  recipeTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "700",
    bottom: 5,
  },
  scroll: {
    height: 130,
    marginTop: 20,
  },
  card: {
    width: 130,
    height: 130,
    marginLeft: 10,
  },
  scrollCard: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});

export default styles;
