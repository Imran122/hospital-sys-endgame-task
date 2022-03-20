import React from "react";
import Banner from "./Banner/Banner";
import Department from "./Department/Department";
import DoctorList from "./DoctorList/DoctorList";
import FrequentlyQuestion from "./FrequentlyQuestion/FrequentlyQuestion";
import Lab from "./Lab/Lab";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Department></Department>
      <Lab></Lab>
      <DoctorList></DoctorList>
      <FrequentlyQuestion></FrequentlyQuestion>
    </div>
  );
};

export default Home;
