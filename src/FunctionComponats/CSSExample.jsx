import React from 'react'
import "../FunctionComponats/style.css"
const mystyle = {
    textbox:
    {
        padding:25,
        textAlignment:"justify"
        
    },
    red:
    {
        backgroundColor:"red"
    },
    green:
    {
        backgroundColor:"green"
    },
    blue:
    {
        backgroundColor:"blue"
    },
   
    

}

export default function CSSExample() {
  return (
    <>
      <div className='main'>
        <div className="center">
        <p style={{backgroundColor:"navy",color:"white",padding:10}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        <p style={{backgroundColor:"pink",color:"black",padding:10}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        <p style={{backgroundColor:"yellow",color:"red",padding:10}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        <p style={{backgroundColor:"purple",color:"white",padding:10}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        <p style={{backgroundColor:"blue",color:"pink",padding:10}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        <p style={{backgroundColor:"gray",color:"yellow",padding:10}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        <p style={{...mystyle.textbox,...mystyle.red}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        <p style={{...mystyle.textbox,...mystyle.green}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        <p style={{...mystyle.textbox,...mystyle.blue}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure cum perferendis aperiam, rem ut ipsum aliquam odit, harum ad aut repellendus consequatur labore vel. Rerum nostrum sit ipsam ipsum exercitationem harum consequuntur nulla rem illo quo, dolor debitis veritatis praesentium. Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque! Nulla iusto omnis perspiciatis qui voluptas enim facilis expedita atque!</p>
        
        </div>
      </div>
    </>
  )
}
