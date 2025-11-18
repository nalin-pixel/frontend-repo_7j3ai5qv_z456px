import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  company: z.string().min(2, 'Bitte geben Sie Ihren Firmennamen ein'),
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen)'),
  privacy: z.literal(true, { errorMap: () => ({ message: 'Bitte stimmen Sie der Datenschutzerklärung zu' }) }),
  hp_field: z.string().optional(),
})

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = async (values) => {
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          company: values.company,
          name: values.name,
          email: values.email,
          phone: values.phone || '',
          message: values.message,
          privacy: values.privacy,
          hp_field: values.hp_field || ''
        })
      })

      if (!res.ok) throw new Error('Anfrage fehlgeschlagen')

      reset()
      alert('Vielen Dank! Wir melden uns zeitnah bei Ihnen.')
    } catch (e) {
      console.error(e)
      alert('Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.')
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Kontakt</h1>
      <p className="mt-4 text-slate-700">Wir beraten Sie gerne. Bitte füllen Sie das Formular aus – wir melden uns zeitnah.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Firma</label>
          <input {...register('company')} className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-[#0f4c81] focus:ring-[#0f4c81]" />
          {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company.message}</p>}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">Ihr Name</label>
            <input {...register('name')} className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-[#0f4c81] focus:ring-[#0f4c81]" />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">E-Mail</label>
            <input {...register('email')} type="email" className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-[#0f4c81] focus:ring-[#0f4c81]" />
            {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Telefon (optional)</label>
          <input {...register('phone')} className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-[#0f4c81] focus:ring-[#0f4c81]" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Nachricht</label>
          <textarea {...register('message')} rows={6} className="mt-1 w-full rounded border border-slate-300 px-3 py-2 focus:border-[#0f4c81] focus:ring-[#0f4c81]" />
          {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
        </div>

        <div className="hidden">
          <label>Bitte nicht ausfüllen</label>
          <input {...register('hp_field')} tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" {...register('privacy')} className="h-4 w-4 rounded border-slate-300 text-[#0f4c81] focus:ring-[#0f4c81]" />
          Ich stimme der Datenschutzerklärung zu.
        </label>
        {errors.privacy && <p className="text-sm text-red-600 -mt-2">{errors.privacy.message}</p>}

        <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex items-center justify-center rounded bg-[#0f4c81] px-5 py-3 font-semibold text-white hover:bg-[#0e4575] disabled:opacity-50">
          {isSubmitting ? 'Wird gesendet…' : 'Anfrage senden'}
        </button>
      </form>
    </main>
  )
}
