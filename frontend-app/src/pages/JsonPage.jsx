import React, { useEffect, useState } from 'react'

const JsonPage = () => {
    const FETCH_URL="https://jsonplaceholder.typicode.com/posts"
    const [jsonData,setJsonData] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchData = async() =>{
        try{
            setLoading(true)
            const response = await fetch(`${FETCH_URL}`,{
                method : "GET",
            })

            const data = await response.json();
            console.log(data)
            
            setJsonData(data);
            setLoading(false);

        }catch(error){
            console.log(error.message)
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FAF7F3 0%, #F0E4D3 100%)'}}>
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{backgroundColor: '#D9A299'}}></div>
                    <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl" style={{backgroundColor: '#DCC5B2'}}></div>
                </div>
                
                <div className="relative z-10 px-8 py-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight" style={{color: '#8B4513'}}>
                                Hello Json PlaceHolder
                            </h1>
                            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{backgroundColor: '#D9A299'}}></div>
                        </div>
                        
                        <div className="banner flex justify-center items-center text-center mb-16">
                            <div className="max-w-4xl mx-auto p-8 rounded-3xl backdrop-blur-sm shadow-2xl border border-white/20" style={{backgroundColor: 'rgba(240, 228, 211, 0.8)'}}>
                                <p className="text-lg md:text-xl leading-relaxed font-medium" style={{color: '#5D4037'}}>
                                    This is for testing purposes i used application..here i will create also docker image using multistage step .You can get the image from my docker hub  
                                    <span className="px-3 py-1 rounded-full font-bold text-white ml-2" style={{backgroundColor: '#D9A299'}}>
                                        sasindu193 is my username in docker
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="card-items px-8 pb-16">
                <div className="max-w-6xl mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="relative">
                                {/* Spinning circles loader */}
                                <div className="w-16 h-16 border-4 border-gray-200 rounded-full animate-spin" style={{borderTopColor: '#D9A299'}}></div>
                                <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent rounded-full animate-spin" style={{borderTopColor: '#DCC5B2', animationDirection: 'reverse', animationDuration: '1s'}}></div>
                            </div>
                            <p className="mt-6 text-xl font-semibold animate-pulse" style={{color: '#5D4037'}}>
                                Loading amazing content...
                            </p>
                            <div className="flex space-x-2 mt-4">
                                <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#D9A299', animationDelay: '0s'}}></div>
                                <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#DCC5B2', animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: '#F0E4D3', animationDelay: '0.2s'}}></div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {jsonData?.map((post,index)=>(
                                <div key={index} className="group">
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-1 border border-white/30" style={{backgroundColor: '#FAF7F3'}}>
                                        {/* Card Header */}
                                        <div className="relative p-6 pb-4">
                                            <div className="absolute top-0 right-0 w-20 h-20 opacity-20 rounded-bl-full" style={{backgroundColor: '#DCC5B2'}}></div>
                                            <div className="relative z-10">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center space-x-3">
                                                        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg" style={{backgroundColor: '#D9A299'}}>
                                                            {post.id}
                                                        </div>
                                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{backgroundColor: '#DCC5B2'}}>
                                                            {post.userId}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Card Body */}
                                        <div className="px-6 pb-6">
                                            <h2 className="text-xl font-bold mb-4 capitalize leading-tight transition-colors group-hover:text-opacity-80 line-clamp-2 overflow-hidden" style={{color: '#5D4037'}}>
                                                {post.title.length > 50 ? post.title.substring(0, 50) + '...' : post.title}
                                            </h2>
                                            <div className="relative">
                                                <p className="text-sm leading-relaxed line-clamp-3 overflow-hidden" style={{color: '#6D4C41'}}>
                                                    {post.body.length > 120 ? post.body.substring(0, 120) + '...' : post.body}
                                                </p>
                                                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full opacity-60" style={{backgroundColor: '#F0E4D3'}}></div>
                                            </div>
                                        </div>
                                        
                                        {/* Decorative Elements */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{backgroundColor: '#D9A299'}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Floating Elements */}
            <div className="fixed top-1/4 left-8 w-3 h-3 rounded-full opacity-40 animate-pulse" style={{backgroundColor: '#D9A299'}}></div>
            <div className="fixed top-1/3 right-12 w-2 h-2 rounded-full opacity-60 animate-pulse" style={{backgroundColor: '#DCC5B2'}}></div>
            <div className="fixed bottom-1/4 left-16 w-4 h-4 rounded-full opacity-30 animate-pulse" style={{backgroundColor: '#F0E4D3'}}></div>
        </div>
    )
}

export default JsonPage