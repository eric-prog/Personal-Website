import { PhotoType } from '../_template_data/Photos'


export default function Photos({ photos }: { photos: PhotoType[] }) {
  return (
    <div className='col items-start'>
        <h1 className='title'>Photos of the Week</h1>
        <div className='row justify-start'>
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
    </div>
  )
}
