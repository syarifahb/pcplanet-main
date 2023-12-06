import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonMenuButton,
  IonButton,
  IonImg,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Styles from "../styles/Landing.module.css";
import Pic from "/public/Fontaine Genshin impact.jpg";
import Pict1 from "/images/fontaine genim.jpg";
import Pict2 from "/images/fonten gi.jpg";
import Pict3 from "/images/fontaine.jpg";
import Pict4 from "/images/fontaine gi.jpg";
import Pict5 from "/images/freminet.jpg";
import Pict6 from "/images/map fontaine.jpg";
import Pict7 from "/images/furina.jpg";
import Pict8 from "/images/neuvillette.jpg";
import Button from "../components/atoms/button";
import { useEffect, useState } from "react";
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Navbar>Home</Navbar>
      <IonContent>
        <div className={Styles.container}>
          <div className={Styles.content}>
            <section className={Styles.contentButton}>
              <IonText>
                <h1 className={Styles.contentHeading1}>
                  Selamat Datang di Web Desa Fontaine
                </h1>
              </IonText>
              <IonText>
                <p className={Styles.contentHeading2}>
                  Apa yang anda cari ada disini!
                </p>
              </IonText>
              <Button size={addSize(isSmallScreen)} path="/about">Get Started!</Button>
            </section>
            <IonImg src={Pic} />
          </div>
        </div>
          <div className={Styles.cardContainer}>
            <IonText className={Styles.cardText}> Berita Terkini </IonText>
            <div className={Styles.cardTitle}>
              <div className={Styles.cardResponsive}>
                <IonCard>
                  <IonImg src={Pict1} />
                  <IonCardHeader>
                    <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                    <IonCardTitle>Wilayah Baru?</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Fontaine telah memiliki beberapa rumor dan bocoran yang
                    mengisyaratkan apa yang diharapkan dari wilayah baru
                    tersebut.
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonImg src={Pict2} />
                  <IonCardHeader>
                    <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                    <IonCardTitle>
                      Siapa Archon Fontaine Sebenarnya?
                    </IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Dari berita yang saya dapatkan menurut warga Desa Fontaine
                    archon fontaine yang sebenarnya adalah...
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonImg src={Pict3} />
                  <IonCardHeader>
                    <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                    <IonCardTitle>Furina Focalor</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    Furina berkata: "Satu kebohongan selalu mengikuti kebohongan
                    yang lain, sehingga "keadilan" pasti menunggu di akhir."
                  </IonCardContent>
                </IonCard>
                <IonCard>
                  <IonImg src={Pict4} />
                  <IonCardHeader>
                    <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                    <IonCardTitle>Bangunan di Desa Fontaine</IonCardTitle>
                  </IonCardHeader>
                  <IonCardContent>
                    konstruksi bangunan di Fontaine mengadopsi desain klasik
                    bergaya Eropa dan hadir dengan beberapa bangunan publik
                    utama macam teater Opera Epiclese, pengadilan The Court of
                    Fontaine, dan masih banyak lagi.
                  </IonCardContent>
                </IonCard>
              </div>
            </div>
          </div>  

        <IonText className={Styles.cardText2}> Pengumuman </IonText> 
          <div className={Styles.cardContainer2}>
            <div className={Styles.cardTitle2}>
             <div className={Styles.cardResponsive2}>

                <IonCard>                
                  <IonImg src={Pict5}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                        <IonCardTitle>Freminet</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                        Bagi Freminet, suara mesin yang sedang menyala bisa mewakili banyak hal.
                        Suara ini bisa menjadi pendamping Freminet saat sedang meneliti sebuah mesin seorang diri, 
                        bisa jadi peringatan untuk bertarung, atau bisa juga menjadi lagu pengantar tidurnya.
                        </IonCardContent>
                  </IonCard>

                <IonCard className={Styles.ioncard2}>
                  <IonImg src={Pict6}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                        <IonCardTitle>Map Fontaine</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                        Fontaine juga terdiri dari dua area, yaitu area darat dan area bawah laut (underwater).
                        Secara geografis, Fontaine sendiri terletak di sebelah timur laut padang pasir Sumeru.
                        </IonCardContent>
                  </IonCard>

                  <IonCard className={Styles.ioncard3}>
                  <IonImg src={Pict7}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                        <IonCardTitle>Furina Focalor</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                        "Di dunia nyata, kita semua pernah melihat bunga yang layu, terjebak dalam hujan lebat, dan mendengar tentang kapal yang hilang tanpa jejak.
                        Tapi terlepas dari semua itu, setidaknya aku masih bisa percaya akan satu hal.
                        Bahwa setidaknya di atas panggung, kita bisa mengendalikan takdir kita sendiri."
                        </IonCardContent>
                  </IonCard>

                  <IonCard className={Styles.ioncard4}>
                  <IonImg src={Pict8}/>
                    <IonCardHeader>
                        <IonCardSubtitle>Desa Fontaine</IonCardSubtitle>
                        <IonCardTitle>Neuvillette Hakim Agung Fontaine</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                        Neuvillette sedang berjalan-jalan di daerah fontaine
                        untuk refereshing sebelum menjalani tugasnya sebagai hakim.
                        </IonCardContent>
                  </IonCard>
              </div>
            </div>
          </div>  
        </IonContent>
        <Footer />
    </IonPage>
  );
};

export default Home;
