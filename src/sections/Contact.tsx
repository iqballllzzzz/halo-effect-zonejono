import { useState } from 'react'
import type { FormEvent } from 'react'
import { AlertCircle, Check, Copy, Loader2, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeader } from '../components/ui/SectionHeader'
import { cn } from '../lib/utils'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Errors = Partial<Record<'name' | 'email' | 'message', string>>

function validate(values: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
    errors.email = 'That email address does not look right.'
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Please add a little more detail — at least 20 characters.'
  }
  return errors
}

export function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)

  const update = (field: keyof typeof values) => (value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (status === 'error' || status === 'success') setStatus('idle')
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('submitting')

    // Simulated submission. Replace with a real endpoint such as
    // `await fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })`
    // once a backend or form provider is wired up.
    await new Promise((resolve) => window.setTimeout(resolve, 1200))

    setStatus('success')
    setValues({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Contact"
          title="Let&apos;s build something that works."
          description="Have a project, a role, or an interesting problem? Tell me what you are working on and I will get back to you — usually within a day."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="eyebrow">Direct</span>
              <button
                type="button"
                onClick={copyEmail}
                aria-label={`Copy email address ${profile.email}`}
                className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3.5 text-left transition-all duration-200 ease-smooth hover:border-fg/20 hover:bg-surface-2"
              >
                <span className="flex flex-col gap-0.5">
                  <span className="font-mono text-2xs uppercase tracking-[0.12em] text-subtle">
                    Email
                  </span>
                  <span className="text-[0.8125rem] text-fg">{profile.email}</span>
                </span>
                {copied ? (
                  <Check className="size-4 text-fg" aria-hidden="true" />
                ) : (
                  <Copy className="size-4 text-muted transition-colors group-hover:text-fg" aria-hidden="true" />
                )}
              </button>
              <span
                role="status"
                className={cn(
                  'font-mono text-2xs uppercase tracking-[0.12em] transition-opacity duration-200',
                  copied ? 'text-muted opacity-100' : 'opacity-0',
                )}
              >
                Copied to clipboard
              </span>
            </div>

            <div className="flex flex-col gap-3">
              <span className="eyebrow">Elsewhere</span>
              <ul className="flex flex-col gap-px overflow-hidden rounded-xl border border-border bg-border">
                {profile.socials.map((social) => {
                  const external = social.href.startsWith('http')
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer' : undefined}
                        className="flex items-center justify-between bg-surface px-4 py-3 text-[0.8125rem] text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-fg"
                      >
                        {social.label}
                        <span className="font-mono text-2xs text-subtle">
                          {social.label === 'Email' ? 'mailto' : 'open'}
                        </span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-fg/60" aria-hidden="true" />
                <span className="text-[0.8125rem] text-fg">{profile.availability}</span>
              </div>
              <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-muted">
                Currently taking on new freelance and contract work.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} noValidate className="surface-card flex flex-col gap-5 p-5 sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  id="contact-name"
                  label="Name"
                  value={values.name}
                  error={errors.name}
                  placeholder="Your name"
                  onChange={update('name')}
                />
                <Field
                  id="contact-email"
                  label="Email"
                  type="email"
                  value={values.email}
                  error={errors.email}
                  placeholder="you@company.com"
                  onChange={update('email')}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-message"
                  className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={(event) => update('message')(event.target.value)}
                  placeholder="Tell me about the project, timeline, and what success looks like."
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={cn(
                    'w-full resize-y rounded-lg border bg-surface-2 px-3.5 py-3 text-[0.8125rem] leading-relaxed text-fg placeholder:text-subtle transition-colors duration-200 focus:outline-none focus:ring-1',
                    errors.message
                      ? 'border-red-500/50 focus:ring-red-500/40'
                      : 'border-border focus:border-fg/30 focus:ring-fg/20',
                  )}
                />
                {errors.message ? (
                  <span
                    id="contact-message-error"
                    className="flex items-center gap-1.5 text-2xs text-red-500 dark:text-red-400"
                  >
                    <AlertCircle className="size-3" aria-hidden="true" />
                    {errors.message}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-fg px-5 text-sm font-medium tracking-[-0.01em] text-bg shadow-subtle transition-all duration-200 ease-smooth hover:opacity-90 active:scale-[0.985] disabled:opacity-60 sm:w-auto"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send className="size-4" aria-hidden="true" />
                      Send Message
                    </>
                  )}
                </button>

                <div role="status" aria-live="polite" className="min-h-[1.25rem]">
                  {status === 'success' ? (
                    <span className="flex items-center gap-1.5 text-[0.8125rem] text-fg">
                      <Check className="size-3.5" aria-hidden="true" />
                      Message sent — I&apos;ll reply soon.
                    </span>
                  ) : null}
                  {status === 'error' && Object.keys(errors).length > 0 ? (
                    <span className="flex items-center gap-1.5 text-[0.8125rem] text-red-500 dark:text-red-400">
                      <AlertCircle className="size-3.5" aria-hidden="true" />
                      Please fix the highlighted fields.
                    </span>
                  ) : null}
                  {status === 'idle' ? (
                    <span className="font-mono text-2xs uppercase tracking-[0.12em] text-subtle">
                      Demo form — no data is sent
                    </span>
                  ) : null}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  placeholder,
  type = 'text',
}: {
  id: string
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
  placeholder: string
  type?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-2xs uppercase tracking-[0.14em] text-subtle">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          'h-11 rounded-lg border bg-surface-2 px-3.5 text-[0.8125rem] text-fg placeholder:text-subtle transition-colors duration-200 focus:outline-none focus:ring-1',
          error
            ? 'border-red-500/50 focus:ring-red-500/40'
            : 'border-border focus:border-fg/30 focus:ring-fg/20',
        )}
      />
      {error ? (
        <span
          id={`${id}-error`}
          className="flex items-center gap-1.5 text-2xs text-red-500 dark:text-red-400"
        >
          <AlertCircle className="size-3" aria-hidden="true" />
          {error}
        </span>
      ) : null}
    </div>
  )
}
