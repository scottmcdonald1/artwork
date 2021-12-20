import React from "react";
import Footer from "./Footer";

export default function Layout({children}) {
    return (
      <div className="px-8">
        <main className="px-8">
          {children}
        </main>
        
        <Footer />
      </div>
    )
}