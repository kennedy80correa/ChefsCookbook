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
  photoContainer: {
    width: 150,
    height: 150,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 120,
    height: 120,
    backgroundColor: "#7E7E7E",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
  photoIcon: {
    width: 40,
    height: 40,
  },
  name: {
    marginVertical: 10,
  },
  yourName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#E5E5E5",
  },
  published: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  msg: {
    fontSize: 18,
    color: "#E5E5E5",
  },
  pIcon: {
    width: 21,
    height: 28,
    marginHorizontal: 12,
  },
  editP: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginBottom: 20,
  },
  eIcon: {
    width: 21,
    height: 21,
    marginHorizontal: 12,
  },
  btnLogout: {
    width: 89,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FF2323",
    borderRadius: 6,
    marginVertical: 20,
  },
  txtLogout: {
    color: "#FF2323",
    fontSize: 20,
  },
});

export default styles;
