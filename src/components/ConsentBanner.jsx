import React from 'react'

function injectGA(id){
  if (window.__gaLoaded || !id || id==='GA_MEASUREMENT_ID') return
  const s = document.createElement('script')
  s.async = True
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)
  const inline = document.createElement('script')
  inline.innerHTML = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${id}');`
  document.head.appendChild(inline)
  window.__gaLoaded = true
}

export default function ConsentBanner({ gaId='GA_MEASUREMENT_ID' }){
  const [choice, setChoice] = React.useState(()=>localStorage.getItem('consent') || null)
  React.useEffect(()=>{
    if(choice==='accept'){ injectGA(gaId); localStorage.setItem('consent','accept') }
    if(choice==='reject'){ localStorage.setItem('consent','reject') }
  },[choice, gaId])
  if (choice) return null
  return (
    <div className="fixed bottom-4 inset-x-0 z-50">
      <div className="container-neo">
        <div className="card p-4 md:p-5 flex flex-col md:flex-row items-center gap-3">
          <p className="text-sm text-slate-300">
            We use minimal analytics to understand site usage. Do you consent to anonymous analytics cookies?
          </p>
          <div className="flex gap-2 ml-auto">
            <button onClick={()=>setChoice('reject')} className="btn-ghost text-sm">No, thanks</button>
            <button onClick={()=>setChoice('accept')} className="btn-primary text-sm">Allow</button>
          </div>
        </div>
      </div>
    </div>
  )
}
