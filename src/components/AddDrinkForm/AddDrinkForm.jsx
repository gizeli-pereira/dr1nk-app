import { useState } from "react";
import axios from "axios";
import { useGetUserID } from "../../hooks/useGetUserID";
import { useNavigate } from "react-router-dom";
import { getDrinks } from "../../utilities/drinks-api";
import { useCookies } from "react-cookie";
import sendRequest from "../../utilities/send-request";
import { createDrink } from "../../utilities/drinks-api";


export default function AddDrinkForm({ user }) {
    const userId = useGetUserID();
    const [cookies, _] = useCookies(["access_token"])
    const [drink, setDrink] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        location: "",
        user: ""
    });

    const apiUrl = `http://localhost:3001/api/drinks`;
    const navigate = useNavigate();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDrink({...drink, [name]: value });
    };

    // function handleCreate(newDrink) {
    //     console.log('pre-ax')
    //     axios.post(`http://localhost:3001/api/drinks`, newDrink)
    //         .then((response) => {
    //             getDrinks();
    //             console.log('post-ax')
    //         })
    // }

    

    // async function onNewSubmit(e) {
    //     e.preventDefault()
    //     try {
    //         const result = await sendRequest(`http://localhost:3001/api/drinks`)
    //         console.log(result);
    //         setDrink(result);
    //       } catch (error) {
    //         console.error(error)
    //       }
    // }

    


    // const authAxios = axios.create({
    //     baseUrl: apiUrl,
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`
    //     }
    // })

    // async function fetchData() {
    //     try {
    //         const result = await axios.get(`${apiUrl}`)
    //         console.log(result)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log('pre-ax')
        try {
            await axios.post(
                `http://localhost:3001/api/drinks`,
                { ...drink },
                {
                    headers: {
                        // authorization: cookies.access_token,
                        
                    }
                }

            );
            console.log('post-ax')
            navigate("/")
        } catch (error) {
            console.error(error);
        }
    };

    return (
      <div className="add-drink">
        <h2>Add a Drink</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={drink.name}
            onChange={handleChange}/>
          <label htmlFor="ingredients">Ingredients</label>
          <input 
            type="text" 
            name="ingredients"
            value={drink.ingredients}
            onChange={handleChange}/>
          <label htmlFor="instructions">Instructions</label>
          <textarea 
            name="instructions" 
            id="instructions"
            value={drink.instructions}
            onChange={handleChange} ></textarea>
          <label htmlFor="imageUrl">Image URL</label>
          <input 
            type="text" 
            id="imageUrl"
            name="imageUrl"
            value={drink.imageUrl}
            onChange={handleChange}/>
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            id="location"
            name="location"
            value={drink.location}
            onChange={handleChange}/>
          <button type="submit">Add Drink</button>
        </form>
      </div>
    );
  };