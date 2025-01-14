function BlogPara({ques, ans, analogy, con, img}) {
  return (
    <div className="p-4">
    <h1 className="text-4xl mb-2">{ques}</h1>

    <div className="w-full  bg-[#090909cb] text-stone-300">
    <p className="w-full text-lg p-2 rounded-lg sha">{ans}</p>
    <p className="w-full mt-2 text-lg p-2 rounded-lg sha">{analogy}</p>
    <p className="w-full mt-2 text-lg p-2 rounded-lg sha">{con}</p>
    </div>

    </div>
  )
}

export default BlogPara;