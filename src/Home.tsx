import React from "react";
import { FloatingSupport } from "./appBase/components";
import { HomeHero, About, HomeRegister, Header, Donate, Attendance, Directory, LiveStream } from "./components"

export const Home = () => (
  <>
    <Header />
    <HomeHero />
    <About />
    <Donate />
    <Attendance />
    <Directory />
    <LiveStream />
    <HomeRegister />
    <FloatingSupport appName="B1" />
  </>
)
