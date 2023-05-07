import React from "react";

const ChatBody = () => {

  const aiStyle = "bg-white bg-opacity-40 backdrop-blue-lg dropshadow-md mr-auto "

  return( 
    <div className="flex flex-col gap-4 ">
      {/* client message  */}
      <div className="border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] " >
        <pre className="whitespace-pre-wrap" >
          <span>Hey chatgpt , can u help me </span>
        </pre>
      </div>


      {/* ai message  */}
      <div className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${aiStyle} `} >
        <pre>
          <span>Yes i can help u </span>
        </pre>
      </div>

    </div>
  )
};

export default ChatBody;
