import { Outlet } from "react-router-dom"

function Partners() {
  return (
    <div className="page-content">
    <section className="heading">
        <h1>Nos partenaires</h1>
    </section>
    <Outlet/>
    </div>
  )
}

export default Partners