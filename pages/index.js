import BegineerFormComponent from "../component/BegineerFormComponent";
import { useCookies } from "react-cookie";
import SearchFormComponent from "../component/SearchFormComponent";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState({});
  const [cookies] = useCookies(["inputDetailes"]);
  useEffect(() => {
    cookies && setCookie(cookies);
  }, [cookies]);
  return (
    <>
      {cookie?.inputDetailes ? (
        <SearchFormComponent />
      ) : (
        <BegineerFormComponent />
      )}
    </>
  );
}
