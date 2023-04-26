import * as React from 'react'
import './styles.css'

function Campaign() {
    const [total, setTotal] = React.useState(0)
    const [donors, setDonors] = React.useState(0)
    const [showForm, setShowForm] = React.useState(false)
    const [showThanks, setShowThanks] = React.useState(true)
    const [amount, setAmount] = React.useState('')
    // const [username, setUsername] = React.useState('')

    const onClickDonate = () => {
        setShowForm(true)
    }

    const onClickSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, url: 'abc' }),
        }
        fetch('https://ef8bd84ad743.ngrok.app/donation', requestOptions)
            .then((res) => res.json())
            .then(({ numDonors, total }) => {
                setDonors(numDonors)
                setTotal(total)
                setShowForm(false)
                setShowThanks(true)
            })
            .catch(console.error)
    }

    React.useEffect(() => {
        if (+amount > 1000) setAmount('1000')
    }, [amount])

    // React.useEffect(() => {
    //     fetch('https://ef8bd84ad743.ngrok.app')
    //         .then((res) => res.json())
    //         .then(({ total }) => setTotal(total))
    // }, [])

    return (
        <div className="app pl-4 pr-4 max-w-2xl m-auto">
            <div className="flex justify-center">
                <img
                    src="https://logos-world.net/wp-content/uploads/2021/03/GoFundMe-Logo.png"
                    width="120px"
                    alt="gofundme logo"
                />
            </div>
            {showThanks && (
                <>
                    <img className="mt-8 mb-8" src="logo-minecraft.svg" />
                    <div className="flex justify-center mb-4">
                        <h1 className="font-bold text-xl">
                            Thanks for donating
                        </h1>
                    </div>
                    <p>Check us out on Minecraft to see your donations grow!</p>
                    <div className="mt-12">
                        <button
                            className="pt-3 pb-3 w-full rounded-full font-semibold text-white"
                            type="submit"
                            style={{
                                background: '#02a95c',
                            }}
                            onClick={() => setShowThanks(false)}
                        >
                            Take me there
                        </button>
                        <button
                            className="mt-3 pt-3 pb-3 w-full rounded-full font-semibold"
                            type="submit"
                            style={{
                                border: '1px solid #02a95c',
                                color: '#02a95c',
                            }}
                            onClick={() => setShowThanks(false)}
                        >
                            No thanks
                        </button>
                    </div>
                </>
            )}
            {!showThanks && (
                <>
                    <img className="rounded-lg" src="tree.jpg" alt="parrot" />
                    <h1 className="mt-3 text-3xl font-bold">
                        Let’s F’n Goooo!
                    </h1>
                    <div className="mt-1">
                        ${+total || 0}{' '}
                        <span className="text-gray-500">
                            raised of $10,000 goal •{' '}
                        </span>
                        {donors} <span className="text-gray-500">Donors</span>
                    </div>
                    <div className="mt-2 mb-2">
                        <button
                            className="mt-4 rounded-xl pt-4 pb-4 w-full font-semibold"
                            style={{
                                background:
                                    'linear-gradient(180deg, #f9db74 0%, #f3bc51 100%)',
                            }}
                        >
                            Share
                        </button>
                        <button
                            className="mt-2 rounded-xl pt-4 pb-4 w-full font-semibold"
                            style={{
                                background:
                                    'linear-gradient(180deg, #fdb933 0%, #f99a32 100%)',
                            }}
                            onClick={onClickDonate}
                        >
                            Donate now
                        </button>
                    </div>
                    {showForm && (
                        <div className="flex justify-center mt-6 mb-6">
                            <form>
                                <label className="text-gray-500 block mb-1 font-semibold">
                                    Donation Amount
                                </label>
                                <span
                                    className="text-xl font-medium"
                                    style={{ marginLeft: '-16px' }}
                                >
                                    $
                                </span>{' '}
                                <input
                                    className="form-input leading-5"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    type="number"
                                />
                                {/* <label className="mt-2 text-gray-600 block mb-1 font-semibold">
                                    Minecraft Username{' '}
                                    <span className="text-gray-400">
                                        (optional)
                                    </span>
                                </label>
                                <input
                                    className="form-input leading-5"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                /> */}
                                <div>
                                    <button
                                        className="mt-6 pt-3 pb-3 w-full rounded-full font-semibold text-white"
                                        type="submit"
                                        style={{
                                            background: '#02a95c',
                                        }}
                                        onClick={onClickSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                    <div className="mt-6">
                        <img
                            className="inline mr-2"
                            src="heart.svg"
                            alt="icon"
                        />
                        Team Minecraft is organizing this fundraiser
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div className="mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </div>
                </>
            )}
        </div>
    )
}

export default function App() {
    return <Campaign />
}
