import React from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";

//Componentes
import Header from "../../components/Header";

import profileCover from "../../assets/profileCover.png";
import plus from "../../assets/add-photo.png";
import book from "../../assets/book.png";
import editIcon from "../../assets/edit.png";

export default function Profile({ edit }) {
  return (
    <View style={styles.container}>
      <Header showBack={true} />
      <View style={styles.cover}>
        <ImageBackground source={profileCover} style={styles.bg} />
      </View>
      <View style={styles.photoContainer}>
        <TouchableOpacity>
          <View style={styles.photo}>
            <Image source={plus} style={styles.photoIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.name}>
        <Text style={styles.yourName}>Your Name </Text>
      </View>
      <TouchableOpacity style={styles.published}>
        <Image source={book} style={styles.pIcon} />
        <Text style={styles.msg}>Published recipes: 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.editP}>
        <Image source={editIcon} style={styles.eIcon} />
        <Text style={styles.msg}>Edit your profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnLogout}>
        <Text style={styles.txtLogout}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
