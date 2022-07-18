import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function Contact() {
  const [message, setMessage] = useState('')
  const [lanlord, setlanlord] = useState(null)
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams()

  const params = useParams()

  useEffect(() => {
    const getlanlord = async () => {
      const docRef = doc(db, 'users', params.lanlordId)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setlanlord(docSnap.data())
      } else {
        toast.error('Could not get lanlord data')
      }
    }

    getlanlord()
  }, [params.lanlordId])

  const onChange = (e) => setMessage(e.target.value)

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Contact lanlord</p>
      </header>

      {lanlord !== null && (
        <main>
          <div className='contactlanlord'>
            <p className='lanlordName'>Contact {lanlord?.name}</p>
          </div>

          <form className='messageForm'>
            <div className='messageDiv'>
              <label htmlFor='message' className='messageLabel'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='textarea'
                value={message}
                onChange={onChange}
              ></textarea>
            </div>

            <a
              href={`mailto:${lanlord.email}?Subject=${searchParams.get(
                'listingName'
              )}&body=${message}`}
            >
              <button type='button' className='primaryButton'>
                Send Message
              </button>
            </a>
          </form>
        </main>
      )}
    </div>
  )
}

export default Contact
