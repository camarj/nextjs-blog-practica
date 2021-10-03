import { ArchiveCategory } from '../../components/ArchiveCategory'
import { useRouter } from 'next/router'


const Angular = ({posts}) => {

  const router = useRouter();
  const path = router.pathname;
  const category = path.replace("/", "");
  const filtro = posts.filter(post => post.categorias[0].slug === category);
  const urlImg = "http://localhost:1337"

  return (
      <ArchiveCategory filtro={filtro} urlImg={urlImg} />
  )
}

export default Angular;

export const getServerSideProps = async () => {

  const res = await fetch('http://localhost:1337/posts');
  const posts = await res.json();

  return {
      props: {
          posts
      }
  }
}