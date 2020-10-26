import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getData } from "src/redux/userData/userData.action";

function Home() {
    const [employes, setEmployes] = useState([]);
    const userData = useSelector(state => state.userData)
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            let result = await dispatch(getData(1));
            setEmployes(employes => [...employes, result.payload]);
        };
        fetchData();
    }, []);

    async function handleClick() {
        let result = await dispatch(getData(2));
        setEmployes(employes => [...employes, result.payload]);
        //how we can set data in functional components
        // setEmployes(employes => [...employes, { userId: 2, id: 2, title: "first val", completed: false }]);
    }
    return (
        <div>
            {employes && employes.length > 0 ?
                employes.map((element, index) => <div key={index}>{element.title}</div>) : <p>first</p>}
            <button onClick={handleClick}>
                Change
            </button>
        </div>
    );
}
export default Home;