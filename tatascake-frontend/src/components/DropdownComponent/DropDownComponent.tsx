import {useState, useRef, useEffect} from 'react'

interface DropdownProps {
    options:string[],
    placeholder: string,
    onSelect:(value: string) => void,
    label?: string
}

export const Dropdown = ({options, placeholder, onSelect, label}: DropdownProps) => {
    
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<string>('')
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target as Node))
            {
                setIsOpen(false)
            }}

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)

    }, [])

    const handleSelect = (option:string) => {
        setSelected(option),
        onSelect(option),
        setIsOpen(false)
    }

    return (
        <div className="relative" ref={dropdownRef}>

            {label && <label className='block mb-2 text-sm font-medium'>{label}</label>}

            <button type="button"onClick = {() => setIsOpen(!isOpen)} className="w-110 bg-red-font border-gray-300 rounded-[15px] px-4 py-2 text-left flex items-center justify-between hover:border-gray-400 cursor-pointer">

                  <span className={selected ? 'text-red-200' : 'text-red-200'}>
                     {selected || placeholder}
                 </span>
        
                 <svg   className={`  w-4 h-4 transition-transform text-red-200 ${isOpen ? 'rotate-180' : ''}`}  viewBox="0 0 24 24 " stroke="currentColor" fill="none">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>

        </button>

        {isOpen && (
        <div className="absolute w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      )}

        </div>
    )

}
