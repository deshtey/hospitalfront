import { CircularProgress } from "@mui/material";

export default function Splash() {

  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
        height:"80vh"
    }}>

        <CircularProgress size={100}/>
   
     
    </div>
  );
}
