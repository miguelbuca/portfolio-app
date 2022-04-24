interface Anchor {
  name: string;
  link: string;
  image?: string;
}
interface Job extends Anchor {
  title: string;
  country: string;
  description: string;
}

interface Project extends Anchor {

}