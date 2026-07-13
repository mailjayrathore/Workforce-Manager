import React from "react";

const Welcome = ({ name }) => {

    const hour = new Date().getHours();

    let message="";

    if(hour<12)
        message="Good Morning";

    else if(hour<17)
        message="Good Afternoon";

    else
        message="Good Evening";

    return(

<div className="bg-[#222] rounded-xl p-8 mb-8">

<h1 className="text-3xl font-bold">

{message}, {name} 👋

</h1>

<p className="text-gray-400 mt-2">

Have a productive day.

</p>

</div>

    )

}

export default Welcome