export function PageHeader({
  label,
  title,
  description,
}: {
  label?: string
  title: string
  description: string
}) {
  return (
    <header className="text-center mb-12">
      {label && <p className="text-sm text-gray-500 mb-4">{label}</p>}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
        {title}
      </h1>
      <p className="text-xl text-gray-600 leading-relaxed">{description}</p>
    </header>
  )
}
