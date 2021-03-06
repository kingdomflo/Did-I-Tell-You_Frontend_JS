import React, { Component } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./Home.css";
import i18n from "i18n-js";
import ExploreContainer from "../components/ExploreContainer";

class HomePage extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{i18n.t("Menu.Home")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <ExploreContainer
            name={i18n.t("General.HelloWorld")}
          ></ExploreContainer>
        </IonContent>
      </IonPage>
    );
  }
}

export default HomePage;
