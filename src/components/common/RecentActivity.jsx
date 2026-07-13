import React, { useEffect, useState } from "react";

const RecentActivity = () => {

    const [activities, setActivities] = useState([]);

    useEffect(() => {

        const data =
            JSON.parse(localStorage.getItem("activities")) || [];

        setActivities(data.reverse());

    }, []);

    return (

        <div className="bg-[#1E293B] rounded-2xl p-6 border border-slate-700 mt-8">

            <h2 className="text-2xl font-semibold mb-6">

                Recent Activity

            </h2>

            {

                activities.length===0 ?

                <p className="text-gray-400">

                    No recent activity

                </p>

                :

                activities.map((item,index)=>

                    <div
                    key={index}
                    className="py-3 border-b border-slate-700 text-gray-300"
                    >

                      <div className="flex justify-between items-center">
  <span>✓ {item.message}</span>
  <span className="text-xs text-gray-500">
    {item.time}
  </span>
</div>

                    </div>

                )

            }

        </div>

    )

}

export default RecentActivity;