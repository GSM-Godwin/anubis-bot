import { Collapse } from "react-collapse"
import {AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai"

const FaqItem = ({title, desc, open, toggle}) => {
  return (
    <div className='pt-[10px] md:pl-20'>
        <div className='text-white rounded-t-2xl border-b border-[#171717] py-[25px] lg:px-[50px] p-[20px] flex justify-between items-center cursor-pointer' onClick={toggle}>
            <p className='lg:text-[24px] font-medium'>{title}</p>
            <div className='text-[30px]'>
                {open ? <AiFillMinusCircle className="text-[#404040]" /> : <AiFillPlusCircle className="text-[#404040]" />}
            </div>
        </div>
        <Collapse isOpened={open}>
            <div className={`text-white rounded-b-2xl shadow-xl mt-[-15px] px-[20px] lg:px-[50px] py-[20px] faq-content ${open ? "open" : "closed"}`} dangerouslySetInnerHTML={{ __html: desc }} />
        </Collapse>
    </div>
  )
}

export default FaqItem