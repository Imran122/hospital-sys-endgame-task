import React from "react";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import Banner from "./Banner/Banner";
import Department from "./Department/Department";
import DoctorList from "./DoctorList/DoctorList";
import FrequentlyQuestion from "./FrequentlyQuestion/FrequentlyQuestion";
import Lab from "./Lab/Lab";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Department></Department>
      <Lab></Lab>
      <DoctorList></DoctorList>
      <FrequentlyQuestion></FrequentlyQuestion>
      <Footer></Footer>
    </div>
  );
};

export default Home;
