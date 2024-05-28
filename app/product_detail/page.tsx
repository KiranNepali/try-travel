import Footer from "@/components/website/Footer";
import TrekDetailMain from "@/components/website/TrekDetail/TrekDetailMain";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <TrekDetailMain />
      <Footer />
    </div>
  );
}

export default page;
