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
  uuid?: string,
  description: string,
  figma?: string,
  github?: string,
  website?: string,
  preview?: string
}