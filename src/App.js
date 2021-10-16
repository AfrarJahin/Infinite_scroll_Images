import './App.css';
import Heading from "./components/Heading";
import Images from "./components/Images";
import Loader from "./components/Loader";
import {useEffect, useState} from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasData, setHasData] = useState(true);
    const [page, setPage] = useState('1');
    const apiRoot = 'https://api.unsplash.com/photos/random?client_id=A4qM-xhV4HO6J31taEcyKXzo0HKIkXPqOMVr2UQLG4Y&count=10';




    const fetchApi = async () => {
        try {
            setIsLoading(true);
            let data = await fetch(apiRoot).then(res=>res.json());

            console.log(data);
            setImages(prev => {
                return [...prev, ...data];

            });
            setIsLoading(false);
        } catch (error) {
                console.log(error);
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);

    const onScroll = async () => {
        const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;

        if (windowBottom >= docHeight-1) {
            console.log('at the bottom');
            await fetchApi();
        } else {
            console.log('not at the bottom');
//don’t do anything
        }
    }



    return (
        <div className="App">

            <Heading/>
            <button style={{marginBottom: 10}} className='btn btn-primary' onClick={fetchApi}>Fetch Images</button>
            {images.length > 0 && (
                <Images images={images}/>
            )}
            {isLoading && <Loader/>}
            {!hasData && <><p>No data anymore</p></>}

        </div>
    );
}

export default App;
