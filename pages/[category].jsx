import { ArchiveCategory } from '../components/ArchiveCategory'
import { useRouter } from 'next/router'

 const category = ({posts}) => {

    const router = useRouter();
    const category = router.query.category;
    const filtro = posts.filter(post => post.categorias[0].slug === category);
    const urlImg = "http://localhost:1337"


    return (
        
        <ArchiveCategory filtro={filtro} urlImg={urlImg} />
    )
}

export default category

export const getStaticPaths = async () => {


    const paths = [
        {params: {category: "reactjs"}},
        {params: {category: "nextjs"}},
        {params: {category: "nodejs"}},
    ]

    return {
        paths,
        fallback: true
    }


}

export const getStaticProps = async () => {

    const res = await fetch('http://localhost:1337/posts');
    const posts = await res.json();
  
    return {
        props: {
            posts
        }
    }
  }
  
