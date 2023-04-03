import React from 'react'

export default function main() {
    const obj = [{
        id:1,
        name: "sahid sfgfg gsg sd fsgs gsdgsd gsdgf gfdgdf fdgdfg  dgdfg rdgfd fg"
    },
    {
        id:2,
        name: "sahid1"
    },
    {
        id:3,
        name: "sahid2"
    },
    {
        id:4,
        name: "sahid sfgfg gsg sd fsgs gsdgsd gsdgf"
    },
    {
        id:5,
        name: "sahid sfgfg gsg sd fsgs gsdgsd gsdgf"
    },
    {
        id:6,
        name: "sahid sfgfg gsg sd fsgs gsdgsd gsdgf"
    }]

    const handleArticleOpen  = (id)=>{

    }

    return (
        <div className="grid grid-cols-4 gap-4 bg-green-100 mt-10">
        {
            obj.map((elem)=>{
                return(
                  
                 <div  >
                      <div >
                    <h1 className='flex-1  bg-gray-200 m-5 p-3' onClick={()=>handleArticleOpen(elem.id)} >{elem.name}</h1>
                    </div>
                 </div>
                )
            })
        }
       

        </div>
    )
}
