import { Searchform } from 'components/Search-Form/Searchform';
import s from './App.module.css'
import { useEffect } from "react";
import { fetchContacts } from "Redux/contact";
import { useDispatch, useSelector } from "react-redux";
import { Dna } from 'react-loader-spinner';
import { ContactsList } from "components/Contact-List/ContactsList";





export const Home = () => {
const status = useSelector(state => state.contact.status)
const error = useSelector(state => state.contact.error)
const dispatch = useDispatch()

useEffect(() => {
  dispatch(fetchContacts())
}, [dispatch])



  return (
    <div 
      style={{
        height: '400px',
        display: 'inline',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div className={s.searchForm}>
      <Searchform/>
      </div>
      {status === "loading" && <div className={s.loader}>
        <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
         />
      </div> }
        {error ? <h2 className={s.apiError}>An error occured: <span className={s.errorName}>{error}</span> 😫</h2> : 
        <div className={s.searchForm}>
        {status === "resolved" && <ContactsList/>} 
      </div>}
    </div>
  );
};
