
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Blogs = ({heading,description,date,readtime,bloglink,topics}) => {
  return (
    <div className="p-4 rounded-xl bg-project w-full">
      <div>
            <h1 className="text-2xl font-bold text-secondary">{heading}</h1>
            <p className="text-primary text-sm">{date} .  {readtime}</p>
            <p className="text-base tracking-wider my-3 text-[#1A202C]">{description}</p>
            <div className="my-2">
                  <button className="bg-[#00A0DC] p-1 rounded-xl cursor-pointer text-white font-semibold"><a href={bloglink} target="_blank" rel="noreferrer">Read More   <FontAwesomeIcon icon={faArrowRight} beat style={{color: "#ffffff",}} /></a></button>
            </div>
            <div className="my-3 flex flex-wrap gap-3">
           {topics.map((topic,index)=>(
            <span className="text-sm font-bold  bg-blue-400 p-1 rounded-md text-[#1A202C]" key={index}> #{topic}
            </span> 
           ))} 
            </div>
      </div>
    </div>
  )
}

export default Blogs
