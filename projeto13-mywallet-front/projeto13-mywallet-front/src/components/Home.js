import Styled from "styled-components";
import { useState, useContext, useEffect } from "react";

import UserContext from "../contexts/UserContexts";
import axios from "axios";

export default function Home() {
    
    const { API, userData, setUserData, setArray } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    const transac = []
    useEffect(() => {
        const config = {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("userToken")}` 
            }
        }
        const promise = axios.get(`${API}/transactions`, config);
        promise.then(r => {
            console.log(r)

            r.data.map(t => {transac.push(t)})
            setTransactions([transac]);
            console.log(transactions, transac)
        })
        promise.catch(e => {
            console.log(e)
        })
    }, [])

    return(
        <HomeS>
            <h1>Hi, {userData.username} </h1>
            <Transactions>
                {
                    (transactions) ?
                    transac.map((t, i) => {
                        <span key={i} >{t.value}</span>})
                    :
                    <p>No transactions yet!</p>                    
                }
            </Transactions>
        </HomeS>
    )
}

const HomeS = Styled.div``;
const Transactions = Styled.div``;