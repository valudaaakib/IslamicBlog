import React from 'react';
import '../../assets/css/pages/Home.css';

const PrayerTime = () => {
    return (
        <>
            <div className='main-prayer-section'>
                <div className='salah-left-section'>
                    <h2 className='text-white text-4xl pt-10 text-center'>PRAYER TIMES</h2>
                    <p className='text-center pt-5 text- font-bold text-base hover:text-white'>Prayer times in Jakarta</p>
                    <p className='text-center text-white pt-3'>Tue 29 Aug</p>
                    <table className='mx-auto'>
                        <tbody>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Fajar
                                </td>
                                <td className='prayer-salah-times'>
                                    04:38 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Fajar
                                </td>
                                <td className='prayer-salah-times'>
                                    04:38 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Sunrise
                                </td>
                                <td className='prayer-salah-times'>
                                    05:52 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Dhuhr
                                </td>
                                <td className='prayer-salah-times'>
                                    11:57 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Fajar
                                </td>
                                <td className='prayer-salah-times'>
                                    04:38 AM
                                </td>
                            </tr>
                            <tr className='salah-table'>
                                <td className='prayer-salah-names'>
                                    Fajar
                                </td>
                                <td className='prayer-salah-times'>
                                    04:38 AM
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='text-center pt-5'>Powerd by <span className='hover:text-white'>Muslim Pro</span></p>
                </div>
                <div className='salah-right-section'>
                    <p className='prayer-right-header'>Welcome to the Islamic Center</p>
                    <p className='salah-left-peragraph'>The Shaha is not just a mosque for prayers rather it is a community center for all.
                        The Center is committed to preserving an Islamic identity, building and
                        supporting a viable Muslim community, promoting a comprehensive Islamic
                        way of life based on the Holy Quran and the
                        Sunnah of Prophet Muhammad.</p>
                        <button className='salah-right-btn'>Read More</button>
                </div>
            </div>
        </>
    )
}

export default PrayerTime
