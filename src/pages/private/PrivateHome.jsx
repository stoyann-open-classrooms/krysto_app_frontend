import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfil, reset } from "../../features/user/userSlice";
import Spinner from "../../components/shared/spinner/Spinner";
import { Link } from "react-router-dom";

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
        <section className="heading">
          <h1>Bienvenue {profil.data.name} Nous sommes content de vous revoir</h1>
        </section>
        <div className="collectData">
          <p className="nb-collect">3 collectes effectuer</p>
          <p><span>45 Kilos</span> de plastiques recyclé grâce vous !</p>
        </div>
        <Link to={'/new-request'} className='btn  btn-block'>
          Faire une demande de collecte
      </Link>
      </div>
    );
  }
}

export default PrivateHome;
