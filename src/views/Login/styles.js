import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    alignItems: "center",
  },
  bg: {
    position: "absolute",
    width: "100%",
    height: 550,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  logo: {
    width: 176,
    height: 176,
    borderRadius: 100,
  },
  form: {
    width: "90%",
    alignItems: "center",
  },
  inputs: {
    width: 280,
    height: 40,
    fontSize: 17,
    color: "#7E7E7E",
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#7E7E7E",
  },
  links: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  linkContainer: {},
  linkText: {
    color: "#7E7E7E",
  },
  submit: {
    width: "76%",
    height: 44,
    alignItems: "flex-end",
  },
  login: {
    width: 89,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF2323",
    borderRadius: 6,
  },
  loginTxt: {
    color: "#FFF",
    fontSize: 20,
  },
});

export default styles;
