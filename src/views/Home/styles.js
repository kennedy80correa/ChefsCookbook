import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  search: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -5,
    backgroundColor: "#FF2323",
  },
  mainView: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  scroll: {
    height: 130,
    marginTop: 20,
  },
  latestView: {
    marginTop: 20,
    position: "relative",
    right: 105,
  },
  latestTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  latestContainer: {
    alignItems: "center",
  },
});

export default styles;
