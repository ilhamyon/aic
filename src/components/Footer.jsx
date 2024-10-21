import { Button } from "antd"
import BgFooter from "../assets/bg-footer.png"

function Footer() {
  return (
    <div>
        <div
            style={{
                backgroundImage: `url(${BgFooter})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="lg:px-12 px-8 py-16 lg:grid flex flex-col grid-cols-6 text-white gap-10"
                style={{
                    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.8))",
                }}
            >
                <div className="col-span-2">
                    <div className="font-semibold lg:text-2xl text-lg mb-10">
                        ASIAN INTER-CLUBS ATHLETICS <br/>ALLIANCE SINGAPORE
                    </div>
                    <Button size="large" className="bg-red-700 text-white border-0">Registration</Button>

                    <div className="mt-20">
                        <h3 className="font-semibold mb-1">Email</h3>
                        <div className="font-light">aicllpsingapore@gmail.com</div>
                    </div>

                    <div className="flex mt-2 gap-4">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="white">
                                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                                    <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
                                </g>
                            </svg>
                        </a>

                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="white">
                                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
                                    <path d="M16.927 8.026h-2.945a1.9 1.9 0 0 0-1.9 1.886l-.086 11.515m-1.914-7.425h4.803" />
                                </g>
                            </svg>
                        </a>

                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 15 15">
                                <path fill="white" d="m1.61 12.738l-.104.489zm11.78 0l.104.489zm0-10.476l.104-.489zm-11.78 0l.106.489zM6.5 5.5l.277-.416A.5.5 0 0 0 6 5.5zm0 4H6a.5.5 0 0 0 .777.416zm3-2l.277.416a.5.5 0 0 0 0-.832zM0 3.636v7.728h1V3.636zm15 7.728V3.636h-1v7.728zM1.506 13.227c3.951.847 8.037.847 11.988 0l-.21-.978a27.6 27.6 0 0 1-11.568 0zM13.494 1.773a28.6 28.6 0 0 0-11.988 0l.21.978a27.6 27.6 0 0 1 11.568 0zM15 3.636c0-.898-.628-1.675-1.506-1.863l-.21.978c.418.09.716.458.716.885zm-1 7.728a.905.905 0 0 1-.716.885l.21.978A1.905 1.905 0 0 0 15 11.364zm-14 0c0 .898.628 1.675 1.506 1.863l.21-.978A.905.905 0 0 1 1 11.364zm1-7.728c0-.427.298-.796.716-.885l-.21-.978A1.905 1.905 0 0 0 0 3.636zM6 5.5v4h1v-4zm.777 4.416l3-2l-.554-.832l-3 2zm3-2.832l-3-2l-.554.832l3 2z" />
                            </svg>
                        </a>

                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                <g fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" color="white">
                                    <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12.001 2.5c4.478 0 6.717 0 8.108 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.717 0-8.109-1.391c-1.39-1.392-1.39-3.63-1.39-8.109" />
                                    <path d="m7 17l4.194-4.193M17 7l-4.193 4.194m0 0L9.777 7H7l4.194 5.807m1.613-1.614L17 17h-2.778l-3.028-4.193" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold mb-1">About AIC</h3>
                    <div className="font-light">Singapore Team</div>
                    <div className="font-light">AIC Headquarter</div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold mb-1">Program</h3>
                    <div className="font-light">Coaching Assistant</div>
                    <div className="font-light">Coaching L1,L2,L3</div>
                    <div className="font-light">Oversea Training Camp</div>
                    <div className="font-light">Schedule</div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold mb-1">SPRINT Analytics</h3>
                    <div className="font-light">Data analytics</div>
                    <div className="font-light">AI Forecasting</div>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold mb-1">Club Membership</h3>
                    <div className="font-light">Registration</div>
                    <div className="font-light">Sprint Training</div>
                    <div className="font-light">Performance Dashboard</div>
                    <div className="font-light">Personal Coach Matching</div>
                </div>
            </div>
        </div>
        <div className="bg-blue-700 px-8 text-sm text-white text-center py-2 font-light">
            Copyright 2024 Singapore Athletic Association. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer