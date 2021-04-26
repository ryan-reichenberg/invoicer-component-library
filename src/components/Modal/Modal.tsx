import React, { Component } from 'react'
import Transition from '../Transition/Transition'

export interface ModalProps {
    isOpen: boolean
    onClose: () => void;
}

export class Modal extends Component<ModalProps> {
    render() {
        return (
                <Transition
                    show={this.props.isOpen}
                >
                <>
                <Transition
                    enter="transition ease-out duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                <div id="backdrop" className='fixed inset-0 z-40 flex items-end bg-gray-900 bg-opacity-50 sm:items-center sm:justify-center'>
                    <Transition
                        enter="transition ease-out duration-150"
                        enterFrom="opacity-0 transform translate-y-1/2"
                        enterTo="opacity-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0  transform translate-y-1/2"
                    >
                    <div className='w-full px-6 py-4 overflow-hidden bg-white rounded-t-lg sm:rounded-lg sm:m-4 sm:max-w-xl'>
                    <div>
                        <header className="flex justify-end">
                            <button
                            className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
                            aria-label="close"
                            onClick={this.props.onClose}
                            >
                            <svg
                                className="w-4 h-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                role="img"
                                aria-hidden="true"
                            >
                                <path
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                fillRule="evenodd"
                                ></path>
                            </svg>
                            </button>
                        </header>
                            {this.props.children}
                        </div>
                    </div>
                    </Transition>
                </div>
                </Transition>
                </>
                </Transition>
        )
    }
}
