import * as React from "react"
import { useDocumentDataOnce } from "react-firebase-hooks/firestore"
import { collection, doc, FirestoreDataConverter, QueryDocumentSnapshot } from "firebase/firestore"

import { firestore } from "../firebase"

export type Site = {
  id: string
  profile?: string
  title: string
}
const c: FirestoreDataConverter<Site> = {
  fromFirestore(ss: QueryDocumentSnapshot<Site>, op) {
    return { ...ss.data(op), id: ss.id }
  },
  toFirestore: model => model,
}

export function Site({ siteId }: { siteId: string }) {
  const [site, loading, _err] = useDocumentDataOnce(doc(collection(firestore, "sites"), siteId).withConverter(c))
  if (!site || loading) return null
  return (
    <div>
      {site.title}
    </div>
  )
}

export default function Home() {
  const siteId = "03rykMovi9eVZJbFdrwrGZglSM72";
  if (typeof window === "undefined")
    return <div>"hello"</div>
  return <Site siteId={siteId} />
}
