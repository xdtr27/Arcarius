import Home from "@/src/pages/Home";
import { StatusBar } from "react-native";
import Header from "../components/Header";


export default function Page() {
  
  
  return (
    <>
      <StatusBar barStyle={"default"} backgroundColor={"#111"} />
      <Header />
      <Home />
    </>
  );
}
