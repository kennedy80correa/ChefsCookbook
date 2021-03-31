import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  field: {
    width: "100%",
    marginVertical: 10,
    marginBottom: 25,
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleTxt: {
    fontSize: 28,
    fontWeight: "bold",
  },
  inputContainer: {
    alignItems: "center",
  },
  desc: {
    marginHorizontal: 15,
  },
  titleDesc: {
    color: "#777F88",
    fontSize: 13,
  },
  inputs: {
    width: "90%",
    height: 40,
    borderBottomColor: "#7E7E7E",
    borderBottomWidth: 1,
  },

  addIngredient: {
    flexDirection: "row",
    width: 140,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    padding: 3,
    borderWidth: 2,
    borderColor: "#7E7E7E",
    borderRadius: 6,
  },
  addStep: {
    flexDirection: "row",
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    padding: 3,
    borderWidth: 2,
    borderColor: "#7E7E7E",
    borderRadius: 6,
  },
  stepTxt: {
    marginLeft: 5,
    fontSize: 18,
    color: "#7E7E7E",
  },
  midContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    alignItems: "center",
  },
  portion: {
    alignItems: "center",
  },
  timeInput: {
    width: 60,
    fontSize: 24,
  },
  qtdInput: {
    width: 40,
    height: 30,
    fontSize: 24,
    paddingHorizontal: 2,
  },

  btns: {
    width: 185,
    height: 44,
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "space-between",
  },
  btnCancel: {
    width: 89,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FF2323",
    borderRadius: 6,
  },
  txtCancel: {
    color: "#FF2323",
    fontSize: 20,
  },
  btnSave: {
    width: 89,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF2323",
    borderRadius: 6,
  },
  txtSave: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
