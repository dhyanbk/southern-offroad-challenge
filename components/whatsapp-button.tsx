"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    // Show button after a delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)

    // Show button when user scrolls down
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <Link
        href="https://wa.me/917760556117"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-500",
          "hover:scale-110",
          isVisible || hasScrolled ? "opacity-100 scale-100" : "opacity-0 scale-0",
        )}
        style={{ transition: "opacity 0.5s ease, transform 0.5s ease" }}
        aria-label="Contact us on WhatsApp"
      >
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552" className="w-10 h-10 fill-white">
            <path d="M147.934,27.58C131.282,9.806,109.454,0.156,86.695,0.146C39.398,0.146,0.688,38.84,0.688,86.128 c-0.01,15.166,3.891,30.013,11.374,43.154l-12.072,44.4l45.591-11.934c12.611,6.862,26.764,10.481,41.155,10.481h0.039 c47.287,0,86.006-38.694,86.016-86.011C172.791,63.451,164.605,45.354,147.934,27.58z M86.695,157.524h-0.029 c-12.807-0.01-25.361-3.446-36.295-9.956l-2.6-1.543l-26.979,7.069l7.196-26.296l-1.699-2.697 c-7.177-11.424-10.969-24.598-10.969-38.044c0-39.542,32.202-71.733,71.804-71.733c19.167,0.01,37.203,7.493,50.795,21.056 c13.592,13.572,21.056,31.628,21.046,50.834C158.469,125.362,126.238,157.524,86.695,157.524z M125.916,104.033 c-2.157-1.083-12.797-6.311-14.775-7.033c-1.987-0.722-3.437-1.083-4.886,1.083c-1.45,2.167-5.617,7.033-6.877,8.483 c-1.269,1.45-2.539,1.631-4.695,0.548c-2.167-1.083-9.135-3.369-17.384-10.733c-6.428-5.726-10.753-12.797-12.013-14.966 c-1.269-2.167-0.136-3.339,0.957-4.417c0.977-0.977,2.167-2.539,3.247-3.798c1.083-1.269,1.44-2.167,2.167-3.617 c0.722-1.45,0.361-2.719-0.181-3.798c-0.548-1.083-4.886-11.795-6.699-16.144c-1.764-4.241-3.546-3.666-4.886-3.734 c-1.269-0.068-2.719-0.078-4.169-0.078c-1.45,0-3.799,0.548-5.786,2.719c-1.978,2.167-7.582,7.395-7.582,18.039 s7.762,20.925,8.841,22.375c1.083,1.45,15.24,23.245,36.885,32.614c5.148,2.226,9.165,3.556,12.3,4.549 c5.168,1.641,9.871,1.41,13.592,0.851c4.145-0.619,12.797-5.236,14.605-10.303c1.798-5.056,1.798-9.394,1.259-10.303 C129.533,105.664,128.073,105.116,125.916,104.033z" />
          </svg>
        </div>
      </Link>

      {/* Attribution - hidden visually but present for proper attribution */}
      <div className="sr-only">
        <a href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">
          Whatsapp icons created by Ruslan Babkin - Flaticon
        </a>
      </div>
    </>
  )
}
