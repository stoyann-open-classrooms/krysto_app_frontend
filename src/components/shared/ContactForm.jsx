import React, { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { createMessage, reset } from '../../features/message/messageSlice'
import Spinner from './spinner/Spinner'


function ContactForm() {


    const {isLoading, isError, isSuccess , message} = useSelector((state) => state.message)
    const [messageData, setMessageData] = useState({})
  


    const dispatch = useDispatch()
    useEffect(() => {
            if(isError) {
                toast.error(message)
            }
            if(isSuccess) {
                dispatch(reset)
                toast.success("message envoyer")
            }

            dispatch(reset)
    },[dispatch, isSuccess, isSuccess, message])

    const handleForm = (e) => {
        e.preventDefault()
    
        dispatch(createMessage(messageData))
    }

    const handleInput = ({currentTarget}) => {
        const {name, value} = currentTarget
        setMessageData({
            ...messageData,
            [name]: value
        })
    }
if (isLoading) {
    return <Spinner/>
}
  return (
    <section className="form">
        <form onSubmit={handleForm}>
        <div className="form-group">
            <label htmlFor="">Quelle services vous interesse *</label>
            <select 
               onChange={handleInput}
            name="object" id="object">
              <option value="">Selectionner</option>
              <option value="Mise en place d'un point de collecte">Mise en place  d'un point de collecte</option>
              <option value="Collecte des déchets plastique de votre entreprise">
                Collecte des déchets plastique de votre entreprise
              </option>
              <option value="Devenir revendeur">
               Devenir revendeur
              </option>
              <option value="Autres">
               Autres
              </option>
            </select>
          </div>
          <div className="form-group">
            <input
            onChange={handleInput}
            name='name'

            type="text" placeholder="Entrer Nom / Prénom *" />
          </div>
          <div className="form-group">
            <input 
             onChange={handleInput}
             name='compagny'
            
            type="text" placeholder="Société / Organisme" />
          </div>
         
          <div className="form-group">
            <input
             onChange={handleInput}
             name='phone'
            type="text" placeholder="Télèphone" />
          </div>
          <div className="form-group">
            <input
             onChange={handleInput}
             name='email'
            type="email" placeholder="Email *" />
          </div>
          <div className="form-group">
            <textarea
             onChange={handleInput}
             name='message'
            type="email" placeholder="votre message *" />
          </div>
        

          <div className="form-group">
            <button className=" btn btn-block">Nous contacter</button>
          </div>
        </form>
      </section>
  )
}

export default ContactForm