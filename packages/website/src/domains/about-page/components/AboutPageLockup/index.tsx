"use client";

import Header from "@/components/Header";
import HeaderActionHome from "@/components/HeaderActionHome";
import Page from "@/components/Page";
import AboutCertifications from "@/domains/about-page/components/AboutCertifications";
import AboutEducation from "@/domains/about-page/components/AboutEducation";
import AboutPageHeader from "@/domains/about-page/components/AboutPageHeader";
import AboutPrinciples from "@/domains/about-page/components/AboutPrinciples";

export default function AboutPageLockup() {
  return (
    <Page>
      <Header backButton={<HeaderActionHome />} />
      <AboutPageHeader />
      <AboutPrinciples />
      <AboutEducation />
      <AboutCertifications />
    </Page>
  );
}
