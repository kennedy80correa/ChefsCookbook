import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "90%",
    height: 80,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 5,
    margin: 10,
    right: 8,
  },
  cardLeft: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 2,
  },
  recipeImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  cardTitle: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  description: {
    flexDirection: "column",
  },
  cardDesc: {
    marginLeft: 10,
    fontSize: 14,
    color: "#7E7E7E",
  },
  cardRight: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  rowPortion: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cardPortion: {
    marginRight: 5,
    width: 25,
    height: 15,
  },
  rowTimer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTime: {
    marginRight: 5,
    width: 18,
    height: 22,
  },
  iconText: {
    marginRight: 5,
    color: "#7E7E7E",
    fontWeight: "bold",
  },
});

export default styles;
