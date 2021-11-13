import React from "react";
import axios from "axios";
const Download = props => {
  const downloadHandler = () => {
    axios({
      url:
        "https://firebasestorage.googleapis.com/v0/b/download-b5515.appspot.com/o/Karthik%20resume%20wowe.pdf?alt=media&token=c9d6028a-d0e2-4573-9362-5a5985a61051",
      method: "GET",
      responseType: "blob", //important
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Karthik_Prakash.pdf");
      document.body.appendChild(link);
      link.click();
    });
  };

  return <p onClick={downloadHandler} style={{backgroundColor:"transparen",cursor:"pointer"}}>Take a tour to my CV</p>;
};
export default Download;
