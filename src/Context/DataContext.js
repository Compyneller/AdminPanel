import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
export const Data = createContext();
const DataContext = ({ children }) => {
  const [homepage, setHomepage] = useState([]);
  const [orgHomepage, setOrgHomepage] = useState([]);
  const [about, setAbout] = useState([]);
  const [services, setServices] = useState([]);
  const [orgServices, setOrgServices] = useState([]);
  const [contact, setContact] = useState([]);
  const [news, setNews] = useState([]);
  const [career, setCareer] = useState([]);
  const [allData, setAllData] = useState([]);
  const [inrd, setInrd] = useState([]);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const fetchHomepage = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/homepage"
      );
      setHomepage(data);
    };
    fetchHomepage();

    const fetchAbout = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/about"
      );
      setAbout(data);
    };
    fetchAbout();

    const fetchServices = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/service"
      );
      setServices(data);
    };
    fetchServices();
    const fetchContactUs = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/contact"
      );
      setContact(data);
    };
    fetchContactUs();
    const fetchNews = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/newsupdate"
      );
      setNews(data);
    };
    fetchNews();
    const fetchCareer = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimocom/get/career"
      );
      setCareer(data);
    };
    fetchCareer();
  }, []);
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================
  // ============================================

  useEffect(() => {
    const fetchHomepage = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimoorg/get/homepage"
      );
      setOrgHomepage(data);
    };
    fetchHomepage();
    const fetchServicespage = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/universomagnanimoorg/get/service"
      );
      setOrgServices(data);
    };
    fetchServicespage();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/fincritic/gethomepage"
      );
      setAllData(data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "http://34.207.41.229:4100/inrd/gethomepage"
      );
      setInrd(data);
    };
    fetchData();
  }, []);

  return (
    <Data.Provider
      value={{
        homepage,
        about,
        services,
        contact,
        news,
        career,
        orgServices,
        orgHomepage,
        allData,
        inrd,
        auth,
        setAuth,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataContext;
