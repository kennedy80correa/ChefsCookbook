import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    margin: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  titleDesc: {
    color: "#777F88",
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    width: "80%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 40,
    borderBottomWidth: 1,
    borderColor: "#7E7E7E",
  },
  time: {
    width: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timer: {
    margin: 10,
  },
  detailsTxt: {
    fontSize: 18,
    color: "#7E7E7E",
  },
  portion: {
    width: 60,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dinner: {
    margin: 10,
  },
  ingredientsContainer: {
    width: "95%",
    marginVertical: 20,
    alignItems: "center",
  },
  ingredientsList: {
    width: "85%",
    padding: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#7E7E7E",
  },
  ingredient: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 10,
  },
  ingredientTxt: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  directionsContainer: {
    width: "95%",
    marginVertical: 20,
    alignItems: "center",
    paddingBottom: 20,
  },
  directionsList: {
    padding: 20,
  },
  step: {
    marginTop: 10,
  },
  stepN: {
    justifyContent: "flex-start",
  },
  stepTitle: {
    fontSize: 22,
    fontWeight: "500",
  },
  stepTxt: {
    fontSize: 22,
    color: "#7E7E7E",
    marginVertical: 20,
  },
});

export default styles;
