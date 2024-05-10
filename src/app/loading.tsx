import dynamic from "next/dynamic";

const DynamicCircularProgress = dynamic(
  () => import("@mui/material/CircularProgress"),
  {
    ssr: false,
  }
);
export default function Loading() {
  return <DynamicCircularProgress />;
}
