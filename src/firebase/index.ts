import app from "gatsby-plugin-firebase-v9.0"
import { getFirestore } from "firebase/firestore"

export const firestore = getFirestore(app)

export default app
