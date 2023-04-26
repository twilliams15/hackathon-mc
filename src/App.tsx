import * as React from 'react'
import './styles.css'

import gfmLogo from './gfm-logo.png'
import givingWorld from './giving-world.png'
import gw2 from './gw-2.png'
import gw3 from './gw-3.png'
import gw4 from './gw-4.png'
import { ReactComponent as Heart } from './heart.svg'
import { ReactComponent as Minecraft } from './logo-minecraft.svg'

function Campaign() {
    const [total, setTotal] = React.useState(0)
    const [donors, setDonors] = React.useState(0)
    const [showForm, setShowForm] = React.useState(false)
    const [showThanks, setShowThanks] = React.useState(false)
    const [amount, setAmount] = React.useState('')
    const [player] = React.useState(
        window.location.search.replace('?player=', '')
    )

    const onClickDonate = () => {
        setShowForm(true)
    }

    const onClickSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, player, url: 'abc' }),
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
                    className="mt-4 mb-4"
                    src={gfmLogo}
                    width="120px"
                    alt="gofundme logo"
                />
            </div>
            {showThanks && (
                <>
                    <div className="flex flex-col">
                        <img className="mt-8 mb-2" src={gfmLogo} />
                        <p className="m-auto">✖️</p>
                        <Minecraft className="mt-2 mb-8" />
                    </div>
                    <div className="flex justify-center mb-4">
                        <h1 className="font-bold text-xl">
                            Thanks for donating, {player}
                        </h1>
                    </div>
                    <p className="flex justify-center">
                        Check us out on Minecraft to see your donations grow!
                    </p>
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
                    <img
                        className="rounded-lg"
                        src={givingWorld}
                        alt="minecraft giving world"
                    />
                    <h1 className="mt-3 text-3xl font-bold">
                        Minecraft Giving Tree
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
                                    inputMode="tel"
                                />
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
                        <Heart className="inline mr-2" />
                        Team Minecraft is organizing this fundraiser
                    </div>
                    <hr className="mt-6 mb-6" />
                    <div className="mb-8">
                        <p className="mt-4">
                            Nearly a billion people around the world have
                            created inspiring, educational and fun experiences
                            in the Minecraft universe. Autumn hears about a new
                            collaboration with gofundme.
                        </p>
                        <p className="mt-4">
                            Autumn hears about a new Minecraft server– the
                            Minecraft Giving World while watching a microsoft
                            announcement video.
                        </p>
                        <p className="mt-4">
                            She searches on Twitch and finds her favorite
                            streamer walking through a Minecraft world which
                            looks like any other at first glance. But there’s a
                            forest with trees of various sizes - each adorned
                            with ornaments.
                        </p>
                        <p className="mt-4">
                            The streamer tells his viewers that what they’re
                            seeing are called “Giving Trees'' and this whole
                            world was created through a collaboration with
                            GoFundMe.
                        </p>
                        <img className="mt-8 mb-8" src={gw2} />
                        <p className="mt-4">
                            Like many streamers, He has a tip button – a Twitch
                            integration with Classy that lets his viewers
                            support him by giving to nonprofits. He explains
                            that a Minecraft Giving Tree is a GoFundMe Campaign.
                        </p>
                        <p className="mt-4">
                            Donations are represented as ornaments, lights,
                            candles, and decorations on the tree. Autumn notices
                            that Every time a donation is made, the trees lights
                            up and that The light on top has a percentage of
                            light filled, representing percent to goal.
                        </p>
                        <p className="mt-4">
                            Inspired by the stream, Autumn fires up Minecraft
                            and joins the Giving World server.
                        </p>
                        <p className="mt-4">
                            She explores, interacts with other players, and
                            finds out there are giving regions for a variety of
                            nonprofits.
                        </p>
                        <img className="mt-8 mb-8" src={gw3} />
                        <p className="mt-4">
                            Autumn finds a region of Giving Trees created by the
                            american red cross. She steps up to one of the trees
                            and sees a familar minecraft character floating
                            nearby. She asks it what the campaign is about.
                        </p>
                        <p className="mt-4">
                            After listening to the character share the story,
                            Autumn places an ornament on the tree. She records a
                            voice message of support by placing a candle of
                            support at the base of the tree.
                        </p>
                        <p className="mt-4">
                            After her donation, Autumn is given an exclusive
                            Giving World outfit for her in game avatar.
                        </p>
                        <img className="mt-8 mb-8" src={gw4} />
                        <p className="mt-4">
                            She continues to explore The Minecraft Giving World,
                            and other biomes, with more charity and campaign
                            partners with a community of thousands of players.
                        </p>
                    </div>
                </>
            )}
        </div>
    )
}

export default function App() {
    return <Campaign />
}
