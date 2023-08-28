import { PhotoType } from '../_template_data/Photos'


export default function Photos({ photos }: { photos: PhotoType[] }) {
  return (
    <div className='col items-start page'>
        <h1 className='title'><span className='text-[4.25vh]'>&#9813;</span> / Photos of the Week</h1>
        <div className='row'>
            {photos.map((photo, i) => (
                <div className='w-[20vh] h-[40vh]' key={i}>
                    <img
                        src={photo.img}
                        alt="photo"
                        className="h-full w-full object-cover" 
                    />
                </div>
            ))}
        </div>
        <p className='text-base mt-2'><span className='text-xl'>&#9752;</span> Last updated 08-27-2023</p>
    </div>
  )
}
