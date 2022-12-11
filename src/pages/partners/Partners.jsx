import { Outlet } from "react-router-dom"
import PartnersList from "../../components/partners/PatnersList"

function Partners() {
  return (
    <div className="page-content">
    <section className="heading">
        <h1>Nos partenaires</h1>
    </section>
    <PartnersList/>
    <Outlet/>
    </div>
  )
}

export default Partners