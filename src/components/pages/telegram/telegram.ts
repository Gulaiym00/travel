// import { useState } from 'react'
// import type { FormEvent } from 'react'

// type FeedbackForm = {
//  name: string
//  phone: string
//  message: string
// }

// const BOT_TOKEN = '8856747299:AAEv7BQgWs8_Lh-WYv6UegWM4sVE1s7wBO4'
// const CHAT_ID = '5546022505'

// export default function App() {
//  const [form, setForm] = useState<FeedbackForm>({
//   name: '',
//   phone: '',
//   message: '',
//  })

//  const [loading, setLoading] = useState(false)
//  const [status, setStatus] = useState('')

//  function handleChange(field: keyof FeedbackForm, value: string) {
//   setForm((prev) => ({
//    ...prev,
//    [field]: value,
//   }))
//  }

//  function validateForm(): string | null {
//   if (!form.name.trim()) {
//    return 'Введите имя'
//   }

//   if (!form.phone.trim()) {
//    return 'Введите телефон'
//   }

//   if (!form.message.trim()) {
//    return 'Введите сообщение'
//   }

//   return null
//  }

//  function createTelegramMessage(): string {
//   return `
// Имя: ${form.name}
// Телефон: ${form.phone}
// Сообщение: ${form.message}
// `.trim()
//  }

//  async function sendToTelegram() {
//   const text = createTelegramMessage()

//   const response = await fetch(
//    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
//    {
//     method: 'POST',
//     headers: {
//      'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//      chat_id: CHAT_ID,
//      text,
//     }),
//    },
//   )

//   const data = await response.json()

//   if (!response.ok || !data.ok) {
//    throw new Error(data.description || 'Ошибка при отправке в Telegram')
//   }

//   return data
//  }

//  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault()

//   setStatus('')

//   const error = validateForm()

//   if (error) {
//    setStatus(error)
//    return
//   }

//   try {
//    setLoading(true)

//    await sendToTelegram()

//    setStatus('Сообщение отправлено')

//    setForm({
//     name: '',
//     phone: '',
//     message: '',
//    })
//   } catch (error) {
//    console.error(error)
//    setStatus('Ошибка при отправке')
//   } finally {
//    setLoading(false)
//   }
//  }

//  return (
//   <form onSubmit={handleSubmit}>
//    <h1>Обратная связь</h1>

//    <input
//     type="text"
//     placeholder="Ваше имя"
//     value={form.name}
//     onChange={(event) => handleChange('name', event.target.value)}
//    />

//    <input
//     type="tel"
//     placeholder="Телефон"
//     value={form.phone}
//     onChange={(event) => handleChange('phone', event.target.value)}
//    />

//    <textarea
//     placeholder="Ваше сообщение"
//     value={form.message}
//     onChange={(event) => handleChange('message', event.target.value)}
//    />

//    {status && <p>{status}</p>}

//    <button type="submit" disabled={loading}>
//     {loading ? 'Отправка...' : 'Отправить'}
//    </button>
//   </form>
//  )
// }