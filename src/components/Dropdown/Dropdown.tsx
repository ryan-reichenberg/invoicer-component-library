import React, { ReactElement, useEffect, useRef } from 'react'
import Transition from '../Transition/Transition'
import { DropdownItem } from './DropdownItem'
import { DropdownLinkItem } from './DropdownLinkItem'

export interface DropdownProps {
    isOpen: boolean;
    icon: ReactElement;
    label: string;
    items: DropdownItem[]
    onClose: () => void;
}
export const Dropdown = (props: DropdownProps) => {

    function handleEsc(e: KeyboardEvent) {
        if (e.key === 'Esc' || e.key === 'Escape') {
          props.onClose()
        }
      }
    
    const dropdownRef = useRef<HTMLUListElement>(null)
    function handleClickOutside(e: MouseEvent) {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            props.onClose()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, { capture: true })
        document.addEventListener('keydown', handleEsc, { capture: true })
        return () => {
          document.removeEventListener('click', handleClickOutside)
          document.removeEventListener('keydown', handleEsc)
        }
      }, [props.isOpen])
    
    return (
        <div>
            <Transition
                show={props.isOpen}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <ul className="absolute w-56 p-2 mt-2 text-gray-600 bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content" ref={dropdownRef} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                    {props.items.map((item, index) => {
                        return item instanceof DropdownLinkItem && <DropdownLinkItem key={`dropdownlinkitem${index}`} onClick={item.onClick} label={item.label} link={(item as DropdownLinkItem).link}/> || <DropdownItem key={`dropdownitem${index}`} onClick={item.onClick} label={item.label}/>
                    })}
                </ul>
            </Transition>
        </div>
    )
}