import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfil, reset } from "../../../features/user/userSlice";
import Spinner from "../../../components/shared/spinner/Spinner";
import { Link } from "react-router-dom";
import userService from "../../../features/user/userService";

function PrivateHome() {
  const { profil, isLoading, isError, isSuccess } = useSelector(
    (state) => state.profil
  );
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess, isError]);

  useEffect(() => {
    dispatch(getProfil());
    
  }, []);


  console.log(profil.data);

  if (!profil.data || isLoading) {
    
    return <Spinner />;
  } else {
    return (
      <div className="page-content">
     
           { localStorage.setItem('userRole', JSON.stringify(profil.data.role))}
        {profil.data.role === "partners" ? (
           <>
           <h1>Private home partners</h1>
           <p>Bonjour {profil.data.name}</p>
           </>
        ) : ""}
        
        {profil.data.role === "user" ? (
           <>
            <h1>private home user</h1>
            <p>Bonjour {profil.data.name}</p>
           </>
        ) : ""}
        {profil.data.role === "admin" ? (
           <>
            <h1>private home admin</h1>
            <p>Bonjour {profil.data.name}</p>
           
           </>
        ) : ""}
    
        
      </div>
    );
  }
}

export default PrivateHome;
