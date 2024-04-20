const Skill = ({icon,title}) => {
  return (
    <div className=" flex p-2 items-center justify-center gap-4 w-32 sm:w-36 rounded-xl m-3 cursor-pointer bg-skill">
      <img src={icon} className="w-[30px]"/>
      <p className='text-secondary'>{title}</p>
    </div>
  )
}
export default Skill
