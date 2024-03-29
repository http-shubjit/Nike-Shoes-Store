
import Wrapper from '@/components/Wrapper'
import HeroBanner from '../components/HeroBanner'
import ProductCart from '@/components/ProductCart'
export default function Home() {
    return (
        <main>

<HeroBanner/>
<Wrapper>
    {/* heading and paragraph start */}
    <div className='text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]'>
        <div className='text-[28px] md:text-[34px] mb-5 font-bold leading-tight'> Cushioning for Your Miles</div>
        
        <div className='text-md md:text-xl'>
     A lightweight Nike ZoomX midsole is combined with increased stack height to help provide cushioning during extended stretches of running.


        </div>
    </div>
    {/* heading and paragraph end */}

 {/* products grid start */}
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'> 
<ProductCart/>
<ProductCart/>
<ProductCart/>
<ProductCart/>
<ProductCart/>
<ProductCart/>
<ProductCart/>
<ProductCart/>
<ProductCart/>



</div>

</Wrapper>

    </main>
    )
}
