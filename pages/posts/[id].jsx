import React from 'react'

const Post = ({post}) => {

    const urlImg = "http://localhost:1337"

    return (
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img className="lg:w-6/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={urlImg + post.image.formats.large.url} />
          <div className="lg:w-2/3 w-full">
            <h1 className=" text-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-400">{post.title}</h1>
            <p className="mb-8 leading-relaxed">{post.content}</p>
          </div>
        </div>
      </section>
    )
}

export default Post


export const getStaticPaths = async () => {
    const paths = [
        {params: {id: '1'}}
    ]
    return {
        paths,
        fallback: true
    }
}


export const getStaticProps = async ({params}) => {

    const res = await fetch(`http://localhost:1337/posts/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}
