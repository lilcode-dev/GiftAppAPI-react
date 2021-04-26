import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([])
    // useEffect(() => {
    //     getGifs(category).then(setImages);
    //     // other 
    //     // getGifs(category).then((imgs) => setImages(imgs))
        
    // }, [])
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <h3 className='animate__animated animate__jello'>{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid animate__animated">
                {images.map((img) => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </div>
        </>
    )
}
