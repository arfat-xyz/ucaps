import BegineerFormComponent from "../component/BegineerFormComponent";
import { useCookies } from "react-cookie";
import SearchFormComponent from "../component/SearchFormComponent";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState({});
  const [loading, setLoading] = useState(false);
  const [cookies] = useCookies(["inputDetailes"]);
  useEffect(() => {
    setLoading(true);

    cookies && setCookie(cookies);
    setLoading(false);
  }, [cookies]);
  console.log(cookies);
  if (loading) return <CircularProgress />;
  return (
    <>
      {cookie?.inputDetailes ? (
        <SearchFormComponent cookies={cookies.inputDetailes} />
      ) : (
        <BegineerFormComponent />
      )}
    </>
  );
}
