import Image from "next/image";

export default function Preloader() {
    return (
        <div className='preloader'>
            <Image src={'/preloader.gif'} width={200} height={200} alt="preloader" loading="eager"/>
        </div>
    )
}