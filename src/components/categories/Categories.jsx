import Axios from 'axios';
import React, { useEffect, useState } from 'react';

const Categories = ({
    isOpen,
    list,
    setList
}) => {
    const [state, setState] = useState({
        categories: []
    });
    const [selectedCategorie, setSelectedCategorie] = useState({
        name: '',
        permalink: ''
    });

    useEffect(() => {
        if (state.categories?.length === 0) {
            (async () => {
                const { data } = await Axios.get(`https://api.gifsauce.com/api/categories/list`);
                if (data) {
                    setState({
                        categories: data.arraycategories
                    })
                }
            })();
        }
    }, [state]);

    const handleSelectCategory = async (value) => {
        const Pornsearch = require('pornsearch').search('ass');

        Pornsearch.gifs()
            .then(gifs => console.log(gifs));


        const { data } = await Axios({
            url: 'http://www.pornhub.com/gifs/search?search=ass&page=1',
            method: 'GET',
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
        console.log(data)
        
    };

    if (!isOpen) return null;
    else return (
        <div style={{
            position: 'fixed',
            height: '100vh',
            zIndex: 1,
            top: 0,
            backgroundColor: 'blue',
            width: '100vw',
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            {state?.categories?.map((category, i) => (
                <div key={i} onClick={() => handleSelectCategory(category.permalink)} >{category?.nom}</div>
            ))}
        </div >
    );
};

export default Categories;