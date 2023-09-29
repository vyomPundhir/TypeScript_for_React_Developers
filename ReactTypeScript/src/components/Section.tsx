import { ReactNode } from 'react'

// const Section: React.FC<{title: string}> = ({children, title}) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//       <p>{children}</p>
//     </section>
//   )
// } ---> this is the old way of declaring types to the props

type SectionProps ={
  title?: string,
  children: ReactNode //just hover over the "ReactNode" you will come to know about what possible type "ReactNode" consists.
  // children is somrthing different from props....it is something that should come b/w the open and close tags. For Ref..check App.tsx
}

const Section = ({ children, title="My Subheading" }: SectionProps) =>{
  return(
    <section>
      <h2>{title} </h2>
      <p>{children} </p>
    </section>
  )
}

export default Section