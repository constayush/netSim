function BlogPara({ques, ans, para1, para2 , para3 , para4, analogy, con, img}) {
  return (
    <div className="p-2 mb-8">
    <h1 className="text-4xl mb-8">{ques}</h1>

    <div className="w-full  bg-[#090909cb] text-stone-300 p-4">
    <p className="w-full text-lg p-2 rounded-lg sha">{ans}</p>

    { img && <img className="object-cover w-full p-20 rounded-lg" src={img}/>}
    { para1 && <p className="w-full mt-2 text-lg p-2 rounded-lg sha">{para1}</p>}
    { para2 && <p className="w-full mt-2 text-lg p-2 rounded-lg sha">{para2}</p>}
    { para3 && <p className="w-full mt-2 text-lg p-2 rounded-lg sha">{para3}</p>}
    { para4 && <p className="w-full mt-2 text-lg p-2 rounded-lg sha">{para4}</p>}
    { analogy && <p className="w-full mt-2 text-lg p-2 rounded-lg sha">{analogy}</p>}
    { con && <p className="w-full mt-2 text-lg p-2 rounded-lg sha">{con}</p>}
    </div>

    </div>
  )
}

export default BlogPara;