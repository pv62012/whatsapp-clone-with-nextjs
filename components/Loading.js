import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave,
} from "better-react-spinkit";

function Loading() {
  return (
    <div style={{height:"100vh", display:"grid", placeItems:"center" }}>
      <center>
        <img src="/images/icon1.jpg" alt="whatsapp" height={200} />
        <WanderingCubes style={{margin:"30px", height:"50px" , width:"50px" }} />
      </center>
    </div>
  );
}

export default Loading;
