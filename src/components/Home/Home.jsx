import { name, tagline, resume_link, image } from '../../amit.json'
import { SiGoogledocs } from "react-icons/si";
const Home = () => {
  return (
    <div className="w-full md:max-w-4xl lg-max-w-6xl md:mx-auto px-2 flex sm:flex-row flex-col justify-center items-center gap-4 my-28" id="home">
      <div className='aspect-squar sm:w-[300px] text-center mx-auto'>
        <img src={image} alt="profileimage" className="object-contain rounded-lg" />
      </div>
      <div className='tracking-wider font-bold text-lg text-center sm:text-left pl-4 flex justify-center flex-col'>
        <h2 className="sm:text-main text-primary">
          {" "}
          Hi, I am{" "}
          <span className="md:text-main text-secondary">{name}</span> from
          India 🇮🇳
          <p className="sm:text-xl text-primary mt-2">{tagline}</p>
        </h2>
        <div className='cursor-pointer mt-3 text-center'>
          <a href={resume_link} target="_blank" className='mx-auto sm:mx-0 text-white flex items-center w-fit bg-button p-2 rounded-xl' rel='noreferrer'>
          <SiGoogledocs className='inline'/>Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
