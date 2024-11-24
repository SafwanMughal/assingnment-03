import Link from "next/link"

export default function page () {
  return(
    <div>
      <h1>Home Page</h1>
      <Link href="/about">go to about</Link>
      <br />
      <Link href="/contact">go to contact</Link>
      <br />
      <Link href="/footer">go to footer</Link>
     
    </div>
  )
}